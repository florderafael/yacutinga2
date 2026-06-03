import { useLang } from "./LangContext";
import accModulo from "figma:asset/acc-modulo.webp";
import accSuite from "figma:asset/acc-suite.webp";
import accPiscina from "figma:asset/acc-piscina.webp";
import { Users, BedDouble, Trees, Droplets, Bath, Sofa, Waves, Flame, Sunrise } from "lucide-react";

type Detail = { Icon: typeof Users; es: string; en: string };

interface Room {
  img: string;
  chipEs: string; chipEn: string;
  nameEs: string; nameEn: string;
  descEs: string; descEn: string;
  details: Detail[];
  panel: string;
}

const rooms: Room[] = [
  {
    img: accModulo,
    chipEs: "Habitación", chipEn: "Room",
    nameEs: "Módulo Selva", nameEn: "Forest Module",
    descEs: "Módulo independiente integrado en el bosque, con deck privado y vista directa a la selva.",
    descEn: "Independent module in the forest, with private deck and direct jungle view.",
    details: [
      { Icon: Users, es: "2 huéspedes", en: "2 guests" },
      { Icon: BedDouble, es: "Cama matrimonial", en: "Double bed" },
      { Icon: Trees, es: "Vista a la selva", en: "Forest view" },
      { Icon: Droplets, es: "Agua caliente 24 h", en: "24h hot water" },
    ],
    panel: "#1B2E1C",
  },
  {
    img: accSuite,
    chipEs: "Suite", chipEn: "Suite",
    nameEs: "Suite Premium", nameEn: "Premium Suite",
    descEs: "Amplia suite con bañera exterior, sala de estar y acceso directo a la naturaleza.",
    descEn: "Spacious suite with outdoor tub, living area and direct access to nature.",
    details: [
      { Icon: Users, es: "Hasta 3 huéspedes", en: "Up to 3 guests" },
      { Icon: Bath, es: "Bañera exterior", en: "Outdoor tub" },
      { Icon: Sofa, es: "Sala de estar", en: "Living area" },
      { Icon: Trees, es: "Acceso a la naturaleza", en: "Nature access" },
    ],
    panel: "#3D5A3E",
  },
  {
    img: accPiscina,
    chipEs: "Áreas comunes", chipEn: "Common areas",
    nameEs: "Piscina & áreas comunes", nameEn: "Pool & common areas",
    descEs: "Piscina integrada al bosque, hamacas, fogón y espacios de descanso al borde de la selva.",
    descEn: "Forest pool, hammocks, fire pit and rest areas at the jungle edge.",
    details: [
      { Icon: Waves, es: "Piscina en el bosque", en: "Forest pool" },
      { Icon: Flame, es: "Fogón", en: "Fire pit" },
      { Icon: Trees, es: "Hamacas y deck", en: "Hammocks & deck" },
      { Icon: Sunrise, es: "Espacios de descanso", en: "Rest areas" },
    ],
    panel: "#1B2E1C",
  },
];

export function Accommodation() {
  const { t } = useLang();

  return (
    <section id="alojamiento" style={{ background: "#F2EDE3", padding: "clamp(90px, 11vw, 140px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px, 4vw, 48px)" }}>
        {/* Header centrado */}
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: "italic",
            color: "rgba(27,46,28,0.55)",
            fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
            margin: "0 0 14px",
          }}>
            {t("Dentro de la selva, no frente a ella", "Inside the jungle, not facing it")}
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#1B2E1C",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {t("Alojate en la selva", "Stay in the rainforest")}
          </h2>
        </div>

        {/* Grid: imagen en reposo, panel liso al hover */}
        <div className="acc-grid">
          {rooms.map((room, i) => (
            <div className="acc-card" key={i}>
              <img className="acc-img" src={room.img} alt={t(room.nameEs, room.nameEn)} loading="lazy" />
              <span className="acc-grad" />
              {/* Reposo: título sobre la imagen */}
              <div className="acc-rest">
                <span className="acc-chip">{t(room.chipEs, room.chipEn)}</span>
                <h3 className="acc-title">{t(room.nameEs, room.nameEn)}</h3>
              </div>

              {/* Hover: panel de fondo liso con detalles + botón */}
              <div className="acc-panel" style={{ background: room.panel }}>
                <span className="acc-chip">{t(room.chipEs, room.chipEn)}</span>
                <h3 className="acc-title" style={{ marginTop: 8 }}>{t(room.nameEs, room.nameEn)}</h3>
                <p className="acc-desc">{t(room.descEs, room.descEn)}</p>
                <div className="acc-details">
                  {room.details.map((d, k) => (
                    <div className="acc-detail" key={k}>
                      <d.Icon size={17} color="#C4623A" strokeWidth={1.6} />
                      <span>{t(d.es, d.en)}</span>
                    </div>
                  ))}
                </div>
                <a className="acc-btn" href="#contacto">{t("Consultar disponibilidad", "Check availability")}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .acc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .acc-card { position: relative; aspect-ratio: 2 / 3; border-radius: 10px; overflow: hidden; }
        .acc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s ease; }
        .acc-card:hover .acc-img { transform: scale(1.05); }
        .acc-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(18,28,18,0.8) 0%, rgba(18,28,18,0.1) 50%, transparent 75%); transition: opacity 0.4s ease; }
        .acc-card:hover .acc-grad { opacity: 0; }
        .acc-rest { position: absolute; left: 24px; right: 24px; bottom: 24px; transition: opacity 0.35s ease; }
        .acc-card:hover .acc-rest { opacity: 0; }
        .acc-chip {
          display: inline-block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: rgba(242,237,227,0.85);
          font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase;
          border: 1px solid rgba(242,237,227,0.35); border-radius: 999px; padding: 4px 11px;
        }
        .acc-title { font-family: 'DM Serif Display', serif; color: #F2EDE3; font-size: 1.4rem; font-weight: 400; font-style: italic; line-height: 1.15; margin: 10px 0 0; }
        /* Panel liso (hover) */
        .acc-panel {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; justify-content: center;
          padding: clamp(24px, 3vw, 34px);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .acc-card:hover .acc-panel { opacity: 1; }
        .acc-panel .acc-chip { align-self: flex-start; }
        .acc-desc { font-family: 'Plus Jakarta Sans', sans-serif; color: rgba(242,237,227,0.6); font-size: 0.82rem; line-height: 1.6; font-weight: 300; margin: 14px 0 20px; }
        .acc-details { display: flex; flex-direction: column; gap: 11px; margin-bottom: 24px; }
        .acc-detail { display: flex; align-items: center; gap: 10px; font-family: 'Plus Jakarta Sans', sans-serif; color: rgba(242,237,227,0.85); font-size: 0.82rem; }
        .acc-btn {
          align-self: flex-start;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1B2E1C; background: #F2EDE3;
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.02em;
          text-decoration: none; border-radius: 999px; padding: 12px 24px;
          transition: background 0.25s, transform 0.25s;
        }
        .acc-btn:hover { background: #E2DAC8; transform: translateY(-2px); }
        @media (max-width: 900px) { .acc-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .acc-grid { grid-template-columns: 1fr; }
          .acc-card { aspect-ratio: auto; }
          .acc-img { position: relative; height: 300px; }
          .acc-grad, .acc-rest { display: none; }
          .acc-panel { position: relative; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
