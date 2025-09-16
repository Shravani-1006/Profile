import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
import FSApp from "./FSApp";

export default function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(135deg, #af85d6ff 0%, #8ec5fc 100%)",
          minHeight: "100vh",
          color: "#333",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FSApp" element={<FSApp />} />
        </Routes>
      </div>
    </Router>
  );
}
