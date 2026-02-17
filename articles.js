const articles = [
  {
    id: 0,
    title: "Der Mann mit der Fiber-Hand",
    summary: "Wie Klaus seine Hand gegen eine Glasfaser tauschte und zum lebenden WLAN wurde.",
    author: "Helmut Der-Wunderliche",
    date: "17.02.2026",
    category: "Skurril",
    bild: "platzhalter.jpg",
    content: `
      <p>Es war ein normaler Dienstagmorgen, als Klaus Petersen aus Bad Tölz einen schrecklichen Unfall hatte. Er stolperte über seine eigene Katze "Fiber" und landete mit der rechten Hand in einer Glasfaser-Trommel beim lokalen Internetanbieter.</p>
      <h2>Die unerwartete Option</h2>
      <p>Nach der Operation wachte Klaus mit einer erstaunlichen Entdeckung auf: Seine Hand konnte jetzt <strong>Farben swapen</strong>. Nicht nur das - sie funkte auch noch WLAN-Signale! "Ich bin jetzt meine eigene Hotspot", rief er begeistert aus, während seine Hand in 7 verschiedenen Farben pulsierte.</p>
      <h2>Der ultimative Händler</h2>
      <p>Was als Unfall begann, wurde zur Sensation. Klaus bot auf dem Schwarzmarkt "Hand-Optionen" an. Für 50 Euro konnte man seine Hand anfassen und bekam dafür gratis Internet für einen Monat. Die Nachfrage war überwältigend.</p>
      <h2>Das Ende einer Ära</h2>
      <p>Doch dann kam die Polizei. Anscheinend war das "Hand-Drahtlos-Netzwerk" nicht lizenziert. Klaus wurde verhaftet, seine Hand konfisziert und in ein Museum gebracht. Die Katze Fiber wurde unter Hausarrest gestellt.</p>
      <p><em>*Namen der redaktionellen Wahrheit angepasst. Keine echten Katzen wurden verletzt.</em></p>
    `
  },
  {
    id: 1,
    title: "Die Zukunft der Künstlichen Intelligenz",
    summary: "Wie KI unser tägliches Leben in den nächsten zehn Jahren verändern wird.",
    author: "Dr. Maria Schmidt",
    date: "15.02.2026",
    category: "Technologie",
    bild: "platzhalter.jpg",
    content: `
      <p>Die Künstliche Intelligenz hat in den letzten Jahren enorme Fortschritte gemacht. Von Sprachassistenten bis hin zu autonomen Fahrzeugen - die Technologie entwickelt sich rasant weiter.</p>
      <p>In diesem Artikel beleuchten wir die neuesten Entwicklungen und geben einen Ausblick auf die Zukunft. Experten prognostizieren, dass bis 2030 nearly jede Branche von KI durchdrungen sein wird.</p>
      <h2>Machine Learning im Alltag</h2>
      <p>Bereits heute nutzen wir täglich KI-basierte Anwendungen, ohne es zu merken. Von der automatischen Texterkennung in unseren Smartphones bis hin zu personalisierten Empfehlungen bei Streaming-Diensten.</p>
      <h2>Die ethischen Fragen</h2>
      <p>Mit der zunehmenden Verbreitung von KI stellen sich auch wichtige ethische Fragen. Wie gehen wir mit Datenschutz um? Wie stellen wir sicher, dass Algorithmen fair und unvoreingenommen sind?</p>
    `
  },
  {
    id: 2,
    title: "Nachhaltiges Bauen: Ökologische Materialien im Trend",
    summary: "Holz, Hanf und Recyclingbeton - nachhaltiges Bauen wird immer beliebter.",
    author: "Thomas Weber",
    date: "14.02.2026",
    category: "Architektur",
    bild: "platzhalter.jpg",
    content: `
      <p>Der Bausektor ist einer der größten Verursacher von CO2-Emissionen. Doch das ändert sich langsam. Immer mehr Architekten und Bauherren setzen auf ökologische Materialien.</p>
      <h2>Holz als Baustoff der Zukunft</h2>
      <p>Holz ist nicht nur CO2-neutral, sondern auch ein nachwachsender Rohstoff. Moderne Holzhybridbauweisen ermöglichen es, mehrstöckige Gebäude vollständig aus Holz zu konstruieren.</p>
      <h2>Recyclingbeton und innovative Dämmstoffe</h2>
      <p>Neue Betonrezepte mit recycelten Zuschlagstoffen reduzieren den ökologischen Fußabdruck erheblich. Auch Hanf, Stroh und andere Naturmaterialien werden zunehmend als Dämmstoffe eingesetzt.</p>
    `
  },
  {
    id: 3,
    title: "Die Renaissance des Zugreisens",
    summary: "Warum die Bahn wieder attraktiver wird und was die Deutsche Bahn plant.",
    author: "Anna Müller",
    date: "13.02.2026",
    category: "Reise",
    bild: "platzhalter.jpg",
    content: `
      <p>Nach Jahren des Kahlschlags im Fernverkehr erlebt die Deutsche Bahn eine Renaissance. Immer mehr Reisende entdecken die Vorzüge des Zugreisens neu.</p>
      <h2>Mehr Verbindungen, bessere Takte</h2>
      <p>Der Deutschlandtakt soll das Reisen mit der Bahn revolutionieren. Alle 30 Minuten sollen wichtige Städte miteinander verbunden sein.</p>
      <h2>Komfort und Technik</h2>
      <p>Neue ICE-Züge bieten mehr Komfort, besseres WLAN und moderne Bordrestaurants. Auch die App hat massive Verbesserungen erfahren.</p>
    `
  },
  {
    id: 4,
    title: "Gesunde Ernährung im Homeoffice",
    summary: "So bleiben Sie auch zuhause fit und ernähren sich ausgewogen.",
    author: "Lisa Bauer",
    date: "12.02.2026",
    category: "Gesundheit",
    bild: "platzhalter.jpg",
    content: `
      <p>Das Homeoffice bietet viele Vorteile, aber auch Herausforderungen für eine gesunde Ernährung. Der Kühlschrang ist immer griffbereit und die Mittagspause fällt oft aus.</p>
      <h2>Meal Prep am Wochenende</h2>
      <p>Eine der besten Strategien ist das Vorbereiten von Mahlzeiten am Wochenende. So hat man immer gesunde Optionen parat.</p>
      <h2>Bewegung nicht vergessen</h2>
      <p>Regelmäßige Bewegung ist im Homeoffice besonders wichtig. Kurze Gymnastikübungen und Spaziergänge sollten fest in den Tag eingeplant werden.</p>
    `
  },
  {
    id: 5,
    title: "Elektroautos: Der große Durchbruch",
    summary: "2026 - das Jahr in dem E-Autos endgültig mainstream werden.",
    author: "Michael Fischer",
    date: "11.02.2026",
    category: "Auto",
    bild: "platzhalter.jpg",
    content: `
      <p>Elektroautos sind längst keine Nische mehr. 2026 übersteigt der Marktanteil von E-Autos erstmals die 50-Prozent-Marke bei Neuzulassungen.</p>
      <h2>Neue Batterietechnologien</h2>
      <p>Festkörperbatterien versprechen doppelte Reichweite und deutlich kürzere Ladezeiten. Die ersten Modelle kommen noch dieses Jahr auf den Markt.</p>
      <h2>Ladeinfrastruktur wächst</h2>
      <p>Das Netz an Schnellladestationen wächst rasant. An immer mehr Autobahnraststätten und in Städten gibt es Ladepunkte.</p>
    `
  },
  {
    id: 6,
    title: "Kreatives Schreiben für Anfänger",
    summary: "Wie Sie anfangen, Ihre eigenen Geschichten zu schreiben.",
    author: "Julia Hartmann",
    date: "10.02.2026",
    category: "Kultur",
    bild: "platzhalter.jpg",
    content: `
      <p>Viele Menschen träumen davon, einmal ein Buch zu schreiben. Doch der Weg vom ersten Gedanken zum fertigen Manuskript scheint oft unüberbrückbar.</p>
      <h2>Schreiben Sie jeden Tag</h2>
      <p>Der wichtigste Tipp: Schreiben Sie regelmäßig. Selbst 15 Minuten täglich bringen Sie weiter als seltene Marathons.</p>
      <h2>Keine Angst vor dem ersten Entwurf</h2>
      <p>Der erste Entwurf ist nie perfekt - und das ist völlig in Ordnung. Überarbeiten kommt später.</p>
    `
  },
  {
    id: 7,
    title: "Garten planen für das Frühjahr",
    summary: "Jetzt ist die Zeit, den Garten für die kommende Saison vorzubereiten.",
    author: "Robert Klein",
    date: "09.02.2026",
    category: "Garten",
    bild: "platzhalter.jpg",
    content: `
      <p>Der Winter ist die Zeit der Planung. Wer im Frühling einen blühenden Garten haben möchte, sollte jetzt mit der Vorbereitung beginnen.</p>
      <h2>Boden vorbereiten</h2>
      <p>Sobald der Boden frostfrei ist, kann umgegraben und Kompost eingearbeitet werden. Das gibt den Pflanzen einen guten Start.</p>
      <h2>Frühjahrsblüher pflanzen</h2>
      <p>Tulpen, Narzissen und Krokusse müssen jetzt in die Erde. Auch Stauden können bereits gepflanzt werden.</p>
    `
  },
  {
    id: 9,
    title: "Rente mit 63: Was Sie wissen müssen",
    summary: "Die Regeln für die frühe Rente und wie Sie vorsorgen können.",
    author: "Peter Schulz",
    date: "07.02.2026",
    category: "Finanzen",
    bild: "platzhalter.jpg",
    content: `
      <p>Die Rente mit 63 bleibt ein wichtiges Thema. Doch die Regeln sind kompliziert und ändern sich ständig.</p>
      <h2>Abschläge verstehen</h2>
      <p>Wer vorzeitig in Rente geht, muss mit Abschlägen rechnen. Pro Jahr vor dem regulären Renteneintritt werden 3,6% abgezogen.</p>
      <h2>Private Vorsorge wird immer wichtiger</h2>
      <p>Die gesetzliche Rente allein reicht für viele nicht mehr. Riester-Rente, Betriebsrente und Aktien sind wichtige Säulen.</p>
    `
  },
  {
    id: 10,
    title: "Kochen mit saisonalen Produkten",
    summary: "Wintergemüse kreativ zubereiten - Rezepte für die kalte Jahreszeit.",
    author: "Claudia Meyer",
    date: "06.02.2026",
    category: "Kochen",
    bild: "platzhalter.jpg",
    content: `
      <p>Wintergemüse hat Saison und schmeckt am besten. Wir zeigen, wie Sie Kohl, Rüben und Co. kreativ zubereiten.</p>
      <h2>Rosenkohl neu entdeckt</h2>
      <p>Rosenkohl muss nicht nur gekocht werden. Geröstet mit Honig und Balsamico wird er zum Highlight.</p>
      <h2>Suppen für kalte Tage</h2>
      <p>Ein Klassiker: Cremige Kartoffelsuppe oder herzhafter Linseneintopf wärmen von innen.</p>
    `
  },
  {
    id: 11,
    title: "Sportwetten: Zwischen Spaß und Sucht",
    summary: "Wie man verantwortungsvoll mit Wetten umgeht.",
    author: "Martin Braun",
    date: "05.02.2026",
    category: "Gesellschaft",
    bild: "platzhalter.jpg",
    content: `
      <p>Sportwetten sind beliebt wie nie. Dank Online-Anbietern kann jeder jederzeit wetten. Doch die Suchtgefahr ist real.</p>
      <h2>Warnsignale erkennen</h2>
      <p>Wenn Wetten zur Obsession werden, ist Vorsicht geboten. Schulden und Beziehungsprobleme sind oft erste Anzeichen.</p>
      <h2>Setzen Sie sich Limits</h2>
      <p>Verantwortungsvolle Anbieter bieten Tools zur Selbstkontrolle. Nutzen Sie sie.</p>
    `
  },
  {
    id: 13,
    title: "Fiber Swap: Farben aus der Hand im Alltag",
    summary: "Ein skurriles Alltags-Abenteuer, das fast zu gut klingt, um wahr zu sein.",
    author: "Redaktion",
    date: "18.02.2026",
    category: "Skurril",
    bild: "https://picsum.photos/seed/3847/400/300",
    content: `
      <p>Es ist Montagmorgen. Jonas versucht, seinen Kaffee zu rühren, als sein Smartphone plötzlich den Bildschirm in bunte Muster taucht. Die Hand von Jonas scheint zu vibrieren – als hätte sie eine eigene WLAN-Verbindung. Mit einem kleinen Wischen bemerkt er, dass seine Hand die Farbe des Kaffeetassenschaums wechselt. Er nennt das Phänomen \"Fiber Swap\".</p>
      <p>Im Alltag will er nur frühstücken, doch der neue Trick fasziniert die Nachbarn: Die Tür wird von selbst aufgemacht, weil die Hand die Griffe in unterschiedliche Farben taucht. Die Post sendet bunte QR-Codes, und die Waschmaschine quiekt vor Freude, weil sie endlich ein Farbmuster hat, das sie erraten kann.</p>
      <p>Am Ende stellt sich heraus, dass es nicht um eine echte Superkraft geht, sondern um eine witzige Werbeaktion eines neuen Smartphones. Trotzdem erzählt Jonas die Geschichte so, als handle es sich um eine neue Alltags-Superpower – und alle lachen.</p>
    `
  }
];
