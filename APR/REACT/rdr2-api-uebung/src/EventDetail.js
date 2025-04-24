import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("https://rdo.gg/api/events/free-roam")
      .then((res) => res.json())
      .then((data) => {
        const found = data.events.find(
          (e) => e.name.toLowerCase().replace(/\s+/g, "-") === id
        );
        setEvent(found || null);
      })
      .catch((err) => console.error("Fehler beim Laden des Events", err));
  }, [id]);

  if (!event) {
    return (
      <div className="container">
        <p>Event nicht gefunden... 🤷‍♀️</p>
        <Link to="/events">← Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{event.name}</h1>
      <p><strong>Typ:</strong> {event.type}</p>
      <p><strong>Beschreibung:</strong> {event.description || "–"}</p>
      <p><strong>Geplante Zeit:</strong> {event.time || "Nicht bekannt"}</p>
      <br />
      <Link to="/events">← Zurück zur Übersicht</Link>
    </div>
  );
}

export default EventDetail;
