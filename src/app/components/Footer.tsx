import { useLang } from "./LangContext";

export function Footer() {
  const { lang, setLang, t } = useLang();

  return (
    <footer style={{ background: "#0C1410", padding: "64px 0 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, flexWrap: "wrap", gap: 48 }} className="footer-top">
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#F2EDE3",
              fontSize: "1.1rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>
              Yacutinga
            </div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(242,237,227,0.25)",
              fontSize: "0.58rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}>
              Lodge
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(242,237,227,0.28)",
              fontSize: "0.78rem",
              lineHeight: 1.7,
              maxWidth: 200,
              fontWeight: 300,
            }}>
              {t("Selva Paranaense · Misiones · Argentina", "Paranaense Jungle · Misiones · Argentina")}
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { href: "#experiencias", es: "Experiencias", en: "Experiences" },
                { href: "#alojamiento", es: "Alojamiento", en: "Accommodation" },
                { href: "#paquetes", es: "Estadías", en: "Stays" },
                { href: "#galeria", es: "Galería", en: "Gallery" },
                { href: "#conservacion", es: "Conservación", en: "Conservation" },
                { href: "#contacto", es: "Contacto", en: "Contact" },
              ].map(l => (
                <a key={l.href} href={l.href} style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "rgba(242,237,227,0.32)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.32)")}
                >
                  {lang === "es" ? l.es : l.en}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="https://www.instagram.com/yacutingalodge/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.32)", fontSize: "0.78rem", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.32)")}>
                Instagram
              </a>
              <a href="mailto:info@yacutinga.com" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.32)", fontSize: "0.78rem", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.32)")}>
                Email
              </a>
              <a href="https://wa.me/5493757000000" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.32)", fontSize: "0.78rem", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.32)")}>
                WhatsApp
              </a>
              <button onClick={() => setLang(lang === "es" ? "en" : "es")} style={{ background: "none", border: "none", color: "rgba(242,237,227,0.32)", fontSize: "0.78rem", letterSpacing: "0.12em", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "left", textTransform: "uppercase", marginTop: 12, transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F2EDE3")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,237,227,0.32)")}>
                {lang === "es" ? "English" : "Español"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(242,237,227,0.06)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.18)", fontSize: "0.68rem", letterSpacing: "0.06em" }}>
            © 2024 Yacutinga Lodge
          </span>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(242,237,227,0.12)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            25°49'S · 54°02'O
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  );
}
