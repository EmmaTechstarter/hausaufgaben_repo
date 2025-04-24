import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    fetch(`https://the-one-api.dev/v2/character/${id}`, {
      headers: {
        Authorization: "Bearer <DEIN_TOKEN>"
      }
    })
      .then((res) => res.json())
      .then((data) => setChar(data.docs[0]))
      .catch((err) => console.error("Fehler:", err));
  }, [id]);

  if (!char) return <p>Lade Charakterdaten...</p>;

  return (
    <div className="container">
      <h1>{char.name}</h1>
      <p><strong>Rasse:</strong> {char.race}</p>
      <p><strong>Geburt:</strong> {char.birth || "Unbekannt"}</p>
      <p><strong>Tod:</strong> {char.death || "Unbekannt"}</p>
      <p><strong>Geschlecht:</strong> {char.gender}</p>
      <br />
      <Link to="/characters">← Zurück zu allen Charakteren</Link>
    </div>
  );
}

export default CharacterDetail;
