import { useLang } from "./LangContext";
import riverPattern from "figma:asset/river-pattern.jpg";

const ICON = "#C4623A";
const sz = 34;

function IcoTree() {
  return (
    <svg viewBox="0 0 32 32" width={sz} height={sz} fill="currentColor" aria-hidden="true">
      <polygon points="16,3 9,13 23,13" />
      <polygon points="16,9 7,20 25,20" />
      <polygon points="16,15 5,26 27,26" />
      <rect x="14" y="25" width="4" height="5" />
    </svg>
  );
}
function IcoFeet() {
  return (
    <svg viewBox="0 0 32 32" width={sz} height={sz} fill="currentColor" aria-hidden="true">
      <ellipse cx="11" cy="13" rx="3.3" ry="5" />
      <circle cx="8" cy="6.4" r="1.1" /><circle cx="10.8" cy="5.4" r="1.3" /><circle cx="13.6" cy="6.4" r="1.1" />
      <ellipse cx="21" cy="21" rx="3.3" ry="5" />
      <circle cx="18" cy="14.4" r="1.1" /><circle cx="20.8" cy="13.4" r="1.3" /><circle cx="23.6" cy="14.4" r="1.1" />
    </svg>
  );
}
function IcoPeople() {
  return (
    <svg viewBox="0 0 32 32" width={sz} height={sz} fill="currentColor" aria-hidden="true">
      <circle cx="11" cy="10" r="4" />
      <circle cx="21" cy="10" r="4" />
      <path d="M5 28 C5 19.5 8 17 11 17 C14 17 17 19.5 17 28 Z" />
      <path d="M15 28 C15 19.5 18 17 21 17 C24 17 27 19.5 27 28 Z" />
    </svg>
  );
}
function IcoSprout() {
  return (
    <svg viewBox="0 0 32 32" width={sz} height={sz} fill="currentColor" aria-hidden="true">
      <rect x="15" y="13" width="2" height="16" rx="1" />
      <path d="M15.5 17 C9.5 17 5.5 13 6.5 8 C12.5 8 16.5 12 15.5 17 Z" />
      <path d="M16.5 15 C22.5 15 26.5 11 25.5 6 C19.5 6 15.5 10 16.5 15 Z" />
    </svg>
  );
}
function IcoBird() {
  return (
    <svg viewBox="0 0 32 32" width={sz} height={sz} fill="currentColor" aria-hidden="true">
      <ellipse cx="14" cy="17" rx="8" ry="5.5" />
      <circle cx="21" cy="11" r="3.4" />
      <polygon points="24,9.5 30.5,11 24,12.8" />
      <polygon points="6,15 0.5,11.5 7,19" />
    </svg>
  );
}

const pillars = [
  { Ico: IcoTree, titleEs: "Reserva privada", titleEn: "Private reserve", es: "570 ha de Bosque Atlántico conservadas a perpetuidad.", en: "570 ha of Atlantic Forest protected in perpetuity." },
  { Ico: IcoFeet, titleEs: "Bajo impacto", titleEn: "Low impact", es: "Capacidad limitada y prácticas sostenibles en cada estadía.", en: "Limited capacity and sustainable practices on every stay." },
  { Ico: IcoPeople, titleEs: "Comunidad guaraní", titleEn: "Guaraní community", es: "En alianza con la comunidad mbya-guaraní vecina.", en: "In partnership with the neighbouring Mbya-Guaraní community." },
  { Ico: IcoSprout, titleEs: "Educación ambiental", titleEn: "Environmental education", es: "Programas de interpretación y conciencia ecológica.", en: "Interpretation and ecological awareness programs." },
  { Ico: IcoBird, titleEs: "Biodiversidad", titleEn: "Biodiversity", es: "Refugio de fauna y flora del ecosistema más amenazado.", en: "A refuge for the wildlife of the most threatened ecosystem." },
];

export function Sustainability() {
  const { t } = useLang();

  return (
    <section id="conservacion" style={{ position: "relative", background: "#F2EDE3", overflow: "hidden", padding: "clamp(90px, 12vw, 150px) 0" }}>
      {/* Misma textura que "El lodge" */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${riverPattern})`,
        backgroundSize: "640px", backgroundRepeat: "repeat",
        opacity: 0.05, mixBlendMode: "multiply", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px, 4vw, 48px)" }}>
        {/* Encabezado */}
        <div style={{ maxWidth: 640 }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            color: "rgba(27,46,28,0.55)", fontSize: "clamp(1rem, 1.6vw, 1.25rem)", margin: "0 0 12px",
          }}>
            {t("Conservación", "Conservation")}
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif", color: "#1B2E1C",
            fontSize: "clamp(2rem, 3.6vw, 3.2rem)", fontWeight: 400, lineHeight: 1.12,
            letterSpacing: "-0.01em", margin: "0 0 20px",
          }}>
            {t("570 hectáreas protegidas para siempre", "570 hectares protected forever")}
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5E52",
            fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, margin: 0,
          }}>
            {t(
              "El Bosque Atlántico es uno de los ecosistemas más biodiversos y amenazados del planeta. En Yacutinga la conservación no es marketing: es la razón de nuestra existencia.",
              "The Atlantic Forest is one of the most biodiverse and threatened ecosystems on the planet. At Yacutinga, conservation is not marketing — it is the reason we exist."
            )}
          </p>
        </div>

        {/* Pilares: ícono arriba, línea, texto abajo */}
        <div className="sust-grid-pillars">
          {pillars.map((p, i) => (
            <div className="sust-pillar" key={i}>
              <div className="sust-ico"><p.Ico /></div>
              <div className="sust-txt">
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif", color: "#1B2E1C",
                  fontSize: "1.2rem", fontWeight: 400, margin: "0 0 8px",
                }}>
                  {t(p.titleEs, p.titleEn)}
                </h3>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5E52",
                  fontSize: "0.84rem", lineHeight: 1.6, fontWeight: 300, margin: 0,
                }}>
                  {t(p.es, p.en)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sust-grid-pillars { display: grid; grid-template-columns: repeat(5, 1fr); column-gap: 0; row-gap: 40px; margin-top: 64px; }
        .sust-pillar { box-sizing: border-box; }
        .sust-ico { height: 60px; display: flex; align-items: flex-end; padding: 0 32px 20px 0; color: ${ICON}; }
        .sust-txt { border-top: 1px solid rgba(27,46,28,0.18); padding: 22px 32px 0 0; box-sizing: border-box; }
        @media (max-width: 900px) {
          .sust-grid-pillars { grid-template-columns: repeat(2, 1fr); row-gap: 36px; }
        }
        @media (max-width: 520px) {
          .sust-grid-pillars { grid-template-columns: 1fr; row-gap: 28px; }
          .sust-ico, .sust-txt { padding-right: 0; }
        }
      `}</style>
    </section>
  );
}
