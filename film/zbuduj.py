"""Buduje film powtórkowy ze scenariusza.

Użycie: python3 film/zbuduj.py <katalog_roboczy> <model_glosu.onnx> <plik_wyjsciowy.mp4>
Wymaga: playwright (Chromium), piper-tts, ffmpeg.
"""
import html, json, re, subprocess, sys, wave
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from scenariusz import S

WORK = Path(sys.argv[1]); WORK.mkdir(parents=True, exist_ok=True)
VOICE = sys.argv[2]
OUT = Path(sys.argv[3])
W, H, FPS = 1920, 1080, 25
PAUSE_AFTER = 0.9          # cisza po każdym slajdzie (s)
LENGTH_SCALE = "1.12"      # >1 = wolniej mówi

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0}
body{width:1920px;height:1080px;background:#fbf5e6;color:#1b2238;font-family:'Lexend',system-ui,sans-serif;overflow:hidden;position:relative}
.top{position:absolute;left:0;right:0;top:0;height:92px;display:flex;align-items:center;justify-content:space-between;padding:0 96px;border-bottom:3px solid #e6dcc3;font-size:30px;color:#5b6070}
.top b{color:#2b4c9b;font-weight:600}
.bar{position:absolute;left:0;bottom:0;height:14px;background:#2b4c9b}
.foot{position:absolute;left:96px;right:96px;bottom:34px;font-size:24px;color:#8a8577;display:flex;justify-content:space-between}
.body{position:absolute;left:96px;right:96px;top:150px;bottom:110px;display:flex;flex-direction:column;gap:40px}
h1{font-size:76px;font-weight:700;line-height:1.15;letter-spacing:.005em}
ul{list-style:none;padding:0;display:flex;flex-direction:column;gap:30px}
li{font-size:50px;line-height:1.38;letter-spacing:.02em;word-spacing:.08em;display:grid;grid-template-columns:58px 1fr;align-items:start}
li::before{content:"";width:22px;height:22px;border-radius:50%;background:#2b4c9b;margin-top:23px}
mark{background:linear-gradient(transparent 12%,#ffd84d 12%,#ffd84d 92%,transparent 92%);color:inherit;font-weight:600;padding:0 6px;border-radius:4px;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.chap{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:0 160px;background:#2b4c9b;color:#fff}
.chap .n{font-size:64px;font-weight:500;opacity:.75;margin-bottom:12px}
.chap h1{font-size:110px;color:#fff}
.title{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:0 160px;gap:36px}
.title .mark{width:150px;height:150px;border:8px solid #1b2238;border-radius:12px;display:grid;place-items:center;font-size:110px;font-weight:700}
.title h1{font-size:120px}
.title p{font-size:54px;color:#5b6070;line-height:1.4}
"""

def md(s):
    return re.sub(r"\*\*(.+?)\*\*", r"<mark>\1</mark>", html.escape(s))

def slide_html(i, s):
    n = len(S)
    prog = f'<div class="bar" style="width:{(i+1)/n*100:.2f}%"></div>'
    if s["typ"] == "tytul":
        inner = f'''<div class="title"><div class="mark">§</div><h1>{md(s["tytul"])}</h1>
        <p>{"<br>".join(md(p) for p in s["punkty"])}</p></div>'''
    elif s["typ"] == "rozdzial":
        num, _, name = s["tytul"].partition(". ")
        inner = f'<div class="chap"><div class="n">Rozdział {html.escape(num)}</div><h1>{md(name)}</h1></div>'
    else:
        inner = f'''<div class="top"><span><b>{md(s["rozdzial"])}</b></span><span>Kolokwium z umów · część ogólna</span></div>
        <div class="body"><h1>{md(s["tytul"])}</h1><ul>{"".join(f"<li><span>{md(p)}</span></li>" for p in s["punkty"])}</ul></div>
        <div class="foot"><span>Żółte = pułapka w teście</span><span>{i+1} / {n}</span></div>'''
    return f'<!doctype html><html lang="pl"><head><meta charset="utf-8"><style>{CSS}</style></head><body>{inner}{prog}</body></html>'

NODE_SHOT = r"""
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const dir=process.argv[2];const b=await chromium.launch();
const pg=await b.newPage({viewport:{width:1920,height:1080}});
for(const f of fs.readdirSync(dir).filter(x=>/^s\d+\.html$/.test(x)).sort()){
  await pg.goto('file://'+path.join(dir,f));await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(120);
  const over=await pg.evaluate(()=>{const b=document.querySelector('.body');return b? b.scrollHeight>b.clientHeight+2:false});
  if(over) console.log('UWAGA: przepełniony slajd',f);
  await pg.screenshot({path:path.join(dir,f.replace('.html','.png'))});}
await b.close();})();
"""

def render_slides():
    for i, s in enumerate(S):
        (WORK / f"s{i:03d}.html").write_text(slide_html(i, s), encoding="utf-8")
    js = WORK / "zrzuty.js"; js.write_text(NODE_SHOT)
    r = subprocess.run(["node", str(js), str(WORK.resolve())], capture_output=True, text=True)
    print(r.stdout, r.stderr)
    if r.returncode: raise SystemExit("render failed")

def tts():
    for i, s in enumerate(S):
        wav = WORK / f"a{i:03d}.wav"
        if wav.exists(): continue
        subprocess.run([sys.executable, "-m", "piper", "-m", VOICE, "-f", str(wav),
                        "--length-scale", LENGTH_SCALE, "--sentence-silence", "0.35"],
                       input=s["lektor"].encode("utf-8"), check=True, capture_output=True)

def dur(wav):
    with wave.open(str(wav)) as w: return w.getnframes() / w.getframerate()

def ts(t):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}".replace(".", ",")

def build():
    segs, srt, chapters = [], [], []
    t = 0.0; k = 1
    for i, s in enumerate(S):
        wav = WORK / f"a{i:03d}.wav"; d = dur(wav) + PAUSE_AFTER
        seg = WORK / f"v{i:03d}.mp4"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-framerate", str(FPS), "-i", str(WORK / f"s{i:03d}.png"),
                        "-i", str(wav), "-af", "apad", "-t", f"{d:.3f}", "-c:v", "libx264", "-tune", "stillimage",
                        "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-r", str(FPS),
                        "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "1", str(seg)], check=True)
        segs.append(seg)
        # napisy: zdania rozłożone proporcjonalnie do długości
        sent = [x.strip() for x in re.split(r"(?<=[.!?])\s+", s["lektor"]) if x.strip()]
        total = sum(len(x) for x in sent); speech = dur(wav); tt = t
        for x in sent:
            dd = speech * len(x) / total
            srt.append(f"{k}\n{ts(tt)} --> {ts(tt+dd)}\n{x}\n"); k += 1; tt += dd
        if s["typ"] in ("rozdzial", "tytul"): chapters.append((t, s["tytul"]))
        t += d
    (WORK / "lista.txt").write_text("".join(f"file '{p.name}'\n" for p in segs))
    srt_path = OUT.with_suffix(".srt"); srt_path.write_text("\n".join(srt), encoding="utf-8")
    meta = [";FFMETADATA1", "title=Kolokwium z umów – powtórka", "artist=Powtórka do kolokwium", ""]
    for j, (st, name) in enumerate(chapters):
        en = chapters[j+1][0] if j+1 < len(chapters) else t
        meta += ["[CHAPTER]", "TIMEBASE=1/1000", f"START={int(st*1000)}", f"END={int(en*1000)}", f"title={name}", ""]
    (WORK / "meta.txt").write_text("\n".join(meta), encoding="utf-8")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(WORK / "lista.txt"),
                    "-i", str(srt_path), "-i", str(WORK / "meta.txt"), "-map", "0:v", "-map", "0:a", "-map", "1:s",
                    "-map_metadata", "2", "-map_chapters", "2", "-c:v", "copy", "-c:a", "copy", "-c:s", "mov_text",
                    "-metadata:s:s:0", "language=pol", "-metadata:s:a:0", "language=pol", "-movflags", "+faststart", str(OUT)], check=True)
    print(f"Gotowe: {OUT}  ({t/60:.1f} min, {len(S)} slajdów)")

if __name__ == "__main__":
    render_slides(); tts(); build()
