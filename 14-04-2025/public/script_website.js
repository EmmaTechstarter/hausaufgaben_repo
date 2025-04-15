const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")

// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://127.0.0.1:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});

const tierForm = document.getElementById("tier_form");

tierForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(tierForm);
  const tier = {
    tierart: formData.get("tierart"),
    name: formData.get("name"),
    krankheit: formData.get("krankheit"),
    age: parseInt(formData.get("age")),
    gewicht: parseFloat(formData.get("gewicht"))
  };

  const response = await fetch("http://127.0.0.1:3000/tiere", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tier)
  });

  if (response.ok) {
    alert("Tier hinzugefügt!");
    tierForm.reset();
  } else {
    alert("Fehler beim Hinzufügen.");
  }
});
