import { useLang } from "./LangContext";
import expCaminatas from "figma:asset/exp-caminatas.webp";
import expAves from "figma:asset/exp-aves.webp";
import expYoga from "figma:asset/exp-yoga.webp";
import expKayak from "figma:asset/exp-kayak.webp";

const exp = [
  {
    img: expCaminatas,
    es: "Caminatas en la selva",
    en: "Forest walks",
    subEs: "Recorridos guiados de día y de noche por 22 km de senderos interpretados.",
    subEn: "Guided day and night walks along 22 km of interpreted trails.",
  },
  {
    img: expAves,
    es: "Avistaje de aves",
    en: "Birdwatching",
    subEs: "Más de 400 especies registradas, más que en cualquier otro punto del país.",
    subEn: "Over 400 recorded species, more than anywhere else in the country.",
  },
  {
    img: expYoga,
    es: "Retiros y clases de yoga",
    en: "Yoga retreats & classes",
    subEs: "Prácticas y retiros sobre plataformas abiertas en el corazón del bosque.",
    subEn: "Practice and retreats on open platforms in the heart of the forest.",
  },
  {
    img: expKayak,
    es: "Kayak en el río",
    en: "River kayaking",
    subEs: "Navegación por las aguas del río Iguazú, entre selva virgen.",
    subEn: "Paddle the waters of the Iguazú River, through virgin jungle.",
  },
];

export function Experiences() {
  const { t } = useLang();

  return (
    <section id="experiencias" style={{ background: "#1B2E1C", padding: "clamp(90px, 11vw, 140px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Header centrado */}
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: "italic",
            color: "rgba(242,237,227,0.6)",
            fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
            margin: "0 0 14px",
          }}>
            {t("Experiencias en la selva", "Experiences in the rainforest")}
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#F2EDE3",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {t("Elegí tu experiencia", "Choose your experience")}
          </h2>
        </div>

        {/* Grid de tarjetas con hover-reveal */}
        <div className="exp-grid">
          {exp.map((item, i) => (
            <a key={i} href="#contacto" className="exp-card">
              <img className="exp-img" src={item.img} alt={t(item.es, item.en)} loading="lazy" />
              <span className="exp-overlay" />
              <span className="exp-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </span>
              <div className="exp-text">
                <h3 className="exp-title">{t(item.es, item.en)}</h3>
                <p className="exp-desc">{t(item.subEs, item.subEn)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .exp-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 3 / 4;
          display: block;
          text-decoration: none;
        }
        .exp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }
        .exp-card:hover .exp-img { transform: scale(1.06); }
        .exp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,28,18,0.82) 0%, rgba(18,28,18,0.15) 45%, transparent 70%);
          transition: background 0.4s ease;
        }
        .exp-card:hover .exp-overlay {
          background: linear-gradient(to top, rgba(18,28,18,0.9) 0%, rgba(18,28,18,0.45) 55%, rgba(18,28,18,0.12) 100%);
        }
        .exp-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1B2E1C;
          background: rgba(242,237,227,0.85);
          opacity: 0.85;
          transition: all 0.35s ease;
        }
        .exp-card:hover .exp-arrow { opacity: 1; background: #F2EDE3; transform: scale(1.06); }
        .exp-text {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
        }
        .exp-title {
          font-family: 'DM Serif Display', serif;
          color: #F2EDE3;
          font-size: 1.4rem;
          font-weight: 400;
          font-style: italic;
          margin: 0;
          line-height: 1.15;
        }
        .exp-desc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: rgba(242,237,227,0.72);
          font-size: 0.82rem;
          line-height: 1.5;
          letter-spacing: 0.01em;
          margin: 0;
          max-height: 0;
          opacity: 0;
          transform: translateY(6px);
          overflow: hidden;
          transition: max-height 0.45s ease, opacity 0.4s ease, transform 0.4s ease, margin-top 0.45s ease;
        }
        .exp-card:hover .exp-desc {
          max-height: 96px;
          opacity: 1;
          transform: none;
          margin-top: 10px;
        }
        @media (max-width: 1024px) { .exp-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) {
          .exp-grid { grid-template-columns: 1fr; }
          .exp-card { aspect-ratio: 4 / 3; }
          .exp-desc { max-height: 96px; opacity: 1; transform: none; margin-top: 8px; }
        }
      `}</style>
    </section>
  );
}
