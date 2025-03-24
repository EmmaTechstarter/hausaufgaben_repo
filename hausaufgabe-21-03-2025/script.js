let zufallszahl = Math.floor(Math.random() * 10) + 1;
let versuch = 0;

function rateZahl() {
    let nutzerEingabe = parseInt(document.getElementById("eingabe").value);
    versuch++;
    let ausgabe = document.getElementById("ausgabe");
    
    if (nutzerEingabe === zufallszahl) {
        ausgabe.innerHTML = `Glückwunsch! Du hast die richtige Zahl (${zufallszahl}) in ${versuch} Versuchen erraten!`;
    } else if (nutzerEingabe > zufallszahl) {
        ausgabe.innerHTML = "Die Zahl ist zu hoch! Versuche es erneut.";
    } else if (nutzerEingabe < zufallszahl) {
        ausgabe.innerHTML = "Die Zahl ist zu niedrig! Versuche es erneut.";
    } else {
        ausgabe.innerHTML = "Bitte gib eine gültige Zahl ein!";
    }
}
