import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import "./App.css";
import EventDetail from "./EventDetail";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>

      <Routes>
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
