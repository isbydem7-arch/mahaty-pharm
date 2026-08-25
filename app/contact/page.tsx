import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "./LeadCaptureForm";
import ContactMotionEffects from "./ContactMotionEffects";
import styles from "./contact.module.css";

export const metadata:Metadata={title:"Contact | Mahaty Pharm",description:"Laissez votre numéro de téléphone pour être recontacté par Mahaty Pharm à Bamako."};
const nav=[["Accueil","/"],["Services","/services"],["À propos","/a-propos"],["Contact","/contact"]];
function Logo({priority=false}:{priority?:boolean}){return <Image className={styles.logo} src="/Logo.jpg" alt="Logo Mahaty Pharm" width={1290} height={1287} priority={priority}/>}
function Header(){return <><div className={styles.strip}><span>Bamako, Mali</span><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">Nous contacter</a></div><header className={styles.header}><div className={styles.headerIn}><Link href="/"><Logo priority/></Link><nav className={styles.desktopNav}>{nav.map(([l,h])=><Link className={h==="/contact"?styles.active:""} href={h} key={h}>{l}</Link>)}</nav><Link className={styles.headerCta} href="/contact">Proposer un partenariat</Link><details className={styles.menu}><summary aria-label="Ouvrir le menu"><i/><i/><i/></summary><nav>{nav.map(([l,h])=><Link className={h==="/contact"?styles.active:""} href={h} key={h}>{l}</Link>)}</nav></details></div></header></>}
function Footer(){return <footer className={styles.footer}><div className={styles.footerIn}><Logo/><div><h2>Mahaty</h2><p>Formation des délégués • Représentation médicale • Gestion administrative</p><strong>Bamako, Mali</strong><div><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">+223 77 77 77 77</a><a href="mailto:Mahatycontact@gmail.com">Mahatycontact@gmail.com</a></div><small>© 2026 Mahaty. Tous droits réservés.</small></div><nav>{nav.map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</nav></div></footer>}

export default function ContactPage(){return <main className={styles.page} data-page="contact"><Header/>
  <section className={styles.hero}><div className={styles.heroIn}>
    <div className={styles.copy}><span className={styles.heroEyebrow}>Parlons de votre besoin</span><h1 className={styles.heroHeading}>Laissez votre numéro. Notre équipe vous recontacte.</h1><p className={styles.heroLead}>Vous souhaitez former des délégués, être représenté au Mali ou organiser le suivi de votre activité ? Laissez-nous vos coordonnées pour échanger directement avec Mahaty.</p><ul className={styles.heroPoints}><li>Une équipe basée à Bamako</li><li>Un échange centré sur votre besoin</li><li>Aucune obligation après la prise de contact</li></ul><address className={styles.heroDetails}><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">WhatsApp : +223 77 77 77 77</a><a href="mailto:Mahatycontact@gmail.com">E-mail : Mahatycontact@gmail.com</a></address></div>
    <div className={styles.formMotion}><LeadCaptureForm/></div>
    <div className={styles.contactImage}><Image src="/image/image-contact-desk.png" alt="Contact avec Mahaty Pharm" fill sizes="(max-width:899px) calc(100vw - 40px), 500px"/></div>
  </div></section>
  <section className={styles.next} data-guide><div className={styles.container}><h2 data-reveal>Que se passe-t-il ensuite ?</h2><div>{[["01","Vous laissez votre numéro","Indiquez votre besoin et le moyen de vous joindre."],["02","Nous prenons connaissance de votre demande","L’équipe Mahaty identifie le service concerné."],["03","Nous échangeons avec vous","Nous vous contactons pour clarifier votre objectif et les prochaines étapes."]].map(([n,t,p])=><article className={styles.guidedStep} key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <section className={styles.services}><div className={styles.container}><h2 data-reveal>Vous pouvez nous contacter pour…</h2><div>{[["Formation des délégués médicaux","/services#formation"],["Représentation médicale","/services#representation"],["Gestion administrative","/services#gestion"]].map(([t,h])=><Link data-reveal href={h} key={h}>{t}<span>→</span></Link>)}</div><Link className={styles.allServices} href="/services">Découvrir tous nos services</Link></div></section>
  <Footer/><ContactMotionEffects/>
</main>}
