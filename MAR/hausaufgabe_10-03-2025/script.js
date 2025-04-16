// my_list soll auf der Website dargestellt werden
let my_list = [];

// createHTMLList nimmt ein Javascript Array und gibt einen String für eine
// ungeordnete HTML Liste zurück
function createHTMLList(liste) {
    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`);
    let flattenedList = htmlElements.join("");
    let ergebnis = `<ul>${flattenedList}</ul>`;
    return ergebnis;
}

// setListContent setzt den Inhalt des "liste"-div auf das Ergebnis eines createHTMLList(my_list) Aufrufs
function setListContent() {
    let listDiv = document.getElementById("liste");
    let content = createHTMLList(my_list);
    listDiv.innerHTML = content;
}

// setUserInputList liest das Eingabefeld und rendert die Liste daraus
function setUserInputList() {
    let userInput = document.getElementById("userInput");
    let text = userInput.value;
    let textList = text.split(",");
    my_list = my_list.concat(textList.map(item => item.trim()));
    setListContent();
}

// Fügt ein einzelnes Element zur Liste hinzu
function addSingleItem() {
    let singleItemInput = document.getElementById("singleItemInput");
    let item = singleItemInput.value.trim();
    if (item) {
        my_list.push(item);
        setListContent();
        singleItemInput.value = ""; // Input leeren
    }
}

// Entfernt das letzte Element der Liste
function removeLastItem() {
    if (my_list.length > 0) {
        my_list.pop();
        setListContent();
    }
}

// Funktion zum Umschalten zwischen zwei Themes
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
