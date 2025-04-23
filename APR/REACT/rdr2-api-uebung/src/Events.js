import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [nextEvent, setNextEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    fetch("https://rdo.gg/api/events/free-roam")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events || []);
        const upcoming = data.events?.find((e) => e.time);
        setNextEvent(upcoming || null);
      })
      .catch((err) => console.error("API-Fehler:", err));
  }, []);

  useEffect(() => {
    if (!nextEvent) return;

    const interval = setInterval(() => {
      const now = new Date();
      const [hour, minute] = nextEvent.time.split(":").map(Number);
      const eventDate = new Date();
      eventDate.setHours(hour, minute, 0, 0);
      if (eventDate < now) eventDate.setDate(eventDate.getDate() + 1);
      const diff = eventDate - now;
      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${mins} Minuten ${secs < 10 ? "0" : ""}${secs} Sekunden`);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <div className="container">
      <h1>Free Roam Events</h1>

      {nextEvent && (
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          ⏱️ Nächstes Event: <strong>{nextEvent.name}</strong> in <strong>{timeLeft}</strong>
        </p>
      )}

      {events.length === 0 ? (
        <p>Aktuell gibt es keine geplanten Free Roam Events.</p>
      ) : (
        <div className="grid">
          {events.map((event, index) => (
            <div className="card" key={index}>
              <h3>{event.name}</h3>
              <p><strong>Typ:</strong> {event.type}</p>
              <p><strong>Beschreibung:</strong> {event.description || "–"}</p>
              <p><strong>Zeit:</strong> {event.time || "Unbekannt"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
