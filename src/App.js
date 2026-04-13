import React, { useState, useEffect, useRef, useMemo } from "react";
import "./styles.css";

export default function GymLandingPage() {
  const benefits = [
    {
      title: "Forza reale",
      text: "Allenamenti pensati per migliorare potenza, resistenza e performance.",
    },
    {
      title: "Risultati prima di tutto",
      text: "Qui non si viene per passare il tempo: ogni dettaglio è orientato a forza, ipertrofia e miglioramento reale.",
    },
    {
      title: "Accesso H24 riservato",
      text: "Allenati con i tuoi tempi, senza vincoli e senza compromessi. Libertà totale, ogni giorno della settimana.",
    },
  ];

  const imageContext = require.context(
    "./assets/images",
    false,
    /\.(png|jpe?g|webp)$/i
  );

  const gymGallery = useMemo(() => {
    return imageContext
      .keys()
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      )
      .map(imageContext);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef(null);
  const audioRef = useRef(null);

  const changeSlide = (newIndex) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsFading(false);
    }, 300);
  };

  const nextSlide = () => {
    if (!gymGallery.length) return;
    changeSlide((currentSlide + 1) % gymGallery.length);
  };

  const prevSlide = () => {
    if (!gymGallery.length) return;
    changeSlide((currentSlide - 1 + gymGallery.length) % gymGallery.length);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    changeSlide(index);
  };

  useEffect(() => {
    if (!gymGallery.length) return;

    gymGallery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [gymGallery]);

  useEffect(() => {
    if (!gymGallery.length) return;

    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gymGallery.length);
    }, 4500);

    return () => clearInterval(autoplayRef.current);
  }, [gymGallery.length]);

  const restartAutoplay = () => {
    clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gymGallery.length);
    }, 4500);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
      restartAutoplay();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
      restartAutoplay();
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
        setIsMusicPlaying(true);
      }
    } catch (error) {
      console.error("Errore riproduzione audio:", error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsMusicPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

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
            <img src="/logo-singym_v3.png" alt="SIN GYM logo" className="logo" />
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
        <audio ref={audioRef} loop preload="auto">
          <source src="/audio/gym-theme.mp3" type="audio/mpeg" />
          Il tuo browser non supporta l'audio HTML5.
        </audio>

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
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={toggleMusic}
                >
                  {isMusicPlaying ? "Pause" : "Sound ON"}
                </button>
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

          {gymGallery.length > 0 && (
            <div
              className="gallery-showcase"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={currentSlide}
                src={gymGallery[currentSlide]}
                alt={`Sala pesi SIN GYM ${currentSlide + 1}`}
                className={`gallery-showcase-image ${
                  isFading ? "gallery-showcase-image-fade" : ""
                }`}
                draggable="false"
              />

              <button
                type="button"
                className="gallery-arrow gallery-arrow-left"
                onClick={() => {
                  prevSlide();
                  restartAutoplay();
                }}
                aria-label="Foto precedente"
              >
                ‹
              </button>

              <button
                type="button"
                className="gallery-arrow gallery-arrow-right"
                onClick={() => {
                  nextSlide();
                  restartAutoplay();
                }}
                aria-label="Foto successiva"
              >
                ›
              </button>

              <div className="gallery-dots">
                {gymGallery.map((_, index) => (
                  <button
                    key={index}
                    className={`gallery-dot ${
                      index === currentSlide ? "gallery-dot-active" : ""
                    }`}
                    onClick={() => {
                      goToSlide(index);
                      restartAutoplay();
                    }}
                    aria-label={`Vai alla slide ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="benefici" className="section container">
          <div className="section-header">
            <p className="section-kicker">Perché scegliere SIN GYM</p>
            <h2 className="section-title">
              Un ambiente premium per chi prende sul serio i risultati.
            </h2>
            <p className="section-text">
              SIN GYM è pensata per chi cerca qualcosa di più di una palestra:
              accesso H24, atmosfera esclusiva, allenamento senza caos e
              un’identità forte costruita intorno alla performance.
            </p>
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
                          plan.featured ? "plan-badge-strong" : "plan-badge-soft"
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
            </div>
          </div>
        </section>
      </main>

      <section className="section container">
        <div className="section-header">
          <p className="section-kicker">Dove siamo</p>
          <h2 className="section-title">Vieni a trovarci</h2>
          <p className="section-text">
            SIN GYM si trova in <span className="accent">Via Industrie 16</span>, a{" "}
            <span className="accent">Rasai di Seren del Grappa</span>.
          </p>

          <p className="section-text">
            È la soluzione ideale per chi cerca una palestra vicino Feltre con
            sala pesi aperta 24 ore su 24, 7 giorni su 7, accesso libero e un
            ambiente pensato per forza, ipertrofia e allenamento concreto.
          </p>
        </div>

        <iframe
          title="Mappa SIN GYM Seren del Grappa"
          src="https://www.google.com/maps?q=46.00339650773597,11.868644171165121&z=15&output=embed"
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
