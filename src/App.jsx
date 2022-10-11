import "./styles.css";
import Header from "./componant/Header";
import Navbar from "./componant/Navbar";
import Main from "./componant/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Routes>{/*<Route path="/admin/zoo" element={<Zoo/>} />*/}</Routes>
      </Router>
    </div>
  );
}
