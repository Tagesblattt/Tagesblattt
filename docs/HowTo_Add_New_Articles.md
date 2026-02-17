HowTo: Neue Artikel hinzufügen (Seed-Wörter verwenden)

Ziel
- Neue Artikel automatisch mit seed_words.js themenbasiert generieren und zur Webseite hinzufügen. Jedes Artikelbild nutzt ein Picsum-Bild.

Voraussetzungen
- Node.js ist installiert (seed_words.js läuft damit).
- Die Website-Struktur: /home/user/magazin, bestehende Dateien: articles.js, index.html, seed_words.js.
- Internetzugang, um Picsum-Bilder abzurufen.

Schritte

1) Zufällige Wörter generieren
- Führe `node seed_words.js 5` aus, um 5 zufällige Seed-Wörter zu erhalten.

2) Thema und Titel aus den 5 seed_words.js Wörtern ableiten

3) Neuen Artikel in articles.js hinzufügen
- Füge den neuen Artikel am Ende des articles-Arrays hinzu.
- Vergib eine neue eindeutige ID (höchste ID + 1).

4) Bilder sicherstellen
- Jedes Artikelobjekt sollte ein Feld `bild` besitzen.
- Für ein zufälliges neues Bild bei jedem Aufruf: bild: "https://picsum.photos/400/300"

Hinweise
- Die Seed-Wörter dienen nur der Ideengenerierung. Verarbeite die Wörter in einen kohärenten, humorvollen Text. Keine bekannten Personen, Firmenmarken, Vereine verwenden. Der Text soll nicht bekannte Events oder Festivals und dergleichen erwähnen. 
- Achte darauf, dass der HTML-Inhalt in `content` gut formatiert ist (Überschriften, Absätze, ggf. Bilder/Links).
- Falls du mehrere neue Artikel hinzufügen willst, wiederhole die Schritte 1–4 entsprechend.
- Die index.html verteilt die Artikel automatisch: Die 7 neuesten (höchste IDs) werden angezeigt, der Rest wandert ins Archiv.
