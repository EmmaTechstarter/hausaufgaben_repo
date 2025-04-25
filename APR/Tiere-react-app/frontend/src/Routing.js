import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Tieredetail from "./Tieredetail";
import Tierebearbeitung from "./Tierebearbeitung";

function Routing () {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tiere/:id" element={<Tieredetail />} />
            <Route path="/:id" element={<Tierebearbeitung />} />
        </Routes>
    </Router>)
}

export default Routing