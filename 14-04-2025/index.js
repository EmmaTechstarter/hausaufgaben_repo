require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();

// Verbindung zu PostgreSQL über Umgebungsvariablen
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.use(express.json());
app.use(express.static("public"));

// Tabelle "tiere" erstellen, falls sie noch nicht existiert
pool.query(`CREATE TABLE IF NOT EXISTS tiere (
  id SERIAL PRIMARY KEY,
  tierart VARCHAR(50),
  name VARCHAR(50),
  krankheit VARCHAR(100),
  age INT,
  gewicht REAL
)`);

// Tiere abrufen
app.get("/tiere", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tiere");
    res.json(result.rows);
  } catch (err) {
    console.error("Fehler beim Abrufen:", err);
    res.status(500).send("Fehler beim Abrufen der Tiere");
  }
});

// Neues Tier hinzufügen
app.post("/tiere", async (req, res) => {
  const { tierart, name, krankheit, age, gewicht } = req.body;
  try {
    await pool.query(
      "INSERT INTO tiere (tierart, name, krankheit, age, gewicht) VALUES ($1, $2, $3, $4, $5)",
      [tierart, name, krankheit, age, gewicht]
    );
    res.status(201).send("Tier wurde erfolgreich hinzugefügt");
  } catch (err) {
    console.error("Fehler beim Hinzufügen:", err);
    res.status(500).send("Fehler beim Hinzufügen des Tiers");
  }
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});
