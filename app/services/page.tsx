import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import ServicesMotionEffects from "./ServicesMotionEffects";

export const metadata: Metadata = {
  title: "Services | Mahaty Pharm",
  description: "Formation des délégués médicaux, représentation médicale et gestion administrative pour les acteurs de la santé au Mali.",
};

const nav = [["Accueil", "/"], ["Services", "/services"], ["À propos", "/a-propos"], ["Contact", "/contact"]];

const serviceData = [
  {
    id: "formation", number: "01", title: "Formation des délégués médicaux", image: "/image/service-4-formation.png",
    intro: "Nous préparons les délégués à présenter les produits avec clarté, à organiser leurs visites et à représenter une marque avec sérieux sur le terrain.",
    heading: "Ce que nous prenons en charge",
    items: ["Compréhension de l’offre et des produits à présenter", "Préparation du discours et des supports de présentation", "Organisation des visites et comportement professionnel", "Méthodes de suivi et de remontée des informations terrain"],
    asideTitle: "Pour qui ?", asideText: "Laboratoires, marques de santé, distributeurs et structures souhaitant préparer ou renforcer une équipe de délégués.", cta: "Échanger sur une formation", tone: "plain",
  },
  {
    id: "representation", number: "02", title: "Représentation médicale", image: "/image/service-1-promotion.png",
    intro: "Mahaty assure une présence locale auprès des professionnels et structures de santé pour présenter votre offre et porter votre marque au Mali.",
    heading: "Notre accompagnement",
    items: ["Présence terrain à Bamako et coordination des actions", "Présentation professionnelle de votre offre", "Mise en relation avec les interlocuteurs pertinents", "Suivi des activités et transmission des informations utiles"],
    asideTitle: "Une présence locale pour votre marque", asideText: "Vous bénéficiez d’un relais basé à Bamako, capable de comprendre votre objectif, d’organiser les actions et de vous tenir informé de leur avancement.", cta: "Parler de votre représentation", tone: "green",
  },
  {
    id: "gestion", number: "03", title: "Gestion administrative", image: "/image/service-3-reglementaire.png",
    intro: "Nous organisons le suivi administratif nécessaire pour que chaque partenariat reste clair, structuré et facile à piloter.",
    heading: "Un suivi structuré",
    items: ["Centralisation des informations du partenariat", "Organisation des documents et des actions à réaliser", "Coordination avec les équipes et partenaires concernés", "Comptes rendus réguliers sur l’avancement"],
    asideTitle: "Vous gardez une vision claire", asideText: "Mahaty centralise le suivi et facilite la circulation des informations afin que vous sachiez ce qui a été fait, ce qui est en cours et ce qui reste à organiser.", cta: "Organiser mon partenariat", tone: "blue",
  },
];

function Logo({ priority = false }: { priority?: boolean }) {
  return <Image className={styles.logo} src="/Logo.jpg" alt="Logo Mahaty Pharm" width={1290} height={1287} sizes="(max-width: 899px) 56px, 78px" priority={priority} />;
}

function Header() {
  return <><div className={styles.mobileStrip}><span>Bamako, Mali</span><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">Nous contacter</a></div><header className={styles.header}><div className={styles.headerInner}><Link href="/" aria-label="Accueil Mahaty Pharm"><Logo priority /></Link><nav className={styles.desktopNav} aria-label="Navigation principale">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className={styles.headerCta} href="/contact">Proposer un partenariat</Link><details className={styles.mobileMenu}><summary aria-label="Ouvrir le menu"><i /><i /><i /></summary><nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details></div></header></>;
}

function Footer() {
  return <footer className={styles.footer}><div className={styles.footerInner}><Logo /><div><h2>Mahaty</h2><p>Formation des délégués • Représentation médicale • Gestion administrative</p><strong>Bamako, Mali</strong><div className={styles.footerContact}><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">+223 77 77 77 77</a><a href="mailto:Mahatycontact@gmail.com">Mahatycontact@gmail.com</a></div><small>© 2026 Mahaty. Tous droits réservés.</small></div></div><div className={styles.footerArc} /></footer>;
}

export default function ServicesPage() {
  return <main className={styles.page} data-page="services">
    <Header />
    <section className={styles.hero}><div className={styles.heroInner}><div className={styles.heroCopy}><p className={`${styles.eyebrow} ${styles.heroEyebrow}`}>Nos expertises</p><h1 className={styles.heroHeading}>Trois services pour renforcer votre présence médicale au Mali.</h1><p className={styles.heroLead}>Mahaty accompagne les laboratoires, distributeurs et structures de santé avec une présence locale, une équipe préparée et un suivi structuré.</p><div className={styles.actions}><Link className={`${styles.primary} ${styles.heroPrimary}`} href="/contact">Présenter votre besoin</Link><a className={`${styles.secondary} ${styles.heroSecondary}`} href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp</a></div></div><div className={styles.heroVisual}><Image src="/image/a-propos-hero-bureau.jpg" alt="Équipe et locaux de Mahaty Pharm à Bamako" fill sizes="(max-width: 899px) calc(100vw - 40px), 560px" priority /><i /><b /></div></div></section>
    <nav className={styles.serviceNav} aria-label="Navigation des services">{serviceData.map((service) => <Link data-reveal key={service.id} href={`#${service.id}`}><span>{service.number}</span><Image src={service.image} alt="" width={58} height={58} /><strong>{service.title}</strong><b>→</b></Link>)}</nav>
    {serviceData.map((service, index) => <section className={`${styles.service} ${index % 2 ? styles.alt : ""} ${index === 1 ? styles.reverseReveal : styles.forwardReveal}`} id={service.id} key={service.id}>
      <div className={styles.serviceInner}>
        <div className={styles.serviceIntro}>
          <div className={styles.serviceText} data-reveal><span>{service.number}</span><h2>{service.title}</h2><p>{service.intro}</p></div>
          <Image className={styles.serviceVisual} data-reveal src={service.image} alt="" width={290} height={290} />
        </div>
        <h3 data-reveal>{service.heading}</h3>
        <div className={styles.itemGrid}>{service.items.map((item, itemIndex) => <article data-reveal key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>
        <aside className={`${styles.aside} ${styles[service.tone]}`} data-reveal><div><h3>{service.asideTitle}</h3><p>{service.asideText}</p></div><Link className={styles.pulseButton} href="/contact">{service.cta}</Link></aside>
      </div>
    </section>)}
    <section className={styles.method} data-guide><div className={styles.container}><h2 data-reveal>Comment démarre un partenariat avec Mahaty ?</h2><div className={styles.steps}>{[["01", "Cadrage", "Nous échangeons sur votre objectif, votre offre et la zone à couvrir."], ["02", "Proposition", "Nous définissons les compétences, les actions et le suivi adaptés à votre besoin."], ["03", "Mise en place", "Nous lançons les actions et vous tenons informé de leur avancement."]].map(([number,title,text], index) => <article className={styles.guidedStep} key={number}><span>{number}</span><div><h3>— {title}</h3><p>{text}</p></div>{index < 2 && <i>→</i>}</article>)}</div></div></section>
    <section className={styles.finalCta}><div data-reveal><h2>Quel service correspond à votre besoin ?</h2><p>Présentez-nous votre objectif. Nous vous aiderons à identifier l’accompagnement le plus adapté à votre activité au Mali.</p><div className={styles.actions}><Link className={`${styles.primary} ${styles.pulseButton}`} href="/contact">Présenter mon besoin</Link><a className={styles.secondary} href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer">WhatsApp : +223 77 77 77 77</a></div><a className={styles.email} href="mailto:Mahatycontact@gmail.com">Mahatycontact@gmail.com</a></div></section>
    <Footer /><ServicesMotionEffects />
  </main>;
}
