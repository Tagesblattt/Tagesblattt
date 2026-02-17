HowTo: Neue Artikel hinzufügen (Seed-Wörter verwenden)

Es handelt sich bei diesem Projekt um ein lustiges und auch skuriles fiktives online-Magazin, in dem Stories in Artikeln erzählt werden, im Stil einer professionellen Redaktion. 

Ziel
- Neue Artikel automatisch mit seed_words.js themenbasiert generieren und zur Webseite hinzufügen. Jedes Artikelbild nutzt ein Picsum-Bild.

Voraussetzungen
- Node.js ist installiert (seed_words.js läuft damit).
- Die Website-Struktur: /home/user/magazin, Dateien für dich wichtig: articles.js, seed_words.js.

Schritte

1) Zufällige Wörter generieren
- Führe `node seed_words.js` aus, um zufällige Seed-Wörter zu erhalten.

2) Thema und Titel aus den Wörtern ableiten

3) Neuen Artikel in articles.js hinzufügen 
- Jeder Artikel liegt im articles Array, in folgendem Format: 

{
    id: <Nummer>,
    title: "<Titel deines Artikels>",
    summary: "<Kurze Einleitung zum Artikel>",
    author: "<Denk dir einen Namen aus>",
    date: "<Zufälliges Datum dieses Monats>",
    category: "<Welche Kategorie passt zu deinem Artikel>",
    bild: "platzhalter.jpg",
    content: `<Dein Artikel. Verwende HTML tags für Zeilenumbrüche und Absätze. Anführungszeichen escapen (/"). >`
}

 - Füge deinen neuen Artikel am Ende des articles-Arrays hinzu, VOR dem schließenden `];`.
 - Vergib eine neue eindeutige ID (höchste ID + 1).
 - Belasse andere article Einträge unverändert. 
 - WICHTIG: Überschreibe keine bestehenden Einträge, füge nur neue hinzu!

Beispiel für korrektes Einfügen:
```javascript
const articles = [
  {
    id: 13,
    // ... bestehender Artikel
  },
  {
    id: 14,  // NEUER ARTIKEL HIER EINFÜGEN
    // ...
  }
];
```

4) Bilder sicherstellen
- Jedes Artikelobjekt sollte ein Feld `bild` besitzen.
- Als Feld nutze  bild: "platzhalter.jpg"

Hinweise
- Die Seed-Wörter dienen nur der Ideengenerierung. Verarbeite die Wörter in einen kohärenten, humorvollen Text, im Stil eines Redakteurs. 
- Keine bekannten Personen, Firmenmarken, Vereine verwenden. Der Text soll nicht bekannte Events oder Festivals und dergleichen erwähnen. 
- Achte darauf, dass der HTML-Inhalt in `content` gut formatiert ist (Überschriften, Absätze, ggf. Bilder/Links).
- Falls du mehrere neue Artikel hinzufügen willst (max 5), wiederhole die Schritte 1–4 entsprechend.

5) Deinen Artikel zu github hochladen

- Führe am Ende deiner Arbeit einen git commit und push durch:
cd /home/user/magazin/
$ git add articles.js && git commit -m "" && git push
