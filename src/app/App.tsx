import { LangProvider } from "./components/LangContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experiences } from "./components/Experiences";
import { Accommodation } from "./components/Accommodation";
import { Packages } from "./components/Packages";
import { Gallery } from "./components/Gallery";
import { Sustainability } from "./components/Sustainability";
import { HowToArrive } from "./components/HowToArrive";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <LangProvider>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          scrollBehavior: "smooth",
          overflowX: "hidden",
        }}
      >
        <Nav />
        <Hero />
        <About />
        <Experiences />
        <Accommodation />
        <Packages />
        <Gallery />
        <Sustainability />
        <HowToArrive />
        <Reviews />
        <Contact />
        <Footer />
        <WhatsAppButton />

        <style>{`
          html {
            scroll-behavior: smooth;
          }
          * {
            box-sizing: border-box;
          }
          ::placeholder {
            color: rgba(242, 237, 227, 0.3);
          }
          body {
            margin: 0;
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
          select option {
            background: #1B2E1C;
            color: #F2EDE3;
          }
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(27,46,28,0.3);
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(27,46,28,0.6);
          }
        `}</style>
      </div>
    </LangProvider>
  );
}
