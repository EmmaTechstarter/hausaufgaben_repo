const express = require("express");
const app = express();
app.use(express.json());

let chars = [
    { id: 1, name: "Kodlak Whitemane", rasse: "Nord", alter: 69 },
    { id: 2, name: "Farkas", rasse: "Nord", alter: 35 },
    { id: 3, name: "Vilkas", rasse: "Nord", alter: 35 },
    { id: 4, name: "Aela die Jägerin", rasse: "Nord", alter: 32 },
    { id: 5, name: "Skjor", rasse: "Nord", alter: 40 },
    { id: 6, name: "Njada Stonearm", rasse: "Nord", alter: 28 },
    { id: 7, name: "Torvar", rasse: "Nord", alter: 30 },
    { id: 8, name: "Ria", rasse: "Kaiserlicher", alter: 25 },
    { id: 9, name: "Tilma die Häscherin", rasse: "Nord", alter: 76 },
    { id: 10, name: "Eorlund Graumähne", rasse: "Nord", alter: 55 },
    { id: 11, name: "Vignar Graumähne", rasse: "Nord", alter: 72 },
    { id: 12, name: "Brill", rasse: "Nord", alter: 60 },
    { id: 13, name: "Athis", rasse: "Dunmer", alter: 33 },
    { id: 14, name: "Hamal", rasse: "Bretonin", alter: 45 },
    { id: 15, name: "Sotek", rasse: "Argonier", alter: 29 }
  ];
  

// 1. GET /chars → Liste aller Charaktere
app.get("/chars", (req, res) => {
  res.json(chars);
});

// 2. GET /chars/search?rasse=Nord → Filtert nach Rasse
app.get("/chars/search", (req, res) => {
  const { rasse } = req.query;
  const result = chars.filter(c => c.rasse.toLowerCase() === rasse.toLowerCase());
  res.json(result);
});

// 3. GET /chars/:id → Gibt Charakter mit bestimmter ID zurück
app.get("/chars/:id", (req, res) => {
  const char = chars.find(c => c.id === parseInt(req.params.id));
  if (char) {
    res.json(char);
  } else {
    res.status(404).json({ error: "Charakter nicht gefunden" });
  }
});

// 4. POST /chars → Neuen Charakter hinzufügen
app.post("/chars", (req, res) => {
  const { name, rasse, alter } = req.body;
  const id = chars.length > 0 ? chars[chars.length - 1].id + 1 : 1;
  const neuerChar = { id, name, rasse, alter };
  chars.push(neuerChar);
  res.status(201).json(neuerChar);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
