import React, { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState({ type: "", domain: "" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "FS Practical App",
      description: "This is the app built during FS practicals.",
      type: "Course",
      domain: "FS",
      tech: "React, Node.js",
    },
    {
      title: "Personal Website",
      description: "This creative personal website in React.",
      type: "Personal",
      domain: "Frontend",
      tech: "React",
    },
    {
      title: "Cybersecurity Blog",
      description: "Articles about cybersecurity awareness.",
      type: "Personal",
      domain: "Cybersecurity",
      tech: "React, Markdown",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    return (
      (filter.type === "" || p.type === filter.type) &&
      (filter.domain === "" || p.domain === filter.domain)
    );
  });

  // Detail page
  if (selectedProject) {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: "30px",
          textAlign: "center",
          background: "linear-gradient(135deg, #ae92eeff 0%, #4e54c8 100%)",
          color: "white",
        }}
      >
        <h2>{selectedProject.title}</h2>
        <p>{selectedProject.description}</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "white",
            color: "#4e54c8",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => setSelectedProject(null)}
        >
          ⬅ Back to Portfolio
        </button>
      </div>
    );
  }

  // Portfolio page
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #ae92eeff 0%, #4e54c8 100%)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>My Portfolio</h1>

      {/* Filters */}
      <div style={{ textAlign: "center", margin: "20px", color: "white" }}>
        <label>
          Type:
          <select
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            style={{
              margin: "10px",
              padding: "5px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          >
            <option value="">All</option>
            <option value="Course">Course</option>
            <option value="Personal">Personal</option>
          </select>
        </label>
        <label>
          Domain:
          <select
            value={filter.domain}
            onChange={(e) => setFilter({ ...filter, domain: e.target.value })}
            style={{
              margin: "10px",
              padding: "5px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          >
            <option value="">All</option>
            <option value="FS">FS</option>
            <option value="Frontend">Frontend</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </label>
      </div>

      {/* Project List */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              margin: "15px",
              width: "280px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              textAlign: "left",
            }}
          >
            <h3 style={{ color: "#333" }}>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              <b>Type:</b> {proj.type}
            </p>
            <p>
              <b>Domain:</b> {proj.domain}
            </p>
            <p>
              <b>Technologies:</b> {proj.tech}
            </p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                background: "#4e54c8",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedProject(proj)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
