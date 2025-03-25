const typeToCity = {
    water: "Hamburg",
    fire: "München",
    grass: "Köln",
    electric: "Berlin",
    ice: "Flensburg",
    ground: "Leipzig",
    flying: "Frankfurt",
    poison: "Stuttgart",
    bug: "Bremen",
    rock: "Dresden",
    steel: "Wolfsburg",
    psychic: "Saarbrücken",
    ghost: "Bielefeld",
    dragon: "Augsburg",
    dark:"Chemnitz",
    fairy: "Göttingen",
    fighting: "Duisburg",
    normal: "Hannover"
  };

  async function fetchData() {
    const name = document.getElementById("pokemonInput").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
    resultBox.innerHTML = "";

    try {
      const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!pokeRes.ok) throw new Error("Pokémon nicht gefunden");
      const data = await pokeRes.json();

      const types = data.types.map(t => t.type.name);
      const height = data.height / 10; // in Meter
      const weight = data.weight / 10; // in Kilogramm

      let output = `<h2>${name.toUpperCase()}</h2>`;
      output += `<p><strong>Typ:</strong> ${types.join(", ")}</p>`;
      output += `<p><strong>Größe:</strong> ${height.toFixed(1)} m</p>`;
      output += `<p><strong>Gewicht:</strong> ${weight.toFixed(1)} kg</p>`;

      let weatherInfo = "";
      for (let type of types) {
        if (typeToCity[type]) {
          const city = typeToCity[type];
          const weatherRes = await fetch(`https://wttr.in/${city}?format=3`);
          const weatherText = await weatherRes.text();
          weatherInfo += `<p><strong>Wetter in ${city} (${type}):</strong> ${weatherText}</p>`;
        }
      }

      resultBox.innerHTML = output + weatherInfo;
      resultBox.style.display = "block";
    } catch (err) {
      resultBox.innerHTML = `<p style="color:red;">Fehler: ${err.message}</p>`;
      resultBox.style.display = "block";
    }
  }