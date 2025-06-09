import styled from "./styledFormC.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className={styled.contactMain}>
      <header className={styled.contactHeader}>
        <h1 className={styled.contactTitle}>Contacto</h1>
        <p className={styled.contactIntro}>
          ¿Aún tenés dudas, sugerencias o querés hacer un pedido especial? Completá el formulario y nuestro equipo te responderá a la brevedad.
        </p>
      </header>
      <section className={styled.contactSection} aria-label="Formulario de contacto">
        <form className={styled.contactForm} onSubmit={handleSubmit} autoComplete="off">
          <label className={styled.contactLabel}>
            Nombre
            <input
              className={styled.contactInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </label>
          <label className={styled.contactLabel}>
            Email
            <input
              className={styled.contactInput}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </label>
          <label className={styled.contactLabel}>
            Teléfono
            <input
              className={styled.contactInput}
              type="number"
              pattern="[0-9]{10}"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Ej: 11 1234-5678"
              autoComplete="tel"
            />
          </label>
          <label className={styled.contactLabel}>
            Mensaje
            <textarea
              className={styled.contactTextarea}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Escribí tu mensaje aquí..."
              rows={5}
            />
          </label>
          <button className={styled.contactButton} type="submit">
            Enviar mensaje
          </button>
          {sent && (
            <span className={styled.contactSentMsg}>
              ¡Mensaje enviado! Nos contactaremos pronto.
            </span>
          )}
        </form>
      </section>
      <aside className={styled.contactBgEffect} aria-hidden="true"></aside>
    </main>
  );
};

export default ContactForm;