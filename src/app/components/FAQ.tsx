import { useState } from "react";
import { useLang } from "./LangContext";

const faqs = [
  {
    qEs: "¿Qué incluye el precio?",
    qEn: "What's included in the price?",
    aEs: "Alojamiento, todas las comidas, guías ambientales certificados, actividades (caminatas, avistaje de aves, yoga) y traslado 4×4 desde Puerto Iguazú. No incluye vuelos ni bebidas alcohólicas.",
    aEn: "Accommodation, all meals, certified environmental guides, activities (walks, birdwatching, yoga) and 4×4 transfer from Puerto Iguazú. Flights and alcoholic beverages not included.",
  },
  {
    qEs: "¿Cuál es la mejor época para visitar?",
    qEn: "What is the best time to visit?",
    aEs: "El lodge está abierto de mediados de junio a mediados de mayo. La selva es espectacular todo el año. La primavera y el otoño son ideales para el avistaje de aves.",
    aEn: "The lodge is open from mid-June to mid-May. The jungle is spectacular year-round. Spring and autumn are ideal for birdwatching.",
  },
  {
    qEs: "¿Hay WiFi?",
    qEn: "Is there WiFi?",
    aEs: "No hay WiFi en los módulos. Señal muy limitada en el área común. Esta desconexión es intencional y forma parte de la experiencia.",
    aEn: "There is no WiFi in the modules. Very limited signal in the common area. This disconnection is intentional and part of the experience.",
  },
  {
    qEs: "¿Qué nivel físico se requiere?",
    qEn: "What fitness level is required?",
    aEs: "Las caminatas son de nivel moderado. No se requiere condición especial. Los senderos pueden tener barro; se recomienda calzado de trekking.",
    aEn: "Walks are moderate level. No special fitness required. Trails may have mud; trekking boots are recommended.",
  },
  {
    qEs: "¿Puedo combinar con las Cataratas del Iguazú?",
    qEn: "Can I combine with Iguazú Falls?",
    aEs: "Sí, pero de manera independiente. Te recomendamos visitar las Cataratas antes o después de tu estadía. El lodge está a 2 horas de Puerto Iguazú.",
    aEn: "Yes, but independently. We recommend visiting the Falls before or after your stay. The lodge is 2 hours from Puerto Iguazú.",
  },
  {
    qEs: "¿Cuándo cierra el lodge?",
    qEn: "When is the lodge closed?",
    aEs: "De mediados de mayo a mediados de junio para mantenimiento y trabajos de conservación.",
    aEn: "From mid-May to mid-June for maintenance and conservation work.",
  },
];

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#F2EDE3", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }} className="faq-grid">
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#1B2E1C",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
            }}>
              {t("Lo que necesitás saber", "What you need to know")}
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid rgba(27,46,28,0.1)" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "24px 0",
                    gap: 24,
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#1B2E1C",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    letterSpacing: "0.01em",
                  }}>
                    {t(faq.qEs, faq.qEn)}
                  </span>
                  <span style={{
                    color: "rgba(27,46,28,0.3)",
                    fontSize: "1rem",
                    flexShrink: 0,
                    fontFamily: "monospace",
                    transition: "transform 0.3s, color 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    color: open === i ? "#C4623A" : "rgba(27,46,28,0.3)",
                  } as React.CSSProperties}>
                    +
                  </span>
                </button>
                {open === i && (
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#6B5E52",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    paddingBottom: 28,
                    paddingRight: 40,
                  }}>
                    {t(faq.aEs, faq.aEn)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
