import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Thank you for your feedback.");
    setForm({ name: "", email: "", message: "" });
  };

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
      <h1>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "20px auto",
          gap: "12px",
          background: "rgba(255,255,255,0.95)",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #4e54c8",
          }}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #4e54c8",
          }}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #4e54c8",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#4e54c8",
            color: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
