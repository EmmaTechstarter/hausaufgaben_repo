import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Faq from "./Faq";
import Impressum from "./Impressum";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/impressum">Impressum</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;
