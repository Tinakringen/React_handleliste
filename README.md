# Arbeidskrav 2 - Handleliste

Dette prosjektet er utviklet som en del av Arbeidskrav 2 i emnet Utvikling av interaktive nettsider.
Applikasjonen er laget med React og demonstrerer grunnleggende bruk av komponenter, state og props.

## Beskrivelse
I denne applikasjonen skal brukere kunne:
- Legge til nye varer med navn og antall
- Se en liste over varer
- Håndtere antall direkte i listen
- Huke av varer som er kjøpt
Ved kjøring av applikasjonen vil listen allerede inneholde to forhåndsdefinerte varer, hvor en av de allerede er markert som kjøpt.

## Funksjonalitet
### Legge til vare:
Brukeren må fylle inn både vare og antall, feilmelding dukker opp hvis ett eller begge felt mangler.
Nye varer vil legges til øverst i listen.

### Handleliste:
Hver vare i listen skal inneholde navn, checkbox for å indikere om noe er kjøpt eller ikke, og antall, som kan direkte redigeres.
Det er ikke mulig å sette antall til 0 eller negative verdier.

## Komponenter
- App.jsx
- AddForm.jsx
- ShoppingList.jsx
- ShoppingItem.jsx

## Kjøring av prosjektet
1. Installer avhengigheter: npm install
2. Start server: npm run dev


Kode og struktur fra tidligere forelesninger er brukt som utgangspunkt i dette prosjektet.
Det er brukt Github Copilot og ChatGPT som støtteverktøy under utvikling.
