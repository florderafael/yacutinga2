import { useLang } from "./LangContext";
import caminata from "figma:asset/gal-caminata-grupo.webp";

const specs = [
  { kEs: "Desde Puerto Iguazú", kEn: "From Puerto Iguazú", vEs: "≈ 2 horas", vEn: "≈ 2 hours" },
  { kEs: "Aeropuerto", kEn: "Airport", vEs: "Cataratas del Iguazú (IGR)", vEn: "Iguazú Falls (IGR)" },
  { kEs: "Último tramo", kEn: "Last stretch", vEs: "15 km · 4×4 por ripio", vEn: "15 km · 4×4 on gravel" },
  { kEs: "Traslado", kEn: "Transfer", vEs: "Coordinado por el lodge", vEn: "Arranged by the lodge" },
];

export function HowToArrive() {
  const { t } = useLang();

  return (
    <section id="como-llegar" style={{ background: "#ECE5D7", padding: "clamp(64px, 8vw, 110px) 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="arrive-split">
          {/* Imagen recortada */}
          <div className="arrive-photo">
            <img src={caminata} alt={t("Caminata hacia la selva", "Walk into the rainforest")} loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* Texto */}
          <div className="arrive-info">
            <svg width="54" height="54" viewBox="0 0 60 60" fill="none" style={{ marginBottom: 18 }} aria-hidden="true">
              <circle cx="30" cy="30" r="27" stroke="#1B2E1C" strokeWidth="1.4" />
              <path d="M30 18c-4 0-7 3-7 7 0 5 7 14 7 14s7-9 7-14c0-4-3-7-7-7z" stroke="#1B2E1C" strokeWidth="1.6" fill="none" />
              <circle cx="30" cy="25" r="2.6" fill="#1B2E1C" />
            </svg>

            <h2 style={{
              fontFamily: "'DM Serif Display', serif", color: "#1B2E1C",
              fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", fontWeight: 400, lineHeight: 1.12,
              letterSpacing: "-0.01em", margin: "0 0 14px",
            }}>
              {t("El acceso forma parte del ritual.", "Getting there is part of the ritual.")}
            </h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5E52",
              fontSize: "0.98rem", lineHeight: 1.7, fontWeight: 300, margin: "0 0 26px",
            }}>
              {t(
                "La transición del mundo cotidiano a la selva empieza mucho antes de llegar al lodge. Las últimas horas se hacen entre bosque, hasta donde no llega el asfalto.",
                "The shift from everyday life to the jungle begins long before you reach the lodge. The final hours run through the forest, beyond where the pavement ends."
              )}
            </p>

            <div style={{ marginBottom: 28 }}>
              {specs.map((s, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16,
                  padding: "12px 0", borderBottom: "1px solid rgba(27,46,28,0.14)",
                  ...(i === 0 ? { borderTop: "1px solid rgba(27,46,28,0.14)" } : {}),
                }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(27,46,28,0.55)",
                    fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>
                    {t(s.kEs, s.kEn)}
                  </span>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1B2E1C",
                    fontSize: "0.92rem", fontWeight: 500, textAlign: "right",
                  }}>
                    {t(s.vEs, s.vEn)}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contacto" style={{
              alignSelf: "flex-start", display: "inline-block",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: "#1B2E1C", color: "#F2EDE3", fontSize: "0.8rem", fontWeight: 600,
              letterSpacing: "0.04em", textDecoration: "none", borderRadius: 999,
              padding: "13px 30px", transition: "background 0.25s, transform 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#3D5A3E"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1B2E1C"; e.currentTarget.style.transform = "none"; }}
            >
              {t("Coordinar mi llegada", "Plan my arrival")}
            </a>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(27,46,28,0.38)",
              fontSize: "0.72rem", lineHeight: 1.7, marginTop: 22,
            }}>
              {t(
                "Las Cataratas no se visitan directamente desde el lodge.",
                "Iguazú Falls are not visited directly from the lodge."
              )}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .arrive-split { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(36px, 5vw, 72px); align-items: stretch; }
        .arrive-photo { border-radius: 16px; overflow: hidden; min-height: 420px; }
        .arrive-info { display: flex; flex-direction: column; justify-content: center; }
        @media (max-width: 860px) {
          .arrive-split { grid-template-columns: 1fr; gap: 26px; }
          .arrive-photo { min-height: 300px; order: -1; }
        }
      `}</style>
    </section>
  );
}
