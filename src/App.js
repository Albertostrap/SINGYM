import React, { useState, useEffect } from "react";
import "./styles.css";
import "./styles.css";

export default function GymLandingPage() {
  const benefits = [
    {
      title: "Forza reale",
      text: "Allenamenti pensati per migliorare potenza, resistenza e performance.",
    },
    {
      title: "Risultati visibili",
      text: "Un ambiente costruito per aiutarti a trasformare il tuo corpo con costanza.",
    },
    {
      title: "Energia ogni giorno",
      text: "Più benessere, più motivazione, più controllo sul tuo stile di vita.",
    },
  ];

  const gymGallery = [
    "Photos/sala-pesi-1.jpg",
    "Photos/sala-pesi-2.jpg",
    "Photos/sala-pesi-3.jpg",
    "Photos/sala-pesi-4.jpg",
    "Photos/sala-pesi-5.jpg",
    "Photos/sala-pesi-6.jpg",
    "Photos/sala-pesi-7.jpg",
    "Photos/sala-pesi-8.jpg",
    "Photos/sala-pesi-9.jpg",
    "Photos/sala-pesi-10.jpg",
    "Photos/sala-pesi-11.jpg",
    "Photos/sala-pesi-12.jpg",
    "Photos/sala-pesi-13.jpg",
    "Photos/sala-pesi-14.jpg",
    "Photos/sala-pesi-15.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gymGallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gymGallery.length]);

  const plans = [
    {
      name: "1 MESE",
      price: "€60",
      note: "",
      features: ["Accesso illimitato", "H24", "Disdetta libera"],
      featured: false,
    },
    {
      name: "2 MESI",
      price: "€115",
      note: "",
      features: ["Accesso illimitato", "H24"],
      featured: false,
    },
    {
      name: "3 MESI",
      price: "€160",
      note: "",
      saving: "Risparmi €20",
      features: ["Accesso illimitato", "H24"],
      featured: false,
    },
    {
      name: "6 MESI",
      price: "€270",
      note: "",
      saving: "Risparmi €90",
      features: ["Accesso illimitato", "H24"],
      featured: false,
    },

    {
      name: "12 MESI",
      price: "€500",
      note: "",
      saving: "Risparmi €220",
      features: ["Accesso illimitato", "H24"],
      featured: true,
    },
  ];

  const testimonials = [
    {
      name: "Vuoi risultati veri",
      text: "Niente perdite di tempo. Allenamento concreto, progressi visibili.",
    },
    {
      name: "Vuoi spingere al massimo",
      text: "Ambiente che ti motiva e ti porta oltre i tuoi limiti.",
    },
    {
      name: "Vuoi essere seguito",
      text: "Supporto reale, non sei lasciato da solo.",
    },
  ];

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="Photos/logo-singym_v3.png" alt="" className="logo" />
            <span>SIN GYM</span>
          </div>

          <nav className="nav">
            <a href="#benefici" className="nav-link">
              Benefici
            </a>
            <a href="#piani" className="nav-link">
              Piani
            </a>
            <a href="#contatti" className="nav-link">
              Contatti
            </a>
          </nav>

          <a href="#contatti" className="button button-primary button-small">
            Inizia oggi
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow" />

          <div className="container hero-grid">
            <div className="hero-column">
              <div className="hero-badge">Spingi. Mangia. Ripeti.</div>

              <h1 className="hero-title">
                Trasforma il tuo corpo.{" "}
                <span className="accent">Spingi oggi.</span>
              </h1>

              <p className="hero-text">
                SIN GYM è la TUA palestra a Feltre - APERTA H24.
                <br />
                Allenati in un ambiente vero, diretto e costruito per ottenere
                risultati.
              </p>

              <div className="hero-actions">
                <a href="#contatti" className="button button-primary">
                  Inizia oggi
                </a>
                <a href="#piani" className="button button-secondary">
                  Abbonati
                </a>
              </div>
            </div>
<div className="hero-socials">
  <span className="hero-socials-label">Seguici su</span>
  <a
    href="https://www.instagram.com/palestrasingym/"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-social-link"
  >
    Instagram
  </a>
  <a
    href="https://www.facebook.com/FusSpak/?locale=it_IT"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-social-link"
  >
    Facebook
  </a>
</div>
            <div className="hero-column">
              <div className="hero-card">
                <img
                  src="/hero.jpeg"
                  alt="Allenamento palestra"
                  className="hero-image"
                />
                <div className="hero-overlay" />

                <div className="hero-overlay-content">
                  <div>
                    <div className="section-kicker">SIN GYM</div>
                    <div className="hero-overlay-title">
                      No excuses. Just results.
                    </div>
                  </div>

                  <div className="hero-stats">
                    <div className="stat-card">
                      <div className="stat-label">Focus</div>
                      <div className="stat-value">
                        Forza • Definizione • Energia
                      </div>
                    </div>

                    <div className="stat-card stat-card-highlight">
                      <div className="stat-label stat-label-highlight">
                        Coaching su richiesta
                      </div>
                      <div className="stat-value stat-value-highlight">
                        Un coach. Solo per te.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="section-header">
            <p className="section-kicker">Le nostre sale</p>
            <h2 className="section-title">
              La tua sala pesi. Una foto alla volta.
            </h2>
            <p className="section-text">
              Spazi veri, attrezzatura vera, atmosfera giusta. Qui si viene per
              allenarsi davvero.
            </p>
          </div>

          <div className="gallery-showcase">
            <img
              src={gymGallery[currentSlide]}
              alt={`Sala pesi SIN GYM ${currentSlide + 1}`}
              className="gallery-showcase-image"
            />

            <div className="gallery-dots">
              {gymGallery.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-dot ${
                    index === currentSlide ? "gallery-dot-active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Vai alla slide ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="benefici" className="section container">
          <div className="section-header">
            <p className="section-kicker">Perché scegliere noi</p>
            <h2 className="section-title">
              Una palestra che punta ai risultati, non alle promesse.
            </h2>
          </div>

          <div className="card-grid">
            {benefits.map((item) => (
              <div key={item.title} className="feature-card">
                <div className="feature-line" />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-muted section-bordered">
          <div className="container approach-grid">
            <div>
              <p className="section-kicker">Il nostro approccio</p>
              <h2 className="section-title">
                Allenati in un ambiente pulito, potente e motivante.
              </h2>
              <p className="section-text">
                Niente fronzoli inutili. Solo un’identità forte, attrezzatura di
                qualità, supporto concreto e una direzione chiara: aiutarti a
                migliorare davvero.
              </p>
            </div>

            <div className="approach-list">
              {[
                "Coaching orientato ai risultati",
                "Spazi essenziali ma d’impatto",
                "Esperienza premium senza caos",
              ].map((point) => (
                <div key={point} className="approach-item">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-header section-header-row">
            <div>
              <p className="section-kicker">PER CHI È SIN GYM</p>
              <h2 className="section-title">
                Se vuoi cambiare davvero, sei nel posto giusto.
              </h2>
            </div>
          </div>

          <div className="card-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="feature-card">
                <p className="card-text">{item.text}</p>
                <div className="testimonial-name">{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="piani" className="section section-muted section-bordered">
          <div className="container">
            <div className="section-header">
              <p className="section-kicker">Abbonamenti</p>
              <h2 className="section-title">
                Scegli il piano giusto per il tuo ritmo.
              </h2>
            </div>

            <div className="plans-grid">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`plan-card ${
                    plan.featured ? "plan-card-featured" : "plan-card-default"
                  }`}
                >
                  <div className="plan-header">
                    <h3 className="card-title">{plan.name}</h3>
                    {plan.saving && (
                      <span
                        className={`plan-badge ${
                          plan.featured
                            ? "plan-badge-strong"
                            : "plan-badge-soft"
                        }`}
                      >
                        {plan.saving}
                      </span>
                    )}
                  </div>

                  <div className="plan-price-row">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-note">{plan.note}</span>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature} className="plan-feature">
                        <span className="plan-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contatti"
                    className={`plan-button button ${
                      plan.featured ? "button-primary" : "button-secondary"
                    }`}
                  >
                    Abbonati
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="section container">
          <div className="contact-card">
            <p className="section-kicker">INIZIA ORA</p>

            <h2 className="section-title">Spingi con NOI!</h2>

            <div className="form-grid" style={{ marginTop: "24px" }}>
              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/393276696739?text=Ciao,vorrei%20informazioni%20per%20iscrivermi"
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivici su WhatsApp
              </a>
              <p className="cta-note">
                Nessun impegno. Ti rispondiamo al più presto.
              </p>
              {/* EMAIL SECONDARIA */}
              {/*<a
                href="mailto:palestrasingym@gmail.com?subject=Richiesta informazioni - SIN GYM"
                className="whatsapp-link"
              >
                Oppure manda una mail
            </a>*/}
            </div>
          </div>
        </section>
      </main>
      <section className="section container">
        <div className="section-header">
          <p className="section-kicker">Dove siamo</p>
          <h2 className="section-title">Vieni a trovarci</h2>
          <p className="section-text">
            Via Industrie 16, Seren del Grappa (BL)
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps?q=46.00339650773597, 11.868644171165121&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "16px" }}
          loading="lazy"
        />
        <div style={{ marginTop: "20px" }}>
          <a
            href="https://maps.app.goo.gl/BjW6AbrBnJLWS4KGA"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Apri su Google Maps
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>SIN GYM — Via Industrie 16, Seren del Grappa (BL)</div>

          <div className="footer-links">
            <a href="https://www.instagram.com/palestrasingym/">Instagram</a>
            <a href="https://www.facebook.com/FusSpak/?locale=it_IT">
              Facebook
            </a>
            <a href="https://wa.me/393276696739?text=Ciao,vorrei%20informazioni%20per%20iscrivermi">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
