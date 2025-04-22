import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // useState-Hooks
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  const [bgColor, setBgColor] = useState("lightblue");

  useEffect(() => {
    console.log("Seite wurde geladen!");
  }, []);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  const toggleColor = () => {
    setBgColor((prev) => (prev === "lightblue" ? "lightgreen" : "lightblue"));
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h1>React Hooks Übung</h1>

      <button onClick={() => setCount(count + 1)}>Klick mich!</button>
      <p>Du hast {count} Mal geklickt.</p>

      <button onClick={toggleText}>Text ein-/ausblenden</button>
      {showText && <p>Hier ist ein bisschen Text 🎉</p>}

      <button onClick={toggleColor}>Hintergrundfarbe wechseln</button>
    </div>
  );
}

export default App;
