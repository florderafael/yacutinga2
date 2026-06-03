import { useRef } from "react";
import { useLang } from "./LangContext";
import riverPattern from "figma:asset/river-pattern.jpg";

const reviews = [
  {
    textEs: "Una experiencia transformadora. La selva te rodea desde el primer momento y el equipo de guías es extraordinario. Las caminatas nocturnas son imborrables.",
    textEn: "A transformative experience. The jungle surrounds you from the first moment and the guide team is extraordinary. The night walks are unforgettable.",
    name: "María G.", fromEs: "Buenos Aires", fromEn: "Buenos Aires",
  },
  {
    textEs: "Llegué buscando naturaleza y encontré algo mucho más profundo. La filosofía del lodge, el respeto al entorno, la conexión con la comunidad guaraní. Único.",
    textEn: "I came looking for nature and found something much deeper. The lodge's philosophy, respect for the environment, the connection with the Guaraní community. One of a kind.",
    name: "Laurent M.", fromEs: "París", fromEn: "Paris",
  },
  {
    textEs: "El avistaje de aves es incomparable. Vi más de 60 especies en tres días. Los guías tienen un conocimiento enciclopédico y una pasión genuina.",
    textEn: "The birdwatching is incomparable. I saw over 60 species in three days. The guides have encyclopedic knowledge and genuine passion.",
    name: "Alejandro R.", fromEs: "Santiago", fromEn: "Santiago",
  },
  {
    textEs: "Despertar con los monos aulladores y dormir con el sonido de la selva. El yoga al amanecer sobre el bosque fue el momento más especial del viaje.",
    textEn: "Waking to howler monkeys and falling asleep to the sound of the jungle. Sunrise yoga above the forest was the most special moment of the trip.",
    name: "Sophie V.", fromEs: "Ámsterdam", fromEn: "Amsterdam",
  },
  {
    textEs: "Dormir en el lodge, despertar con el canto de las aves y los grillos. Hermoso lugar inmerso en la selva misionera, en contacto directo con la naturaleza.",
    textEn: "Sleeping in the lodge, waking up to birdsong and crickets. A beautiful place immersed in the Misiones rainforest, in direct contact with nature.",
    name: "Leonel B.", fromEs: "Misiones", fromEn: "Misiones",
  },
];

function Stars() {
  return <div style={{ color: "#D9A441", fontSize: "0.95rem", letterSpacing: 2 }}>★★★★★</div>;
}

export function Reviews() {
  const { t, lang } = useLang();
  const row = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    row.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="resenas" style={{ position: "relative", overflow: "hidden", background: "#F2EDE3", padding: "clamp(80px, 10vw, 130px) 0" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${riverPattern})`, backgroundSize: "640px", backgroundRepeat: "repeat", opacity: 0.05, mixBlendMode: "multiply", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px, 4vw, 48px)" }}>
        <div className="rev-grid">
          {/* Resumen */}
          <div className="rev-summary">
            <p style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
              color: "rgba(27,46,28,0.55)", fontSize: "clamp(1rem, 1.6vw, 1.25rem)", margin: "0 0 10px",
            }}>
              {t("Lo que dicen", "What guests say")}
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", color: "#1B2E1C",
              fontSize: "clamp(2rem, 3.4vw, 3rem)", fontWeight: 400, lineHeight: 1.1,
              letterSpacing: "-0.01em", margin: "0 0 22px",
            }}>
              {t("Excelente", "Excellent")}
            </h2>
            <Stars />
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6B5E52",
              fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300, margin: "14px 0 0",
            }}>
              {t("A base de más de 90 reseñas en Google y TripAdvisor.", "Based on 90+ reviews on Google and TripAdvisor.")}
            </p>

            {/* Distinciones */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
              {["TripAdvisor", "Certificate of Excellence", "Green Leader"].map((b, i) => (
                <span key={i} style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(27,46,28,0.6)",
                  fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  border: "1px solid rgba(27,46,28,0.2)", borderRadius: 999, padding: "5px 12px",
                }}>{b}</span>
              ))}
            </div>

            {/* Flechas */}
            <div className="rev-arrows">
              <button aria-label={t("Anterior", "Previous")} onClick={() => scroll(-1)} className="rev-arrow">←</button>
              <button aria-label={t("Siguiente", "Next")} onClick={() => scroll(1)} className="rev-arrow">→</button>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="rev-cards" ref={row}>
            {reviews.map((rev, i) => (
              <div key={i} className="rev-card">
                <Stars />
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3A3128",
                  fontSize: "0.92rem", lineHeight: 1.7, fontWeight: 300, margin: "16px 0 22px", flexGrow: 1,
                }}>
                  {lang === "es" ? rev.textEs : rev.textEn}
                </p>
                <div style={{
                  fontFamily: "'DM Serif Display', serif", color: "#1B2E1C",
                  fontSize: "1rem", fontStyle: "italic",
                }}>
                  {rev.name}
                </div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#A89880",
                  fontSize: "0.7rem", letterSpacing: "0.08em", marginTop: 3,
                }}>
                  {lang === "es" ? rev.fromEs : rev.fromEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rev-grid { display: grid; grid-template-columns: 0.9fr 2.1fr; gap: clamp(32px, 5vw, 72px); align-items: center; }
        .rev-cards { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 6px 4px 18px; scrollbar-width: none; }
        .rev-cards::-webkit-scrollbar { display: none; }
        .rev-card { scroll-snap-align: start; flex: 0 0 300px; display: flex; flex-direction: column; background: #ffffff; border: 1px solid rgba(27,46,28,0.08); border-radius: 14px; padding: 28px; min-height: 260px; }
        .rev-arrows { display: flex; gap: 12px; margin-top: 36px; }
        .rev-arrow { width: 44px; height: 44px; border-radius: 999px; border: 1px solid rgba(27,46,28,0.25); background: transparent; color: #1B2E1C; font-size: 1rem; cursor: pointer; transition: background 0.2s, color 0.2s; }
        .rev-arrow:hover { background: #1B2E1C; color: #F2EDE3; }
        @media (max-width: 860px) {
          .rev-grid { grid-template-columns: 1fr; gap: 32px; }
          .rev-card { flex-basis: 78vw; }
          .rev-arrows { margin-top: 24px; }
        }
      `}</style>
    </section>
  );
}
