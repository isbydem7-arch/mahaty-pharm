"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "22377777777";

export default function WhatsAppContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const need = String(data.get("message") ?? "").trim();

    if (!name || !company || !contact || !need) {
      form.reportValidity();
      return;
    }

    const message = `Bonjour Mahaty Pharm,

Je souhaite discuter d’un partenariat.

Nom complet : ${name}
Entreprise : ${company}
Téléphone ou e-mail : ${contact}
Besoin : ${need}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Nom complet</span><input type="text" name="name" placeholder="Nom complet" required /></label>
      <label><span>Entreprise</span><input type="text" name="company" placeholder="Entreprise" required /></label>
      <label><span>Téléphone ou e-mail</span><input type="text" name="contact" placeholder="Téléphone ou e-mail" required /></label>
      <label><span>Votre besoin</span><textarea name="message" placeholder="Votre besoin" required /></label>
      <button type="submit">Nous contacter pour un partenariat</button>
    </form>
  );
}
