import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CapturaAppScreenshotSlider } from "@/components/captura-app/CapturaAppScreenshotSlider";
import {
  CAPTURA_APP_BUNDLE_ID,
  CAPTURA_APP_LOGO_PNG,
  CAPTURA_APP_DOWNLOAD_URL,
  CAPTURA_APP_LATEST_JSON_PATH,
  CAPTURA_APP_REPO_URL,
  CAPTURA_APP_VERSION,
} from "@/components/captura-app/constants";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Check,
  Cpu,
  Download,
  FolderOpen,
  Gauge,
  Home,
  Layers,
  MonitorPlay,
  Shield,
  Sparkles,
  Video,
  Webcam,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Grabación híbrida",
    body: "Motor en Rust con pipeline de vídeo y audio integrado al escritorio.",
    accent: "text-captura-coral",
  },
  {
    icon: Layers,
    title: "Modos flexibles",
    body: "Pantalla completa, ventana concreta (lista + miniatura) o región rectangular con selector siempre visible.",
    accent: "text-captura-indigo",
  },
  {
    icon: MonitorPlay,
    title: "Overlays profesionales",
    body: "Cuenta atrás configurable (3 s por defecto), overlay a resolución de escritorio y controles compactos siempre encima.",
    accent: "text-captura-violet",
  },
  {
    icon: Webcam,
    title: "Webcam opcional",
    body: "Overlay circular por defecto, abajo a la derecha; preferencia persistente en ajustes.",
    accent: "text-captura-coral",
  },
  {
    icon: Sparkles,
    title: "Audio claro",
    body: "Elige micrófono desde la lista del sistema; opciones de micrófono y audio del sistema en la UI de grabación.",
    accent: "text-captura-indigo",
  },
  {
    icon: FolderOpen,
    title: "Galería y dashboard",
    body: "Listado desde disco, borrar, comprimir y exportar; métricas de almacenamiento y barras de los últimos 7 días.",
    accent: "text-captura-violet",
  },
];

const steps = [
  {
    n: "01",
    title: "Elige qué capturar",
    text: "Pantalla, una ventana o un rectángulo. La app te guía con vistas dedicadas sin mezclar contextos.",
  },
  {
    n: "02",
    title: "Ajusta audio y cámara",
    text: "Dispositivos reales del sistema; activa o desactiva webcam y revisa la cuenta atrás en overlay.",
  },
  {
    n: "03",
    title: "Graba o dispara PNG",
    text: "Misma lógica de área para vídeo y capturas. FPS y resolución persistentes (30 FPS, 1080p por defecto).",
  },
  {
    n: "04",
    title: "Revisa en local",
    text: "Galería integrada y dashboard con referencia visual de espacio (~2 GB en la UI). Todo en tu carpeta de salida.",
  },
];

const compareRows = [
  {
    label: "Enfoque",
    captura: "Grabar, capturar, revisar y gestionar en un solo programa compacto.",
    other: "Herramientas amplias orientadas a producción en directo o flujos muy complejos.",
  },
  {
    label: "Integración",
    captura: "Nativo Windows (Tauri/Rust): ventanas, overlays y selectores del sistema.",
    other: "Soluciones solo navegador con límites en ventanas y permisos.",
  },
  {
    label: "Interfaz",
    captura: "Barra lateral densa: Grabar, Captura, Galería, Dashboard y Ajustes.",
    other: "Interfaces más pesadas o dispersas en múltiples paneles.",
  },
];

const faqItems = [
  {
    q: "¿Dónde se guardan mis archivos?",
    a: "Por defecto en Windows: C:\\Users\\Public\\CapturaApp. Puedes cambiar la carpeta en ajustes. No hay nube obligatoria: el contenido permanece en tu equipo.",
  },
  {
    q: "¿Qué tecnologías usa CapturaApp?",
    a: "Frontend con Vite, JavaScript modular y Tailwind CSS 4; API de Tauri v2 con plugins de diálogo, shell y log. Backend en Rust (scap para pantalla, cpal para audio) con capas de dominio, casos de uso e infraestructura.",
  },
  {
    q: "¿Qué comandos expone la app?",
    a: "Entre otros: start_recording, stop_recording, take_screenshot, list_captures, delete_capture, compress_captures, export_capture, list_windows, list_audio_devices y open_output_folder.",
  },
  {
    q: "¿Cuánto ocupa la ventana principal?",
    a: "Tamaño lógico 860×560 px (mínimo 800×520), barra de título personalizada sin decoraciones nativas y transparencia. Al arranque, splash ~420×280 y luego la ventana principal centrada.",
  },
  {
    q: "¿Existe un JSON con la versión y la URL del instalador?",
    a: `Sí. En la raíz del sitio (no bajo /capturaapp/, para que el router no sirva index.html) está el archivo estático capturaapp-latest.json. URL de ejemplo en producción: https://sysjol.onrender.com${CAPTURA_APP_LATEST_JSON_PATH}. Contiene los campos version y downloadUrl; la app de escritorio o scripts pueden hacer fetch ahí. El nombre del archivo es capturaapp-latest.json (no "latest.json" genérico).`,
  },
  {
    q: "¿Qué debo actualizar en cada release de CapturaApp?",
    a: `Tres sitios en sync: (1) CAPTURA_APP_VERSION y CAPTURA_APP_DOWNLOAD_URL en src/components/captura-app/constants.ts, (2) public/capturaapp-latest.json con la misma version y downloadUrl que el .exe publicado, (3) subir el instalador nuevo a la URL que declares (p. ej. GitHub). Tras el deploy, la landing y el JSON del sitio coinciden.`,
  },
];

const CAPTURA_APP_META_DESCRIPTION = `CapturaApp ${CAPTURA_APP_VERSION}: app de escritorio para Windows que graba pantalla, ventana o región, captura en PNG, ofrece galería y dashboard, audio por micrófono y webcam en overlay. Datos en local, sin nube obligatoria. Descarga del instalador .exe.`;

const CapturaAppPage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const prevTwTitle = twTitle?.getAttribute("content") ?? "";
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const prevTwDesc = twDesc?.getAttribute("content") ?? "";

    const pageTitle = `CapturaApp ${CAPTURA_APP_VERSION} — Grabación y capturas en Windows | SysJoL`;
    document.title = pageTitle;
    metaDesc?.setAttribute("content", CAPTURA_APP_META_DESCRIPTION);
    ogTitle?.setAttribute("content", pageTitle);
    ogDesc?.setAttribute("content", CAPTURA_APP_META_DESCRIPTION);
    twTitle?.setAttribute("content", pageTitle);
    twDesc?.setAttribute("content", CAPTURA_APP_META_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
      ogTitle?.setAttribute("content", prevOgTitle);
      ogDesc?.setAttribute("content", prevOgDesc);
      twTitle?.setAttribute("content", prevTwTitle);
      twDesc?.setAttribute("content", prevTwDesc);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article>
      <section className="relative border-b border-white/5 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,87,87,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_45%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Inicio</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium">
                    CapturaApp
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-card/50 px-4 py-2 backdrop-blur-sm">
              <img
                src={CAPTURA_APP_LOGO_PNG}
                alt="Logotipo CapturaApp"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-captura-coral/50"
              />
              <div className="text-left">
                <h1 className="font-display text-xl font-bold md:text-2xl">
                  CapturaApp
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm">
                  v{CAPTURA_APP_VERSION} · {CAPTURA_APP_BUNDLE_ID}
                </p>
              </div>
            </div>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Resuelve en una frase la necesidad de{" "}
              <strong className="font-semibold text-foreground">
                grabar o capturar pantalla en Windows
              </strong>{" "}
              (completa, ventana o región) con audio, webcam opcional en overlay
              y una galería local para revisar y exportar, sin depender de la nube.
            </p>
            <p className="mt-4 text-base font-medium text-foreground">
              Versión actual: {CAPTURA_APP_VERSION}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-captura-coral font-semibold text-white shadow-lg shadow-captura-coral/25 hover:bg-captura-coral/90"
                asChild
              >
                <a
                  id="descargar"
                  href={CAPTURA_APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar CapturaApp para Windows"
                >
                  <Download className="mr-2 h-5 w-5" />
                  <span className="sm:hidden">Descargar</span>
                  <span className="hidden sm:inline">
                    Descargar para Windows
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/courses">Ver formación SysJoL</Link>
              </Button>
            </div>
            <p className="mt-4 max-w-xl text-center text-sm text-muted-foreground">
              Instalador para Windows: enlace directo al archivo{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                .exe
              </code>{" "}
              (GitHub Releases o rama main, según publicación actual).
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/5 bg-secondary/10 py-14 md:py-16"
        aria-labelledby="capturaapp-lista-funciones"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2
              id="capturaapp-lista-funciones"
              className="font-display text-2xl font-bold md:text-3xl"
            >
              Funcionalidades principales
            </h2>
            <p className="mt-2 text-muted-foreground">
              Lista orientada a quien busca en la página qué hace el producto
              (también útil para resúmenes automáticos del contenido).
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground md:text-base">
              <li>Grabar pantalla completa, una ventana concreta o una región rectangular</li>
              <li>Capturas en PNG con la misma lógica de área que la grabación</li>
              <li>Galería local: listado, borrar, comprimir y exportar desde disco</li>
              <li>Dashboard con métricas de almacenamiento y vista de actividad reciente</li>
              <li>Audio: micrófono y audio del sistema según la vista de grabación</li>
              <li>Webcam en overlay (p. ej. círculo en esquina), opcional y configurable</li>
              <li>Cuenta atrás y overlays ligeros antes de iniciar la grabación</li>
            </ul>
            <h3 className="mt-10 font-display text-lg font-bold md:text-xl">
              Requisitos del sistema
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              <strong className="font-medium text-foreground">Windows 10 u 11</strong>{" "}
              (64 bits). Conexión a Internet solo para descargar el instalador; el
              uso habitual de la aplicación es en local.
            </p>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              <strong className="font-medium text-foreground">Descarga:</strong>{" "}
              usa el botón «Descargar para Windows» arriba o{" "}
              <a
                href={CAPTURA_APP_DOWNLOAD_URL}
                className="text-captura-indigo underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                este enlace al instalador
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Todo lo esencial,{" "}
              <span className="text-captura-indigo">sin ruido</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Diseñada para sesiones de soporte, clases y documentación técnica.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-captura-indigo/30 hover:shadow-lg hover:shadow-captura-indigo/5"
              >
                <f.icon
                  className={`mb-4 h-10 w-10 ${f.accent} transition-transform group-hover:scale-105`}
                />
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-secondary/20 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Cómo encaja en tu flujo
              </h2>
              <p className="mt-3 text-muted-foreground">
                Cuatro pasos claros, de la selección del área a la gestión en
                disco.
              </p>
              <ul className="mt-10 space-y-8">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-sm font-bold text-captura-coral">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-captura-coral/10 to-captura-violet/10 blur-2xl" />
              <CapturaAppScreenshotSlider className="relative shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Por qué una app nativa compacta
            </h2>
            <p className="mt-3 text-muted-foreground">
              Comparativa breve, sin nombres de terceros: solo enfoque y
              arquitectura.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-card/60">
                  <th className="p-4 font-display font-bold">Criterio</th>
                  <th className="p-4 font-display font-bold text-captura-coral">
                    CapturaApp
                  </th>
                  <th className="p-4 font-display font-bold text-muted-foreground">
                    Suites amplias / solo web
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 bg-card/20 last:border-0"
                  >
                    <td className="p-4 font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.captura}</td>
                    <td className="p-4 text-muted-foreground/80">
                      {row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-background to-secondary/30 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <Gauge className="h-10 w-10 shrink-0 text-captura-indigo" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Rendimiento y ligereza
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ventana principal relativamente pequeña; overlays y ventanas
                  auxiliares solo cuando hacen falta. Al cambiar de vista se
                  limpian ventanas extra para evitar repintados costosos y
                  ventanas fantasma.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <Cpu className="h-10 w-10 shrink-0 text-captura-violet" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Arquitectura que inspira confianza
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Dominio, casos de uso e infraestructura separados en Rust.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Catálogo en memoria, miniaturas, PNG y comandos Tauri
                    cohesionados.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Capturas de pantalla en PNG con la misma lógica de área que
                    la grabación cuando aplica.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-captura-indigo/20 bg-captura-indigo/5 p-6 lg:col-span-2">
              <Shield className="h-10 w-10 shrink-0 text-captura-indigo" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Privacidad
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  No hay nube obligatoria: vídeos y capturas se guardan en tu
                  equipo (carpeta configurable). No enviamos tu contenido a
                  servidores SysJoL por el simple hecho de usar la app. Opción de
                  ocultar la ventana al iniciar grabación para reducir
                  distracciones en pantalla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:pb-28">
        <div className="container px-4 md:px-6">
          <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
            La app en imágenes
          </h2>
          <div className="mx-auto max-w-3xl">
            <CapturaAppScreenshotSlider showCaptions />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20 md:py-24">
        <div className="container max-w-3xl px-4 md:px-6">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left font-display hover:text-captura-indigo">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-white/10 bg-card/30 py-12">
        <div className="container flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left md:px-6">
          <div>
            <p className="font-display text-lg font-bold">CapturaApp</p>
            <p className="text-sm text-muted-foreground">
              Versión {CAPTURA_APP_VERSION} · Identificador{" "}
              {CAPTURA_APP_BUNDLE_ID}
            </p>
            <a
              href={CAPTURA_APP_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-captura-indigo underline-offset-4 hover:underline"
            >
              Repositorio en GitHub
            </a>
          </div>
          <Button asChild variant="hero" className="bg-captura-coral">
            <a
              href={CAPTURA_APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar CapturaApp para Windows"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="sm:hidden">Descargar</span>
              <span className="hidden sm:inline">Obtener para Windows</span>
            </a>
          </Button>
        </div>
      </section>
      </article>

      <Footer />
    </main>
  );
};

export default CapturaAppPage;
