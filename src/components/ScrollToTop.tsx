import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

const SITE_NAME = "SysJoL";

/** Rutas con título propio (gestionado por la página): no se tocan aquí. */
const MANAGED_ROUTES = ["/capturaapp", "/downmuvi", "/qr-generator"];

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "SysJoL — Automatización de procesos y software a medida en Perú",
    description:
      "Automatizamos MYPEs peruanas: flujos con n8n, APIs, facturación SUNAT, ventas por WhatsApp e IA aplicada. Software a medida desde Trujillo para todo el Perú.",
  },
  "/systems": {
    title: "Systems — Arquitecturas y automatización | SysJoL",
    description:
      "Arquitecturas de software explicadas sin humo: API + automatización, monolito modular, microservicios y eventos. Patrones y proceso de trabajo de SysJoL.",
  },
  "/journey": {
    title: "Journey — Transformación digital | SysJoL",
    description:
      "Acompañamos tu transformación digital en 4 etapas: descubrimiento, estrategia, ejecución y crecimiento.",
  },
  "/lab": {
    title: "Lab — Proyectos de software y automatización | SysJoL",
    description:
      "Casos reales: automatización n8n, SUNAT XML, libro de reclamaciones, ecommerce y más. Mira el problema, el resultado y pide algo similar.",
  },
  "/courses": {
    title: "Cursos de tecnología | SysJoL",
    description:
      "Especializaciones en Excel, Spring Boot, .NET, Laravel, Arduino, Python e IA para impulsar tu carrera.",
  },
  "/python-course": {
    title: "Curso de Python — Certificación intensiva | SysJoL",
    description:
      "Certificación profesional intensiva de Python en 4 semanas, con proyectos reales y acompañamiento.",
  },
  "/privacy-policy": {
    title: "Política de Privacidad | SysJoL",
    description: "Cómo tratamos tus datos en SysJoL.",
  },
  "/terms-of-service": {
    title: "Términos de Servicio | SysJoL",
    description: "Condiciones de uso de los servicios de SysJoL.",
  },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (MANAGED_ROUTES.includes(pathname)) return;
    const meta = ROUTE_META[pathname];
    document.title = meta?.title ?? `${SITE_NAME} — Systems • Journey • Lab`;
    if (meta?.description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", meta.description);
    }
    // Única fuente de page_view (initGA usa send_page_view: false).
    // Respeta el consentimiento gestionado por CookieConsent.
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
