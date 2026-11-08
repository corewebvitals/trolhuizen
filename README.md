# Trolhuizen

Een spel waarin je trolhuizen op een grasveld bouwt en iedereen trolt die langskomt.
Alle huizen, personen en kamers komen uit de tekeningen in deze map.

## Spelen

Speel online op **https://corewebvitals.github.io/trolhuizen/** of open `index.html` in een browser.

Het spel werkt met muis en toetsenbord én met een touchscreen. Je kunt het installeren als app:
in Chrome of Edge met de knop **Installeren** in het spel, op een iPhone of iPad via **Deel → Zet op beginscherm**.
Na de eerste keer werkt het ook zonder internet.

- **Buiten:** bouw trolhuizen (70 $). Wie langs een huis loopt, wordt getrold en dat levert munten op.
  Soms komt er een zeldzame bezoeker langs, die is 25 $ waard.
- **Werelden:** wissel bovenin tussen de **Trolwereld** (grasveld), de **Heksenwereld** (paarse grond, maan,
  heksenhuizen met een hoed als dak en een heksenhoed met een bloem ernaast) en de **WC Poepier Wereld**
  (lucht van blauw krijt, bruine grond, vallende poepjes, bloemen met een gezichtje en WC-huizen met oogjes,
  blauw water en een poppetje in de wc). Elke wereld heeft zijn eigen huizen.
- **Bezoekers:** in de Trolwereld lopen het blonde meisje, het regenboogmeisje en de jongen met het tasje;
  in de Heksenwereld het heksje, de hond en de kat (alle drie met een heksenhoed);
  in de WC Poepier Wereld het meisje, de jongen, de ballerina, de hond, de kat en de drolletjemeneer
  (de meisjes, de hond en de kat dragen een haarband met een poepje erop).
  De zeldzame bezoeker met de paraplu mag in allebei de werelden komen.
- **Binnen:** koop kamers voor een huis en loop zelf het parcours door.
  Gebruik ← → om te lopen en ↑ of spatie om te springen. Op een telefoon verschijnen knoppen.

## Kamers

| Kamer | Prijs | Wat moet je doen |
|---|---|---|
| Hindernis | 10 $ | over vier trolballen in het slijm springen |
| Trampoline | 20 $ | op een schuivende trampoline blijven |
| Weg | 2 $ | over een plank rennen die afbrokkelt |
| Touw | 7 $ | over een touw lopen en je evenwicht houden |
| Spinnen | 8 $ | onder de spinnen door lopen zonder ze of hun draad te raken |
| Schommel | 8 $ | van de schommel springen voordat de vliegende schaar het touw doorknipt |
| Vallende hoed | 8 $ | onder drie hoeden door rennen; wacht je te lang, dan val je eronder |
| Ogen dicht | 10 $ | alleen lopen als het meisje haar ogen dicht heeft, anders word je een kikker |
| Toverdrank | 15 $ | tegen de plank springen onder de goede ingrediënten, in de volgorde van het recept |
| Ballon | 20 $ | met je poppetje in een ballon alle 6 heksenhoedjes wegbeuken binnen 30 seconden (één tik = weg) |
| Frisdrank | 12 $ | binnen 15 seconden alle 7 blikjes opdrinken (twee staan op een plank, daarvoor moet je springen); dan scheet je de kamer uit, over het hek |
| Scheten | 15 $ | op de grote drol zitten en zo snel mogelijk op spatie of 💨 drukken: elke scheet blaast de vliegende poepjes terug, jaag er 12 weg |

## Tekeningen

- `huis-schets1.jpg`: het trolhuis
- `personen-schets1.jpg`: de bezoekers (de onderste is zeldzaam)
- `kamers-schets1.jpg`, `kamers-schets2.jpg`, `kamers-schets-3.jpg` en `kamers-schets4.jpg`: de kamers (schets 4 ligt op zijn kant)
- `personen-schets2-heksenwereld.jpg`: de bezoekers van de heksenwereld (ligt op zijn kant)
- `wereld-huis-schets2-(heksenwereld).jpg`: de heksenwereld met het voorbeeldhuis (ligt op zijn kop)
- `wereld-hus-schets3(wcpoepeiwereld).jpg`: de WC Poepier Wereld met het WC-huis nummer 68 (ligt op zijn kant)
- `personen-schets-3-poepjeswereld.jpg`: de bezoekers van de WC Poepier Wereld (ligt op zijn kant)

## Nieuwe versie uitbrengen

Verhoog `VERSION` in `sw.js` (bijvoorbeeld `trolhuizen-v1` → `trolhuizen-v2`) en push naar `main`.
Spelers met de app krijgen dan de melding **Er is een nieuwe versie!** en werken met één tik bij.

## Handig bij het testen

- `?reset`: opnieuw beginnen
- `?zeldzaam`: de zeldzame bezoeker komt meteen
