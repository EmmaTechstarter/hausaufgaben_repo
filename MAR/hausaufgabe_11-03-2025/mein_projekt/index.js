const express = require('express'); // Express importieren
const app = express(); // Express-App erstellen
const port = 3000; // Port festlegen

// Route 1: "/" → Gibt "Hello world!" zurück
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Route 2: "/content" → Gibt HTML als String zurück
app.get('/content', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meine Express-Seite</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color:rgb(255, 0, 200); }
            </style>
        </head>
        <body>
            <h1>Willkommen auf meiner "ich hoffe es klappt" Seite!</h1>
            <p>Hier sind meine Hausaufgaen lol</p>
        </body>
        </html>
    `);
});

// Route 3: "/api/data" → Gibt JSON-Daten zurück
app.get('/api/data', (req, res) => {
    res.json({
        fullName: "Emma",
        age: 25
    });
});

// Server starten
app.listen(port, () => {
    console.log(`Server sollte laufen auf http://localhost:${port}`);
});
