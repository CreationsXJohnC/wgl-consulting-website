"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  // Track field values to conditionally enable hover effect
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  const allFilled = fields.name.trim() !== "" &&
    fields.email.trim() !== "" &&
    fields.subject.trim() !== "" &&
    fields.message.trim() !== "";

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/wglconsultingdc", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setState("success");
        form.reset();
        setFields({ name: "", email: "", subject: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputStyle = {
    background: "#0d0d0d",
    border: "1px solid #2a2a2a",
    color: "#fff",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "#888",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    display: "block",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#7BC49A")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={fields.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#7BC49A")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What can we help with?"
          value={fields.subject}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#7BC49A")}
          onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project, operation, or question..."
          value={fields.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
          onFocus={(e) => (e.target.style.borderColor = "#7BC49A")}
          onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
        />
      </div>

      {state === "error" && (
        <p className="text-sm" style={{ color: "#ff6b6b" }}>
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:wglconsultingdc@gmail.com" style={{ color: "#D4925A" }}>
            wglconsultingdc@gmail.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting" || state === "success"}
        className={`px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 disabled:opacity-60 ${allFilled && state !== "success" ? "btn-sage" : ""}`}
        style={{
          background: state === "success" ? "#7BC49A" : "#7BC49A",
          color: "#000",
          // Disable pointer events on hover when form incomplete or already submitted
          cursor: allFilled && state === "idle" ? "pointer" : state === "submitting" ? "wait" : state === "success" ? "default" : "not-allowed",
        }}
      >
        {state === "success"
          ? "Message Sent ✓"
          : state === "submitting"
          ? "Sending..."
          : "Send Message"}
      </button>

      <p className="text-xs" style={{ color: "#444" }}>
        Or email us directly at{" "}
        <a href="mailto:wglconsultingdc@gmail.com" style={{ color: "#7BC49A" }}>
          wglconsultingdc@gmail.com
        </a>
      </p>
    </form>
  );
}
