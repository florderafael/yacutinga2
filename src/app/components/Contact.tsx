import { useState } from "react";
import { useLang } from "./LangContext";
import heroBanner from "figma:asset/hero-banner.jpg";

export function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", dates: "", guests: "", message: "" });

  const field: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.32)",
    padding: "14px 0",
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    letterSpacing: "0.02em",
  };

  return (
    <section id="contacto" style={{ position: "relative", overflow: "hidden", padding: "clamp(90px, 11vw, 140px) 0" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroBanner})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(11,18,11,0.86), rgba(11,18,11,0.92))" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.16, mixBlendMode: "overlay", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px, 4vw, 48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 120px", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.15,
              marginBottom: 40,
            }}>
              {t("Comenzá tu experiencia", "Begin your experience")}
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 64,
              maxWidth: 380,
            }}>
              {t(
                "Cupos limitados para asegurar una experiencia auténtica. Te respondemos en menos de 24 horas.",
                "Limited spaces to ensure an authentic experience. We respond within 24 hours."
              )}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <a href="mailto:info@yacutinga.com" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                info@yacutinga.com
              </a>
              <a href="https://www.instagram.com/yacutingalodge/" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                @yacutingalodge
              </a>
              <a
                href="https://wa.me/5493757000000?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Yacutinga%20Lodge."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ paddingTop: 80 }}>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  marginBottom: 16,
                }}>
                  {t("Gracias por escribirnos.", "Thank you for reaching out.")}
                </p>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}>
                  {t("Te respondemos en las próximas 24 hs.", "We'll be in touch within 24 hours.")}
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <FormField label={t("Nombre", "Name")} field={field}>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t("Tu nombre", "Your name")} style={field} onFocus={e => (e.target.style.borderColor = "rgba(196,98,58,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.32)")} />
                  </FormField>
                  <FormField label="Email" field={field}>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" style={field} onFocus={e => (e.target.style.borderColor = "rgba(196,98,58,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.32)")} />
                  </FormField>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <FormField label={t("Fechas tentativas", "Tentative dates")} field={field}>
                    <input type="text" value={form.dates} onChange={e => setForm({ ...form, dates: e.target.value })} placeholder={t("Ej: julio 2025", "E.g. July 2025")} style={field} onFocus={e => (e.target.style.borderColor = "rgba(196,98,58,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.32)")} />
                  </FormField>
                  <FormField label={t("Personas", "Guests")} field={field}>
                    <input type="number" min={1} max={20} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} placeholder="2" style={field} onFocus={e => (e.target.style.borderColor = "rgba(196,98,58,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.32)")} />
                  </FormField>
                </div>
                <FormField label={t("Mensaje", "Message")} field={field}>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder={t("Contanos qué buscás…", "Tell us what you're looking for…")} style={{ ...field, resize: "vertical" as const }} onFocus={e => (e.target.style.borderColor = "rgba(196,98,58,0.5)")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.32)")} />
                </FormField>

                <div style={{ paddingTop: 16 }}>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "0.7rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      padding: 0,
                      borderBottom: "1px solid rgba(255,255,255,0.6)",
                      paddingBottom: 3,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#C4623A"; e.currentTarget.style.borderColor = "#C4623A"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                  >
                    {t("Enviar consulta", "Send enquiry")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
        ::placeholder { color: rgba(255,255,255,0.55) !important; }
      `}</style>
    </section>
  );
}

function FormField({ label, children, field: _ }: { label: string; children: React.ReactNode; field: React.CSSProperties }) {
  return (
    <div>
      <label style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: "rgba(255,255,255,0.72)",
        fontSize: "0.6rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        display: "block",
        marginBottom: 4,
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}
