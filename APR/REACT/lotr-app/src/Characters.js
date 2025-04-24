import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://the-one-api.dev/v2/character", {
      headers: {
        Authorization: "Bearer xrB0fg4uwSp_gKcpDBrK"
      }
    })
      .then((res) => res.json())
      .then((data) => setCharacters(data.docs))
      .catch((err) => console.error("Fehler:", err));
  }, []);

  return (
    <div className="container">
      <h1>Charaktere</h1>
      <div className="grid">
        {characters.map((char) => (
          <Link to={`/character/${char._id}`} className="card" key={char._id}>
            <h3>{char.name}</h3>
            <p>{char.race || "Unbekannte Rasse"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;
