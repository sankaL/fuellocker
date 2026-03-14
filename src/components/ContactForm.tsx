"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

const machines = [
  "Shaker Prime",
  "Shaker Touch 2",
  "Shaker S",
  "MilkShaker",
  "MilkShaker S",
  "Not sure yet - need advice",
];

interface ContactFormProps {
  preselectedMachine?: string;
}

export default function ContactForm({ preselectedMachine }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    machine: preselectedMachine || "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", machine: preselectedMachine || "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successCard} id="contact-form-success">
        <div className={styles.successIcon}>✅</div>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. Our team will get back to you within 1–2 business days.</p>
        <button className="btn btn-outline-yellow" onClick={() => setStatus("idle")}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form" noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Full Name <span className={styles.required}>*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email Address <span className={styles.required}>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourbusiness.ca"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (416) 555-0123"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>Business / Location</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Fitness Studio, Office, etc."
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="machine" className={styles.label}>Preferred Machine Type (if any)</label>
        <select
          id="machine"
          name="machine"
          value={form.machine}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select a machine...</option>
          {machines.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message <span className={styles.required}>*</span></label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your location, average daily foot traffic, and any questions you have about hosting a machine..."
          rows={5}
          className={styles.textarea}
        />
      </div>

      {status === "error" && (
        <div className={styles.errorAlert} role="alert">
          ⚠️ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className={`btn btn-primary btn-lg ${styles.submitBtn}`}
        disabled={status === "loading"}
        id="contact-form-submit"
      >
        {status === "loading" ? (
          <>
            <span className={styles.spinner} />
            Sending...
          </>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
}
