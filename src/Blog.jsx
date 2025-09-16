import React from "react";

export default function Blog() {
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
      <h1 style={{ color: "white" }}>My Blog 📝</h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          maxWidth: "700px",
          margin: "20px auto",
          background: "rgba(255,255,255,0.85)",
          padding: "20px",
          borderRadius: "12px",
          color: "#333",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        Welcome to my little corner on the web! 🌍 Here, I’ll be sharing my
        thoughts, ideas, and experiments around coding, coffee, and creativity.
        From exploring the world of web development and cybersecurity, to
        writing about cozy evenings with a cup of chai ☕, this blog is where I
        connect my technical journey with the small joys of life. Stay tuned for
        deep dives, fun projects, and personal stories that I hope will inspire
        and entertain you! ✨
      </p>
    </div>
  );
}
