// Baza pytań: prawo umów gospodarczych – część ogólna (kolokwium I)
// Źródła: notatki z ćwiczeń (do s. 60) + notatki 2023 + przepisy k.c., k.p.c., u.p.k.
// Format: t = dział, q = pytanie, o = odpowiedzi (a–d), c = indeksy poprawnych (0=a), e = wyjaśnienie
window.PYTANIA = [

/* ===================== UMOWY GOSPODARCZE – POJĘCIA ===================== */
{t:"Umowy gospodarcze",q:"Umowa gospodarcza sensu stricto (dwustronnie gospodarcza):",o:[
"to umowa zawierana wyłącznie z udziałem przedsiębiorców",
"to umowa zawierana także z udziałem konsumenta",
"to np. umowa leasingu, bo finansujący zawsze jest przedsiębiorcą",
"to np. umowa przewozu, bo przewoźnik zawsze jest przedsiębiorcą"],c:[0],
e:"Sensu stricto = wyłącznie przedsiębiorcy (franczyza, faktoring, agencyjna, spółka cywilna, kooperacyjna, B2B). Przewóz jest zawsze gospodarczy, ale może być jednostronnie gospodarczy (pasażer-konsument), więc nie jest z natury dwustronnie gospodarczy. Leasing jest zawsze gospodarczy, ale może być jednostronnie gospodarczy (leasing konsumencki)."},

{t:"Umowy gospodarcze",q:"Które z poniższych umów są ZAWSZE co najmniej jednostronnie gospodarcze?",o:[
"umowa rachunku bankowego","umowa pożyczki","umowa leasingu","umowa sprzedaży"],c:[0,2],
e:"Rachunek bankowy (bank jest przedsiębiorcą) i leasing (finansujący zawsze przedsiębiorcą – nawet leasing konsumencki) są zawsze gospodarcze. Pożyczka i sprzedaż mogą być zawarte wyłącznie między konsumentami – wtedy nie są gospodarcze."},

{t:"Umowy gospodarcze",q:"Konsumentem w rozumieniu art. 22¹ k.c. jest:",o:[
"osoba fizyczna dokonująca z przedsiębiorcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową",
"osoba fizyczna lub prawna dokonująca z przedsiębiorcą czynności niezwiązanej z jej działalnością gospodarczą",
"osoba fizyczna dokonująca z kimkolwiek czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą",
"osoba prawna zawierająca umowę niezwiązaną z prowadzoną przez nią działalnością"],c:[0],
e:"Art. 22¹ k.c.: tylko osoba fizyczna i tylko w czynności z przedsiębiorcą. Osoba prawna nigdy nie jest konsumentem, nawet gdy umowa nie wiąże się z jej działalnością."},

{t:"Umowy gospodarcze",q:"Przedsiębiorcą w rozumieniu art. 43¹ k.c. jest:",o:[
"wyłącznie podmiot wpisany do CEIDG lub KRS",
"osoba fizyczna, osoba prawna i jednostka organizacyjna z art. 33¹ § 1 k.c. prowadząca we własnym imieniu działalność gospodarczą lub zawodową",
"także osoba fizyczna prowadząca we własnym imieniu działalność zawodową",
"tylko podmiot prowadzący działalność gospodarczą w celu zarobkowym, z wyłączeniem działalności zawodowej"],c:[1,2],
e:"Art. 43¹ k.c. – definicja materialna: liczy się prowadzenie we własnym imieniu działalności gospodarczej LUB zawodowej, a nie sam wpis do rejestru."},

{t:"Umowy gospodarcze",q:"Wskaż zdania prawdziwe:",o:[
"umowa o pracę nie jest umową gospodarczą, bo dopiero umożliwia prowadzenie działalności",
"umowa spedycji jest zawsze dwustronnie gospodarcza",
"umowy handlowe są obecnie uregulowane w Kodeksie spółek handlowych",
"umowa kredytu może być zawarta wyłącznie między konsumentami"],c:[0],
e:"KSH reguluje tylko prawo spółek – umów handlowych tam nie ma. Kredyt zawsze ma po jednej stronie przedsiębiorcę (bank). Umowa o pracę ma umożliwić działalność, więc gospodarcza nie jest. Spedycja może być jedno- albo dwustronnie gospodarcza."},

{t:"Umowy gospodarcze",q:"Art. 358¹ § 4 k.c. (mała klauzula rebus sic stantibus):",o:[
"wyłącza możliwość żądania przez stronę prowadzącą przedsiębiorstwo zmiany wysokości lub sposobu spełnienia świadczenia pieniężnego pozostającego w związku z prowadzeniem przedsiębiorstwa",
"wyłącza stosowanie art. 357¹ k.c. (dużej klauzuli) do przedsiębiorców",
"nie wyłącza dopuszczalności umownej klauzuli waloryzacyjnej między przedsiębiorcami",
"dotyczy wyłącznie świadczeń niepieniężnych"],c:[0,2],
e:"Przedsiębiorca nie skorzysta z waloryzacji sądowej (358¹ § 4), ale może zastrzec waloryzację umowną. Duża klauzula (357¹) przysługuje także przedsiębiorcy."},

{t:"Umowy gospodarcze",q:"Duża klauzula rebus sic stantibus (art. 357¹ k.c.):",o:[
"pozwala sądowi orzec nawet o rozwiązaniu umowy",
"może być skutecznie zastosowana na sam zarzut pozwanego w procesie o zapłatę",
"prowadzi do wyroku o charakterze prawnokształtującym",
"nie może z niej skorzystać przedsiębiorca"],c:[0,2],
e:"Zmiana następuje dopiero wyrokiem konstytutywnym. Według notatek powołanie się przez zarzut jest bezskuteczne – trzeba wytoczyć powództwo (w postępowaniu gospodarczym brak powództwa wzajemnego). W odróżnieniu od małej klauzuli może z niej skorzystać przedsiębiorca."},

{t:"Umowy gospodarcze",q:"Przesłankami zastosowania art. 357¹ k.c. są:",o:[
"nadzwyczajna zmiana stosunków",
"nadmierne trudności w spełnieniu świadczenia albo groźba rażącej straty dla jednej ze stron",
"to, że strony nie przewidywały tych skutków przy zawarciu umowy",
"niemożliwość świadczenia, za którą żadna ze stron nie odpowiada"],c:[0,1,2],
e:"Trzy przesłanki z art. 357¹ k.c. Niemożliwość świadczenia to zupełnie inna instytucja (art. 475, 495 k.c.)."},

{t:"Umowy gospodarcze",q:"Przedsiębiorcy zawarli ustnie umowę dostawy (art. 606 k.c.: umowa dostawy powinna być stwierdzona pismem). W sporze między nimi:",o:[
"umowa jest nieważna",
"dowód ze świadków na fakt zawarcia umowy jest dopuszczalny",
"dowód ze świadków jest dopuszczalny tylko za zgodą obu stron",
"umowa jest ważna"],c:[1,3],
e:"Forma z art. 606 to forma ad probationem. Art. 74 § 4 k.c.: przepisów o skutkach niezachowania formy dowodowej nie stosuje się między przedsiębiorcami – brak jakichkolwiek ograniczeń dowodowych."},

{t:"Umowy gospodarcze",q:"Należyta staranność dłużnika-przedsiębiorcy:",o:[
"w zakresie działalności gospodarczej określa się przy uwzględnieniu zawodowego charakteru tej działalności",
"jest mierzona łagodniej niż w obrocie powszechnym, bo przedsiębiorca działa masowo",
"jej miernik jest taki sam jak w obrocie powszechnym",
"oznacza, że przedsiębiorca zawsze odpowiada na zasadzie ryzyka"],c:[0],
e:"Art. 355 § 2 k.c. – miernik podwyższony (profesjonalny). Art. 472 – co do zasady dłużnik odpowiada za niezachowanie należytej staranności (wina). Miernik jest podwyższony (zawodowy charakter działalności)."},

{t:"Umowy gospodarcze",q:"Art. 385⁴ k.c. („wojna wzorców”):",o:[
"dotyczy umów między przedsiębiorcami stosującymi różne wzorce",
"stanowi, że umowa nie obejmuje tych postanowień wzorców, które są ze sobą sprzeczne",
"stanowi, że w razie sprzeczności wzorców wiąże wzorzec strony, która pierwsza złożyła ofertę",
"dotyczy także obrotu konsumenckiego"],c:[0,1],
e:"Art. 385⁴ § 1 i 2 k.c. – przepis wyłącznie dla obrotu dwustronnie gospodarczego. Żaden wzorzec nie „wygrywa” – sprzeczne postanowienia po prostu nie wchodzą do umowy."},

{t:"Umowy gospodarcze",q:"Zgodnie z art. 385 k.c.:",o:[
"w razie sprzeczności treści umowy z wzorcem strony są związane wzorcem",
"w razie sprzeczności treści umowy z wzorcem strony są związane umową",
"postanowienia niejednoznaczne wzorca tłumaczy się na korzyść konsumenta",
"reguła tłumaczenia na korzyść konsumenta ma zastosowanie także w postępowaniu o uznanie postanowień wzorca za niedozwolone"],c:[1,2],
e:"Art. 385 § 1 – pierwszeństwo umowy. § 2 – in dubio pro consumente, ale nie w postępowaniu abstrakcyjnym o uznanie postanowień za niedozwolone."},

{t:"Umowy gospodarcze",q:"Do normatywnych cech obrotu gospodarczego (przepisy k.c. szczególne dla przedsiębiorców) należą m.in.:",o:[
"milczące przyjęcie oferty przy stałych stosunkach gospodarczych (art. 68² k.c.)",
"wyłączenie skutków niezachowania formy dowodowej (art. 74 § 4 k.c.)",
"obowiązek wydania drugiej stronie dokumentu umowy zawartej poza lokalem przedsiębiorstwa",
"tłumaczenie niejednoznacznych postanowień wzorca na korzyść słabszej strony"],c:[0,1],
e:"68², 74 § 4, 77¹, 66², 68¹, 355 § 2, 358¹ § 4, 385⁴ – to przepisy obrotu profesjonalnego. Tłumaczenie na korzyść dotyczy konsumenta (385 § 2). Obowiązek wydania dokumentu umowy (art. 15 u.p.k.) chroni konsumenta i nie jest cechą obrotu profesjonalnego."},

/* ===================== TRYB OFERTOWY ===================== */
{t:"Tryb ofertowy",q:"Oferta w rozumieniu art. 66 § 1 k.c.:",o:[
"to oświadczenie drugiej stronie woli zawarcia umowy, jeżeli określa istotne postanowienia tej umowy",
"musi zawierać termin, w którym oferent oczekuje odpowiedzi",
"wiąże oferenta dopiero wtedy, gdy oblat potwierdzi jej otrzymanie",
"w przypadku umowy nienazwanej nie musi zawierać żadnych postanowień typowych dla danego rodzaju umowy"],c:[0],
e:"Termin nie jest obligatoryjnym elementem oferty (był kiedyś). Przy umowie nienazwanej oferta powinna zawierać postanowienia stypizowane przez praktykę. Potwierdzenie otrzymania jest wymagane tylko przy ofercie w postaci elektronicznej (66¹)."},

{t:"Tryb ofertowy",q:"Ogłoszenia, reklamy i cenniki:",o:[
"poczytuje się w razie wątpliwości za zaproszenie do zawarcia umowy",
"zawsze stanowią zaproszenie do zawarcia umowy – nie można wykazać, że są ofertą",
"podlegają tej regule tylko wtedy, gdy są skierowane do ogółu",
"ciężar wykazania, że stanowią ofertę, spoczywa na tym, kto tak twierdzi"],c:[0,3],
e:"Art. 71 k.c. to reguła interpretacyjna („w razie wątpliwości”), dotycząca informacji skierowanych do ogółu LUB do poszczególnych osób; można ją obalić."},

{t:"Tryb ofertowy",q:"Wystawienie rzeczy w miejscu sprzedaży na widok publiczny z oznaczeniem ceny:",o:[
"uważa się za ofertę sprzedaży",
"poczytuje się w razie wątpliwości za zaproszenie do zawarcia umowy",
"jest zaproszeniem do negocjacji",
"stanowi ofertę tylko wtedy, gdy sprzedawca wyraźnie to zaznaczy"],c:[0],
e:"Art. 543 k.c. – wyłożenie towaru z ceną to oferta, co stanowi wyjątek od reguły interpretacyjnej z art. 71 k.c. Art. 543 k.c. przesądza to bez dodatkowych zastrzeżeń; jest to wyjątek od reguły z art. 71."},

{t:"Tryb ofertowy",q:"Oferta bez oznaczonego terminu odpowiedzi:",o:[
"złożona w obecności drugiej strony przestaje wiązać, gdy nie zostanie przyjęta niezwłocznie",
"złożona za pomocą środka bezpośredniego porozumiewania się na odległość przestaje wiązać z upływem czasu, w którym oferent mógł w zwykłym toku czynności otrzymać odpowiedź",
"złożona listownie przestaje wiązać z upływem czasu, w którym oferent mógł w zwykłym toku czynności otrzymać odpowiedź wysłaną bez nieuzasadnionego opóźnienia",
"wiąże oferenta zawsze przez 14 dni"],c:[0,2],
e:"Art. 66 § 2 k.c.: obecność stron albo środek bezpośredniego porozumiewania się → „niezwłocznie”; inny sposób → czas zwykłego toku czynności + odpowiedź wysłana bez nieuzasadnionego opóźnienia."},

{t:"Tryb ofertowy",q:"Zgodnie z art. 61 § 1 k.c.:",o:[
"oświadczenie woli jest złożone z chwilą, gdy doszło do adresata tak, że mógł zapoznać się z jego treścią",
"oświadczenie woli jest złożone dopiero z chwilą faktycznego zapoznania się z nim przez adresata",
"odwołanie oświadczenia jest skuteczne, jeżeli doszło do adresata najpóźniej w ciągu 24 godzin po oświadczeniu",
"odwołanie oświadczenia jest skuteczne, jeżeli zostało wysłane zanim oświadczenie doszło do adresata"],c:[0],
e:"Teoria doręczenia (możliwość zapoznania się). Liczy się dojście odwołania, a nie jego wysłanie. Odwołanie musi dojść jednocześnie z oświadczeniem lub wcześniej."},

{t:"Tryb ofertowy",q:"W stosunkach między przedsiębiorcami oferta (art. 66² k.c.):",o:[
"może być odwołana przed zawarciem umowy, jeżeli oświadczenie o odwołaniu zostało złożone drugiej stronie przed wysłaniem przez nią oświadczenia o przyjęciu oferty",
"może być odwołana aż do chwili otrzymania przez oferenta oświadczenia o przyjęciu",
"nie może być odwołana, jeżeli określono w niej termin przyjęcia",
"nie może być odwołana, jeżeli wynika to z jej treści"],c:[0,2,3],
e:"Art. 66² § 1 i 2 k.c. Granicą jest WYSŁANIE przyjęcia przez oblata. Oferta z terminem albo z zastrzeżeniem nieodwołalności jest nieodwołalna."},

{t:"Tryb ofertowy",q:"Przedsiębiorca A wysłał przedsiębiorcy B ofertę bez terminu. B ją otrzymał we wtorek, w środę wysłał e-mail z przyjęciem, a w czwartek dotarło do niego pismo A odwołujące ofertę (A wysłał je w środę wieczorem). Skutek:",o:[
"odwołanie jest skuteczne, bo dotarło przed zawarciem umowy",
"odwołanie jest nieskuteczne, bo doszło do B po wysłaniu przez niego przyjęcia",
"umowa nie mogła zostać zawarta, bo oferta była odwołalna",
"umowa zostanie zawarta z chwilą otrzymania przez A oświadczenia o przyjęciu"],c:[1,3],
e:"Art. 66² § 1: odwołanie musi zostać złożone (dojść) przed wysłaniem przyjęcia. Tu dotarło później, więc jest spóźnione. Umowa dochodzi do skutku, gdy przyjęcie dojdzie do oferenta (art. 70 § 1)."},

{t:"Tryb ofertowy",q:"Art. 66² k.c. (szczególna odwołalność oferty) stosuje się:",o:[
"w obrocie konsumenckim, gdy ofertę składa przedsiębiorca",
"wyłącznie w stosunkach między przedsiębiorcami",
"wyłącznie do ofert złożonych w postaci elektronicznej",
"zawsze, gdy choć jedną stroną jest przedsiębiorca"],c:[1],
e:"Przepis dotyczy tylko obrotu dwustronnie gospodarczego. W pozostałym obrocie odwołanie jest możliwe tylko na zasadach art. 61 § 1 zd. 2 k.c."},

{t:"Tryb ofertowy",q:"Oferta złożona w postaci elektronicznej (art. 66¹ k.c.):",o:[
"wiąże składającego, jeżeli druga strona niezwłocznie potwierdzi jej otrzymanie",
"potwierdzenie jej otrzymania jest równoznaczne z jej przyjęciem",
"zasady z § 1–3 nie mają zastosowania do zawierania umów za pomocą poczty elektronicznej albo podobnych środków indywidualnego porozumiewania się na odległość",
"wymaga opatrzenia kwalifikowanym podpisem elektronicznym"],c:[0,2],
e:"Potwierdzenie otrzymania to oświadczenie wiedzy, nie przyjęcie. „Postać” elektroniczna to pojęcie szersze niż „forma” elektroniczna – nie wymaga podpisu kwalifikowanego."},

{t:"Tryb ofertowy",q:"Obowiązki informacyjne z art. 66¹ § 2 k.c.:",o:[
"ciążą na przedsiębiorcy składającym ofertę w postaci elektronicznej",
"obejmują obowiązek uzyskania od drugiej strony zgody na zawarcie umowy na odległość",
"ich naruszenie powoduje nieważność umowy",
"w stosunkach między przedsiębiorcami nie stosuje się ich, jeżeli strony tak postanowiły"],c:[0,3],
e:"Brak sankcji nieważności – ewentualnie odpowiedzialność odszkodowawcza. § 4 zd. 2 – wyłączenie umowne między przedsiębiorcami. Stosuje się je odpowiednio także do zaproszenia do negocjacji (§ 3). Katalog z § 2: czynności techniczne, skutki potwierdzenia, utrwalanie treści umowy, wykrywanie błędów, języki, kodeksy etyczne."},

{t:"Tryb ofertowy",q:"Wymóg potwierdzenia otrzymania oferty z art. 66¹ § 1 k.c.:",o:[
"dotyczy tylko obrotu konsumenckiego",
"dotyczy każdego obrotu – powszechnego, konsumenckiego i profesjonalnego",
"potwierdzenie musi nastąpić w tej samej postaci (elektronicznej), w jakiej złożono ofertę",
"potwierdzenie musi nastąpić w formie elektronicznej pod rygorem nieważności"],c:[1],
e:"Według notatek obowiązek z § 1 dotyczy każdego obrotu, a z przepisu nie wynika forma potwierdzenia (dyrektywa sugeruje drogę elektroniczną, ale k.c. tego nie wymaga). Według notatek k.c. nie wymaga określonej formy potwierdzenia – może być np. telefoniczne."},

{t:"Tryb ofertowy",q:"Odpowiedź na ofertę z zastrzeżeniem zmian lub uzupełnień:",o:[
"co do zasady poczytuje się za nową ofertę (art. 68 k.c.)",
"w stosunkach między przedsiębiorcami poczytuje się za przyjęcie oferty, jeżeli zmiany nie zmieniają istotnie jej treści",
"w stosunkach między przedsiębiorcami poczytuje się za przyjęcie nawet wtedy, gdy zmienia cenę w umowie sprzedaży",
"w stosunkach między przedsiębiorcami wiąże strony umowa o treści określonej w odpowiedzi na ofertę, z pominięciem treści oferty"],c:[0,1],
e:"Zasada lustrzanego odbicia (68) i wyjątek z 68¹ § 1: wiąże umowa o treści oferty Z UWZGLĘDNIENIEM zastrzeżeń. Zmiana essentialia negotii (cena) to kontroferta."},

{t:"Tryb ofertowy",q:"Art. 68¹ § 1 k.c. NIE stosuje się, gdy:",o:[
"w treści oferty wskazano, że może ona być przyjęta jedynie bez zastrzeżeń",
"oferent niezwłocznie sprzeciwił się włączeniu zastrzeżeń do umowy",
"oblat uzależnił przyjęcie od zgody oferenta na zastrzeżenia, a zgody tej niezwłocznie nie otrzymał",
"zastrzeżenia dotyczą terminu dostawy"],c:[0,1,2],
e:"Trzy wyjątki z art. 68¹ § 2 k.c. – powrót do zasady lustrzanego odbicia. Termin dostawy to typowy przykład zmiany nieistotnej."},

{t:"Tryb ofertowy",q:"Milczenie adresata oferty:",o:[
"co do zasady nie oznacza przyjęcia oferty",
"między przedsiębiorcami pozostającymi w stałych stosunkach gospodarczych brak niezwłocznej odpowiedzi poczytuje się za przyjęcie oferty zawarcia umowy w ramach działalności adresata",
"poczytuje się za przyjęcie także wtedy, gdy adresatem jest konsument stale kupujący u przedsiębiorcy",
"zgodnie z IV CK 286/02 stały charakter kontaktów to taki, który umożliwia przewidzenie, że oferta zostanie złożona i w jakiej wielkości"],c:[0,1,3],
e:"Art. 68² k.c. dotyczy wyłącznie przedsiębiorców. W wyroku IV CK 286/02 (papier, faksy) SN opisał stałe stosunki jako rutynowy, przewidywalny tryb zawierania umów."},

{t:"Tryb ofertowy",q:"Art. 69 k.c.:",o:[
"umowa dochodzi do skutku, gdy druga strona w czasie właściwym przystąpi do jej wykonania, jeżeli wg zwyczaju lub treści oferty dojście oświadczenia o przyjęciu nie jest wymagane",
"umowa dochodzi do skutku także wtedy, gdy oblat przystąpi do wykonania już po czasie właściwym",
"jeżeli oblat nie przystąpi do wykonania w czasie właściwym, oferta nadal wiąże",
"reguluje milczące przyjęcie oferty"],c:[0],
e:"Art. 69 – dorozumiane (konkludentne) przyjęcie przez przystąpienie do wykonania; w przeciwnym razie oferta przestaje wiązać. Milczenie to art. 68². Przystąpienie musi nastąpić w czasie właściwym – inaczej oferta przestaje wiązać."},

{t:"Tryb ofertowy",q:"Oświadczenie o przyjęciu oferty z terminem nadeszło po terminie, ale ze stempla pocztowego wynika, że wysłano je w czasie właściwym:",o:[
"umowa nie dochodzi do skutku",
"umowa dochodzi do skutku, chyba że oferent niezwłocznie zawiadomi drugą stronę, że wskutek opóźnienia poczytuje umowę za niezawartą",
"umowa dochodzi do skutku tylko wtedy, gdy oferent wyrazi na to zgodę",
"to sytuacja uregulowana w art. 67 k.c."],c:[1,3],
e:"Art. 67 k.c. – ciężar reakcji spoczywa na oferencie."},

{t:"Tryb ofertowy",q:"Czas i miejsce zawarcia umowy w trybie ofertowym (art. 70 k.c.), w razie wątpliwości:",o:[
"chwila otrzymania przez oferenta oświadczenia o przyjęciu",
"miejsce wysłania przez oblata oświadczenia o przyjęciu",
"przy ofercie w postaci elektronicznej – miejsce zamieszkania albo siedziba oferenta w chwili zawarcia umowy",
"przy ofercie w postaci elektronicznej – miejsce zamieszkania albo siedziba przyjmującego ofertę"],c:[0,2],
e:"Art. 70 § 1 i 2 k.c. Liczy się miejsce OTRZYMANIA oświadczenia przez oferenta, a nie miejsce jego wysłania."},

{t:"Tryb ofertowy",q:"Wskaż zdania prawdziwe o oblacie:",o:[
"musi potwierdzić otrzymanie każdej oferty",
"staje się stroną umowy już z chwilą otrzymania oferty",
"ryzyko niedotarcia oferty obciąża oferenta",
"do oferty stosuje się fikcję doręczenia z art. 139 k.p.c."],c:[2],
e:"Obowiązek potwierdzenia dotyczy tylko oferty w postaci elektronicznej. Oblat jednym oświadczeniem może doprowadzić do zawarcia umowy (uprawnienie kształtujące). Fikcji doręczenia z k.p.c. tu nie ma. Do zawarcia umowy potrzebne jest przyjęcie oferty. Oblat ma jedynie uprawnienie kształtujące."},

{t:"Tryb ofertowy",q:"Wyrok SN III CSK 297/09 (nasiona ogórków):",o:[
"zaproszenie do zawarcia umowy to przedstawienie informacji o możliwości zawarcia umowy i korzyściach z niej płynących",
"oferta to sprecyzowana, jednoznaczna propozycja zawarcia określonej umowy",
"SN uznał, że propozycja pozwanego nosiła cechy oferty i na jej podstawie doszło do zawarcia umowy",
"wręczenie druku informacyjnego zawsze wyklucza uznanie propozycji za ofertę"],c:[0,1,2],
e:"Konkretny towar, cechy, cena i cel bezzwłocznej sprzedaży → oferta, a nie zaproszenie."},

{t:"Tryb ofertowy",q:"Wyrok SN IV CK 286/02 (dostawy papieru, faksy):",o:[
"faks pozwanej uznano za ofertę, bo zawierał wszystkie elementy niezbędne do zawarcia umowy i wskazywał termin związania",
"jeżeli w ofercie oznaczono termin, oferent jest nią związany do jego upływu, a odpowiedź złożona w tym terminie prowadzi do zawarcia umowy",
"SN uznał, że faks był jedynie zaproszeniem do składania ofert",
"stałe kontakty wytwarzają zwyczaj i rutynowy tryb zawierania umów"],c:[0,1,3],
e:"SN podzielił stanowisko SA: faks z 30 lipca był ofertą (art. 66 § 1), przyjętą w listopadzie w terminie."},

/* ===================== AUKCJA I PRZETARG ===================== */
{t:"Aukcja i przetarg",q:"Aukcja (art. 70² k.c.):",o:[
"oferta licytanta wiąże go aż do udzielenia przybicia innemu licytantowi",
"zawarcie umowy następuje z chwilą udzielenia przybicia",
"gdy ważność umowy zależy od szczególnych wymagań ustawy, zarówno organizator, jak i uczestnik, którego oferta została przyjęta, mogą dochodzić zawarcia umowy",
"zawarcie umowy następuje z chwilą pisemnego zawiadomienia o wyniku"],c:[1,2],
e:"Art. 70² § 1–3 k.c. Pisemne zawiadomienie dotyczy przetargu (70³ § 2) i nie decyduje o chwili zawarcia. Oferta przestaje wiązać już w chwili przebicia (złożenia korzystniejszej oferty), a nie dopiero przy przybiciu."},

{t:"Aukcja i przetarg",q:"Przetarg (art. 70³ k.c.):",o:[
"oferta przestaje wiązać, gdy wybrano inną ofertę albo przetarg zamknięto bez wyboru, chyba że w warunkach zastrzeżono inaczej",
"organizator jest obowiązany niezwłocznie powiadomić na piśmie uczestników o wyniku",
"do ustalenia chwili zawarcia umowy stosuje się przepisy o przybiciu",
"z założenia uczestnicy znają oferty pozostałych oferentów"],c:[0,1],
e:"Chwila zawarcia – przepisy o przyjęciu oferty (70³ § 3), chyba że warunki stanowią inaczej. W przetargu uczestnicy nie znają ofert innych (inaczej niż w aukcji)."},

{t:"Aukcja i przetarg",q:"Licytację nieruchomości (umowa wymaga aktu notarialnego) zakończono przybiciem. Skutek:",o:[
"umowa sprzedaży nieruchomości zostaje zawarta z chwilą przybicia",
"przybicie nie jest równoznaczne z zawarciem umowy",
"organizator i uczestnik mogą dochodzić zawarcia umowy",
"przybicie rodzi roszczenie o zawarcie umowy, podobnie jak umowa przedwstępna o skutku silniejszym"],c:[1,2,3],
e:"Art. 70² § 3 (stosowany też do przetargu – 70³ § 3). Przybicie wybiera najlepszą ofertę; skutkiem jest roszczenie o zawarcie umowy dochodzone powództwem."},

{t:"Aukcja i przetarg",q:"Ogłoszenie aukcji albo przetargu (art. 70¹ k.c.):",o:[
"powinno określać czas, miejsce, przedmiot i warunki albo sposób udostępnienia warunków",
"oraz warunki mogą być zmienione lub odwołane tylko wtedy, gdy zastrzeżono to w ich treści",
"wiąże organizatora dopiero od chwili złożenia pierwszej oferty",
"może być zawsze odwołane do chwili rozpoczęcia aukcji"],c:[0,1],
e:"Art. 70¹ § 2–4 k.c. Organizator jest związany od chwili udostępnienia warunków (70¹ § 4)."},

{t:"Aukcja i przetarg",q:"Wadium (art. 70⁴ k.c.):",o:[
"można zastrzec pod rygorem niedopuszczenia do aukcji albo przetargu",
"gdy uczestnik, którego oferta została wybrana, uchyla się od zawarcia umowy wymagającej spełnienia szczególnych wymagań ustawy, organizator może zachować pobraną sumę",
"gdy od zawarcia umowy uchyla się organizator, wybrany uczestnik może żądać zapłaty podwójnego wadium albo naprawienia szkody",
"gdy uchyla się organizator, uczestnik może żądać podwójnego wadium i dodatkowo naprawienia szkody"],c:[0,1,2],
e:"Art. 70⁴ § 2 – alternatywa („albo”), nie kumulacja."},

{t:"Aukcja i przetarg",q:"Wadium – wskaż zdania prawdziwe:",o:[
"może mieć postać gwarancji bankowej lub ubezpieczeniowej",
"jest obowiązkowym elementem każdej aukcji",
"w razie zawarcia umowy z wybranym uczestnikiem zostaje zaliczone na poczet umowy",
"uczestnikowi, którego oferty nie wybrano, wadium podlega zwrotowi"],c:[0,2,3],
e:"Wadium „można zastrzec” – nie musi wystąpić. Formy: pieniądz albo zabezpieczenie (gwarancja, weksel, poręczenie, blokada rachunku, zastaw, hipoteka)."},

{t:"Aukcja i przetarg",q:"Gwarancja bankowa jako forma wadium:",o:[
"ma charakter zabezpieczenia akcesoryjnego",
"ma charakter zabezpieczenia samodzielnego (nieakcesoryjnego)",
"bank przed wypłatą bada istnienie podstawy odpowiedzialności uczestnika",
"bank wypłaca dopiero po prawomocnym ustaleniu, że uczestnik uchylił się od zawarcia umowy"],c:[1],
e:"Według notatek gwarancja jest abstrakcyjna – bank nie bada stosunku podstawowego. Gwarancja jest samodzielna – bank płaci po formalnie prawidłowym żądaniu, bez badania podstawy."},

{t:"Aukcja i przetarg",q:"Unieważnienie umowy zawartej w drodze aukcji albo przetargu (art. 70⁵ k.c.):",o:[
"może go żądać organizator oraz uczestnik aukcji albo przetargu",
"przesłanką jest wpływ strony, innego uczestnika lub osoby działającej z nimi w porozumieniu na wynik w sposób sprzeczny z prawem lub dobrymi obyczajami",
"uprawnienie wygasa z upływem roku od dowiedzenia się o przyczynie, nie później niż z upływem trzech lat od zawarcia umowy",
"taka umowa jest bezwzględnie nieważna z mocy prawa"],c:[0,1],
e:"Sankcja wzruszalności – wyrok prawnokształtujący. Po upływie terminów następuje konwalidacja umowy. Terminy to miesiąc od dowiedzenia się i najpóźniej rok od zawarcia umowy."},

{t:"Aukcja i przetarg",q:"Umowę zawarto w przetargu na cudzy rachunek. Unieważnienia na podstawie art. 70⁵ k.c. może żądać:",o:[
"organizator",
"uczestnik przetargu",
"ten, na czyj rachunek umowa została zawarta, lub dający zlecenie",
"każdy, kto ma interes prawny, bez ograniczenia czasowego"],c:[0,1,2],
e:"Art. 70⁵ § 1 zd. 2 k.c. Terminy z § 2 obowiązują wszystkich."},

{t:"Aukcja i przetarg",q:"Wadium a zadatek:",o:[
"wadium zabezpiecza zawarcie umowy, a zadatek – jej wykonanie",
"zadatek ma charakter realny",
"zadatek może być ustanowiony wyłącznie w toku przetargu",
"wadium ze swej istoty jest zawsze sumą pieniężną"],c:[0,1],
e:"Wadium może mieć postać zabezpieczenia zapłaty, a nie tylko pieniędzy. Zadatek (art. 394) dotyczy każdej umowy i jest dawany przy jej zawarciu."},

/* ===================== NEGOCJACJE, LIST INTENCYJNY, UMOWA PRZEDWSTĘPNA ===================== */
{t:"Negocjacje i umowa przedwstępna",q:"Zawarcie umowy w drodze negocjacji (art. 72 § 1 k.c.):",o:[
"następuje, gdy strony dojdą do porozumienia co do wszystkich postanowień, które były przedmiotem negocjacji",
"strony mogą uznać umowę za zawartą mimo nieuzgodnienia wszystkich negocjowanych kwestii, ale muszą być uzgodnione essentialia negotii",
"jest możliwe bez uzgodnienia essentialia negotii, jeżeli strony wyraźnie tak postanowią",
"rozpoczyna się zawsze od złożenia oferty"],c:[0,1],
e:"Art. 72 § 1 jest w tym sensie względnie obowiązujący, ale bez elementów przedmiotowo istotnych umowy nie ma. Negocjacje zaczynają się od zaproszenia do negocjacji."},

{t:"Negocjacje i umowa przedwstępna",q:"Culpa in contrahendo (art. 72 § 2 k.c.):",o:[
"dotyczy strony, która rozpoczęła lub prowadziła negocjacje z naruszeniem dobrych obyczajów, w szczególności bez zamiaru zawarcia umowy",
"rodzi obowiązek naprawienia szkody w granicach dodatniego interesu umownego",
"rodzi odpowiedzialność co do zasady deliktową (art. 415 i n. k.c.)",
"może mieć charakter kontraktowy, jeżeli strony zawarły umowę o negocjacje"],c:[0,2,3],
e:"Odszkodowanie za to, że strona liczyła na zawarcie umowy = ujemny interes umowny. Przy kilku sprawcach – solidarność (art. 441)."},

{t:"Negocjacje i umowa przedwstępna",q:"Tajemnica negocjacji (art. 72¹ k.c.):",o:[
"obowiązek poufności powstaje, gdy strona udostępniła informacje z zastrzeżeniem poufności",
"obowiązek poufności wynika wyłącznie z zawartej umowy o negocjacje",
"uprawniony może żądać naprawienia szkody albo wydania uzyskanych korzyści",
"uprawniony może żądać naprawienia szkody i dodatkowo wydania korzyści"],c:[0,2],
e:"Obowiązek wynika wprost z ustawy (chyba że strony uzgodniły inaczej). Roszczenia są alternatywne („albo”)."},

{t:"Negocjacje i umowa przedwstępna",q:"Umowa o negocjacje (o sposobie prowadzenia negocjacji):",o:[
"nie rodzi roszczenia o zawarcie umowy docelowej",
"niezawarcie umowy docelowej stanowi niewykonanie umowy o negocjacje",
"rodzi odpowiedzialność za niezawarcie umowy docelowej w granicach dodatniego interesu umownego",
"jest rodzajem umowy przedwstępnej"],c:[0],
e:"Odpowiada się za sposób prowadzenia negocjacji, nie za to, że umowy nie zawarto. Umowa przedwstępna rodzi obowiązek zawarcia umowy – umowa o negocjacje nie. Odpowiada się za niewłaściwe prowadzenie negocjacji (471 k.c.), a nie za to, że umowy nie zawarto."},

{t:"Negocjacje i umowa przedwstępna",q:"List intencyjny (V CSK 425/10):",o:[
"nie wywołuje skutku w postaci definitywnego, zaskarżalnego zobowiązania",
"inny niż niedefinitywny charakter jego postanowień musiałby zostać wykazany in concreto",
"jeżeli jest dwustronny i zindywidualizowany, zawsze rodzi obowiązek zawarcia umowy",
"jest zawsze umową przedwstępną, jeżeli określa istotne postanowienia przyszłej umowy"],c:[0,1],
e:"Nawet bliżej zindywidualizowana treść nie przesądza o definitywnym obowiązku świadczenia. Zasadniczo nie rodzi zobowiązania, chyba że strony postanowiły inaczej. List intencyjny co do zasady nie jest umową przedwstępną."},

{t:"Negocjacje i umowa przedwstępna",q:"Punktacja:",o:[
"określa, co strony już wynegocjowały, a co pozostaje przedmiotem negocjacji",
"służy progresywnemu zawieraniu umowy",
"rodzi roszczenie o zawarcie umowy docelowej",
"oznacza, że strony co do zasady nie wracają do kwestii już wynegocjowanych"],c:[0,1,3],
e:"Punktacja to porozumienie przedkontraktowe bez obowiązku zawarcia umowy."},

{t:"Negocjacje i umowa przedwstępna",q:"Umowa ramowa:",o:[
"organizuje współpracę stron (np. harmonogram dostaw, cena jednostkowa)",
"rodzi obowiązek zawierania umów wykonawczych",
"z chwilą jej zawarcia powstaje obowiązek złożenia minimalnej liczby zamówień",
"jest szczególnym rodzajem umowy przedwstępnej"],c:[0],
e:"Z samej umowy ramowej nie wynika obowiązek zawierania dalszych umów – w tym tkwi różnica wobec umowy przedwstępnej. Z samej umowy ramowej nie wynika obowiązek zawierania aktów wykonawczych."},

{t:"Negocjacje i umowa przedwstępna",q:"Umowa przedwstępna (art. 389 k.c.):",o:[
"powinna określać istotne postanowienia umowy przyrzeczonej",
"musi określać termin zawarcia umowy przyrzeczonej",
"gdy termin nie jest oznaczony, a obie strony są uprawnione i wyznaczyły różne terminy, wiąże termin późniejszy",
"jeżeli w ciągu roku od jej zawarcia nie wyznaczono terminu zawarcia umowy przyrzeczonej, nie można żądać jej zawarcia"],c:[0,3],
e:"Art. 389 § 1 i 2 k.c. Termin nie jest obligatoryjny. Wiąże termin wyznaczony przez stronę, która WCZEŚNIEJ złożyła oświadczenie."},

{t:"Negocjacje i umowa przedwstępna",q:"Skutki uchylania się od zawarcia umowy przyrzeczonej (art. 390 k.c.):",o:[
"skutek słabszy – odszkodowanie za szkodę poniesioną przez to, że strona liczyła na zawarcie umowy przyrzeczonej",
"strony mogą w umowie przedwstępnej odmiennie określić zakres odszkodowania, np. przez karę umowną",
"skutek silniejszy przysługuje, gdy umowa przedwstępna czyni zadość wymaganiom ważności umowy przyrzeczonej, w szczególności co do formy",
"roszczenia z umowy przedwstępnej przedawniają się z upływem trzech lat"],c:[0,1,2],
e:"Art. 390 § 1–3 k.c. Przedawnienie – rok (§ 3). Zob. też I CSK 401/23."},

{t:"Negocjacje i umowa przedwstępna",q:"Przedawnienie roszczeń z umowy przedwstępnej (art. 390 § 3 k.c.):",o:[
"rok od dnia, w którym umowa przyrzeczona miała być zawarta",
"gdy sąd oddalił żądanie zawarcia umowy przyrzeczonej – rok od uprawomocnienia się orzeczenia",
"sześć lat od zawarcia umowy przedwstępnej",
"koniec terminu przypada na ostatni dzień roku kalendarzowego"],c:[0,1],
e:"Termin jest krótszy niż dwa lata, więc reguła końca roku z art. 118 nie ma zastosowania."},

{t:"Negocjacje i umowa przedwstępna",q:"Ujemny interes umowny przy umowie przedwstępnej (IV CSK 109/18 i notatki):",o:[
"może obejmować damnum emergens",
"może obejmować lucrum cessans w zakresie, w jakim strona liczyła na zawarcie umowy",
"obejmuje korzyści, które strona osiągnęłaby z wykonania umowy przyrzeczonej",
"dochodzenie odszkodowania powoduje utratę roszczenia o zawarcie umowy przyrzeczonej"],c:[0,1],
e:"Korzyści z wykonania umowy to interes dodatni. SN: dochodząc odszkodowania nie tracimy roszczenia o zawarcie umowy."},

{t:"Negocjacje i umowa przedwstępna",q:"Strony zawarły w zwykłej formie pisemnej umowę przedwstępną sprzedaży nieruchomości. Sprzedawca uchyla się od umowy przyrzeczonej. Kupujący:",o:[
"może żądać zawarcia umowy przyrzeczonej przed sądem",
"może żądać odszkodowania w granicach ujemnego interesu umownego",
"nie ma żadnych roszczeń, bo umowa przedwstępna jest nieważna",
"może dochodzić kary umownej, jeżeli strony ją zastrzegły"],c:[1,3],
e:"Brak aktu notarialnego → tylko skutek słabszy (art. 390 § 1). Umowa przedwstępna pozostaje ważna; strony mogą odmiennie określić odszkodowanie."},

{t:"Negocjacje i umowa przedwstępna",q:"Wyrok zastępujący oświadczenie woli przy umowie przedwstępnej (II CSKP 1770/22, art. 64 k.c.):",o:[
"prawomocne orzeczenie stwierdzające obowiązek złożenia oświadczenia woli zastępuje to oświadczenie",
"sąd z urzędu uzupełnia postanowienia umowy przyrzeczonej, których powód nie wskazał w pozwie",
"nieprawidłowo sformułowane żądanie pozwu może skutkować oddaleniem powództwa",
"sąd może samodzielnie ustalić treść umowy przyrzeczonej odmiennie od żądania"],c:[0,2],
e:"To, czy wyrok zastępuje jedno oświadczenie, czy zawarcie całej umowy, zależy od żądania powoda. Sąd jest związany żądaniem – nie uzupełnia go z urzędu."},

{t:"Negocjacje i umowa przedwstępna",q:"Porozumienia przedkontraktowe mogą dotyczyć:",o:[
"trybu prowadzenia negocjacji",
"oczekiwanej treści negocjowanej umowy",
"świadczeń spełnianych na poczet przyszłej umowy",
"obowiązku zawarcia umowy przyrzeczonej"],c:[0,1,2],
e:"Żadne z porozumień przedkontraktowych nie zobowiązuje do zawarcia umowy – to byłaby już umowa przedwstępna."},

/* ===================== UMOWY KONSUMENCKIE – UPK ===================== */
{t:"Umowy konsumenckie (UPK)",q:"Tryb adhezyjny:",o:[
"polega na zawarciu umowy przez przystąpienie, bez negocjacji",
"jest odmianą trybu ofertowego, w której nie ma miejsca na kontrofertę",
"pozwala adherentowi skutecznie zgłosić kontrofertę zmieniającą warunki",
"wymaga zawsze formy pisemnej"],c:[0,1],
e:"Przykłady: rachunek bankowy, przewóz. Brak szczególnych wymagań co do formy. W trybie adhezyjnym nie ma miejsca na kontrofertę – albo przystąpienie, albo brak umowy."},

{t:"Umowy konsumenckie (UPK)",q:"Umowa zawarta na odległość (art. 2 pkt 1 u.p.k.):",o:[
"to umowa zawarta z konsumentem w ramach zorganizowanego systemu zawierania umów na odległość",
"wymaga braku jednoczesnej fizycznej obecności stron i wyłącznego użycia środków porozumiewania się na odległość do chwili zawarcia umowy włącznie",
"jest nią także umowa zawarta mailem po osobistym spotkaniu stron w trakcie negocjacji",
"jest nią umowa zawarta incydentalnie, poza jakimkolwiek zorganizowanym systemem"],c:[0,1],
e:"Wymagany zorganizowany system (powtarzalny) i wyłączność środków na odległość do zawarcia włącznie."},

{t:"Umowy konsumenckie (UPK)",q:"Umową zawartą poza lokalem przedsiębiorstwa (art. 2 pkt 2 u.p.k.) jest umowa z konsumentem zawarta:",o:[
"przy jednoczesnej fizycznej obecności stron w miejscu, które nie jest lokalem przedsiębiorstwa",
"w ruchomym punkcie (np. food trucku), w którym przedsiębiorca zwyczajowo prowadzi działalność",
"w lokalu przedsiębiorstwa bezpośrednio po indywidualnym i osobistym kontakcie z konsumentem poza lokalem, przy jednoczesnej fizycznej obecności stron",
"zawsze wtedy, gdy konsument złożył zamówienie telefonicznie"],c:[0,2],
e:"Zamówienie telefoniczne to raczej umowa na odległość. Pokazy (lit. e) również są „poza lokalem”. Rzecz ruchoma, w której przedsiębiorca działa zwyczajowo albo na stałe, JEST lokalem przedsiębiorstwa (art. 2 pkt 3 lit. b)."},

{t:"Umowy konsumenckie (UPK)",q:"Lokalem przedsiębiorstwa (art. 2 pkt 3 u.p.k.) jest:",o:[
"nieruchomość lub jej część, w której przedsiębiorca prowadzi działalność na stałe",
"rzecz ruchoma, w której przedsiębiorca prowadzi działalność zwyczajowo albo na stałe",
"nieruchomość, w której przedsiębiorca prowadzi działalność zwyczajowo, choćby nie na stałe",
"każde miejsce, w którym przedsiębiorca akurat przebywa z konsumentem"],c:[0,1],
e:"„Zwyczajowo albo na stałe” dotyczy tylko rzeczy ruchomej (np. food truck). Nieruchomość – wyłącznie „na stałe”."},

{t:"Umowy konsumenckie (UPK)",q:"Przepisów u.p.k. o umowach zawieranych poza lokalem przedsiębiorstwa nie stosuje się, jeżeli konsument jest zobowiązany do zapłaty kwoty nieprzekraczającej:",o:["50 zł","100 zł","600 zł","200 zł"],c:[0],
e:"Art. 3 u.p.k. – próg 50 zł. Kwota 600 zł dotyczy złagodzonych obowiązków przy natychmiastowej naprawie lub konserwacji (art. 16)."},

{t:"Umowy konsumenckie (UPK)",q:"Art. 7 u.p.k.:",o:[
"konsument nie może zrzec się praw przyznanych mu w ustawie",
"postanowienia mniej korzystne dla konsumenta są nieważne, a w ich miejsce stosuje się przepisy ustawy",
"przepisy ustawy mają charakter dyspozytywny – strony mogą je wyłączyć w umowie",
"postanowienia mniej korzystne dla konsumenta powodują nieważność całej umowy"],c:[0,1],
e:"Nieważne jest tylko niekorzystne postanowienie – reszta umowy obowiązuje, a lukę wypełnia ustawa. Przepisy u.p.k. są semiimperatywne – nie można ich wyłączyć na niekorzyść konsumenta."},

{t:"Umowy konsumenckie (UPK)",q:"Art. 7aa u.p.k. (przedsiębiorca na prawach konsumenta):",o:[
"obejmuje wszystkie przepisy u.p.k.",
"dotyczy osoby fizycznej zawierającej umowę bezpośrednio związaną z jej działalnością, gdy z treści umowy wynika, że nie ma ona dla niej charakteru zawodowego",
"obejmuje każdą umowę zawartą przez przedsiębiorcę będącego osobą fizyczną poza miejscem prowadzenia działalności",
"obejmuje także spółki osobowe"],c:[1],
e:"Dotyczy tylko rozdziałów 4, 5a i 5b u.p.k. i tylko osób fizycznych. Decyduje brak zawodowego charakteru umowy, oceniany m.in. według przedmiotu działalności w CEIDG, a nie miejsce zawarcia."},

{t:"Umowy konsumenckie (UPK)",q:"Obowiązek informacyjny z art. 12 u.p.k.:",o:[
"należy spełnić najpóźniej w chwili otrzymania przez konsumenta potwierdzenia zawarcia umowy",
"należy spełnić najpóźniej w chwili wydania rzeczy",
"obejmuje łączną cenę lub wynagrodzenie wraz z podatkami",
"obejmuje informację o braku prawa odstąpienia (art. 38) lub okolicznościach jego utraty"],c:[2,3],
e:"Art. 12 ust. 1 pkt 5 i 12 u.p.k. Ciężar dowodu spełnienia obowiązku spoczywa na przedsiębiorcy (art. 24). Termin: najpóźniej w chwili wyrażenia przez konsumenta woli związania się umową."},

{t:"Umowy konsumenckie (UPK)",q:"Sposób udzielenia informacji (art. 14 u.p.k.):",o:[
"przy umowie poza lokalem – na papierze albo, za zgodą konsumenta, na innym trwałym nośniku",
"przy umowie na odległość – w sposób odpowiadający rodzajowi użytego środka porozumiewania się",
"przy umowie poza lokalem – wyłącznie ustnie",
"w sposób czytelny i wyrażony prostym językiem"],c:[0,1,3],
e:"Art. 14 ust. 1 i 2 u.p.k. Przy umowie poza lokalem dodatkowo trzeba wydać dokument umowy lub potwierdzenie (art. 15)."},

{t:"Umowy konsumenckie (UPK)",q:"Art. 17 u.p.k. (zamówienie przez internet z obowiązkiem zapłaty):",o:[
"przycisk musi być oznaczony słowami „zamówienie z obowiązkiem zapłaty” lub równoważnym jednoznacznym sformułowaniem",
"jeżeli przedsiębiorca nie spełni tego wymogu, umowa nie zostaje zawarta",
"jeżeli przedsiębiorca nie spełni tego wymogu, konsument może uchylić się od skutków oświadczenia",
"obowiązek oznaczenia przycisku dotyczy także umów zawieranych w lokalu przedsiębiorstwa"],c:[0,1],
e:"Art. 17 ust. 4 – sankcja niezawarcia umowy, jeden z niewielu przypadków, gdy naruszenie obowiązku informacyjnego wpływa na byt umowy. Art. 17 dotyczy umów na odległość zawieranych środkami komunikacji elektronicznej."},

{t:"Umowy konsumenckie (UPK)",q:"Kontakt telefoniczny w celu zawarcia umowy na odległość (art. 20 u.p.k.):",o:[
"na początku rozmowy przedsiębiorca informuje o celu rozmowy",
"przedsiębiorca podaje dane identyfikujące siebie i osobę, w imieniu której telefonuje",
"oświadczenie konsumenta złożone ustnie jest skuteczne, jeżeli przedsiębiorca nagrał rozmowę",
"umowa zawarta ustnie w trakcie rozmowy jest zawsze skuteczna"],c:[0,1],
e:"Art. 20 ust. 1 i 2 u.p.k. Skuteczność wymaga utrwalenia oświadczenia konsumenta na papierze lub trwałym nośniku po otrzymaniu potwierdzenia od przedsiębiorcy (art. 20 ust. 2)."},

{t:"Umowy konsumenckie (UPK)",q:"Potwierdzenie zawarcia umowy na odległość (art. 21 u.p.k.):",o:[
"na trwałym nośniku w rozsądnym czasie po zawarciu, najpóźniej w chwili dostarczenia rzeczy lub przed rozpoczęciem świadczenia usługi",
"w terminie 14 dni od zawarcia umowy",
"tylko na żądanie konsumenta",
"wyłącznie na papierze"],c:[0],e:"Art. 21 ust. 1 u.p.k."},

{t:"Umowy konsumenckie (UPK)",q:"Skutki naruszenia obowiązków informacyjnych w umowach na odległość i poza lokalem:",o:[
"co do zasady naruszenie nie wpływa na ważność umowy",
"konsument nie ponosi nieujawnionych opłat dodatkowych ani kosztów zwrotu rzeczy (art. 23)",
"informacje z art. 12 ust. 1 stają się integralną częścią umowy i można je zmienić tylko za wyraźnym porozumieniem stron (art. 22)",
"przy zamówieniu przez internet brak oznaczenia przycisku „zamówienie z obowiązkiem zapłaty” powoduje, że umowa nie zostaje zawarta"],c:[0,1,2,3],
e:"Art. 24 u.p.k. – ciężar dowodu na przedsiębiorcy. Art. 17 ust. 4 u.p.k. Wszystkie cztery odpowiedzi są poprawne."},

{t:"Umowy konsumenckie (UPK)",q:"Prawo odstąpienia od umowy zawartej na odległość lub poza lokalem:",o:[
"przysługuje w terminie 14 dni bez podania przyczyny",
"do zachowania terminu konieczne jest doręczenie oświadczenia przedsiębiorcy przed jego upływem",
"wymaga skorzystania ze wzoru formularza z załącznika do ustawy",
"wymaga zgody przedsiębiorcy"],c:[0],
e:"Art. 27, 30 u.p.k. Oświadczenie można złożyć w dowolnej formie, a wzór jest tylko ułatwieniem. Art. 30 – wystarczy WYSŁANIE oświadczenia przed upływem terminu."},

{t:"Umowy konsumenckie (UPK)",q:"Konsument nie został poinformowany o prawie odstąpienia:",o:[
"prawo odstąpienia wygasa po upływie 12 miesięcy od upływu podstawowego terminu",
"prawo odstąpienia wygasa po upływie 12 miesięcy od zawarcia umowy",
"konsument może odstąpić bez ograniczenia czasowego",
"konsument nie odpowiada za zmniejszenie wartości rzeczy wskutek korzystania z niej ponad potrzebę stwierdzenia jej charakteru, cech i funkcjonowania"],c:[0,3],
e:"Art. 29 ust. 1 i art. 34 ust. 4 in fine u.p.k."},

{t:"Umowy konsumenckie (UPK)",q:"Termin do odstąpienia od umowy, w wykonaniu której przedsiębiorca wydaje rzecz, będąc zobowiązanym do przeniesienia jej własności, biegnie co do zasady od:",o:[
"objęcia rzeczy w posiadanie przez konsumenta (lub wskazaną przez niego osobę inną niż przewoźnik)",
"zawarcia umowy",
"wysłania rzeczy przez przedsiębiorcę",
"zapłaty ceny"],c:[0],
e:"Art. 28 u.p.k. Od zawarcia umowy biegnie termin przy umowach o świadczenie usług."},

{t:"Umowy konsumenckie (UPK)",q:"Umowę zawarto podczas nieumówionej wizyty przedsiębiorcy w miejscu zamieszkania konsumenta. Termin do odstąpienia (wg notatek – art. 27 ust. 2 u.p.k.) wynosi:",o:["14 dni","30 dni","12 miesięcy","7 dni"],c:[1],
e:"Przy nieumówionej wizycie albo wycieczce termin wydłuża się do 30 dni."},

{t:"Umowy konsumenckie (UPK)",q:"Skutki odstąpienia od umowy zawartej na odległość lub poza lokalem:",o:[
"umowę uważa się za niezawartą",
"przedsiębiorca zwraca wszystkie płatności, w tym koszty dostarczenia rzeczy, niezwłocznie, nie później niż w 14 dni od otrzymania oświadczenia",
"koszty zwrotu rzeczy ponosi co do zasady przedsiębiorca",
"przedsiębiorca może zatrzymać koszty pierwotnego dostarczenia rzeczy, jeżeli konsument nie podał przyczyny odstąpienia"],c:[0,1],
e:"Art. 31, 32 u.p.k. Bezpośrednie koszty zwrotu rzeczy co do zasady ponosi konsument (art. 34). Zwrotowi podlegają wszystkie płatności, w tym koszty dostarczenia, a konsument nie musi podawać przyczyny. Notatki: przedsiębiorca może jednak wstrzymać się ze zwrotem do czasu otrzymania rzeczy."},

{t:"Umowy konsumenckie (UPK)",q:"Konsument zażądał rozpoczęcia świadczenia usługi przed upływem terminu do odstąpienia, a potem odstąpił (art. 35 u.p.k.):",o:[
"ma obowiązek zapłaty za świadczenia spełnione do chwili odstąpienia",
"kwotę oblicza się proporcjonalnie do zakresu spełnionego świadczenia, z uwzględnieniem ceny",
"jeżeli cena jest nadmierna, konsument nie płaci nic",
"traci prawo odstąpienia z chwilą rozpoczęcia świadczenia"],c:[0,1],
e:"Utrata prawa następuje dopiero po pełnym wykonaniu usługi za wyraźną zgodą poinformowanego konsumenta (art. 38). Przy nadmiernej cenie podstawą jest wartość rynkowa spełnionego świadczenia (art. 35 ust. 2)."},

{t:"Umowy konsumenckie (UPK)",q:"Umowy dodatkowe po odstąpieniu od umowy głównej (art. 37 u.p.k.):",o:[
"wygasają, jeżeli świadczenie jest spełniane przez przedsiębiorcę lub osobę trzecią na podstawie porozumienia z przedsiębiorcą",
"wygasają wszystkie umowy konsumenta związane funkcjonalnie z przedmiotem umowy głównej, zawarte z kimkolwiek",
"umowa dodatkowa zawarta z osobą trzecią wygasa dopiero po jej wypowiedzeniu przez konsumenta",
"konsument ponosi wszystkie koszty związane z ich wygaśnięciem"],c:[0],
e:"Konsument nie ponosi kosztów, z wyjątkiem tych z art. 33, 34 ust. 2 i 35. Bez porozumienia osoby trzeciej z przedsiębiorcą (np. inny sklep) umowa nie wygasa. Umowy dodatkowe wygasają z mocy prawa w chwili odstąpienia; przedsiębiorca informuje osobę trzecią."},

{t:"Umowy konsumenckie (UPK)",q:"Prawo odstąpienia (art. 38 u.p.k.) NIE przysługuje m.in. przy umowie, której przedmiotem jest:",o:[
"rzecz wyprodukowana według specyfikacji konsumenta",
"rzecz ulegająca szybkiemu zepsuciu",
"prenumerata czasopisma",
"umowa zawarta w drodze aukcji publicznej"],c:[0,1,3],
e:"Wyłączenie dotyczy dostarczania dzienników i czasopism Z WYJĄTKIEM umowy o prenumeratę – przy prenumeracie prawo odstąpienia przysługuje."},

{t:"Umowy konsumenckie (UPK)",q:"Wskaż przypadki, w których konsument zachowuje prawo odstąpienia:",o:[
"przedsiębiorca wezwany do pilnej naprawy wykonał dodatkowo inne usługi, których konsument nie żądał – co do tych dodatkowych usług",
"płyta z filmem w zapieczętowanym opakowaniu, które otwarto po dostarczeniu",
"usługa w pełni wykonana za wyraźną zgodą konsumenta poinformowanego o utracie prawa odstąpienia",
"zwykła umowa sprzedaży rzeczy ruchomej zawarta przez internet"],c:[0,3],
e:"Art. 38 pkt 8 in fine – prawo zachowane co do dodatkowych usług. Nagrania otwarte po dostarczeniu (pkt 9) i w pełni wykonana usługa (pkt 1) – brak prawa."},

{t:"Umowy konsumenckie (UPK)",q:"Złagodzone obowiązki z art. 16 u.p.k. (umowa poza lokalem) dotyczą sytuacji, gdy:",o:[
"wynagrodzenie nie przekracza 600 zł",
"konsument zażądał usługi naprawy lub konserwacji",
"strony natychmiast wykonują swoje zobowiązania",
"umowę zawarto na odległość"],c:[0,1,2],
e:"Wszystkie trzy przesłanki łącznie; dotyczy umów poza lokalem."},

/* ===================== FORMA ===================== */
{t:"Forma umów",q:"Forma dokumentowa:",o:[
"wymaga złożenia oświadczenia w postaci dokumentu – nośnika informacji umożliwiającego zapoznanie się z jej treścią",
"wymaga własnoręcznego podpisu",
"oświadczenie opatrzone podpisem zaufanym to forma dokumentowa, a nie elektroniczna",
"zastrzeżona pod rygorem nieważności nie może zostać spełniona e-mailem"],c:[0,2],
e:"Art. 77² i 77³ k.c. Ustawa wymaga jedynie możliwości ustalenia osoby składającej oświadczenie, a nie podpisu. E-mail jest dokumentem (nośnikiem informacji), więc może spełnić formę dokumentową."},

{t:"Forma umów",q:"Forma elektroniczna:",o:[
"wymaga kwalifikowanego podpisu elektronicznego",
"jest równoważna formie aktu notarialnego",
"wystarcza do niej podpis zaufany lub osobisty",
"jest pojęciem szerszym niż „postać elektroniczna”"],c:[0],
e:"Tylko podpis kwalifikowany jest odpowiednikiem podpisu własnoręcznego. „Postać elektroniczna” (66¹) jest szersza od formy elektronicznej. Forma elektroniczna jest równoważna formie PISEMNEJ, a nie notarialnej."},

{t:"Forma umów",q:"Do zawarcia umowy w formie pisemnej (art. 78 k.c.) wystarcza:",o:[
"wymiana dokumentów obejmujących treść oświadczeń woli, z których każdy jest podpisany przez jedną ze stron",
"wymiana dokumentów, z których każdy obejmuje treść oświadczenia woli jednej ze stron i jest przez nią podpisany",
"wyłącznie podpisanie przez obie strony jednego dokumentu",
"wymiana niepodpisanych skanów"],c:[0,1],e:"Art. 78 k.c."},

{t:"Forma umów",q:"Art. 73 k.c.:",o:[
"przy formie pisemnej, dokumentowej albo elektronicznej czynność bez zachowania formy jest nieważna tylko wtedy, gdy ustawa przewiduje rygor nieważności",
"przy innej formie szczególnej (np. akcie notarialnym) czynność bez zachowania formy jest nieważna, chyba że formę zastrzeżono jedynie dla wywołania określonych skutków",
"forma pisemna zastrzeżona w ustawie jest zawsze formą pod rygorem nieważności",
"forma szczególna nigdy nie ma charakteru ad eventum"],c:[0,1],
e:"Z art. 73 § 2 zd. 2 wynika, że forma szczególna może mieć charakter ad eventum, jeśli ustawa tak stanowi."},

{t:"Forma umów",q:"Niezachowanie formy pisemnej zastrzeżonej dla celów dowodowych (art. 74 k.c.) – dowód ze świadków lub przesłuchania stron na fakt dokonania czynności jest mimo to dopuszczalny, gdy:",o:[
"sąd uzna to za celowe dla wyjaśnienia sprawy",
"żąda tego przedsiębiorca w sporze z konsumentem",
"fakt dokonania czynności jest uprawdopodobniony za pomocą dokumentu",
"żąda tego konsument w sporze z przedsiębiorcą"],c:[2,3],
e:"Art. 74 § 2 k.c. – uprawnienie przysługuje konsumentowi, nie przedsiębiorcy. Między przedsiębiorcami w ogóle nie ma ograniczeń (§ 4). Art. 74 § 2 nie przewiduje dopuszczenia dowodu z uwagi na „celowość” – tylko zgoda obu stron, żądanie konsumenta albo uprawdopodobnienie dokumentem."},

{t:"Forma umów",q:"Umowę zawarto w formie pisemnej (ani ustawa, ani umowa nie zastrzegają innej formy dla czynności następczych). Odstąpienie od niej wymaga:",o:[
"formy pisemnej","formy dokumentowej","formy aktu notarialnego","dowolnej formy"],c:[1],
e:"Art. 77 § 2 k.c.: rozwiązanie za zgodą stron, odstąpienie i wypowiedzenie umowy zawartej w formie pisemnej, dokumentowej albo elektronicznej → forma dokumentowa."},

{t:"Forma umów",q:"Umowę zawarto w formie aktu notarialnego (wymaganej ustawą). Zgodnie z art. 77 k.c.:",o:[
"jej zmiana wymaga formy aktu notarialnego",
"jej rozwiązanie za zgodą obu stron wymaga takiej formy, jaką ustawa lub strony przewidziały do jej zawarcia",
"odstąpienie od niej wymaga formy aktu notarialnego",
"jej wypowiedzenie wymaga formy aktu notarialnego"],c:[0,1],
e:"Art. 77 § 1 (zmiana – forma równoważna) i § 3 (rozwiązanie – forma zawarcia; odstąpienie i wypowiedzenie – pismo). Do odstąpienia i wypowiedzenia wystarczy pismo (77 § 3)."},

{t:"Forma umów",q:"Pismo potwierdzające (art. 77¹ k.c.):",o:[
"dotyczy umów zawartych między przedsiębiorcami bez zachowania formy pisemnej (lub dokumentowej)",
"druga strona może się sprzeciwić w dowolnym terminie i w dowolnej formie",
"stosuje się je także w obrocie konsumenckim",
"może zmieniać essentialia negotii, jeżeli druga strona nie zaprotestuje"],c:[0],
e:"Tylko obrót profesjonalny; zmiany nie mogą być istotne. Przy formie dokumentowej sprzeciw w dokumencie (§ 2). Sprzeciw musi być niezwłoczny i na piśmie (przy formie dokumentowej – w dokumencie)."},

{t:"Forma umów",q:"Data pewna (art. 81 k.c.):",o:[
"w razie stwierdzenia czynności w dokumencie urzędowym – od daty dokumentu urzędowego",
"w razie śmierci jednej z osób podpisanych na dokumencie – od daty śmierci tej osoby",
"przy podpisaniu dokumentu podpisem zaufanym – od daty złożenia podpisu",
"polega na urzędowym poświadczeniu podpisu"],c:[0,1],
e:"Poświadcza się datę, nie podpis – to odróżnia datę pewną od podpisu notarialnie poświadczonego. Ustawa wymienia kwalifikowany elektroniczny znacznik czasu, nie podpis zaufany."},

{t:"Forma umów",q:"Które sytuacje opisują skutek ad eventum?",o:[
"najem lokalu na czas dłuższy niż rok bez formy pisemnej – umowę poczytuje się za zawartą na czas nieoznaczony (art. 660 k.c.)",
"umowa przenosząca własność nieruchomości bez aktu notarialnego",
"umowa dostawy niestwierdzona pismem w sporze z udziałem konsumenta",
"forma zastrzeżona jedynie dla wywołania określonych skutków czynności prawnej"],c:[0,3],
e:"Ad eventum: umowa ważna, ale bez skutku, którego strony chciały. Brak aktu przy nieruchomości → nieważność (ad solemnitatem). Dostawa → ad probationem."},

{t:"Forma umów",q:"Forma pod rygorem nieważności – wskaż poprawne przykłady:",o:[
"umowa zobowiązująca do przeniesienia własności nieruchomości bez aktu notarialnego (art. 158 k.c.)",
"umowa dowodowa – na piśmie pod rygorem nieważności albo ustnie przed sądem",
"umowa dostawy niestwierdzona pismem",
"najem pomieszczenia na dłużej niż rok zawarty ustnie"],c:[0,1],
e:"Art. 158 w zw. z 73 § 2 k.c.; art. 458⁹ § 2 k.p.c. Dostawa – ad probationem; najem – ad eventum."},

{t:"Forma umów",q:"Forma sądowa i podpis notarialnie poświadczony:",o:[
"przy podpisie notarialnie poświadczonym notariusz nie bada zgodności umowy z prawem, a jedynie poświadcza złożenie podpisów",
"forma sądowa polega na złożeniu podpisów w obecności sędziego, bez sporządzania protokołu",
"forma sądowa jest odmianą formy aktu notarialnego",
"akt notarialny jest formą słabszą od podpisu notarialnie poświadczonego"],c:[0],
e:"Forma sądowa nie jest formą notarialną. Akt notarialny jest formą najsilniejszą spośród notarialnych. Forma sądowa polega na wpisaniu czynności do protokołu sądowego."},

/* ===================== RODZAJE I TREŚĆ UMÓW ===================== */
{t:"Rodzaje i treść umów",q:"Umowa wzajemna:",o:[
"to umowa, w której obie strony zobowiązują się tak, że świadczenie jednej ma być odpowiednikiem świadczenia drugiej",
"wymaga ekwiwalentności ocenianej obiektywnie, według wartości rynkowej",
"granicę subiektywnej ekwiwalentności wyznacza instytucja wyzysku",
"każda umowa dwustronnie zobowiązująca jest umową wzajemną"],c:[0,2],
e:"Art. 487 § 2 k.c. Ekwiwalentność subiektywna (sprzedaż za pół ceny nadal jest wzajemna). Umowa wzajemna to podzbiór umów dwustronnie zobowiązujących."},

{t:"Rodzaje i treść umów",q:"Art. 488 i 496 k.c.:",o:[
"świadczenia wzajemne powinny być spełnione jednocześnie, chyba że z umowy, ustawy, orzeczenia sądu lub decyzji organu wynika obowiązek wcześniejszego świadczenia",
"przy świadczeniach jednoczesnych każda strona może powstrzymać się ze świadczeniem, dopóki druga nie zaoferuje świadczenia wzajemnego",
"jednoczesność świadczeń jest bezwzględną przesłanką uznania umowy za wzajemną",
"po odstąpieniu od umowy wzajemnej prawo zatrzymania przysługuje wyłącznie stronie, która odstąpiła"],c:[0,1],
e:"Jednoczesność nie jest przesłanką bezwzględną. Kwalifikacja umowy jako wzajemnej (np. kredytu) decyduje o stosowaniu art. 487 i n., w tym 496. Art. 496: prawo zatrzymania przysługuje KAŻDEJ ze stron."},

{t:"Rodzaje i treść umów",q:"Umowy realne:",o:[
"do ich zawarcia oprócz oświadczeń woli potrzebne jest inne zdarzenie, np. wydanie rzeczy",
"przykładem jest umowa sprzedaży",
"bez dodatkowego zdarzenia umowa nie jest zawarta, mimo złożenia oświadczeń woli",
"klauzula zadatkowa ma charakter realny"],c:[0,2,3],
e:"Sprzedaż jest konsensualna (solo consensu). Zadatek musi być dany przy zawarciu umowy."},

{t:"Rodzaje i treść umów",q:"Przyporządkuj kauzy – wskaż zdania prawdziwe:",o:[
"causa cavendi – zabezpieczenie (poręczenie, zastaw, hipoteka, przewłaszczenie na zabezpieczenie)",
"causa solvendi – zwolnienie się z długu (np. zapłata)",
"causa donandi – np. umowa sprzedaży",
"causa obligandi vel acquirendi – nabycie prawa lub innej korzyści (np. sprzedaż)"],c:[0,1,3],
e:"Causa donandi to nieodpłatne przysporzenie (darowizna)."},

{t:"Rodzaje i treść umów",q:"Warunek, termin, umowy nazwane:",o:[
"warunek to zdarzenie przyszłe i niepewne",
"termin to zdarzenie przyszłe i pewne",
"ziszczenie się warunku ma z mocy ustawy moc wsteczną",
"umową nazwaną jest każda umowa, której nazwa pojawia się w jakiejkolwiek ustawie"],c:[0,1],
e:"Art. 90 k.c. – ziszczenie warunku nie ma mocy wstecznej, chyba że inaczej zastrzeżono. Sama nazwa umowy w ustawie nie czyni jej nazwaną, jeśli ustawa nie reguluje jej essentialia negotii. Notatki: są umowy, których nazwy padają w ustawach, ale ustawy nie regulują ich essentialia negotii – to nie są umowy nazwane."},

{t:"Rodzaje i treść umów",q:"Elementy treści czynności prawnej:",o:[
"essentialia negotii – bez nich umowa nie dochodzi do skutku",
"accidentalia negotii – istotne podmiotowo, np. warunek, termin, kara umowna",
"naturalia negotii – w razie ich nieuregulowania wchodzą przepisy dyspozytywne",
"accidentalia negotii zostają wolą stron podniesione do rangi postanowień istotnych umowy"],c:[0,1,2,3],
e:"Naturalia są przedmiotowo nieistotne – ich brak nie wpływa na ważność. Wszystkie cztery odpowiedzi są poprawne."},

{t:"Rodzaje i treść umów",q:"Umowy rezultatu i starannego działania, losowe:",o:[
"umowa o dzieło jest umową rezultatu",
"w umowie starannego działania rezultat nie jest objęty treścią umowy",
"umowa sprzedaży jest przykładem umowy losowej",
"umowa zlecenia jest umową rezultatu"],c:[0,1],
e:"Zlecenie to typowa umowa starannego działania. Przykład umowy losowej to ubezpieczenie; sprzedaż nie jest umową losową."},

/* ===================== KLAUZULE UMOWNE ===================== */
{t:"Klauzule umowne",q:"Klauzula prorogacyjna – umowa o jurysdykcję sądów polskich (art. 1104 k.p.c.):",o:[
"strony mogą umówić się na piśmie o poddanie spraw o prawa majątkowe jurysdykcji sądów polskich",
"poddanie może nastąpić także przez wdanie się w spór co do istoty, jeżeli pozwany nie podniesie zarzutu braku jurysdykcji",
"pozwala poddać sądom polskim także sprawy należące do wyłącznej jurysdykcji sądów państwa obcego",
"może być zawarta ustnie"],c:[0,1],e:"Art. 1104 § 1–3 k.p.c. Wymagana forma pisemna. Art. 1104 § 3 – w takich sprawach przepisów § 1 i 2 nie stosuje się."},

{t:"Klauzule umowne",q:"Klauzula derogacyjna – wyłączenie jurysdykcji sądów polskich (art. 1105 k.p.c.):",o:[
"co do zasady nie może dotyczyć spraw z umów zawartych przez konsumenta mającego miejsce zamieszkania lub zwykłego pobytu w Polsce",
"w sprawach z zakresu prawa pracy jest dopuszczalna, jeżeli zawarto ją po powstaniu sporu",
"umowa, na podstawie której tylko jedna strona może wytoczyć powództwo przed sądy obce, nie wyłącza jurysdykcji sądów polskich",
"może dotyczyć spraw należących do wyłącznej jurysdykcji sądów polskich"],c:[0,1,2],
e:"Art. 1105 § 2–3 k.p.c. Wyjątek dla konsumenta: dopuszczalna umowa pozwalająca KONSUMENTOWI pozwać przed sąd obcy (§ 4)."},

{t:"Klauzule umowne",q:"Prorogatio fori (art. 46 k.p.c.):",o:[
"może być zawarta ustnie, jeżeli spór już powstał",
"sąd wskazany w umowie jest wyłącznie właściwy, jeżeli strony nie postanowiły inaczej (lub powód nie złożył pozwu w e-postępowaniu upominawczym)",
"pozwala zmienić także właściwość wyłączną",
"dotyczy sądu pierwszej instancji, który według ustawy nie jest miejscowo właściwy"],c:[1,3],
e:"Art. 46 § 2 k.p.c. – strony nie mogą zmieniać właściwości wyłącznej. Art. 46 § 1 – zawsze na piśmie."},

{t:"Klauzule umowne",q:"Zapis na sąd polubowny (art. 1161 k.p.c.):",o:[
"musi wskazywać przedmiot sporu lub stosunek prawny, z którego spór wyniknął lub może wyniknąć",
"bezskuteczne są postanowienia naruszające równość stron, np. uprawniające tylko jedną stronę do wytoczenia powództwa przed sądem polubownym",
"jeżeli wskazuje stały sąd polubowny, wiąże co do zasady regulamin obowiązujący w dacie zawarcia zapisu",
"sąd państwowy uwzględnia go z urzędu"],c:[0,1],
e:"Regulamin z daty wniesienia pozwu (§ 3). Zapis uwzględnia się tylko na zarzut zgłoszony przed wdaniem się w spór co do istoty."},

{t:"Klauzule umowne",q:"Zapis na sąd polubowny w sporach z konsumentem (art. 1164¹ k.p.c.):",o:[
"może być sporządzony tylko po powstaniu sporu",
"wymaga zachowania formy pisemnej",
"musi wskazywać pod rygorem nieważności, że stronom znane są skutki zapisu",
"może być zawarty w wymianie pism lub oświadczeń za pomocą środków porozumiewania się na odległość (art. 1162 § 2)"],c:[0,1,2],
e:"Art. 1164¹ § 1 zd. 2 wyłącza art. 1162 § 2."},

{t:"Klauzule umowne",q:"Zapis na sąd polubowny w umowie (statucie) spółki handlowej, dotyczący sporów ze stosunku spółki, wiąże:",o:[
"spółkę","jej wspólników","organy spółki i ich członków","wierzycieli spółki"],c:[0,1,2],
e:"Art. 1163 § 1 k.p.c. – podmiotowe rozszerzenie zapisu na osoby, które nie musiały być stronami umowy."},

{t:"Klauzule umowne",q:"Zapis na sąd polubowny – skutki procesowe:",o:[
"pozwany musi podnieść zarzut zapisu przed wdaniem się w spór co do istoty sprawy",
"w sprawie zawisłej przed sądem strony mogą poddać spór sądowi polubownemu aż do prawomocnego rozstrzygnięcia",
"po umorzeniu postępowania na zgodny wniosek stron przedawnienie objętych zapisem roszczeń biegnie od nowa od uprawomocnienia się postanowienia o umorzeniu",
"sąd odrzuca pozew z urzędu, gdy dowie się o zapisie"],c:[0,1,2],e:"Art. 1161¹ k.p.c."},

{t:"Klauzule umowne",q:"Umowa dowodowa (art. 458⁹ k.p.c.):",o:[
"polega na wyłączeniu określonych dowodów w sprawie z określonego stosunku prawnego powstałego na podstawie umowy",
"może pozytywnie wskazywać, że dopuszczalne są wyłącznie określone dowody",
"może być zawarta w dowolnej formie",
"zawarta pod warunkiem lub z zastrzeżeniem terminu jest nieważna"],c:[0,3],
e:"Strony mogą tylko WYŁĄCZYĆ określone dowody (nie wszystkie). Dotyczy postępowania gospodarczego i stosunków umownych. Forma: na piśmie pod rygorem nieważności albo ustnie przed sądem (§ 2)."},

{t:"Klauzule umowne",q:"Skutki umowy dowodowej:",o:[
"sąd nie dopuści z urzędu dowodu wyłączonego umową",
"objęcie umową dowodu przeprowadzonego przed jej zawarciem pozbawia go mocy dowodowej",
"fakty, które miały być wykazane wyłączonymi dowodami, uznaje się za nieudowodnione bez względu na twierdzenia stron",
"zarzut nieważności umowy dowodowej można podnieść w każdym stanie sprawy"],c:[0],
e:"Art. 458⁹ § 4–7 k.p.c.: § 5 – dowód przeprowadzony wcześniej zachowuje moc; § 4 – zarzut najpóźniej na posiedzeniu, na którym powołano się na umowę (albo w następnym piśmie). Art. 458⁹ § 7 – sąd może je ustalić na podstawie twierdzeń stron, biorąc pod uwagę całokształt okoliczności."},

{t:"Klauzule umowne",q:"Klauzula salwatoryjna a art. 58 § 3 k.c. (V CSK 81/05):",o:[
"zastrzeżenie klauzuli salwatoryjnej nie wyłącza stosowania art. 58 § 3 in fine k.c.",
"art. 58 § 3 k.c. jest dyspozytywny, więc klauzula salwatoryjna wyłącza jego stosowanie",
"gdy nieważnością dotknięte są essentialia negotii, cała czynność prawna jest nieważna",
"klauzula salwatoryjna zawsze utrzymuje umowę w mocy, choćby bez nieważnych postanowień nie zostałaby zawarta"],c:[0,2],
e:"Instrumenty pełnią różne funkcje. Najpierw bada się, czy bez nieważnych postanowień czynność zostałaby dokonana, i dopiero wtedy realizuje się wolę z klauzuli. Art. 58 § 3 ma charakter bezwzględnie obowiązujący i strony nie mogą go wyłączyć."},

{t:"Klauzule umowne",q:"Klauzula merger (integralności):",o:[
"stwierdza, że umowa wyczerpuje ustalenia stron",
"zastępuje wcześniejsze ustalenia stron dotyczące tego przedmiotu",
"wyłącza możliwość przelewu wierzytelności",
"rozstrzyga, która wersja językowa umowy jest wiążąca"],c:[0,1],
e:"Zakaz cesji to pactum de non cedendo, a wybór wersji językowej to klauzula języka umowy."},

{t:"Klauzule umowne",q:"Pactum de non cedendo:",o:[
"wierzyciel może bez zgody dłużnika przenieść wierzytelność, chyba że sprzeciwiałoby się to ustawie, zastrzeżeniu umownemu albo właściwości zobowiązania (art. 509 § 1)",
"według prof. Szczurowskiego przelew wbrew zastrzeżeniu jest nieważny",
"koncepcja odszkodowawcza powołuje się na art. 57 § 1 k.c. (zakaz wyłączenia zbywalności prawa czynnością prawną)",
"wraz z wierzytelnością nie przechodzi na nabywcę roszczenie o zaległe odsetki"],c:[0,1,2],
e:"Art. 509 § 2 – przechodzą wszelkie prawa związane, w szczególności roszczenie o zaległe odsetki."},

{t:"Klauzule umowne",q:"Zadatek (art. 394 k.c.), w braku odmiennego zastrzeżenia lub zwyczaju:",o:[
"w razie niewykonania umowy przez jedną stronę druga może bez wyznaczania terminu dodatkowego odstąpić i otrzymany zadatek zachować",
"strona, która dała zadatek, może w razie niewykonania umowy przez drugą stronę żądać sumy dwukrotnie wyższej",
"w razie rozwiązania umowy zadatek zachowuje strona, która go otrzymała",
"gdy niewykonanie nastąpiło wskutek okoliczności, za które odpowiadają obie strony, zadatek podlega zwrotowi"],c:[0,1,3],
e:"Art. 394 § 3 – przy rozwiązaniu umowy zadatek się zwraca, a obowiązek zapłaty podwójnej sumy odpada."},

{t:"Klauzule umowne",q:"Zadatek a zaliczka:",o:[
"zaliczka jest zaliczana na poczet wynagrodzenia i nie pełni funkcji gwarancyjnej",
"w razie wykonania umowy zadatek zalicza się na poczet świadczenia strony, która go dała",
"jeżeli zaliczenie zadatku nie jest możliwe, ulega on zwrotowi",
"zadatek, w przeciwieństwie do zaliczki, pełni funkcję gwarancyjną"],c:[0,1,2,3],e:"Art. 394 § 2 k.c. Wszystkie cztery odpowiedzi są poprawne."},

{t:"Klauzule umowne",q:"Klauzula „repów” (representations and warranties):",o:[
"oświadczenie wiedzy co do stanu faktycznego może stanowić podstawę błędu co do treści czynności prawnej (art. 84 k.c.)",
"nieprawdziwy rep może rodzić odpowiedzialność odszkodowawczą",
"rep może dotyczyć wyłącznie stanu prawnego, nigdy stanu faktycznego",
"rep jest wyłącznie oświadczeniem wiedzy i nigdy nie stanowi elementu czynności prawnej"],c:[0,1],
e:"Rep jest oświadczeniem wiedzy, ale stanowi element czynności prawnej. Repy typowo dotyczą stanu faktycznego (np. pojazd bez wad)."},

{t:"Klauzule umowne",q:"Klauzula kasatoryjna (lex commissoria) a art. 492 k.c.:",o:[
"przy umowie wzajemnej, gdy prawo odstąpienia zastrzeżono na wypadek niewykonania w terminie ściśle określonym, strona może odstąpić bez wyznaczania terminu dodatkowego",
"to samo dotyczy sytuacji, gdy świadczenie po terminie nie miałoby dla strony znaczenia ze względu na cel umowy wiadomy stronie w zwłoce",
"art. 492 k.c. wymaga zwłoki drugiej strony",
"wystarczy samo opóźnienie, nawet niezawinione"],c:[0,1,2],e:"Art. 492 k.c. mówi wprost o „zwłoce”."},

{t:"Klauzule umowne",q:"Umowne prawo odstąpienia (art. 395 k.c.):",o:[
"musi być zastrzeżone z oznaczeniem terminu",
"wykonuje się je przez wytoczenie powództwa o ukształtowanie stosunku prawnego",
"po jego wykonaniu umowa uważana jest za niezawartą",
"za korzystanie z rzeczy w okresie przed odstąpieniem nie należy się wynagrodzenie"],c:[0,2],
e:"Art. 395 § 2 zd. 3 – za usługi i korzystanie z rzeczy należy się odpowiednie wynagrodzenie. Bez terminu zastrzeżenie jest nieważne. Umowne prawo odstąpienia wykonuje się przez oświadczenie złożone drugiej stronie."},

{t:"Klauzule umowne",q:"Wykonanie zastępcze (art. 480 k.c.) i klauzula zastępczego wykonania:",o:[
"w razie zwłoki dłużnika w zobowiązaniu czynienia wierzyciel może żądać upoważnienia sądu do wykonania czynności na koszt dłużnika",
"w wypadkach nagłych wierzyciel może wykonać czynność bez upoważnienia sądu",
"wierzyciel korzystający z wykonania zastępczego traci roszczenie o naprawienie szkody",
"według notatek art. 480 jest dyspozytywny, ale klauzula musi być precyzyjna, by dłużnik znał ryzyko"],c:[0,1,3],
e:"Art. 480 § 1–3 – zawsze „zachowując roszczenie o naprawienie szkody”."},

{t:"Klauzule umowne",q:"Klauzula fikcji doręczenia (doręczenia na dotychczasowy adres uznaje się za skuteczne):",o:[
"strona może się bronić, wykazując, że nie miała możliwości zapoznania się z oświadczeniem",
"naruszenie umownego obowiązku informowania o zmianie adresu może rodzić odpowiedzialność z art. 471 k.c.",
"klauzula wyłącza ustawową regułę, że oświadczenie jest złożone, gdy adresat mógł zapoznać się z jego treścią",
"dowód przeciwny jest niedopuszczalny"],c:[0,1],
e:"Według notatek ustawa nie przewiduje tu wyjątku – fikcja jest bezskuteczna, gdy strona wykaże brak możliwości zapoznania się."},

{t:"Klauzule umowne",q:"Klauzula waloryzacyjna:",o:[
"ma szczególne znaczenie między przedsiębiorcami, bo nie mogą oni żądać waloryzacji sądowej (art. 358¹ § 4 k.c.)",
"odwołuje się do innego miernika wartości niż pieniądz",
"jest niedopuszczalna w obrocie dwustronnie gospodarczym",
"jest przejawem zasady nominalizmu"],c:[0,1],
e:"Przykład miernika: wielokrotność wynagrodzenia minimalnego. Waloryzacja jest wyjątkiem od nominalizmu, a nie jego przejawem."},

{t:"Klauzule umowne",q:"Które klauzule mają charakter procesowy?",o:[
"klauzula prorogacyjna","klauzula arbitrażowa","klauzula dowodowa","klauzula prorogatio fori"],c:[0,1,2,3],
e:"Procesowe: prorogacyjna, derogacyjna, prorogatio fori, arbitrażowa, mediacyjna, dowodowa. Wszystkie cztery odpowiedzi są poprawne. Klauzula merger ma natomiast charakter materialny (wykładnia treści umowy)."},

{t:"Klauzule umowne",q:"Klauzula mediacyjna:",o:[
"przewiduje polubowną próbę zakończenia sporu przed wszczęciem sporu sądowego",
"zamyka drogę sądową",
"jest możliwa wyłącznie w umowach z konsumentem",
"umowa o mediację zawiesza bieg przedawnienia objętych nią roszczeń na czas mediacji"],c:[0,3],
e:"Nie zamyka drogi sądowej. Art. 121 pkt 5 k.c. – zawieszenie przedawnienia przez czas trwania mediacji."},

{t:"Klauzule umowne",q:"Klauzula wzajemnego potrącenia:",o:[
"bez niej potrącenie jest niedopuszczalne",
"potrącenie ustawowe jest jednostronną czynnością potrącającego",
"umowne uregulowanie potrącenia jest niedopuszczalne, bo art. 498 k.c. jest bezwzględnie obowiązujący",
"potrącenie wymaga zawsze zgody drugiej strony"],c:[1],
e:"Potrącenie ustawowe (art. 498) nie wymaga umowy ani zgody; klauzula jest fakultatywna. Strony mogą zawrzeć klauzulę wzajemnego potrącenia (potrącenie umowne)."},

/* ===================== WYKONANIE ZOBOWIĄZAŃ ===================== */
{t:"Wykonanie zobowiązań",q:"Zasada walutowości (art. 358 k.c.) – zobowiązanie wykonywane w Polsce wyrażone w walucie obcej:",o:[
"dłużnik może spełnić świadczenie w walucie polskiej, chyba że ustawa, orzeczenie sądowe będące źródłem zobowiązania lub czynność prawna zastrzega wyłącznie walutę obcą",
"wartość waluty określa się wg kursu z dnia zawarcia umowy",
"gdy dłużnik opóźnia się, wierzyciel może żądać spełnienia w walucie polskiej wg kursu średniego NBP z dnia zapłaty",
"gdy dłużnik opóźnia się, to on wybiera dzień, z którego kurs zastosować"],c:[0,2],e:"Art. 358 § 1–3 k.c. Art. 358 § 2 – kurs średni NBP z dnia wymagalności roszczenia (chyba że zastrzeżono inaczej)."},

{t:"Wykonanie zobowiązań",q:"Sposób wykonania zobowiązania (art. 354–357 k.c.):",o:[
"wierzyciel może żądać osobistego świadczenia dłużnika, gdy wynika to z treści czynności prawnej, z ustawy albo z właściwości świadczenia",
"przy wymagalnej wierzytelności pieniężnej wierzyciel nie może odmówić przyjęcia świadczenia od osoby trzeciej, choćby działała bez wiedzy dłużnika",
"rzeczy oznaczone co do gatunku, bez oznaczonej jakości, należy świadczyć w najwyższej jakości",
"wierzyciel powinien współdziałać przy wykonaniu zobowiązania"],c:[0,1,3],e:"Art. 356 § 1–2, 354 § 2 k.c. Art. 357 – średnia jakość."},

{t:"Wykonanie zobowiązań",q:"Miejsce spełnienia świadczenia (art. 454 k.c.), gdy nie wynika z umowy ani z właściwości zobowiązania:",o:[
"świadczenie niepieniężne – miejsce zamieszkania lub siedziby dłużnika w chwili powstania zobowiązania",
"świadczenie pieniężne – miejsce zamieszkania lub siedziby wierzyciela w chwili spełnienia świadczenia",
"wierzyciel, który zmienił siedzibę po powstaniu zobowiązania, może żądać zapłaty wyłącznie w dawnej siedzibie",
"przy zobowiązaniu związanym z przedsiębiorstwem rozstrzyga miejsce zamieszkania przedsiębiorcy"],c:[0,1],
e:"Art. 454 § 2 – rozstrzyga siedziba przedsiębiorstwa. Świadczy się w aktualnej siedzibie wierzyciela, a on ponosi nadwyżkę kosztów przesłania."},

{t:"Wykonanie zobowiązań",q:"Dług oddawczy i odbiorczy:",o:[
"zobowiązanie pieniężne ma charakter długu oddawczego",
"zobowiązanie niepieniężne ma co do zasady charakter długu odbiorczego",
"przelew bankowy jest spełniony z chwilą obciążenia rachunku dłużnika",
"miejsce wykonania ma znaczenie dla właściwości przemiennej sądu (art. 34 k.p.c.)"],c:[0,1,3],
e:"Świadczenie pieniężne jest spełnione z chwilą uznania rachunku wierzyciela. Jeśli w tym czasie minie termin, dłużnik pozostaje w opóźnieniu."},

{t:"Wykonanie zobowiązań",q:"Termin spełnienia świadczenia nieoznaczony i niewynikający z właściwości zobowiązania (art. 455 k.c.):",o:[
"świadczenie powinno być spełnione niezwłocznie po wezwaniu dłużnika do wykonania",
"„niezwłocznie” oznacza natychmiast, tego samego dnia",
"bez wezwania świadczenie nie staje się wymagalne",
"świadczenie jest wymagalne z chwilą powstania zobowiązania"],c:[0,2],e:"„Niezwłocznie” = bez zbędnej zwłoki, zależnie od okoliczności."},

{t:"Wykonanie zobowiązań",q:"Zaliczenie spełnionego świadczenia przy kilku długach (art. 451 k.c.):",o:[
"dłużnik może wskazać, który dług chce zaspokoić",
"wierzyciel może to, co przypada na poczet wskazanego długu, zaliczyć przede wszystkim na zaległe należności uboczne i zalegające świadczenia główne",
"dłużnik, który przyjął pokwitowanie z zaliczeniem na określony dług, może później żądać zaliczenia na inny dług",
"w braku oświadczeń zalicza się świadczenie na poczet długu najpóźniej wymagalnego"],c:[0,1],
e:"Art. 451 § 3 – na poczet długu wymagalnego, a przy kilku wymagalnych – najdawniej wymagalnego. Art. 451 § 2 – po przyjęciu takiego pokwitowania dłużnik nie może już żądać zaliczenia na inny dług."},

{t:"Wykonanie zobowiązań",q:"Pokwitowanie (art. 466 k.c.):",o:[
"z pokwitowania zapłaty dłużnej sumy wynika domniemanie zapłaty należności ubocznych",
"z pokwitowania świadczenia okresowego wynika domniemanie spełnienia świadczeń okresowych wymagalnych później",
"domniemania z art. 466 są niewzruszalne",
"z pokwitowania należności ubocznych wynika domniemanie zapłaty sumy głównej"],c:[0],e:"To domniemania wzruszalne i działają tylko w kierunkach wskazanych w przepisie. Domniemanie dotyczy świadczeń okresowych wymagalnych WCZEŚNIEJ."},

{t:"Wykonanie zobowiązań",q:"Potrącenie ustawowe (art. 498 k.c.):",o:[
"wymaga, by strony były jednocześnie względem siebie dłużnikami i wierzycielami",
"przedmiotem obu wierzytelności muszą być pieniądze lub rzeczy tej samej jakości oznaczone co do gatunku",
"wskutek potrącenia obie wierzytelności umarzają się do wysokości wierzytelności wyższej",
"wymaga zawarcia umowy o potrącenie"],c:[0,1],e:"Umorzenie następuje do wysokości wierzytelności NIŻSZEJ."},

{t:"Wykonanie zobowiązań",q:"Złożenie przedmiotu świadczenia do depozytu sądowego (art. 467 k.c.) jest dopuszczalne m.in., gdy:",o:[
"dłużnik wskutek okoliczności, za które nie odpowiada, nie wie, kto jest wierzycielem",
"wierzyciel nie ma pełnej zdolności do czynności prawnych ani przedstawiciela uprawnionego do przyjęcia świadczenia",
"powstał spór, kto jest wierzycielem",
"dłużnik nie dysponuje środkami na spełnienie świadczenia"],c:[0,1,2],
e:"Według notatek depozyt jest dopuszczalny tylko w przypadkach przewidzianych przepisem; wymaga postanowienia sądu, który bada wyłącznie, czy podane okoliczności mieszczą się w przepisie."},

{t:"Wykonanie zobowiązań",q:"Zasady wykonywania zobowiązań – wskaż zdania prawdziwe:",o:[
"zasada nominalizmu: zobowiązanie pieniężne od chwili powstania spełnia się przez zapłatę sumy nominalnej, chyba że przepisy szczególne stanowią inaczej",
"zasada realnego wykonania oznacza, że wierzycielowi przysługuje roszczenie o wykonanie zobowiązania nawet po upływie terminu",
"walutowość jest obecnie – przy uwzględnieniu prawa dewizowego – raczej wyjątkiem",
"pacta sunt servanda nie doznaje żadnych wyjątków"],c:[0,1,2],e:"Wyjątkiem od pacta sunt servanda jest m.in. art. 357¹ k.c."},

/* ===================== PRZEDAWNIENIE ===================== */
{t:"Przedawnienie",q:"Zgodnie z art. 117 k.c.:",o:[
"po upływie terminu przedawnienia dłużnik może uchylić się od zaspokojenia roszczenia, chyba że zrzeka się korzystania z zarzutu",
"zrzeczenie się zarzutu przedawnienia przed upływem terminu jest skuteczne, jeżeli nastąpiło na piśmie",
"po upływie terminu nie można domagać się zaspokojenia roszczenia przysługującego przeciwko konsumentowi",
"roszczenie przedawnione wygasa z mocy prawa"],c:[0,2],
e:"Roszczenie przedawnione staje się naturalne (niezaskarżalne), ale nie wygasa. Wobec konsumenta sąd uwzględnia przedawnienie z urzędu (§ 2¹). Zrzeczenie przed upływem terminu jest nieważne, bez względu na formę."},

{t:"Przedawnienie",q:"Terminy przedawnienia (art. 118 k.c.), jeżeli przepis szczególny nie stanowi inaczej:",o:[
"6 lat – termin ogólny",
"3 lata – roszczenia o świadczenia okresowe i roszczenia związane z prowadzeniem działalności gospodarczej",
"koniec terminu przypada na ostatni dzień roku kalendarzowego, chyba że termin jest krótszy niż dwa lata",
"w terminie trzyletnim przedawniają się także roszczenia o świadczenia okresowe niezwiązane z działalnością gospodarczą"],c:[0,1,2,3],e:"Art. 118 k.c. Świadczenia okresowe (np. czynsz) przedawniają się w 3 lata niezależnie od działalności gospodarczej. Wszystkie cztery odpowiedzi są poprawne. Termin ogólny 10 lat obowiązywał przed nowelizacją z 2018 r."},

{t:"Przedawnienie",q:"Roszczenie przedsiębiorcy związane z działalnością gospodarczą stało się wymagalne 15 marca 2024 r. Przedawni się (bez zawieszeń i przerw) z upływem:",o:[
"15 marca 2027 r.","31 grudnia 2027 r.","31 grudnia 2026 r.","15 marca 2030 r."],c:[1],
e:"3 lata → 15.03.2027, a ponieważ termin ma co najmniej 2 lata, koniec przypada na ostatni dzień roku: 31.12.2027."},

{t:"Przedawnienie",q:"Roszczenie z umowy przedwstępnej (termin roczny) – umowa przyrzeczona miała być zawarta 10 maja 2024 r. Przedawnienie upływa:",o:[
"10 maja 2025 r.","31 grudnia 2025 r.","31 grudnia 2024 r.","10 maja 2027 r."],c:[0],
e:"Termin krótszy niż dwa lata – nie przesuwa się go na koniec roku (art. 118 zd. 2)."},

{t:"Przedawnienie",q:"Początek biegu przedawnienia (art. 120 k.c.):",o:[
"od dnia, w którym roszczenie stało się wymagalne",
"gdy wymagalność zależy od czynności uprawnionego – od dnia, w którym roszczenie stałoby się wymagalne, gdyby uprawniony podjął czynność w najwcześniej możliwym terminie",
"roszczenia o zaniechanie – od dnia powstania zobowiązania",
"gdy wierzyciel w ogóle nie wezwał dłużnika do zapłaty, przedawnienie nie biegnie"],c:[0,1],
e:"„Hipotetyczna wymagalność” – brak wezwania nie wstrzymuje biegu przedawnienia. Roszczenia o zaniechanie – od dnia, w którym zobowiązany nie zastosował się do treści roszczenia (120 § 2)."},

{t:"Przedawnienie",q:"Zawieszenie i przerwa biegu przedawnienia:",o:[
"zawezwanie do próby ugodowej powoduje zawieszenie biegu przedawnienia",
"uznanie roszczenia przez dłużnika przerywa bieg przedawnienia",
"po przerwie przedawnienie biegnie dalej, z doliczeniem okresu sprzed przerwy",
"mediacja zawiesza bieg przedawnienia na czas jej trwania"],c:[0,1,3],
e:"Po przerwie termin biegnie od nowa; po zawieszeniu – dalej. Zawezwanie do próby ugodowej zawiesza bieg co do roszczeń objętych wnioskiem (art. 121 pkt 6), a nie przerywa go."},

{t:"Przedawnienie",q:"Uznanie długu:",o:[
"wniosek dłużnika o rozłożenie długu na raty to uznanie niewłaściwe",
"uznanie niewłaściwe przerywa bieg przedawnienia",
"bieg przedawnienia przerywa wyłącznie uznanie właściwe",
"podjęcie przez dłużnika negocjacji co do terminu zapłaty może stanowić uznanie niewłaściwe"],c:[0,1,3],e:"Art. 123 § 1 pkt 2 k.c. obejmuje oba rodzaje uznania."},

{t:"Przedawnienie",q:"Bieg przedawnienia nie rozpoczyna się, a rozpoczęty ulega zawieszeniu (art. 121 k.c.):",o:[
"co do roszczeń dzieci przeciwko rodzicom – przez czas trwania władzy rodzicielskiej",
"co do roszczeń między małżonkami – przez czas trwania małżeństwa",
"gdy z powodu siły wyższej uprawniony nie może dochodzić roszczeń – przez czas trwania przeszkody",
"co do roszczeń objętych wnioskiem o zawezwanie do próby ugodowej – przez czas trwania postępowania pojednawczego"],c:[0,1,2,3],e:"Art. 121 pkt 1, 3, 4 i 6 k.c. – wszystkie cztery odpowiedzi są poprawne. Pamiętaj: wniesienie pozwu to przyczyna PRZERWY (art. 123), a nie zawieszenia."},

{t:"Przedawnienie",q:"Przedawnienie a termin zawity:",o:[
"po upływie terminu zawitego roszczenie wygasa",
"świadczenie spełnione po upływie terminu przedawnienia jest ważne i skuteczne",
"przedawnienie co do zasady uwzględnia się na zarzut dłużnika",
"świadczenie spełnione po przedawnieniu podlega zwrotowi jako nienależne"],c:[0,1,2],
e:"Spełnienie przedawnionego świadczenia jest spełnieniem istniejącego zobowiązania naturalnego – nie ma podstaw do zwrotu."},

{t:"Przedawnienie",q:"Przerwę biegu przedawnienia powoduje (art. 123 k.c.):",o:[
"każda czynność przed sądem lub organem powołanym do rozpoznawania lub egzekwowania roszczeń, przedsięwzięta bezpośrednio w celu dochodzenia, ustalenia, zaspokojenia lub zabezpieczenia roszczenia",
"zawezwanie do próby ugodowej",
"skuteczne wniesienie pozwu",
"wysłanie dłużnikowi przedsądowego wezwania do zapłaty"],c:[0,2],e:"Samo wezwanie do zapłaty nie przerywa biegu przedawnienia. Zawezwanie do próby ugodowej ZAWIESZA bieg przedawnienia (art. 121 pkt 6), a nie przerywa go."},

/* ===================== ODPOWIEDZIALNOŚĆ I ODSETKI ===================== */
{t:"Odpowiedzialność i odsetki",q:"Odpowiedzialność kontraktowa (art. 471 k.c.):",o:[
"opiera się na zasadzie winy, a ciężar wykazania braku winy spoczywa na dłużniku",
"jej przesłankami są niewykonanie lub nienależyte wykonanie zobowiązania, szkoda i adekwatny związek przyczynowy",
"wierzyciel musi udowodnić winę dłużnika",
"stopień winy decyduje o powstaniu odpowiedzialności"],c:[0,1],
e:"Konstrukcja „chyba że” w art. 471 oznacza domniemanie winy dłużnika. Stopień winy nie ma znaczenia dla samego powstania odpowiedzialności."},

{t:"Odpowiedzialność i odsetki",q:"Rozszerzenie i ograniczenie odpowiedzialności dłużnika (art. 473 k.c.):",o:[
"dłużnik może przyjąć odpowiedzialność za niewykonanie z powodu oznaczonych okoliczności, za które z mocy ustawy nie odpowiada (odpowiedzialność gwarancyjna)",
"nieważne jest zastrzeżenie, że dłużnik nie odpowiada za szkodę wyrządzoną wierzycielowi umyślnie",
"można skutecznie wyłączyć odpowiedzialność za szkodę wyrządzoną umyślnie",
"można ograniczyć odpowiedzialność za szkodę wyrządzoną nieumyślnie"],c:[0,1,3],e:"Art. 473 § 1 i 2 k.c."},

{t:"Odpowiedzialność i odsetki",q:"Odpowiedzialność za osoby trzecie (art. 474 k.c.):",o:[
"dłużnik odpowiada jak za własne działanie za osoby, z których pomocą wykonuje zobowiązanie",
"dłużnik odpowiada także za osoby, którym wykonanie zobowiązania powierza",
"zasadą odpowiedzialności dłużnika jest wina w nadzorze nad osobą trzecią",
"dłużnik zwalnia się, wykazując brak winy w wyborze tej osoby"],c:[0,1],
e:"Brak winy w wyborze (culpa in eligendo) zwalnia przy deliktach (art. 429), ale nie przy art. 474. Art. 474 to odpowiedzialność na zasadzie ryzyka; przesłanką jest wina osoby, którą dłużnik się posłużył."},

{t:"Odpowiedzialność i odsetki",q:"Odsetki za opóźnienie (art. 481 k.c.):",o:[
"należą się, choćby wierzyciel nie poniósł żadnej szkody",
"należą się, choćby opóźnienie było następstwem okoliczności, za które dłużnik nie odpowiada",
"należą się wyłącznie w razie zwłoki dłużnika",
"ustawowe odsetki za opóźnienie to stopa referencyjna NBP + 3,5 punktu procentowego"],c:[0,1],
e:"Odsetki należą się nawet wtedy, gdy umowa ich nie przewiduje. Jeżeli wierzytelność jest oprocentowana wyżej, wierzyciel może żądać wyższej stopy. Odsetki za opóźnienie = stopa referencyjna + 5,5 pp. (3,5 pp. to odsetki ustawowe kapitałowe)."},

{t:"Odpowiedzialność i odsetki",q:"Odsetki maksymalne:",o:[
"maksymalne odsetki za opóźnienie to dwukrotność odsetek ustawowych za opóźnienie w stosunku rocznym",
"postanowienia umowne nie mogą wyłączyć ani ograniczyć przepisów o odsetkach maksymalnych za opóźnienie, także przy wyborze prawa obcego",
"zastrzeżenie odsetek wyższych niż maksymalne powoduje nieważność całej umowy",
"maksymalne odsetki kapitałowe to dwukrotność odsetek ustawowych (art. 359 § 2¹)"],c:[0,1,3],
e:"Art. 481 § 2²: przy przekroczeniu należą się odsetki maksymalne, a umowa pozostaje ważna."},

{t:"Odpowiedzialność i odsetki",q:"Opóźnienie i zwłoka:",o:[
"zwłoka to opóźnienie kwalifikowane, wynikające z okoliczności, za które dłużnik odpowiada",
"w razie zwłoki w świadczeniu pieniężnym wierzyciel może żądać wyłącznie odsetek, bez odszkodowania",
"odsetki za opóźnienie wymagają zwłoki dłużnika",
"opóźnienie w świadczeniu niepieniężnym rodzi z mocy ustawy obowiązek zapłaty odsetek"],c:[0],
e:"Art. 481 § 3 k.c. Odsetki dotyczą tylko świadczeń pieniężnych. Art. 481 § 3 – w razie zwłoki wierzyciel może dodatkowo żądać naprawienia szkody na zasadach ogólnych."},

/* ===================== KARA UMOWNA ===================== */
{t:"Kara umowna",q:"Kara umowna (art. 483 k.c.):",o:[
"może być zastrzeżona wyłącznie na wypadek niewykonania lub nienależytego wykonania zobowiązania niepieniężnego",
"dłużnik nie może bez zgody wierzyciela zwolnić się z zobowiązania przez zapłatę kary umownej",
"kara zastrzeżona za niewykonanie zobowiązania pieniężnego jest ważna",
"polega na zapłacie określonej sumy"],c:[0,1,3],
e:"Kara za zobowiązanie pieniężne byłaby nieważna (sprzeczna z art. 483 w zw. z 353¹, 58). Przy świadczeniu pieniężnym funkcję tę pełnią odsetki."},

{t:"Kara umowna",q:"Uchwała SN III CZP 61/03:",o:[
"zastrzeżenie kary umownej na wypadek niewykonania lub nienależytego wykonania zobowiązania nie zwalnia dłużnika z obowiązku jej zapłaty w razie wykazania, że wierzyciel nie poniósł szkody",
"szkoda jest przesłanką żądania kary umownej",
"kara umowna jest sankcją kontraktową",
"wierzyciel musi wykazać wysokość poniesionej szkody"],c:[0,2],
e:"Gdyby trzeba było wykazywać szkodę, zniknąłby sens kary, która ma upraszczać postępowanie dowodowe."},

{t:"Kara umowna",q:"Art. 484 k.c.:",o:[
"kara należy się w zastrzeżonej wysokości bez względu na wysokość szkody",
"żądanie odszkodowania przenoszącego wysokość kary jest niedopuszczalne, chyba że strony inaczej postanowiły",
"dłużnik może żądać zmniejszenia kary, gdy zobowiązanie zostało w znacznej części wykonane albo kara jest rażąco wygórowana",
"sąd miarkuje karę z urzędu"],c:[0,1,2],e:"Miarkowanie następuje wyłącznie na zarzut dłużnika."},

{t:"Kara umowna",q:"Kara umowna a wina dłużnika (I CSK 2144/23, II CSKP 1480/22):",o:[
"do kary umownej stosuje się zasadę z art. 471 k.c. – wina dłużnika jest domniemana",
"strony mogą uniezależnić karę od winy, ale muszą to uczynić wprost i wyraźnie",
"kara uniezależniona od winy ma charakter gwarancyjny",
"dłużnik nigdy nie może bronić się brakiem winy"],c:[0,1,2],
e:"Dłużnik może się bronić brakiem winy, chyba że strony wyraźnie nadały karze charakter gwarancyjny."},

{t:"Kara umowna",q:"Modele relacji kary umownej i odszkodowania:",o:[
"model kodeksowy (art. 484 § 1) to model kary wyłącznej",
"model alternatywny – wierzyciel wybiera karę albo odszkodowanie",
"model kumulatywny – wierzyciel może żądać kary i odszkodowania",
"model zaliczalny – kara jest zaliczana na poczet odszkodowania, a wierzyciel może dochodzić nadwyżki"],c:[0,1,2,3],
e:"W modelu zaliczalnym kara jest zaliczana na poczet odszkodowania (obniża je). Strony mogą wybrać inny model niż kodeksowy. Wszystkie cztery opisy modeli są poprawne."},

{t:"Kara umowna",q:"Wysokość kary umownej (uchwała III CZP 16/21):",o:[
"kara powinna być możliwa do wyliczenia już w chwili zawarcia umowy",
"wysokość kary nie powinna wymagać dowodzenia",
"przepisy ogólne wprost zakazują określania kary procentowo",
"zarówno strony, jak i sąd powinny być w stanie obliczyć wysokość kary"],c:[0,1,3],
e:"Nie ma ogólnego zakazu procentowego określenia kary – byle była obliczalna w chwili zawarcia umowy."},

{t:"Kara umowna",q:"Kumulacja kar umownych:",o:[
"według SN kumulacja kary za niewykonanie i kary za nienależyte wykonanie tego samego zobowiązania jest niedopuszczalna",
"według I AGa 189/22 kara za odstąpienie od umowy i kara za nienależyte wykonanie nie muszą stanowić niedopuszczalnej kumulacji",
"o dopuszczalności decyduje, czy podstawą obu kar było to samo zdarzenie",
"w obrocie profesjonalnym kumulacja jest zawsze dopuszczalna"],c:[0,1,2],e:"Ocena następuje in concreto."},

{t:"Kara umowna",q:"Miarkowanie kary umownej:",o:[
"następuje wyłącznie na zarzut pozwanego, który powinien wskazać zakres i uzasadnienie",
"wniosek o oddalenie powództwa zawiera w sobie zarzut miarkowania",
"zarzut nadużycia prawa (art. 5 k.c.) nie zawiera w sobie zarzutu miarkowania (II CSKP 81/22)",
"wysokość szkody, choć nie jest przesłanką kary, może być brana pod uwagę przy miarkowaniu"],c:[0,2,3],
e:"Ciężar dowodu okoliczności uzasadniających miarkowanie spoczywa na tym, kto go żąda."},

{t:"Kara umowna",q:"Wyrok SN II CSK 122/17:",o:[
"kara umowna nie stanowi ani odpłatnej dostawy towarów, ani odpłatnego świadczenia usług",
"kara umowna jest wynagrodzeniem za świadczenie usług",
"opóźnienie w zapłacie kary umownej rodzi skutki z ustawy o terminach zapłaty w transakcjach handlowych",
"kara umowna jest świadczeniem niepieniężnym, bo zabezpiecza zobowiązanie niepieniężne"],c:[0],
e:"Ustawa dotyczy świadczeń pieniężnych za dostawę towarów lub usługi – kara do nich nie należy. Kara umowna jest świadczeniem pieniężnym, ale nie jest wynagrodzeniem za dostawę ani usługę."},

{t:"Kara umowna",q:"Przesłanki żądania kary umownej – co musi wykazać wierzyciel?",o:[
"niewykonanie lub nienależyte wykonanie zobowiązania",
"skuteczne zastrzeżenie kary umownej",
"wysokość poniesionej szkody",
"winę dłużnika"],c:[0,1],
e:"Szkoda nie jest przesłanką kary, a wina jest domniemana – to dłużnik może wykazywać jej brak."}
];
