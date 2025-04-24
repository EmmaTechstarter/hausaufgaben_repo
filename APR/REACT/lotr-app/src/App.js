import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Characters from "./Characters";
import CharacterDetail from "./CharacterDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Charaktere</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
