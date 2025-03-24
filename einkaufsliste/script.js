const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");

// light-dark mode
const modeLight = document.getElementById("modeLight");
const modeDark = document.getElementById("modeDark")
const bodyIdJs = document.getElementById("bodyId");
modeLight.addEventListener("click", () => {
    bodyIdJs.style.backgroundColor = "white";
    bodyIdJs.style.color = "black";
    modeLight.style.visibility = "hidden";
    modeDark.style.visibility = "visible"
})

modeDark.addEventListener("click", () => {
    bodyIdJs.style.backgroundColor = "black";
    bodyIdJs.style.color = "white";
    modeLight.style.visibility = "visible";
    modeDark.style.visibility = "hidden"


})

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
    const artikel = artikelInput.value;
    const anzahl = anzahlInput.value;
    const preis = preisInput.value;
    if (!artikel || !anzahl || !preis) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }
    // Neues Element erstellen und in die Liste einfügen
    const new_li = document.createElement("li");

    new_li.textContent = `${anzahl} x ${artikel}: ${preis}€ l'unité ------ ${anzahl * preis}€`;




    // Füge einen Löschen Button hinzu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
        liste.removeChild(new_li);
        gesamtPreis -= anzahl * preis;
        updatePreis();
    })

    // Dropdown-Menü Kategorie
    const kategorieInput = document.getElementById("kategorie");
    const kategorie = kategorieInput.value;
    let emoji = "";
    if (kategorie === "obst") emoji = "🍎";
    else if (kategorie === "gemuese") emoji = "🥦";
    else if (kategorie === "drogerie") emoji = "🧴";
    else if (kategorie === "konserven") emoji = "🥫";
    else if (kategorie === "getraenke") emoji = "🍾";
    else if (kategorie === "gebaeck") emoji = "🍞";
    else if (kategorie === "krams") emoji = "🕹️";
    new_li.textContent = `${emoji} ${anzahl} x ${artikel}: ${preis}€ l'unité ------ ${anzahl * preis}€`;

    //Checkbox erstellen
    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.addEventListener("change", updatePreis);

    //button löschen
    const deletbutton = document.getElementById("deletbutton");
    deletbutton.addEventListener("click", () => {
        liste.remove();
        updatePreis();
    })


    new_li.appendChild(deleteButton);
    new_li.appendChild(Checkbox);
    liste.appendChild(new_li);

    // Gesamtpreis aktualisieren
    gesamtPreis += anzahl * preis;
    updatePreis();

    // Inputfelder leeren
    artikelInput.value = "";
    anzahlInput.value = "";
    preisInput.value = "";

}
)

function updatePreis() {
    gesamtPreis = 0;

    document.querySelectorAll("#liste li").forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        const priceText = item.textContent.split("------")[1].replace("€", "");


        if (checkbox.checked) {
            gesamtPreis += parseFloat(priceText);
        }
    });

    // Mise à jour du prix total affiché
    gesamt.textContent = `Total : ${gesamtPreis}€`;
}

    // Enter-Taste
    var input = document.getElementById("preis");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addButton").click();
    }
    });
