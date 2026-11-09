# Trolhuizen

Dit spel staat op twee computers:

- de Linux-laptop: `~/Documents/phileine`
- de Mac (ssh-alias `mac`): `~/Sites/trolhuizen`

Beide pushen naar `main` op GitHub (corewebvitals/trolhuizen), en dat is meteen de live site.

## Altijd eerst `git pull`

Begin elke sessie, en elke nieuwe opdracht, met `git pull`: de andere computer kan intussen gepusht hebben.
Pull ook vlak voor een commit. Gaat de pull niet vanzelf goed (bijvoorbeeld door een conflict), stop dan en vraag het aan Arjen; los het niet zelf op met force of reset.

Nieuwe tekeningen kunnen op allebei de computers in de map komen te staan. Zie je een tekening die er niet hoort, kijk dan of hij op de andere computer al verwerkt is (`git log`).

## Pushen

Push alleen als Arjen erom vraagt. Verhoog bij elke nieuwe versie `VERSION` in `sw.js`.
