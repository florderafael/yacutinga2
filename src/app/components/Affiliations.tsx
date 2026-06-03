import { useLang } from "./LangContext";

const orgs = [
  "Red de Refugios de Vida Silvestre",
  "Ruta de la Yerba Mate",
  "Marca País Argentina",
  "Subsecretaría de Ecoturismo",
  "Yacutinga Lodge Insight",
  "Argentina TOP10",
];

export function Affiliations() {
  const { t } = useLang();
  return (
    <section style={{ background: "#F2EDE3", padding: "clamp(44px, 6vw, 72px) 24px", borderTop: "1px solid rgba(27,46,28,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "rgba(27,46,28,0.45)",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          margin: "0 0 28px",
        }}>
          {t("Esta reserva privada integra", "This private reserve is part of")}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "22px 44px" }}>
          {orgs.map((o, i) => (
            <span key={i} style={{
              fontFamily: "'DM Serif Display', serif",
              color: "rgba(27,46,28,0.7)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              lineHeight: 1.2,
            }}>
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
