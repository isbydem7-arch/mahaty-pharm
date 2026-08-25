"use client";
import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

export default function LeadCaptureForm(){
  const [error,setError]=useState("");
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setError("");const form=event.currentTarget;if(!form.checkValidity()){form.reportValidity();setError("Veuillez remplir correctement tous les champs obligatoires.");return}const data=new FormData(form);const name=String(data.get("name")||"").trim(),phone=String(data.get("phone")||"").trim(),company=String(data.get("company")||"").trim()||"Non renseignée",need=String(data.get("need")||"").trim(),consent=data.get("consent");if(!name||!phone||!need||!consent){setError("Veuillez remplir tous les champs obligatoires et accepter d’être recontacté.");return}const message=`Bonjour Mahaty Pharm,

Je souhaite être recontacté concernant vos services.

Nom complet : ${name}
Téléphone / WhatsApp : ${phone}
Entreprise : ${company}
Besoin : ${need}

J’accepte d’être recontacté à ce numéro.`;window.open(`https://wa.me/22377777777?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")}
  return <div className={styles.formCard}><h2>Être recontacté par Mahaty</h2><p>Remplissez ce formulaire en moins d’une minute.</p><form onSubmit={submit} noValidate><label>Nom complet<input name="name" type="text" autoComplete="name" required/></label><label>Numéro de téléphone ou WhatsApp<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+223 77 00 00 00" minLength={8} maxLength={20} pattern="[0-9 ()+\-]{8,20}" required/></label><label>Entreprise <small>(facultatif)</small><input name="company" type="text" autoComplete="organization"/></label><label>Votre besoin<select name="need" defaultValue="" required><option value="" disabled>Sélectionnez un besoin</option><option>Formation des délégués médicaux</option><option>Représentation médicale</option><option>Gestion administrative</option><option>Partenariat</option><option>Autre besoin</option></select></label><label className={styles.consent}><input name="consent" type="checkbox" required/><span>J’accepte d’être recontacté par Mahaty au numéro indiqué.</span></label><div className={styles.error} aria-live="polite">{error}</div><button type="submit">Demander à être rappelé</button><p className={styles.hint}>Après validation, WhatsApp s’ouvrira avec votre demande déjà préparée. Il vous suffira de l’envoyer.</p></form><p className={styles.direct}>Vous préférez écrire directement ? <a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">WhatsApp : +223 77 77 77 77</a></p></div>
}
