const express = require("express");
const generateName = require("sillyname");
const app = express();

app.get("/", (req, res) => {
  res.send("Willkommen bei meiner eigenen API!");
});

app.get("/data", (req, res) => {
  res.json([
    { id: 1, name: "Max" },
    { id: 2, name: "Lena" }
  ]);
});

app.get("/name", (req, res) => {
  const name = generateName();
  res.send(`Zufälliger Name: ${name}`);
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});