import { useLang } from "./LangContext";
import riverPattern from "figma:asset/river-pattern.jpg";

export function About() {
  const { t } = useLang();

  return (
    <section
      id="lodge"
      style={{
        position: "relative",
        background: "#F2EDE3",
        overflow: "hidden",
        padding: "clamp(96px, 13vw, 170px) 0",
      }}
    >
      {/* Textura: líneas finas tipo curvas de nivel / río */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${riverPattern})`,
          backgroundSize: "640px",
          backgroundRepeat: "repeat",
          opacity: 0.05,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", textAlign: "center", padding: "0 clamp(24px, 4vw, 48px)" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          color: "#1B2E1C",
          fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
          fontWeight: 400,
          lineHeight: 1.12,
          letterSpacing: "-0.01em",
          margin: "0 auto 28px",
          maxWidth: 880,
        }}>
          {t("Una reserva privada en el ", "A private reserve in the ")}
          <em style={{ fontStyle: "italic" }}>{t("corazón de la selva", "heart of the rainforest")}</em>
        </h2>

        <p style={{
          fontFamily: "'DM Serif Display', serif",
          fontStyle: "italic",
          color: "#3D5A3E",
          fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)",
          lineHeight: 1.5,
          margin: "0 auto 56px",
          maxWidth: 640,
        }}>
          {t("El primer ecolodge de Argentina, rodeado por el río Iguazú,", "Argentina's first ecolodge, surrounded by the Iguazú River,")}<br />
          {t("a dos horas de las Cataratas.", "two hours from the Falls.")}
        </p>

        {/* Dos columnas de texto */}
        <div className="lodge-cols" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          maxWidth: 840,
          margin: "0 auto",
          textAlign: "left",
        }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3D5A3E", fontSize: "0.95rem", lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
            {t(
              "Yacutinga está enclavado dentro de su propia reserva de 570 hectáreas de Bosque Atlántico —uno de los ecosistemas más amenazados del planeta— rodeado por el río Iguazú.",
              "Yacutinga sits within its own 570-hectare Atlantic Forest reserve — one of the most threatened ecosystems on the planet — surrounded by the Iguazú River."
            )}
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3D5A3E", fontSize: "0.95rem", lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
            {t(
              "Con 22 km de senderos interpretados y programas all-inclusive de dos y tres noches, cada estadía es una inmersión genuina: fauna salvaje, silencio real y cocina regional.",
              "With 22 km of interpreted trails and all-inclusive two and three-night programs, every stay is a genuine immersion: wildlife, real silence and regional cuisine."
            )}
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 760px) {
          .lodge-cols { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
