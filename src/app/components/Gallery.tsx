import { useLang } from "./LangContext";
import gPileta from "figma:asset/gal-pileta-aerea.webp";
import gTucan from "figma:asset/gal-tucan.webp";
import gRioNiebla from "figma:asset/gal-rio-niebla.webp";
import gYogaPileta from "figma:asset/gal-yoga-pileta.webp";
import gSurucua from "figma:asset/gal-surucua.webp";
import gCaminata from "figma:asset/gal-caminata-grupo.webp";
import gHabitacion from "figma:asset/gal-habitacion-botellas.webp";
import gMariposa from "figma:asset/gal-mariposa.webp";
import gRioSol from "figma:asset/gal-rio-sol.webp";
import gYogaCuervo from "figma:asset/gal-yoga-cuervo.webp";
import gTrekking from "figma:asset/gal-trekking.webp";
import gFogon from "figma:asset/gal-fogon.webp";
import gRestaurante from "figma:asset/gal-restaurante.webp";
import gYogaMat from "figma:asset/gal-yoga-mat.webp";

const photos = [
  { src: gPileta, alt: "Piscina en la selva (vista aérea)" },
  { src: gTucan, alt: "Tucán en una rama" },
  { src: gRioNiebla, alt: "Río Iguazú con niebla al amanecer" },
  { src: gYogaPileta, alt: "Yoga junto a la piscina" },
  { src: gSurucua, alt: "Surucuá, ave de la selva" },
  { src: gCaminata, alt: "Caminata grupal en la selva" },
  { src: gHabitacion, alt: "Habitación con pared de botellas" },
  { src: gMariposa, alt: "Mariposa morpho azul" },
  { src: gRioSol, alt: "Río con sol entre los árboles" },
  { src: gYogaCuervo, alt: "Yoga, postura del cuervo" },
  { src: gTrekking, alt: "Trekking por sendero de selva" },
  { src: gFogon, alt: "Fogón nocturno con guía" },
  { src: gRestaurante, alt: "Restaurante del lodge" },
  { src: gYogaMat, alt: "Clase de yoga" },
];

export function Gallery() {
  const { t } = useLang();

  return (
    <section id="galeria" style={{ background: "#111A12", padding: "clamp(90px, 11vw, 130px) 0" }}>
      {/* Header centrado */}
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px", padding: "0 clamp(24px, 4vw, 48px)" }}>
        <p style={{
          fontFamily: "'DM Serif Display', serif",
          fontStyle: "italic",
          color: "rgba(242,237,227,0.55)",
          fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
          margin: "0 0 14px",
        }}>
          {t("Fauna, río y bosque", "Wildlife, river and forest")}
        </p>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          color: "#F2EDE3",
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: "-0.01em",
          margin: 0,
        }}>
          {t("La selva en imágenes", "The forest in images")}
        </h2>
      </div>

      {/* Carrusel continuo */}
      <div className="gal-marquee" aria-label={t("Galería de fotos", "Photo gallery")}>
        <div className="gal-track">
          {[...photos, ...photos].map((p, i) => (
            <div className="gal-slide" key={i}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gal-marquee { overflow: hidden; width: 100%; -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
        .gal-track { display: flex; width: max-content; animation: gal-scroll 80s linear infinite; }
        .gal-marquee:hover .gal-track { animation-play-state: paused; }
        .gal-slide { flex: 0 0 auto; width: clamp(180px, 18.5vw, 300px); aspect-ratio: 4 / 5; margin-right: 16px; border-radius: 8px; overflow: hidden; }
        .gal-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @keyframes gal-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 600px) {
          .gal-slide { width: 60vw; margin-right: 12px; }
          .gal-track { animation-duration: 55s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gal-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
