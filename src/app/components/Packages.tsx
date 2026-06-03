import { useLang } from "./LangContext";
import { Moon, UtensilsCrossed, Footprints, Bird, Waves, Users, Truck } from "lucide-react";
import data from "../../../content/packages/index.json";

// Mapa de íconos: el contenido editable guarda un nombre, acá lo convertimos al ícono.
const ICONS: Record<string, typeof Moon> = {
  moon: Moon,
  meals: UtensilsCrossed,
  walks: Footprints,
  bird: Bird,
  kayak: Waves,
  community: Users,
  transfer: Truck,
};

type Detail = { icon: string; es: string; en: string };
interface Pkg {
  image: string;
  nameEs: string; nameEn: string;
  nightsEs: string; nightsEn: string;
  descEs: string; descEn: string;
  priceEs?: string; priceEn?: string;
  panel: string;
  objPos?: string;
  details: Detail[];
}

export function Packages() {
  const { t } = useLang();
  const items = data.items as Pkg[];

  return (
    <section id="paquetes" style={{ background: "#ECE5D7", padding: "clamp(90px, 11vw, 140px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(24px, 4vw, 48px)" }}>
        {/* Header centrado */}
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: "italic",
            color: "rgba(27,46,28,0.55)",
            fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
            margin: "0 0 14px",
          }}>
            {t(data.headerKickerEs, data.headerKickerEn)}
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#1B2E1C",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {t(data.headerTitleEs, data.headerTitleEn)}
          </h2>
        </div>

        {/* Bloques */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {items.map((p, i) => (
            <PackageBlock key={i} pkg={p} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Nota */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "rgba(27,46,28,0.4)",
          fontSize: "0.75rem",
          letterSpacing: "0.04em",
          lineHeight: 1.7,
          textAlign: "center",
          marginTop: 48,
        }}>
          {t(data.noteEs, data.noteEn)}
        </p>
      </div>

      <style>{`
        .pkg-block { display: grid; grid-template-columns: 1fr 1fr; border-radius: 14px; overflow: hidden; min-height: 360px; }
        .pkg-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 860px) {
          .pkg-block { grid-template-columns: 1fr !important; }
          .pkg-block .pkg-imgwrap { order: -1 !important; min-height: 240px; }
        }
      `}</style>
    </section>
  );
}

function PackageBlock({ pkg, flip }: { pkg: Pkg; flip: boolean }) {
  const { t } = useLang();
  const price = t(pkg.priceEs || "", pkg.priceEn || "");

  return (
    <div className="pkg-block">
      {/* Imagen */}
      <div className="pkg-imgwrap" style={{ position: "relative", order: flip ? 2 : 1, overflow: "hidden" }}>
        <img className="pkg-img" src={pkg.image} alt={t(pkg.nameEs, pkg.nameEn)} loading="lazy" style={{ objectPosition: pkg.objPos || "center" }} />
      </div>

      {/* Panel de color liso */}
      <div style={{
        order: flip ? 1 : 2,
        background: pkg.panel,
        padding: "clamp(26px, 3vw, 40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        {/* Chips */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          {[t(pkg.nightsEs, pkg.nightsEn), t("All inclusive", "All inclusive")].map((c, k) => (
            <span key={k} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(242,237,227,0.85)",
              fontSize: "0.66rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid rgba(242,237,227,0.3)",
              borderRadius: 999,
              padding: "5px 13px",
            }}>{c}</span>
          ))}
        </div>

        <h3 style={{
          fontFamily: "'DM Serif Display', serif",
          color: "#F2EDE3",
          fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.15,
          margin: "0 0 10px",
        }}>
          {t(pkg.nameEs, pkg.nameEn)}
        </h3>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "rgba(242,237,227,0.6)",
          fontSize: "0.88rem",
          lineHeight: 1.55,
          fontWeight: 300,
          margin: "0 0 18px",
          maxWidth: 420,
        }}>
          {t(pkg.descEs, pkg.descEn)}
        </p>

        {/* Iconografía / detalles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 18px", marginBottom: 18 }}>
          {pkg.details.map((d, k) => {
            const Icon = ICONS[d.icon] || Moon;
            return (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon size={18} color="#C4623A" strokeWidth={1.6} />
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "rgba(242,237,227,0.82)",
                  fontSize: "0.82rem",
                  lineHeight: 1.3,
                }}>
                  {t(d.es, d.en)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Precio opcional */}
        {price ? (
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#F2EDE3",
            fontSize: "1.25rem",
            margin: "0 0 16px",
          }}>{price}</p>
        ) : null}

        {/* Botón de contacto */}
        <a
          href="#contacto"
          style={{
            alignSelf: "flex-start",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#1B2E1C",
            background: "#F2EDE3",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: 999,
            padding: "11px 24px",
            transition: "background 0.25s, transform 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#E2DAC8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#F2EDE3"; e.currentTarget.style.transform = "none"; }}
        >
          {t("Consultar disponibilidad", "Check availability")}
        </a>
      </div>
    </div>
  );
}
