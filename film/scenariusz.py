# Scenariusz filmu powtórkowego: prawo umów gospodarczych – część ogólna (kolokwium I)
# Każdy slajd: rozdział, tytuł, punkty (na ekranie; **x** = wyróżnienie), lektor (tekst czytany).
# Tekst lektora jest pisany „do wymowy”: artykuł, paragraf, indeks – bez skrótów.

S = []
def slajd(rozdzial, tytul, punkty, lektor, typ="tresc"):
    S.append(dict(rozdzial=rozdzial, tytul=tytul, punkty=punkty, lektor=lektor, typ=typ))

R0="Wstęp"
slajd(R0,"Kolokwium z umów",["Prawo umów gospodarczych","część ogólna","powtórka w 19 rozdziałach"],
"Cześć. To jest powtórka do kolokwium z prawa umów gospodarczych, z części ogólnej. Przejdziemy przez dziewiętnaście krótkich rozdziałów. Na ekranie zawsze są tylko najważniejsze słowa. Słowa podświetlone na żółto to pułapki, które często pojawiają się w teście. Jeśli coś jest za szybko, zatrzymaj film i wróć. Zaczynamy.","tytul")

R="1. Umowy gospodarcze"
slajd(R,R,[],"Rozdział pierwszy. Czym jest umowa gospodarcza.","rozdzial")
slajd(R,"Umowa gospodarcza",[
"umowa zawierana przez **przedsiębiorcę**",
"w związku z jego działalnością",
"sensu **stricto** – tylko przedsiębiorcy",
"sensu **largo** – także z konsumentem"],
"Umowa gospodarcza to umowa, którą zawiera przedsiębiorca w związku ze swoją działalnością. Jeżeli po obu stronach są tylko przedsiębiorcy, mówimy o umowie gospodarczej sensu stricto, czyli dwustronnie gospodarczej. Jeżeli po drugiej stronie może być konsument, to jest umowa sensu largo, czyli jednostronnie gospodarcza.")
slajd(R,"Zawsze gospodarcze, czasem gospodarcze",[
"**zawsze**: rachunek bankowy, kredyt, leasing, przewóz",
"**tylko między przedsiębiorcami**: agencja, franczyza, faktoring, spółka cywilna",
"**to zależy**: sprzedaż, pożyczka",
"umowa o pracę – **nie** jest gospodarcza"],
"Niektóre umowy są zawsze gospodarcze, bo po jednej stronie zawsze stoi przedsiębiorca. Tak jest przy rachunku bankowym i kredycie, gdzie jest bank, przy leasingu, gdzie jest finansujący, i przy przewozie, gdzie jest przewoźnik. Ale uwaga: leasing i przewóz mogą być tylko jednostronnie gospodarcze, bo drugą stroną może być konsument. Agencja, franczyza, faktoring i umowa spółki cywilnej to umowy między samymi przedsiębiorcami. Sprzedaż i pożyczka mogą być gospodarcze albo nie, bo mogą je zawrzeć dwie osoby prywatne. Umowa o pracę nie jest umową gospodarczą.")
slajd(R,"Konsument i przedsiębiorca",[
"konsument: **osoba fizyczna**, czynność **z przedsiębiorcą**",
"niezwiązana **bezpośrednio** z jej działalnością",
"osoba prawna **nigdy** nie jest konsumentem",
"przedsiębiorca: liczy się **działalność**, nie wpis"],
"Konsument, według artykułu dwadzieścia dwa indeks jeden kodeksu cywilnego, to osoba fizyczna, która dokonuje czynności z przedsiębiorcą, niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową. Zapamiętaj: osoba prawna nigdy nie jest konsumentem. Przedsiębiorca, według artykułu czterdzieści trzy indeks jeden, to osoba fizyczna, osoba prawna albo jednostka organizacyjna, która we własnym imieniu prowadzi działalność gospodarczą lub zawodową. Liczy się prowadzenie działalności, a nie sam wpis do rejestru.")

R="2. Cechy obrotu gospodarczego"
slajd(R,R,[],"Rozdział drugi. Cechy obrotu gospodarczego i przepisy tylko dla przedsiębiorców.","rozdzial")
slajd(R,"Rebus sic stantibus",[
"**mała** klauzula (358¹ § 4): przedsiębiorca **nie** żąda waloryzacji sądowej",
"wolno mu za to zastrzec **klauzulę waloryzacyjną**",
"**duża** klauzula (357¹): przysługuje **każdemu**, także przedsiębiorcy",
"zmiana dopiero **wyrokiem** – trzeba wnieść **powództwo**"],
"Mała klauzula rebus sic stantibus, czyli artykuł trzysta pięćdziesiąt osiem indeks jeden paragraf cztery, mówi, że przedsiębiorca nie może żądać sądowej zmiany świadczenia pieniężnego związanego z jego firmą. Może za to zastrzec w umowie klauzulę waloryzacyjną. Duża klauzula, artykuł trzysta pięćdziesiąt siedem indeks jeden, przysługuje każdemu, także przedsiębiorcy. Potrzebne są trzy przesłanki: nadzwyczajna zmiana stosunków, nadmierne trudności albo groźba rażącej straty, i to, że strony tego nie przewidywały. Sąd może zmienić umowę, a nawet ją rozwiązać. Wyrok jest prawnokształtujący. Według notatek trzeba wytoczyć powództwo, sam zarzut nie wystarczy.")
slajd(R,"Przepisy tylko dla przedsiębiorców",[
"68² – **milczenie** = przyjęcie (stałe stosunki)",
"74 § 4 – brak ograniczeń **dowodowych**",
"77¹ – **pismo potwierdzające**",
"385⁴ – **wojna wzorców**: sprzeczne postanowienia **wypadają**",
"355 § 2 – staranność **zawodowa** (wyższa)"],
"Zapamiętaj przepisy, które działają tylko między przedsiębiorcami. Artykuł sześćdziesiąt osiem indeks dwa: milczenie może oznaczać przyjęcie oferty przy stałych stosunkach gospodarczych. Artykuł siedemdziesiąt cztery paragraf cztery: nie ma ograniczeń dowodowych przy formie dowodowej. Artykuł siedemdziesiąt siedem indeks jeden: pismo potwierdzające. Artykuł trzysta osiemdziesiąt pięć indeks cztery, czyli wojna wzorców: postanowienia sprzeczne po prostu wypadają z umowy, żaden wzorzec nie wygrywa. I artykuł trzysta pięćdziesiąt pięć paragraf dwa: staranność przedsiębiorcy ocenia się wyżej, z uwzględnieniem zawodowego charakteru działalności.")

R="3. Oferta"
slajd(R,R,[],"Rozdział trzeci. Oferta.","rozdzial")
slajd(R,"Czym jest oferta (art. 66)",[
"**stanowcza** propozycja zawarcia umowy",
"określa **istotne postanowienia** (essentialia negotii)",
"termin odpowiedzi – **może** być, **nie musi**",
"strony: **oferent** i **oblat**"],
"Oferta to stanowcze oświadczenie woli zawarcia umowy, które określa jej istotne postanowienia, czyli essentialia negotii. Na przykład przy sprzedaży: rzecz i cenę. Termin odpowiedzi może być w ofercie, ale nie musi. Kiedyś był obowiązkowy, dziś już nie. Ten, kto składa ofertę, to oferent. Adresat oferty to oblat. Oblat ma uprawnienie kształtujące: jednym oświadczeniem może zawrzeć umowę.")
slajd(R,"Oferta czy zaproszenie?",[
"art. 71: reklamy, cenniki = **zaproszenie** „w razie wątpliwości”",
"regułę **można obalić** – ciężar dowodu na twierdzącym",
"art. 543: towar **na wystawie z ceną** = **oferta**",
"to **wyjątek** od art. 71"],
"Ogłoszenia, reklamy i cenniki uważa się w razie wątpliwości za zaproszenie do zawarcia umowy, a nie za ofertę. To jest artykuł siedemdziesiąt jeden. Ważne są słowa: w razie wątpliwości. To znaczy, że regułę można obalić, a kto twierdzi, że cennik jest ofertą, musi to udowodnić. Wyjątek to artykuł pięćset czterdzieści trzy: towar wystawiony w sklepie z ceną to już oferta.")
slajd(R,"Jak długo wiąże oferta bez terminu?",[
"w obecności stron / telefon → przyjęcie **niezwłocznie**",
"list, e-mail → czas **zwykłego toku czynności**",
"oświadczenie złożone, gdy adresat **mógł** się zapoznać",
"**faktyczne** przeczytanie **nie** jest potrzebne"],
"Jeżeli oferta nie ma terminu, to złożona w obecności drugiej strony albo przez telefon musi być przyjęta niezwłocznie. Złożona listownie albo mailem wiąże tak długo, jak oferent mógł w zwykłym toku czynności otrzymać odpowiedź wysłaną bez nieuzasadnionego opóźnienia. Według artykułu sześćdziesiąt jeden oświadczenie jest złożone, gdy doszło do adresata tak, że mógł się zapoznać z jego treścią. Nie musi go faktycznie przeczytać.")

R="4. Odwołanie oferty i oferta elektroniczna"
slajd(R,R,[],"Rozdział czwarty. Odwołanie oferty i oferta w postaci elektronicznej.","rozdzial")
slajd(R,"Odwołanie oferty",[
"zwykły obrót (art. 61): odwołanie musi **dojść** jednocześnie albo **wcześniej**",
"przedsiębiorcy (art. 66²): przed **wysłaniem** przyjęcia",
"**nie można** odwołać, gdy oferta ma **termin**",
"albo gdy wynika to z jej **treści**"],
"Odwołanie oferty. W zwykłym obrocie odwołanie jest skuteczne, jeżeli dojdzie do adresata razem z ofertą albo wcześniej. Między przedsiębiorcami jest więcej czasu. Artykuł sześćdziesiąt sześć indeks dwa mówi: ofertę można odwołać, jeżeli odwołanie dotrze do oblata, zanim on wyśle oświadczenie o przyjęciu. Zapamiętaj: liczy się wysłanie przyjęcia, a nie jego dojście. Oferty nie można odwołać, jeżeli ma termin przyjęcia albo jeżeli wynika to z jej treści.")
slajd(R,"Przykład: kto zdążył?",[
"wtorek – B dostaje ofertę od A",
"środa – B **wysyła** przyjęcie",
"czwartek – do B dociera odwołanie od A",
"→ odwołanie **spóźnione**, umowa **zawarta**"],
"Przykład. Przedsiębiorca B dostaje ofertę we wtorek. W środę wysyła przyjęcie. W czwartek dociera do niego pismo, w którym A odwołuje ofertę. Odwołanie jest spóźnione, bo dotarło po wysłaniu przyjęcia. Umowa zostanie zawarta, gdy przyjęcie dojdzie do A.")
slajd(R,"Oferta w postaci elektronicznej (66¹)",[
"wiąże, gdy oblat **niezwłocznie potwierdzi otrzymanie**",
"potwierdzenie ≠ **przyjęcie**",
"„postać” elektroniczna ≠ „forma” elektroniczna",
"nie dotyczy **e-maili** i podobnych środków",
"przedsiębiorcy mogą to **wyłączyć umową**"],
"Oferta w postaci elektronicznej wiąże oferenta dopiero wtedy, gdy druga strona niezwłocznie potwierdzi jej otrzymanie. Potwierdzenie otrzymania to nie jest przyjęcie oferty. Oblat dalej może się zastanawiać. Postać elektroniczna to nie to samo co forma elektroniczna, więc podpis kwalifikowany nie jest potrzebny. Tych zasad nie stosuje się do zwykłych maili i podobnych środków indywidualnej komunikacji. Przedsiębiorcy mogą je też wyłączyć umową. Przedsiębiorca, który składa taką ofertę, ma obowiązki informacyjne, na przykład o językach umowy. Jeśli ich nie spełni, umowa jest ważna, grozi najwyżej odszkodowanie.")

R="5. Przyjęcie oferty"
slajd(R,R,[],"Rozdział piąty. Przyjęcie oferty.","rozdzial")
slajd(R,"Lustrzane odbicie",[
"art. 68: przyjęcie ze zmianami = **nowa oferta**",
"art. 68¹ (przedsiębiorcy): zmiany **nieistotne** = przyjęcie",
"wiąże oferta **z uwzględnieniem** zastrzeżeń",
"zmiana **ceny** = zawsze **kontroferta**"],
"Zasada lustrzanego odbicia: ofertę można przyjąć albo odrzucić. Przyjęcie ze zmianami to nowa oferta, czyli kontroferta. Między przedsiębiorcami działa wyjątek z artykułu sześćdziesiąt osiem indeks jeden. Jeżeli zmiany nie zmieniają istotnie treści oferty, na przykład dotyczą terminu dostawy, odpowiedź jest przyjęciem. Wtedy wiąże treść oferty z uwzględnieniem tych zastrzeżeń. Zmiana ceny albo innego istotnego elementu to zawsze kontroferta.")
slajd(R,"Kiedy 68¹ nie działa?",[
"oferta: „tylko **bez zastrzeżeń**”",
"oferent **niezwłocznie sprzeciwił się**",
"oblat uzależnił przyjęcie od **zgody** oferenta – i jej nie dostał"],
"Wyjątek z artykułu sześćdziesiąt osiem indeks jeden nie działa w trzech sytuacjach. Po pierwsze, gdy oferta mówi, że można ją przyjąć tylko bez zastrzeżeń. Po drugie, gdy oferent niezwłocznie sprzeciwił się zastrzeżeniom. Po trzecie, gdy oblat sam uzależnił przyjęcie od zgody oferenta na zmiany i tej zgody niezwłocznie nie dostał.")
slajd(R,"Milczenie, przystąpienie, spóźnienie",[
"milczenie co do zasady = **nic**",
"68²: przedsiębiorcy w **stałych stosunkach** – milczenie = przyjęcie",
"69: przyjęcie **przez czyn** – w **czasie właściwym**",
"67: spóźnione przyjęcie wysłane na czas – umowa **jest**, chyba że oferent **niezwłocznie** zaprotestuje",
"70: chwila i miejsce – gdy oferent **otrzyma** przyjęcie"],
"Milczenie co do zasady nie jest przyjęciem. Wyjątek: przedsiębiorcy w stałych stosunkach gospodarczych. Wtedy brak niezwłocznej odpowiedzi oznacza przyjęcie. To nie dotyczy konsumenta. Artykuł sześćdziesiąt dziewięć to przyjęcie przez czyn: oblat przystępuje do wykonania umowy w czasie właściwym. Artykuł sześćdziesiąt siedem: jeżeli przyjęcie przyszło po terminie, ale wysłano je na czas, umowa jest zawarta, chyba że oferent niezwłocznie zawiadomi, że uważa ją za niezawartą. I artykuł siedemdziesiąt: w razie wątpliwości umowa jest zawarta w chwili i w miejscu, w którym oferent otrzymał przyjęcie. Przy ofercie elektronicznej miejscem jest siedziba albo miejsce zamieszkania oferenta.")

R="6. Orzeczenia o ofercie"
slajd(R,R,[],"Rozdział szósty. Dwa orzeczenia o ofercie.","rozdzial")
slajd(R,"Ogórki i papier",[
"III CSK 297/09 – nasiona ogórków: konkretny towar + cechy + cena = **oferta**",
"zaproszenie = informacja o **możliwości** umowy i korzyściach",
"IV CK 286/02 – papier, faksy: faks z elementami i **terminem** = **oferta**",
"**stałe stosunki** = rutynowy, przewidywalny tryb"],
"Wyrok III CSK 297 z 2009 roku, o nasionach ogórków. Sprzedawca pokazał konkretny towar, jego cechy i cenę, i chciał od razu sprzedać. Sąd Najwyższy uznał, że to była oferta. Zaproszenie to tylko informacja o możliwości zawarcia umowy i jej korzyściach. Wyrok IV CK 286 z 2002 roku, o dostawach papieru i faksach. Faks zawierał wszystkie elementy umowy i termin związania, więc był ofertą. Przyjęcie w terminie zawarło umowę. Sąd opisał też stałe stosunki gospodarcze: to rutynowy tryb, w którym można przewidzieć, że oferta zostanie złożona i w jakiej wielkości.")

R="7. Aukcja i przetarg"
slajd(R,R,[],"Rozdział siódmy. Aukcja, przetarg i wadium.","rozdzial")
slajd(R,"Aukcja a przetarg",[
"aukcja: oferta wygasa przy **przebiciu**",
"umowa zawarta z chwilą **przybicia**",
"przetarg: oferty **niejawne**, wiąże do **wyboru** innej / zamknięcia",
"chwila zawarcia: przepisy o **przyjęciu oferty**",
"ogłoszenie zmienić/odwołać – tylko gdy **zastrzeżono**"],
"Aukcja jest zwykle ustna. Oferta licytanta przestaje wiązać, gdy ktoś inny ją przebije. Umowa jest zawarta z chwilą przybicia. W przetargu oferty są niejawne. Oferta wiąże, dopóki organizator nie wybierze innej albo nie zamknie przetargu bez wyboru. Chwilę zawarcia umowy w przetargu ustala się według przepisów o przyjęciu oferty. Organizator musi niezwłocznie powiadomić uczestników na piśmie o wyniku. Ogłoszenie i warunki można zmienić albo odwołać tylko wtedy, gdy to zastrzeżono.")
slajd(R,"Gdy umowa wymaga szczególnej formy",[
"np. nieruchomość – **akt notarialny**",
"przybicie / wybór **nie zawiera** umowy",
"organizator **i** uczestnik mogą **dochodzić zawarcia** umowy"],
"Jeżeli umowa wymaga szczególnej formy, na przykład aktu notarialnego przy nieruchomości, samo przybicie albo wybór oferty nie zawiera umowy. Wtedy i organizator, i wybrany uczestnik mogą dochodzić zawarcia umowy przed sądem.")
slajd(R,"Wadium (70⁴) i unieważnienie (70⁵)",[
"wadium **można** zastrzec – pod rygorem niedopuszczenia",
"zwycięzca uchyla się (umowa w formie szczególnej) → organizator **zachowuje** wadium",
"organizator uchyla się → **podwójne wadium albo** odszkodowanie",
"unieważnienie: **miesiąc** od dowiedzenia się, max **rok** od zawarcia"],
"Wadium można zastrzec, ale nie trzeba. Kto go nie wpłaci, nie zostanie dopuszczony. Wadium może być pieniądzem albo zabezpieczeniem, na przykład gwarancją bankową, która jest samodzielna, nieakcesoryjna. Wadium zabezpiecza zawarcie umowy, a zadatek jej wykonanie. Jeżeli wybrany uczestnik uchyla się od zawarcia umowy wymagającej szczególnej formy, organizator zachowuje wadium. Jeżeli uchyla się organizator, uczestnik może żądać podwójnego wadium albo odszkodowania. Albo, nie oba naraz. Umowę z aukcji lub przetargu można unieważnić, gdy ktoś wpłynął na wynik sprzecznie z prawem lub dobrymi obyczajami. Termin: miesiąc od dowiedzenia się, ale najpóźniej rok od zawarcia umowy.")

R="8. Negocjacje"
slajd(R,R,[],"Rozdział ósmy. Negocjacje.","rozdzial")
slajd(R,"Zawarcie umowy w negocjacjach (art. 72)",[
"umowa – gdy porozumienie co do **wszystkich** negocjowanych punktów",
"strony mogą zawrzeć wcześniej – ale **essentialia negotii** muszą być",
"start: **zaproszenie** do negocjacji, nie oferta"],
"W negocjacjach umowa jest zawarta, gdy strony dojdą do porozumienia co do wszystkich postanowień, które negocjowały. Strony mogą uznać umowę za zawartą wcześniej, ale bez essentialia negotii umowy nie ma. Negocjacje zaczynają się od zaproszenia do negocjacji, a nie od oferty.")
slajd(R,"Culpa in contrahendo i poufność",[
"72 § 2: negocjacje **bez zamiaru** zawarcia umowy",
"odszkodowanie – **ujemny** interes umowny",
"odpowiedzialność co do zasady **deliktowa**",
"72¹: poufność z **ustawy** → szkoda **albo** wydanie korzyści"],
"Culpa in contrahendo, czyli wina w kontraktowaniu. Kto prowadzi negocjacje sprzecznie z dobrymi obyczajami, zwłaszcza bez zamiaru zawarcia umowy, musi naprawić szkodę. Chodzi o ujemny interes umowny, czyli to, co druga strona straciła, licząc na zawarcie umowy. Odpowiedzialność jest co do zasady deliktowa. Jeśli strony zawarły umowę o negocjacje, może być kontraktowa. Tajemnica negocjacji, artykuł siedemdziesiąt dwa indeks jeden: obowiązek poufności wynika wprost z ustawy, gdy strona zastrzegła poufność. Poszkodowany może żądać naprawienia szkody albo wydania korzyści. Albo, nie oba.")
slajd(R,"Co NIE zobowiązuje do zawarcia umowy",[
"umowa o **negocjacje**",
"**list intencyjny** (V CSK 425/10) – zwykle czynność faktyczna",
"**punktacja** – co już uzgodniono",
"umowa **ramowa** – organizuje współpracę",
"zobowiązuje tylko umowa **przedwstępna**"],
"Uwaga na pułapkę. Te dokumenty nie zobowiązują do zawarcia umowy. Umowa o negocjacje: odpowiada się za sposób prowadzenia negocjacji, a nie za to, że umowy nie zawarto. List intencyjny: według wyroku V CSK 425 z 2010 roku nie tworzy definitywnego, zaskarżalnego zobowiązania. Zwykle to czynność faktyczna. Punktacja: zapisuje, co już uzgodniono, i strony co do zasady do tego nie wracają. Umowa ramowa: organizuje współpracę, ale nie zobowiązuje do zamówień. Obowiązek zawarcia umowy daje tylko umowa przedwstępna.")

R="9. Umowa przedwstępna"
slajd(R,R,[],"Rozdział dziewiąty. Umowa przedwstępna.","rozdzial")
slajd(R,"Umowa przedwstępna (art. 389)",[
"musi mieć **istotne postanowienia** umowy przyrzeczonej",
"termin – **nie musi** być",
"dwa różne terminy → wiąże ten, kto wyznaczył **wcześniej**",
"brak terminu przez **rok** → nie można żądać zawarcia"],
"Umowa przedwstępna musi określać istotne postanowienia umowy przyrzeczonej. Termin nie jest obowiązkowy. Jeżeli go nie ma, a obie strony wyznaczyły różne terminy, wiąże termin strony, która złożyła oświadczenie wcześniej. Jeżeli przez rok od zawarcia nikt nie wyznaczył terminu, nie można już żądać zawarcia umowy przyrzeczonej.")
slajd(R,"Skutek słabszy i silniejszy (art. 390)",[
"**słabszy**: odszkodowanie – **ujemny** interes",
"strony mogą je określić inaczej, np. **kara umowna**",
"**silniejszy**: żądanie zawarcia umowy – gdy zachowana **forma** umowy przyrzeczonej",
"przedawnienie: **1 rok**",
"zwykłe pismo przy nieruchomości → tylko skutek **słabszy**"],
"Skutki uchylania się od umowy przyrzeczonej. Skutek słabszy to odszkodowanie za to, że strona liczyła na zawarcie umowy, czyli ujemny interes umowny. Strony mogą to określić inaczej, na przykład karą umowną. Skutek silniejszy to żądanie zawarcia umowy przed sądem. Przysługuje, gdy umowa przedwstępna spełnia wymagania ważności umowy przyrzeczonej, zwłaszcza co do formy. Przykład: umowa przedwstępna sprzedaży nieruchomości na zwykłym piśmie daje tylko skutek słabszy, bo nie ma aktu notarialnego. Ale nadal jest ważna. Roszczenia przedawniają się z upływem roku od dnia, w którym umowa przyrzeczona miała być zawarta.")

R="10. Umowy z konsumentem"
slajd(R,R,[],"Rozdział dziesiąty. Umowy z konsumentem: na odległość i poza lokalem przedsiębiorstwa.","rozdzial")
slajd(R,"Na odległość i poza lokalem",[
"**na odległość**: zorganizowany system, **bez** fizycznej obecności – do zawarcia **włącznie**",
"**poza lokalem**: obie strony **obecne**, ale nie w lokalu (pokaz, wycieczka)",
"lokal: nieruchomość **na stałe**; rzecz ruchoma **zwyczajowo** albo na stałe",
"ustawy nie stosuje się poza lokalem do **50 zł**"],
"Ustawa o prawach konsumenta zna dwa szczególne tryby. Umowa na odległość jest zawierana w zorganizowanym systemie, bez fizycznej obecności stron, wyłącznie środkami na odległość, aż do chwili zawarcia włącznie. Jeżeli strony spotkały się w trakcie negocjacji, to nie jest umowa na odległość. Umowa poza lokalem przedsiębiorstwa to umowa przy jednoczesnej obecności stron, ale poza lokalem, na przykład na pokazie albo wycieczce. Lokal to nieruchomość, w której przedsiębiorca działa na stałe, albo rzecz ruchoma, na przykład food truck, w której działa zwyczajowo albo na stałe. Ustawy nie stosuje się do umów poza lokalem do pięćdziesięciu złotych.")
slajd(R,"Obowiązki informacyjne",[
"art. 12 – info najpóźniej przy **woli związania się**",
"art. 7 – **nie można zrzec się** praw",
"art. 17 – „**zamówienie z obowiązkiem zapłaty**” – inaczej **brak umowy**",
"art. 20 – telefon: cel na **początku**, oświadczenie **utrwalone**",
"art. 21 – potwierdzenie na **trwałym nośniku**"],
"Przedsiębiorca musi poinformować konsumenta najpóźniej w chwili, gdy konsument wyraża wolę związania się umową. Konsument nie może zrzec się praw z ustawy. Gorsze dla niego postanowienia są nieważne, a w ich miejsce wchodzi ustawa. Przy zamówieniu przez internet przycisk musi mówić: zamówienie z obowiązkiem zapłaty. Jeśli nie mówi, umowa nie zostaje zawarta. Przy telefonie przedsiębiorca na początku mówi, w jakim celu dzwoni. Oświadczenie konsumenta jest skuteczne dopiero, gdy zostało utrwalone na trwałym nośniku po potwierdzeniu od przedsiębiorcy. Po zawarciu umowy na odległość przedsiębiorca wysyła potwierdzenie na trwałym nośniku.")
slajd(R,"Gdy przedsiębiorca nie poinformował",[
"co do zasady umowa **ważna**",
"art. 22 – informacje = **część umowy**",
"art. 23 – nieujawnionych kosztów konsument **nie płaci**",
"art. 24 – ciężar dowodu na **przedsiębiorcy**",
"art. 7aa – przedsiębiorca-osoba fizyczna: umowa **niezawodowa**"],
"Co, jeśli przedsiębiorca nie spełni obowiązku informacyjnego? Co do zasady umowa jest ważna. Informacje z artykułu dwanaście stają się częścią umowy. Kosztów, o których nie poinformowano, konsument nie płaci. To przedsiębiorca musi udowodnić, że poinformował. I jeszcze artykuł siedem a a: przedsiębiorca będący osobą fizyczną korzysta z części ochrony konsumenckiej, gdy umowa nie ma dla niego charakteru zawodowego. Ocenia się to między innymi według wpisu w CEIDG. Nie dotyczy to spółek.")

R="11. Prawo odstąpienia"
slajd(R,R,[],"Rozdział jedenasty. Prawo odstąpienia od umowy.","rozdzial")
slajd(R,"Terminy",[
"**14 dni** bez podania przyczyny",
"**30 dni** – nieumówiona wizyta albo wycieczka",
"wystarczy **wysłać** oświadczenie przed końcem terminu",
"towar: termin od **objęcia w posiadanie**",
"brak pouczenia → **12 miesięcy** od końca terminu"],
"Konsument może odstąpić od umowy na odległość albo poza lokalem w ciągu czternastu dni, bez podawania przyczyny i bez zgody przedsiębiorcy. Przy nieumówionej wizycie w domu konsumenta albo na wycieczce termin wynosi trzydzieści dni. Wystarczy wysłać oświadczenie przed upływem terminu. Forma jest dowolna, wzór formularza nie jest obowiązkowy. Przy sprzedaży towaru termin biegnie od objęcia towaru w posiadanie. Przy usługach od zawarcia umowy. Jeżeli przedsiębiorca nie pouczył o prawie odstąpienia, prawo wygasa dopiero po dwunastu miesiącach od końca podstawowego terminu.")
slajd(R,"Skutki odstąpienia",[
"umowa = **niezawarta**",
"przedsiębiorca zwraca **wszystko**, z kosztem dostawy – w **14 dni**",
"może **wstrzymać** zwrot do otrzymania towaru albo dowodu odesłania",
"koszt odesłania – co do zasady **konsument**",
"usługa na żądanie przed terminem → zapłata **proporcjonalna**"],
"Po odstąpieniu umowę uważa się za niezawartą. Przedsiębiorca zwraca wszystkie płatności, także koszt dostawy, w ciągu czternastu dni. Może wstrzymać zwrot, dopóki nie dostanie towaru albo dowodu jego odesłania. Bezpośredni koszt odesłania towaru ponosi co do zasady konsument. Jeżeli konsument zażądał rozpoczęcia usługi przed upływem terminu, płaci proporcjonalnie za to, co już wykonano. Przy zbyt wysokiej cenie liczy się wartość rynkowa. Umowy dodatkowe wygasają, jeśli świadczy je przedsiębiorca albo osoba trzecia na podstawie porozumienia z przedsiębiorcą.")
slajd(R,"Kiedy prawa odstąpienia NIE ma (art. 38)",[
"towar **na zamówienie**, szybko się psujący",
"usługa **w pełni wykonana** za zgodą konsumenta",
"nagranie / program **otwarty** po dostarczeniu",
"gazety – ale **prenumerata** ma prawo odstąpienia!",
"**aukcja publiczna**"],
"Prawa odstąpienia nie ma między innymi przy towarze robionym według specyfikacji konsumenta, przy towarze szybko psującym się, przy usłudze w pełni wykonanej za wyraźną zgodą poinformowanego konsumenta, przy nagraniach i programach w zapieczętowanym opakowaniu otwartym po dostarczeniu i przy aukcji publicznej. Pułapka: przy gazetach prawa odstąpienia nie ma, ale przy prenumeracie jest. I jeszcze jedno: przy nieumówionej wizycie albo wycieczce część tych wyjątków nie działa.")

R="12. Forma umów"
slajd(R,R,[],"Rozdział dwunasty. Forma umów.","rozdzial")
slajd(R,"Rodzaje form",[
"**dokumentowa** – dokument, czyli nośnik informacji (np. e-mail); **bez** podpisu",
"**pisemna** – podpis **własnoręczny**",
"**elektroniczna** – podpis **kwalifikowany** = pisemna",
"podpis zaufany → wg notatek forma **dokumentowa**",
"data pewna – poświadcza **datę**, nie podpis"],
"Forma dokumentowa to oświadczenie w postaci dokumentu, czyli nośnika informacji, na przykład maila. Podpis nie jest potrzebny, wystarczy możliwość ustalenia, kto składa oświadczenie. Forma pisemna wymaga podpisu własnoręcznego. Do umowy wystarczy wymiana podpisanych dokumentów. Forma elektroniczna wymaga podpisu kwalifikowanego i jest równoważna pisemnej. Podpis zaufany według notatek daje formę dokumentową. Data pewna poświadcza datę, a nie podpis. Dalej są formy szczególne: podpis notarialnie poświadczony, akt notarialny i forma sądowa, czyli wpis do protokołu.")
slajd(R,"Skutki braku formy",[
"**ad solemnitatem** – nieważność",
"pisemna / dokumentowa / elektroniczna → nieważność tylko, gdy ustawa **wprost** tak mówi",
"forma **szczególna** (akt notarialny) → nieważność",
"**ad probationem** – trudności dowodowe",
"**ad eventum** – umowa ważna, ale bez skutku (najem > 1 rok → **czas nieoznaczony**)"],
"Skutki braku formy. Ad solemnitatem oznacza nieważność. Przy formie pisemnej, dokumentowej i elektronicznej nieważność jest tylko wtedy, gdy ustawa wprost tak mówi. Przy formie szczególnej, na przykład akcie notarialnym, brak formy oznacza nieważność. Ad probationem to forma dla celów dowodowych: umowa jest ważna, ale w sporze nie można dowodzić świadkami. Ad eventum: umowa jest ważna, ale nie daje skutku, którego strony chciały. Przykład: najem na dłużej niż rok bez pisma uważa się za zawarty na czas nieoznaczony.")
slajd(R,"Forma dowodowa – wyjątki (art. 74)",[
"świadkowie dopuszczalni, gdy: **obie strony** się zgodzą",
"żąda tego **konsument** (nie przedsiębiorca!)",
"jest **dokument** uprawdopodabniający",
"między **przedsiębiorcami** – **brak** ograniczeń",
"umowa dostawy ustnie między firmami → **ważna**, świadkowie **OK**"],
"Przy formie dowodowej świadkowie są mimo to dopuszczalni w trzech przypadkach: gdy obie strony się zgodzą, gdy żąda tego konsument w sporze z przedsiębiorcą, i gdy fakt uprawdopodabnia dokument. Pułapka: ten wyjątek ma konsument, a nie przedsiębiorca. Między przedsiębiorcami nie ma żadnych ograniczeń. Przykład: ustna umowa dostawy między firmami jest ważna, a świadków można przesłuchać.")
slajd(R,"Forma czynności następczych (art. 77)",[
"zmiana umowy → **taka sama** forma",
"umowa pisemna → rozwiązanie, odstąpienie, wypowiedzenie: **dokumentowa**",
"umowa w akcie notarialnym → rozwiązanie: **akt**",
"→ odstąpienie, wypowiedzenie: **pismo**",
"77¹ – przedsiębiorcy: pismo potwierdzające, sprzeciw **niezwłocznie na piśmie**"],
"Forma czynności następczych, artykuł siedemdziesiąt siedem. Zmiana umowy wymaga takiej samej formy jak jej zawarcie. Jeżeli umowę zawarto na piśmie, to rozwiązanie za zgodą stron, odstąpienie i wypowiedzenie wymagają formy dokumentowej, chyba że umowa mówi inaczej. Jeżeli umowę zawarto w akcie notarialnym, rozwiązanie wymaga aktu notarialnego, a odstąpienie i wypowiedzenie wymagają zwykłego pisma. Pismo potwierdzające między przedsiębiorcami: jeżeli zawiera nieistotne zmiany, wiąże jego treść, chyba że druga strona niezwłocznie sprzeciwi się na piśmie.")

R="13. Rodzaje i treść umów"
slajd(R,R,[],"Rozdział trzynasty. Rodzaje umów i elementy ich treści.","rozdzial")
slajd(R,"Rodzaje umów",[
"**wzajemna** – świadczenie za świadczenie; ekwiwalentność **subiektywna**; granica: **wyzysk**",
"świadczenia **jednocześnie** – ale to nie przesłanka bezwzględna",
"**realna** – potrzebne wydanie rzeczy (np. **zadatek**); sprzedaż jest **konsensualna**",
"kauzy: cavendi – **zabezpieczenie**, solvendi – **zapłata**, donandi – **darowizna**",
"warunek – przyszły, **niepewny**; termin – przyszły, **pewny**"],
"Umowa wzajemna: świadczenie jednej strony jest odpowiednikiem świadczenia drugiej. Ekwiwalentność ocenia się subiektywnie, a granicą jest wyzysk. Świadczenia spełnia się co do zasady jednocześnie, ale nie jest to przesłanka bezwzględna. Po odstąpieniu od umowy wzajemnej każda strona ma prawo zatrzymania. Umowa realna wymaga dodatkowego zdarzenia, na przykład wydania rzeczy. Tak jest przy zadatku. Sprzedaż jest konsensualna. Kauzy: causa cavendi to zabezpieczenie, causa solvendi to zwolnienie z długu, causa donandi to darowizna, a causa obligandi vel acquirendi to nabycie prawa, na przykład przy sprzedaży. Warunek to zdarzenie przyszłe i niepewne, termin to zdarzenie przyszłe i pewne. Warunek nie działa wstecz.")
slajd(R,"Elementy treści",[
"**essentialia negotii** – bez nich **nie ma** umowy",
"**accidentalia negotii** – ważne **dla stron** (warunek, termin, kara)",
"**naturalia negotii** – w braku: przepisy **dyspozytywne**",
"umowa **nazwana** – ustawa reguluje jej **essentialia**, sama nazwa nie wystarczy"],
"Elementy treści umowy. Essentialia negotii to elementy przedmiotowo istotne. Bez nich umowy nie ma. Accidentalia negotii to elementy podmiotowo istotne, na przykład warunek, termin albo kara umowna. Strony same podnoszą je do rangi istotnych. Naturalia negotii to elementy, których strony nie muszą regulować, bo w ich braku działają przepisy dyspozytywne. Umowa nazwana to umowa, której essentialia reguluje ustawa. Sama nazwa w ustawie nie wystarczy.")

R="14. Klauzule umowne"
slajd(R,R,[],"Rozdział czternasty. Klauzule umowne.","rozdzial")
slajd(R,"Klauzule procesowe",[
"**prorogacyjna** (1104 kpc) – jurysdykcja sądów polskich, **na piśmie**",
"**derogacyjna** (1105) – nie dla **konsumenta** z Polski, nie dla spraw **wyłącznych**",
"**prorogatio fori** (46) – sąd miejscowo; wyłączny; **nie** zmienia właściwości wyłącznej",
"**dowodowa** (458⁹) – tylko **wyłącza** dowody; na piśmie **pod rygorem nieważności**; bez warunku"],
"Klauzule procesowe. Klauzula prorogacyjna poddaje sprawy jurysdykcji sądów polskich i wymaga formy pisemnej. Klauzula derogacyjna wyłącza sądy polskie, ale nie może dotyczyć spraw z umów konsumenta mieszkającego w Polsce ani spraw z wyłącznej jurysdykcji sądów polskich. Prorogatio fori wskazuje sąd miejscowo właściwy. Taki sąd staje się wyłącznie właściwy, ale strony nie mogą zmienić właściwości wyłącznej. Umowa dowodowa może tylko wyłączyć określone dowody, a nie wskazać jedyne dopuszczalne. Zawiera się ją na piśmie pod rygorem nieważności albo ustnie przed sądem. Pod warunkiem albo z terminem jest nieważna. Sąd nie dopuści z urzędu dowodu wyłączonego.")
slajd(R,"Zapis na sąd polubowny",[
"wskazać **przedmiot sporu** albo stosunek prawny",
"równość stron – inaczej **bezskuteczny**",
"konsument: tylko **po powstaniu sporu**, na **piśmie**, z pouczeniem o skutkach",
"w statucie spółki wiąże: spółkę, **wspólników**, **organy**",
"sąd uwzględnia go tylko na **zarzut** – przed wdaniem się w spór"],
"Zapis na sąd polubowny musi wskazywać przedmiot sporu albo stosunek prawny. Postanowienia naruszające równość stron są bezskuteczne. Z konsumentem zapis można zawrzeć tylko po powstaniu sporu, na piśmie, z informacją o skutkach zapisu. Zapis w umowie albo statucie spółki handlowej wiąże spółkę, wspólników i organy spółki z ich członkami. Sąd państwowy uwzględnia zapis tylko na zarzut pozwanego, zgłoszony przed wdaniem się w spór co do istoty sprawy.")
slajd(R,"Klauzule materialne – część 1",[
"**salwatoryjna** – nie wyłącza art. 58 § 3 (V CSK 81/05)",
"**merger** – umowa wyczerpuje ustalenia stron",
"**pactum de non cedendo** – zakaz przelewu; wg Szczurowskiego przelew **nieważny**",
"**repy** – oświadczenia wiedzy → błąd (84) lub odszkodowanie",
"**kasatoryjna** (492) – odstąpienie **bez terminu dodatkowego**, przy **zwłoce**"],
"Klauzule materialne. Klauzula salwatoryjna mówi, że nieważność jednego postanowienia nie unieważnia reszty. Według wyroku V CSK 81 z 2005 roku nie wyłącza ona artykułu pięćdziesiąt osiem paragraf trzy, który jest bezwzględnie obowiązujący. Gdy nieważne są essentialia negotii, cała umowa jest nieważna. Klauzula merger mówi, że umowa wyczerpuje ustalenia stron. Pactum de non cedendo to zakaz przelewu wierzytelności. Według profesora Szczurowskiego przelew wbrew zakazowi jest nieważny. Repy to oświadczenia i zapewnienia. Nieprawdziwy rep może prowadzić do błędu albo odszkodowania. Klauzula kasatoryjna pozwala odstąpić od umowy wzajemnej bez wyznaczania terminu dodatkowego, przy zwłoce drugiej strony.")
slajd(R,"Klauzule materialne – część 2",[
"**zadatek** – niewykonanie: zachowaj / żądaj **podwójnego**; rozwiązanie → **zwrot**",
"**zaliczka** – tylko część zapłaty",
"**umowne odstąpienie** (395) – musi być **termin**; skutek **ex tunc**",
"**wykonanie zastępcze** (480) – upoważnienie sądu; w nagłych wypadkach **bez**",
"**waloryzacyjna** – wyjątek od **nominalizmu**"],
"Zadatek. Jeśli druga strona nie wykona umowy, możesz odstąpić bez terminu dodatkowego i zachować zadatek. A jeśli to ty go dałeś, możesz żądać podwójnej sumy. Przy rozwiązaniu umowy zadatek się zwraca. Zaliczka jest tylko częścią zapłaty i nie pełni funkcji gwarancyjnej. Umowne prawo odstąpienia musi mieć termin. Wykonuje się je oświadczeniem, a umowę uważa się za niezawartą. Wykonanie zastępcze wymaga upoważnienia sądu, ale w nagłych wypadkach go nie potrzeba. Wierzyciel zachowuje roszczenie o odszkodowanie. Klauzula waloryzacyjna to wyjątek od zasady nominalizmu. Jest szczególnie ważna dla przedsiębiorców, bo nie mają waloryzacji sądowej.")

R="15. Wykonanie zobowiązań"
slajd(R,R,[],"Rozdział piętnasty. Wykonanie zobowiązań.","rozdzial")
slajd(R,"Jak i gdzie świadczyć",[
"osobiście – tylko gdy wynika z umowy, **ustawy** albo właściwości",
"długu pieniężnego **nie można odmówić** przyjąć od osoby trzeciej",
"gatunek bez jakości → **średnia** jakość",
"pieniądze – u **wierzyciela** (dług oddawczy); reszta – u **dłużnika**",
"firma → **siedziba przedsiębiorstwa**"],
"Wierzyciel może żądać osobistego świadczenia tylko wtedy, gdy wynika to z umowy, z ustawy albo z właściwości świadczenia. Wymagalnego długu pieniężnego nie można odmówić przyjąć od osoby trzeciej. Rzeczy oznaczone co do gatunku bez określonej jakości świadczy się w średniej jakości. Miejsce: pieniądze płaci się w miejscu zamieszkania albo siedzibie wierzyciela, to jest dług oddawczy. Inne świadczenia spełnia się u dłużnika, to jest dług odbiorczy. Przy firmach decyduje siedziba przedsiębiorstwa. Przelew jest spełniony z chwilą uznania rachunku wierzyciela.")
slajd(R,"Kiedy i na który dług",[
"brak terminu → **niezwłocznie po wezwaniu**",
"niezwłocznie = **bez zbędnej zwłoki**, nie natychmiast",
"451: dłużnik **wskazuje** dług; brak → najdawniej wymagalny",
"pokwitowanie → domniemanie zapłaty odsetek i **wcześniejszych** rat",
"waluta obca – można płacić w złotych; kurs z dnia **wymagalności**"],
"Jeżeli termin nie jest oznaczony, świadczenie trzeba spełnić niezwłocznie po wezwaniu. Niezwłocznie znaczy bez zbędnej zwłoki, a nie natychmiast. Bez wezwania świadczenie nie jest wymagalne. Przy kilku długach dłużnik wskazuje, który spłaca. Jeżeli nikt nie wskaże, zalicza się na dług najdawniej wymagalny. Pokwitowanie zapłaty długu daje domniemanie zapłaty odsetek, a pokwitowanie raty daje domniemanie zapłaty wcześniejszych rat. Dług w walucie obcej można spłacić w złotych, chyba że zastrzeżono wyłącznie walutę obcą. Kurs liczy się z dnia wymagalności, a przy opóźnieniu wierzyciel może wybrać kurs z dnia zapłaty.")
slajd(R,"Zastępcze formy wykonania",[
"**potrącenie** – jednostronne oświadczenie; umorzenie do **niższej** kwoty",
"obie wierzytelności: pieniądze lub rzeczy tego samego gatunku, **wymagalne**",
"**depozyt sądowy** – tylko w przypadkach z ustawy (nieznany wierzyciel, spór kto jest wierzycielem)",
"**wykonanie zastępcze** – art. 480"],
"Zastępcze formy wykonania. Potrącenie to jednostronne oświadczenie. Nie trzeba umowy ani zgody. Obie wierzytelności muszą dotyczyć pieniędzy albo rzeczy tego samego gatunku i być wymagalne. Umarzają się do wysokości niższej. Depozyt sądowy jest dopuszczalny tylko w przypadkach przewidzianych w ustawie, na przykład gdy dłużnik nie wie, kto jest wierzycielem, albo gdy jest spór, kto nim jest. Brak pieniędzy u dłużnika nie jest podstawą depozytu.")

R="16. Przedawnienie"
slajd(R,R,[],"Rozdział szesnasty. Przedawnienie.","rozdzial")
slajd(R,"Istota przedawnienia",[
"roszczenie **nie wygasa** – staje się **naturalne**",
"dłużnik może się **uchylić** (zarzut)",
"zapłata po przedawnieniu – **ważna**, bez zwrotu",
"zrzeczenie się zarzutu **przed** upływem – **nieważne**",
"wobec **konsumenta** – sąd z urzędu"],
"Przedawnienie nie powoduje wygaśnięcia roszczenia. Roszczenie staje się naturalne, czyli niezaskarżalne. Dłużnik może się uchylić od zapłaty, podnosząc zarzut. Jeśli mimo to zapłaci, zapłata jest ważna i nie może żądać zwrotu. Tym różni się przedawnienie od terminu zawitego, po którym roszczenie wygasa. Zrzeczenie się zarzutu przedawnienia przed upływem terminu jest nieważne. Wobec konsumenta po upływie terminu nie można domagać się zapłaty, sąd bierze to pod uwagę sam.")
slajd(R,"Terminy (art. 118)",[
"**6 lat** – ogólnie",
"**3 lata** – działalność gospodarcza i świadczenia okresowe",
"koniec – **ostatni dzień roku**, chyba że termin **< 2 lat**",
"przykład: wymagalne 15.03.2024 → **31.12.2027**",
"umowa przedwstępna (1 rok): 10.05.2024 → **10.05.2025**"],
"Terminy przedawnienia. Ogólny termin to sześć lat. Dla roszczeń związanych z działalnością gospodarczą i dla świadczeń okresowych, na przykład czynszu, trzy lata. Koniec terminu przypada na ostatni dzień roku kalendarzowego, chyba że termin jest krótszy niż dwa lata. Przykład pierwszy: roszczenie firmy wymagalne piętnastego marca dwa tysiące dwadzieścia cztery. Trzy lata to piętnasty marca dwa tysiące dwadzieścia siedem, a potem koniec roku, czyli trzydziesty pierwszy grudnia dwa tysiące dwadzieścia siedem. Przykład drugi: roczny termin z umowy przedwstępnej, od dziesiątego maja dwa tysiące dwadzieścia cztery. Kończy się dziesiątego maja dwa tysiące dwadzieścia pięć, bez przesuwania na koniec roku.")
slajd(R,"Bieg, zawieszenie, przerwa",[
"start: **wymagalność**; brak wezwania → **hipotetyczna** wymagalność",
"**zawieszenie** – potem biegnie **dalej**: mediacja, **zawezwanie do próby ugodowej**, siła wyższa",
"**przerwa** – potem biegnie **od nowa**: pozew, egzekucja, **uznanie**",
"uznanie **niewłaściwe** (prośba o raty) też przerywa",
"zwykłe wezwanie do zapłaty – **nic nie przerywa**"],
"Przedawnienie biegnie od wymagalności. Jeżeli wierzyciel nie wezwał dłużnika, liczy się hipotetyczna wymagalność, czyli dzień, w którym roszczenie byłoby wymagalne, gdyby wezwał jak najwcześniej. Zawieszenie: po ustaniu przyczyny termin biegnie dalej. Zawieszają go mediacja, zawezwanie do próby ugodowej i siła wyższa. Przerwa: po niej termin biegnie od nowa. Przerywają go pozew, wniosek egzekucyjny i uznanie długu. Także uznanie niewłaściwe, na przykład prośba o rozłożenie na raty. Pułapka: zawezwanie do próby ugodowej zawiesza, a nie przerywa. A zwykłe wezwanie do zapłaty niczego nie przerywa.")

R="17. Odpowiedzialność i odsetki"
slajd(R,R,[],"Rozdział siedemnasty. Odpowiedzialność kontraktowa i odsetki.","rozdzial")
slajd(R,"Odpowiedzialność (art. 471–474)",[
"zasada **winy** – wina **domniemana**, dowodzi **dłużnik**",
"przesłanki: niewykonanie, **szkoda**, **związek przyczynowy**",
"można **rozszerzyć** (gwarancja) albo ograniczyć – ale **nie za umyślność**",
"za pomocników – **ryzyko** jak za siebie; brak winy w wyborze **nie zwalnia**"],
"Odpowiedzialność kontraktowa opiera się na winie. Wina dłużnika jest domniemana, więc to dłużnik musi wykazać, że nie zawinił. Przesłanki to niewykonanie albo nienależyte wykonanie, szkoda i związek przyczynowy. Odpowiedzialność można rozszerzyć, na przykład do gwarancyjnej, albo ograniczyć, ale nie można wyłączyć odpowiedzialności za szkodę wyrządzoną umyślnie. Za osoby, którymi się posługuje, dłużnik odpowiada jak za siebie, na zasadzie ryzyka. Brak winy w wyborze pomocnika go nie zwalnia.")
slajd(R,"Odsetki",[
"za **opóźnienie** – nawet bez szkody i bez winy",
"ustawowe za opóźnienie: stopa referencyjna **+ 5,5 pp**",
"kapitałowe: stopa referencyjna **+ 3,5 pp**",
"maksymalne: **2 ×** ustawowe; nadwyżka → należą się maksymalne, umowa **ważna**",
"**zwłoka** = opóźnienie zawinione → także **odszkodowanie**"],
"Odsetki za opóźnienie należą się nawet wtedy, gdy wierzyciel nie poniósł szkody, i nawet gdy dłużnik nie zawinił. Wystarczy opóźnienie. Odsetki ustawowe za opóźnienie to stopa referencyjna plus pięć i pół punktu procentowego. Odsetki kapitałowe to stopa referencyjna plus trzy i pół. Odsetki maksymalne to dwukrotność odsetek ustawowych. Jeśli umowa przewiduje więcej, należą się odsetki maksymalne, a umowa jest ważna. Zwłoka to opóźnienie zawinione. Przy zwłoce wierzyciel może żądać także odszkodowania.")

R="18. Kara umowna"
slajd(R,R,[],"Rozdział osiemnasty. Kara umowna.","rozdzial")
slajd(R,"Kara umowna (483–484)",[
"tylko zobowiązania **niepieniężne**",
"należy się **bez względu na szkodę** (III CZP 61/03)",
"wina **domniemana** – dłużnik może się bronić brakiem winy",
"kara **gwarancyjna** – tylko gdy strony zapiszą to **wyraźnie**",
"model kodeksowy: kara **wyłączna**"],
"Karę umowną można zastrzec tylko przy zobowiązaniach niepieniężnych. Przy pieniądzach są odsetki. Kara należy się bez względu na szkodę, to jest teza uchwały III CZP 61 z 2003 roku. Wierzyciel wykazuje tylko niewykonanie albo nienależyte wykonanie i zastrzeżenie kary. Wina dłużnika jest domniemana, więc dłużnik może się bronić brakiem winy. Chyba że strony wyraźnie nadały karze charakter gwarancyjny. W modelu kodeksowym kara jest wyłączna: odszkodowania ponad karę można żądać tylko wtedy, gdy strony tak ustaliły.")
slajd(R,"Wysokość, kumulacja, miarkowanie",[
"III CZP 16/21: **procent za każdy dzień** zwłoki – **dopuszczalny**, nawet bez maksimum",
"liczy się, czy da się karę **obliczyć**",
"kumulacja za to samo zdarzenie – **niedopuszczalna**",
"miarkowanie: wykonane w **znacznej części** albo **rażąco wygórowana**",
"tylko na **zarzut** dłużnika; art. 5 ≠ miarkowanie"],
"Wysokość kary. Uchwała III CZP 16 z 2021 roku: dopuszczalna jest kara w procentach wynagrodzenia za każdy dzień zwłoki, nawet bez kwoty maksymalnej i bez terminu końcowego. Liczy się to, czy strony i sąd mogą karę obliczyć. Kumulacja kar za to samo zdarzenie jest niedopuszczalna. Kara za odstąpienie i kara za nienależyte wykonanie mogą istnieć obok siebie, jeśli dotyczą różnych zdarzeń. Miarkowanie, czyli zmniejszenie kary, jest możliwe, gdy zobowiązanie wykonano w znacznej części albo kara jest rażąco wygórowana. Sąd miarkuje tylko na zarzut dłużnika. Zarzut nadużycia prawa z artykułu pięć to inny zarzut niż miarkowanie.")

R="19. Najczęstsze pułapki"
slajd(R,R,[],"Rozdział dziewiętnasty. Najczęstsze pułapki w teście. Spróbuj odpowiedzieć w myślach, zanim usłyszysz odpowiedź.","rozdzial")
slajd(R,"Pułapki – część 1",[
"odwołanie oferty B2B: granica to **wysłanie** przyjęcia",
"wadium: **albo** podwójne, **albo** odszkodowanie",
"poufność: szkoda **albo** wydanie korzyści",
"zawezwanie do próby ugodowej **zawiesza**",
"po przerwie termin biegnie **od nowa**"],
"Pułapki, część pierwsza. Odwołanie oferty między przedsiębiorcami: granicą jest wysłanie przyjęcia, a nie jego dojście. Przy wadium i przy tajemnicy negocjacji jest albo, a nie i. Zawezwanie do próby ugodowej zawiesza bieg przedawnienia. Po przerwie termin biegnie od nowa, po zawieszeniu biegnie dalej.")
slajd(R,"Pułapki – część 2",[
"art. 74 § 2 – wyjątek dla **konsumenta**, nie przedsiębiorcy",
"prenumerata – prawo odstąpienia **jest**",
"umowa przedwstępna – przedawnienie **1 rok**",
"kara umowna – szkoda **nie jest** przesłanką",
"osoba prawna – **nigdy** konsument"],
"Pułapki, część druga. Wyjątek dowodowy z artykułu siedemdziesiąt cztery ma konsument, a nie przedsiębiorca. Przy prenumeracie prawo odstąpienia jest. Roszczenia z umowy przedwstępnej przedawniają się po roku. Szkoda nie jest przesłanką kary umownej. Osoba prawna nigdy nie jest konsumentem. To już wszystko. Teraz przećwicz to w aplikacji z testami, w trybie Nauka. Powodzenia na kolokwium!")
