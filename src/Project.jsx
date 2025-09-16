import React from "react";

export default function Project({ title, description, type, domain, tech, link }) {
  return (
    <div
      style={{
        border: "2px solid #4e54c8",
        borderRadius: "15px",
        padding: "20px",
        margin: "15px",
        background: "white",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        width: "300px",
      }}
    >
      <h2 style={{ color: "#4e54c8" }}>{title}</h2>
      <p>{description}</p>
      <p><b>Type:</b> {type}</p>
      <p><b>Domain:</b> {domain}</p>
      <p><b>Technologies:</b> {tech}</p>
      <a href={link} style={{ color: "#4e54c8", fontWeight: "bold" }}>View Project</a>
    </div>
  );
}
