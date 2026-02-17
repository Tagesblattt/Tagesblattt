HowTo: Neue Artikel hinzufügen (Seed-Wörter verwenden)

Es handelt sich bei diesem Projekt um ein lustiges und auch skuriles fiktives online-Magazin, 
in dem Stories in Artikeln erzählt werden, im Stil einer professionellen Redaktion. 

Ziel
- Neue Artikel automatisch mit seed_words.js themenbasiert generieren und zur Webseite hinzufügen.

Voraussetzungen
- Node.js ist installiert (seed_words.js läuft damit).
- Die Website-Struktur: /home/user/magazin, Dateien für dich wichtig: articles.js, seed_words.js.

Schritte

1) Zufällige Wörter generieren
- Führe `node seed_words.js` aus, um zufällige Seed-Wörter zu erhalten.

2) Thema und Titel aus den Wörtern ableiten

3) Neuen Artikel in articles.js hinzufügen 
- Jeder Artikel liegt im Array, in folgendem Format: 

{
    id: <Nummer>,
    title: "<Titel deines Artikels>",
    summary: "<Kurze Einleitung zum Artikel>",
    author: "<Denke dir einen Namen aus>",
    date: "<Zufälliges Datum dieses Monats>",
    category: "<Kategorie zu deinem Artikel>",
    bild: "https://picsum.photos/800/400",
    content: `<Dein Artikel. Verwende HTML tags für Zeilenumbrüche und Absätze. >`
}

### WICHTIG - SO FÜGST DU EINEN NEUEN ARTIKEL HINZU:

1. Öffne articles.js
2. Suche die Stelle mit `];` am Ende des articles-Arrays
3. Füge deinen neuen Artikel VOR dem `];` ein
4. Gib dem neuen Artikel eine neue ID (höchste bestehende ID + 1)

### STRENG VERBOTEN:
- ❌ Lösche KEINE bestehenden Artikel
- ❌ Überschreibe KEINE bestehenden Einträge  
- ❌ Verwende NICHT "replaceAll" oder类似的批量替换工具
- ❌ Bearbeite nicht bestehende Artikel, füge nur NEUE hinzu

### RICHTIG:
```javascript
const articles = [
  // ... bestehende Artikel ...
  {
    id: 99,  // <-- NEUER ARTIKEL: neue ID, komplett neuer Eintrag
    title: "Neuer Titel",
    // ...
  }           // <-- HIER das Komma nicht vergessen, wenn weitere Artikel folgen
];            // <-- Das ]; bleibt am Ende!
```

### FALSCH (NICHT MACHEN!):
```javascript
// FALSCH - Nicht bestehende Artikel löschen!
const articles = [
  {
    id: 99,
    // neuer Artikel
  }
];            // <-- Andere Artikel wurden gelöscht - DAS IST FALSCH!
```

4) Bilder sicherstellen
- Jedes Artikelobjekt sollte ein Feld `bild` besitzen.
- Als Feld nutze: bild: "https://picsum.photos/800/400"

Hinweise
- Die Seed-Wörter dienen nur der Ideengenerierung. Verarbeite die Wörter in einen kohärenten, humorvollen Text, im Stil eines Redakteurs. 
- Keine bekannten Personen, Firmenmarken, Vereine verwenden. Der Text soll nicht bekannte Events oder Festivals und dergleichen erwähnen. 
- Achte darauf, dass der HTML-Inhalt in `content` gut formatiert ist (Überschriften, Absätze, ggf. Bilder/Links).
- Falls du mehrere neue Artikel hinzufügen willst (max 5), wiederhole die Schritte 1–4 entsprechend.

5) Deinen Artikel zu github hochladen

- Führe am Ende deiner Arbeit einen git commit und push durch:

cd /home/user/magazin/
git add articles.js && git commit -m "Neuer Artikel" && git push
