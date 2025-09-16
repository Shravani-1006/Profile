import React from "react";
import { Link } from "react-router-dom";

export default function FSApp() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ color: "#4e54c8" }}>FS Practical App</h1>
      <p>This is the app built during FS practicals.</p>
      {/* Add your FS practical implementations here */}
      <Link to="/" style={{ color: "#4e54c8", fontWeight: "bold" }}>
        ⬅ Back to Personal Website
      </Link>
    </div>
  );
}
