import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "51924150790";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola SysJoL, soy de Perú y quiero automatizar los procesos de mi negocio. ¿Conversamos?",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const SCROLL_THRESHOLD = 500;

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const handleBackToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      {/* WhatsApp — abajo derecha, siempre visible */}
      <button
        type="button"
        onClick={handleWhatsApp}
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
        style={{
          marginBottom: "env(safe-area-inset-bottom, 0px)",
          marginRight: "env(safe-area-inset-right, 0px)",
        }}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[90] group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-30"
        />
        <FaWhatsapp className="relative w-7 h-7" />
      </button>

      {/* Volver arriba — abajo izquierda, solo tras scroll */}
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Volver arriba"
        title="Volver arriba"
        tabIndex={showTop ? 0 : -1}
        style={{
          marginBottom: "env(safe-area-inset-bottom, 0px)",
          marginLeft: "env(safe-area-inset-left, 0px)",
        }}
        className={`fixed bottom-6 left-4 md:bottom-8 md:left-8 z-[90] w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default FloatingButtons;
