import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
        background: "#4e54c8",
        color: "white",
        fontWeight: "bold",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/Portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</Link>
      <Link to="/Blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
      <Link to="/Contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}
