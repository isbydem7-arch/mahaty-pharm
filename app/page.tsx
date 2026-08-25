import Image from "next/image";
import WhatsAppContactForm from "./components/WhatsAppContactForm";
import HomeMotionEffects from "./components/HomeMotionEffects";

const navItems = [
  ["Accueil", "/"],
  ["Services", "/services"],
  ["À propos", "/a-propos"],
  ["Contact", "/contact"],
];

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <div className="brand-mark">
      <Image
        src="/Logo.jpg"
        alt="Logo Mahaty Pharm"
        width={1290}
        height={1287}
        sizes="(max-width: 899px) 65px, 78px"
        priority={priority}
      />
    </div>
  );
}

function PhotoFrame() {
  return (
    <div className="visual-wrap">
      <div className="decor decor-top" aria-hidden="true" />
      <div className="decor decor-bottom" aria-hidden="true" />
      <div className="photo-frame" role="img" aria-label="Équipe Mahaty dans les locaux">
        <Image src="/image/image-bureau-accueil.jpg" alt="Locaux de Mahaty Pharm à Bamako" fill sizes="(max-width: 899px) calc(100vw - 40px), 570px" priority />
      </div>
    </div>
  );
}

function TrustIcon({ type }: { type: "medal" | "network" | "location" }) {
  if (type === "medal") {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="25" r="16" /><path d="m22 39-5 19 15-8 15 8-5-19" /><path d="m32 14 3.4 7 7.6 1-5.5 5.4 1.3 7.6-6.8-3.6-6.8 3.6 1.3-7.6-5.5-5.4 7.6-1z" /></svg>;
  }
  if (type === "network") {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="13" r="8" /><circle cx="13" cy="49" r="8" /><circle cx="51" cy="49" r="8" /><path d="M28 20 17 42m19-22 11 22M21 49h22" /><circle cx="32" cy="34" r="4" /></svg>;
  }
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 59S14 40 14 24a18 18 0 1 1 36 0c0 16-18 35-18 35Z" /><circle cx="32" cy="24" r="7" /></svg>;
}

type IconName = "training" | "people" | "handshake" | "admin" | "lab" | "box" | "hospital";

function LineIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    training: <><path d="M14 48V25h33v23M18 20l12-8 12 8-12 8-12-8Z" /><path d="M30 28v18m-9 8h18M47 31l6 4-6 4" /></>,
    people: <><circle cx="32" cy="18" r="8" /><circle cx="14" cy="26" r="6" /><circle cx="50" cy="26" r="6" /><path d="M20 52v-8c0-8 5-13 12-13s12 5 12 13v8M5 49v-6c0-6 4-10 10-10m44 16v-6c0-6-4-10-10-10" /></>,
    handshake: <><path d="m7 29 12-11 10 5 7-4 20 13-10 14-9-5-6 5-9-6-6 2L7 29Z" /><path d="m19 28 9 8c3 3 7-1 4-4l-4-4 8-9m0 17 7 5m-3-9 9 6" /></>,
    admin: <><rect x="15" y="11" width="34" height="45" rx="2" /><path d="M25 11V7h14v4M23 24l3 3 6-7m-9 18 3 3 6-7m5-9h7m-7 14h7" /></>,
    lab: <><path d="M23 8h18M27 8v16L14 50c-2 4 1 7 5 7h26c4 0 7-3 5-7L37 24V8" /><path d="M20 43h24m-19-8h14" /></>,
    box: <><path d="m10 20 22-12 22 12v27L32 59 10 47V20Z" /><path d="m10 20 22 13 22-13M32 33v26M21 14l22 13" /></>,
    hospital: <><path d="M10 56V20h14v36m16 0V12h14v44M24 30h16M7 56h50" /><path d="M32 16v10m-5-5h10M15 29h4m-4 9h4m-4 9h4m26-25h4m-4 10h4m-4 10h4" /></>,
  };
  return <svg viewBox="0 0 64 64" aria-hidden="true">{paths[name]}</svg>;
}

const services = [
  { image: "/image/service-4-formation.png", title: "Formation des délégués médicaux", text: "Nous préparons les délégués à présenter les produits avec clarté, à organiser leurs visites et à représenter une marque avec sérieux." },
  { image: "/image/service-1-promotion.png", title: "Représentation médicale", text: "Nous assurons une présence terrain auprès des professionnels et structures de santé pour porter votre offre au Mali." },
  { image: "/image/service-3-reglementaire.png", title: "Gestion administrative", text: "Nous prenons en charge le suivi administratif nécessaire pour que le partenariat reste clair, organisé et efficace." },
];

export default function Home() {
  return (
    <main data-page="home">
      <div className="mobile-strip"><span>Bamako, Mali</span><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer" aria-label="Contacter Mahaty Pharm sur WhatsApp">Nous contacter</a></div>
      <header className="site-header">
        <div className="header-inner">
          <a className="logo-link" href="#" aria-label="Accueil Mahaty Pharm"><Logo priority /></a>
          <nav aria-label="Navigation principale">
            {navItems.map(([label, target]) => <a href={target} key={target}>{label}</a>)}
          </nav>
          <a className="header-cta motion-pulse" href="/contact">Proposer un partenariat</a>
          <details className="menu-button" style={{ position: "relative" }}>
            <summary aria-label="Ouvrir le menu" style={{ width: "100%", listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}><span /><span /><span /></summary>
            <nav style={{ position: "absolute", top: 52, right: 0, zIndex: 30, width: 220, padding: 8, display: "flex", flexDirection: "column", gap: 0, border: "1px solid #ddd", borderRadius: 6, background: "#FDFEFE", color: "#212020" }}>
              {navItems.map(([label, target]) => <a href={target} key={target} style={{ padding: 11, borderBottom: "1px solid #eee" }}>{label}</a>)}
            </nav>
          </details>
        </div>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy hero-sequence">
            <p className="eyebrow hero-eyebrow">Formation <i>•</i> Représentation <i>•</i> Gestion</p>
            <h1 className="hero-heading" id="hero-title">Un partenaire médical opérationnel à Bamako.</h1>
            <p className="intro hero-intro">Mahaty accompagne les acteurs de la santé dans la formation de leurs délégués, leur représentation médicale et leur gestion administrative au Mali.</p>
            <div className="hero-actions">
              <a className="button button-primary motion-pulse hero-action hero-primary" href="/contact">Nous contacter pour un partenariat</a>
              <a className="button button-secondary hero-action hero-secondary" href="/services">Découvrir nos services</a>
            </div>
          </div>
          <div className="hero-photo-reveal"><PhotoFrame /></div>
        </div>
      </section>
      <nav className="quick-actions" aria-label="Actions rapides">
        <a href="/services#formation"><LineIcon name="training" /><strong>Former vos délégués</strong><span>→</span></a>
        <a href="/services#representation"><LineIcon name="people" /><strong>Être représenté au Mali</strong><span>→</span></a>
        <a href="/contact"><LineIcon name="handshake" /><strong>Proposer un partenariat</strong><span>→</span></a>
      </nav>
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-arc trust-arc-left" aria-hidden="true" />
        <div className="trust-arc trust-arc-right" aria-hidden="true" />
        <div className="trust-inner">
          <h2 id="trust-title" data-reveal>La confiance se construit sur le terrain.</h2>
          <div className="trust-cards">
            <article className="trust-card" data-reveal><TrustIcon type="medal" /><strong>7 ans<br />d’expérience</strong></article>
            <article className="trust-card trust-network" data-reveal><TrustIcon type="network" /><strong>Réseau médical<br />établi et performant</strong></article>
            <article className="trust-card trust-location" data-reveal><TrustIcon type="location" /><strong>Présence locale<br />à Bamako</strong></article>
          </div>
        </div>
      </section>
      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-arc" aria-hidden="true" />
        <div className="section-inner">
          <h2 id="services-title" data-reveal><span>Trois services pour soutenir votre activité médicale.</span><b>Nos expertises</b></h2>
          <p className="services-subtitle">Trois services pour soutenir votre activité médicale.</p>
          <div className="service-grid">
            {services.map((service, index) => <a className="service-card" data-reveal href={`/services#${["formation", "representation", "gestion"][index]}`} key={service.title}><Image className="service-image" src={service.image} alt="" width={82} height={82} sizes="82px" /><div><h3>{service.title}</h3><p>{service.text}</p></div></a>)}
          </div>
        </div>
      </section>

      <section className="audiences" id="partenaires" aria-labelledby="audiences-title">
        <div className="section-inner">
          <h2 id="audiences-title" data-reveal>À qui s’adresse Mahaty ?</h2>
          <div className="audience-grid">
            <article data-reveal><LineIcon name="lab" /><strong>Laboratoires et<br />marques de santé</strong></article>
            <article data-reveal><LineIcon name="box" /><strong>Distributeurs et grossistes<br />pharmaceutiques</strong></article>
            <article data-reveal><LineIcon name="hospital" /><strong>Structures de santé ayant besoin d’une<br />équipe formée ou d’un relais terrain</strong></article>
          </div>
        </div>
      </section>

      <section className="method" id="methode" aria-labelledby="method-title" data-guide>
        <div className="method-arc" aria-hidden="true" />
        <div className="section-inner">
          <h2 id="method-title" data-reveal>Un partenariat simple, structuré et suivi.</h2>
          <div className="steps">
            <article className="guide-step"><span className="step-number">01</span><div><h3>— Cadrage</h3><p>Nous clarifions votre objectif, votre offre et la zone à couvrir.</p></div></article>
            <i aria-hidden="true">→</i>
            <article className="guide-step"><span className="step-number">02</span><div><h3>— Mise en place</h3><p>Nous mobilisons les compétences et le réseau adaptés.</p></div></article>
            <i aria-hidden="true">→</i>
            <article className="guide-step"><span className="step-number">03</span><div><h3>— Suivi</h3><p>Nous centralisons les actions et vous tenons informé de l’avancement.</p></div></article>
          </div>
        </div>
      </section>

      <section className="presence" aria-labelledby="presence-title">
        <div className="section-inner">
          <h2 id="presence-title" data-reveal>Mahaty, une présence réelle à Bamako.</h2>
          <p>Nos locaux, notre équipe et notre activité terrain montrent la structure qui portera votre partenariat.</p>
          <div className="presence-grid">
            <div data-reveal><Image src="/image/image-equipe-mahaty.jpg" alt="Équipe Mahaty dans ses locaux" fill sizes="(max-width: 899px) 30vw, 380px" /></div>
            <div data-reveal><Image src="/image/photo-equipe-a-propos.jpg" alt="Équipe de Mahaty Pharm" fill sizes="(max-width: 899px) 30vw, 380px" /></div>
            <div data-reveal><Image src="/image/a-propos-presence-bureau.jpg" alt="Présence de Mahaty Pharm à Bamako" fill sizes="(max-width: 899px) 30vw, 380px" /></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="section-inner contact-inner" data-reveal>
          <div className="contact-copy"><h2 id="contact-title">Construisons votre présence médicale au Mali.</h2><p>Vous recherchez un partenaire local pour former, représenter ou organiser votre activité ? Présentez-nous votre besoin. Nous vous recontactons pour étudier le partenariat.</p><address className="contact-details"><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer" aria-label="Contacter Mahaty Pharm au +223 77 77 77 77 sur WhatsApp">WhatsApp : +223 77 77 77 77</a><a href="mailto:Mahatycontact@gmail.com" aria-label="Envoyer un e-mail à Mahaty Pharm à Mahatycontact@gmail.com">E-mail : Mahatycontact@gmail.com</a></address></div>
          <div data-reveal><WhatsAppContactForm /></div>
        </div>
      </section>

      <footer className="footer" data-reveal>
        <div className="footer-inner"><Logo /><div><h2>Mahaty</h2><p>Formation des délégués • Représentation médicale • Gestion administrative</p><strong>Bamako, Mali</strong><div className="footer-contact"><a href="https://wa.me/22377777777" target="_blank" rel="noopener noreferrer" aria-label="Contacter Mahaty Pharm au +223 77 77 77 77 sur WhatsApp">+223 77 77 77 77</a><a href="mailto:Mahatycontact@gmail.com" aria-label="Envoyer un e-mail à Mahaty Pharm à Mahatycontact@gmail.com">Mahatycontact@gmail.com</a></div><small>© 2026 Mahaty. Tous droits réservés.</small></div></div>
        <div className="footer-arcs" aria-hidden="true" />
      </footer>
      <HomeMotionEffects />
    </main>
  );
}
