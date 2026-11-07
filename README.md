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

## Tekeningen

- `huis-schets1.jpg`: het trolhuis
- `personen-schets1.jpg`: de bezoekers (de onderste is zeldzaam)
- `kamers-schets1.jpg` en `kamers-schets2.jpg`: de kamers

## Nieuwe versie uitbrengen

Verhoog `VERSION` in `sw.js` (bijvoorbeeld `trolhuizen-v1` → `trolhuizen-v2`) en push naar `main`.
Spelers met de app krijgen dan de melding **Er is een nieuwe versie!** en werken met één tik bij.

## Handig bij het testen

- `?reset`: opnieuw beginnen
- `?zeldzaam`: de zeldzame bezoeker komt meteen
