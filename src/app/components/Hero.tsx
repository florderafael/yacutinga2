import { useLang } from "./LangContext";
import heroBanner from "figma:asset/hero-banner.jpg";
import tripadvisorLogo from "figma:asset/tripadvisor.svg";


const HERO_BG = heroBanner;

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 640,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "#0E1A0F",
      }}
    >
      {/* Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
      }} />

      {/* Gradient — heavy at bottom, very light at top */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(10,18,10,0.82) 0%, rgba(10,18,10,0.18) 45%, rgba(10,18,10,0.08) 100%)",
      }} />

      {/* Content — bottom left */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "0 48px 64px",
        maxWidth: 860,
      }}>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          color: "#F2EDE3",
          fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
          fontWeight: 400,
          lineHeight: 1.04,
          letterSpacing: "-0.01em",
          marginBottom: 36,
        }}>
          {lang === "es" ? (
            <>El primer ecolodge<br />de Argentina</>
          ) : (
            <>Argentina's first<br />ecolodge</>
          )}
        </h1>

        <a
          href="#contacto"
          style={{
            display: "inline-block",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#F2EDE3",
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.03em",
            textDecoration: "none",
            background: "rgba(242,237,227,0.14)",
            border: "1px solid rgba(242,237,227,0.45)",
            borderRadius: 999,
            padding: "14px 30px",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            transition: "background 0.25s, border-color 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(242,237,227,0.24)";
            e.currentTarget.style.borderColor = "rgba(242,237,227,0.7)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(242,237,227,0.14)";
            e.currentTarget.style.borderColor = "rgba(242,237,227,0.45)";
          }}
        >
          {t("Consultar disponibilidad", "Check availability")}
        </a>
      </div>

      {/* Bottom right: Tripadvisor card */}
      <a
        href="#resenas"
        style={{
          position: "absolute",
          bottom: 64,
          right: 48,
          zIndex: 2,
          background: "#FFFFFF",
          borderRadius: 16,
          padding: "14px 18px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
          textDecoration: "none",
          display: "block",
          minWidth: 170,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <img src={tripadvisorLogo} alt="Tripadvisor" style={{ height: 18, width: "auto", display: "block" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.45rem", color: "#1A1A1A", lineHeight: 1 }}>4,6</span>
          <span style={{ display: "flex", gap: 3 }}>
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: "#00AA6C" }} />
            ))}
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "linear-gradient(90deg, #00AA6C 55%, #D7E9E0 55%)" }} />
          </span>
        </div>

        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.62rem", color: "#8A8A8A", letterSpacing: "0.04em", marginTop: 6, marginBottom: 0 }}>
          {t("estrellas en Tripadvisor", "stars on Tripadvisor")}
        </p>
      </a>

      {/* Scroll line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: 1,
        height: 64,
        background: "linear-gradient(to bottom, transparent, rgba(242,237,227,0.35))",
        zIndex: 2,
      }} />
    </section>
  );
}
