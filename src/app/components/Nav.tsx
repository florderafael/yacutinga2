import { useEffect, useState } from "react";
import { useLang } from "./LangContext";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#experiencias", es: "Experiencias", en: "Experiences" },
    { href: "#alojamiento", es: "Alojamiento", en: "Accommodation" },
    { href: "#paquetes", es: "Estadías", en: "Stays" },
    { href: "#conservacion", es: "Conservación", en: "Conservation" },
    { href: "#contacto", es: "Contacto", en: "Contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          transition: "background 0.6s ease",
          background: scrolled ? "rgba(18,28,19,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 10 }}
        >
          <span style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#F2EDE3",
            fontSize: "1.05rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}>
            Yacutinga
          </span>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "rgba(242,237,227,0.4)",
            fontSize: "0.58rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}>
            Lodge
          </span>
        </a>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(242,237,227,0.5)",
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.5)")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
          >
            <span style={{
              display: "block", width: 24, height: 1, background: "#F2EDE3",
              transition: "transform 0.35s ease, opacity 0.35s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 24, height: 1, background: "#F2EDE3",
              transition: "opacity 0.35s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 24, height: 1, background: "#F2EDE3",
              transition: "transform 0.35s ease, opacity 0.35s ease",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 99,
        background: "#111A12",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10vw",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? "visible" : "hidden",
      }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "#F2EDE3",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                textDecoration: "none",
                lineHeight: 1.3,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s, color 0.2s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C4623A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#F2EDE3")}
            >
              {lang === "es" ? l.es : l.en}
            </a>
          ))}
        </nav>

        <div style={{
          position: "absolute",
          bottom: 48,
          left: "10vw",
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}>
          <a href="https://www.instagram.com/yacutingalodge/" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.4)", fontSize: "0.72rem", letterSpacing: "0.2em", textDecoration: "none", textTransform: "uppercase" }}>
            Instagram
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.4)", fontSize: "0.72rem", letterSpacing: "0.2em", textDecoration: "none", textTransform: "uppercase" }}>
            {t("Consultar", "Enquire")}
          </a>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.25)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Misiones, Argentina
          </span>
        </div>
      </div>
    </>
  );
}
