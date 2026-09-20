import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DownMuViScreenshotSlider } from "@/components/downmuvi/DownMuViScreenshotSlider";
import {
  DOWNMUVI_API_LATEST_URL,
  DOWNMUVI_ASSET_NAME,
  DOWNMUVI_DOWNLOAD_URL,
  DOWNMUVI_LATEST_JSON_PATH,
  DOWNMUVI_LATEST_RELEASE_URL,
  DOWNMUVI_LOGO_PNG,
  DOWNMUVI_PLATFORM,
  DOWNMUVI_RELEASE_DATE,
  DOWNMUVI_RELEASES_PAGE_URL,
  DOWNMUVI_RELEASES_REPO_URL,
  DOWNMUVI_REPO_URL,
  DOWNMUVI_SIZE_BYTES,
  DOWNMUVI_SIZE_MB,
  DOWNMUVI_VERSION,
} from "@/components/downmuvi/constants";
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
  AudioLines,
  BookOpen,
  Brain,
  Clapperboard,
  Download,
  FileVideo,
  FlaskConical,
  History,
  Home,
  Library,
  Lock,
  MessageSquare,
  MonitorDown,
  PictureInPicture2,
  Sparkles,
  Terminal,
  Upload,
} from "lucide-react";

const features = [
  {
    icon: MonitorDown,
    title: "Descarga Inteligente",
    body: "Motor optimizado (yt-dlp + FFmpeg) para descargar vídeo y audio en alta calidad desde múltiples plataformas: YouTube, Facebook, Instagram, TikTok, Twitter/X y Spotify.",
    accent: "text-downmuvi-cyan",
  },
  {
    icon: AudioLines,
    title: "Calidades y formatos",
    body: "Descarga en Baja (360p), Media (720p) y Alta (1080p+). Formatos de audio: MP3, WAV, M4A, FLAC, OGG y OPUS.",
    accent: "text-downmuvi-violet",
  },
  {
    icon: Brain,
    title: "Transcripción por IA local",
    body: "Usa faster-whisper para transcribir vídeos y audios sin conexión y sin enviar datos a servidores.",
    accent: "text-downmuvi-cyan",
  },
  {
    icon: Clapperboard,
    title: "Editor de video",
    body: "Edición con timeline y reproducción integrada mediante VLC (libvlc).",
    accent: "text-downmuvi-violet",
  },
  {
    icon: Library,
    title: "Biblioteca Multimedia",
    body: "Organización avanzada de tus archivos descargados con miniaturas, metadatos, favoritos y reproducción.",
    accent: "text-downmuvi-cyan",
  },
  {
    icon: FlaskConical,
    title: "Media Lab",
    body: "Herramientas adicionales de análisis y estudio de audio.",
    accent: "text-downmuvi-violet",
  },
  {
    icon: PictureInPicture2,
    title: "Reproductor integrado",
    body: "VLC embebido con modo Picture-in-Picture (PiP), cola de reproducción y control de volumen.",
    accent: "text-downmuvi-cyan",
  },
  {
    icon: History,
    title: "Historial",
    body: "Registro completo de tus descargas con estados y reintentos.",
    accent: "text-downmuvi-violet",
  },
  {
    icon: MessageSquare,
    title: "Chat y Música",
    body: "Chat en la app e integración con Spotify para descargar música.",
    accent: "text-downmuvi-cyan",
  },
];

const installSteps = [
  {
    n: "01",
    title: "Descarga el instalador",
    text: "Obtén DownMuVi_Installer_latest.exe desde el botón de descarga (siempre la última versión).",
  },
  {
    n: "02",
    title: "Ejecuta el archivo",
    text: "Abre el instalador desde tu carpeta de descargas.",
  },
  {
    n: "03",
    title: "Acepta los términos",
    text: "Acepta los términos de SysJoL Development y sigue el asistente de instalación.",
  },
  {
    n: "04",
    title: "Acceso directo automático",
    text: "El instalador crea automáticamente un acceso directo en el escritorio. FFmpeg viene incluido.",
  },
];

const faqItems = [
  {
    q: "¿La transcripción necesita Internet?",
    a: "No. La transcripción usa faster-whisper y corre 100% en local. Tus audios y vídeos nunca salen de tu PC.",
  },
  {
    q: "¿De qué plataformas puedo descargar?",
    a: "El motor (yt-dlp + FFmpeg) soporta YouTube, Facebook, Instagram, TikTok, Twitter/X y Spotify, entre otras. Recuerda usar la app de forma legal y respetar los términos de cada plataforma.",
  },
  {
    q: "¿Qué hace la sincronización con Supabase?",
    a: "Con cuenta de usuario sincronizas perfil, créditos, configuración remota e historial. Si no quieres cuenta, la app funciona igual en local.",
  },
  {
    q: "¿El instalador incluye FFmpeg?",
    a: "Sí. El instalador de producción incorpora FFmpeg automáticamente; no requiere instalación manual.",
  },
  {
    q: "¿Cómo funciona el sistema SysJoL Pro?",
    a: "Son funciones premium desbloqueables como exportación masiva a ZIP o el modo Play All. El sistema de créditos se gestiona con tu cuenta.",
  },
  {
    q: "¿Existe un JSON con la versión y la URL del instalador?",
    a: `Sí. En la raíz del sitio está el archivo estático downmuvi-latest.json (URL de ejemplo en producción: https://sysjol.onrender.com${DOWNMUVI_LATEST_JSON_PATH}). Contiene los campos version y downloadUrl; scripts o la propia app pueden hacer fetch ahí.`,
  },
  {
    q: "¿Qué debo actualizar en cada release de DownMuVi?",
    a: "Tres sitios en sync: (1) DOWNMUVI_VERSION y DOWNMUVI_DOWNLOAD_URL en src/components/downmuvi/constants.ts, (2) public/downmuvi-latest.json con la misma version y downloadUrl del instalador publicado, (3) subir el instalador al repositorio de releases (DownMuVi-Releases). El enlace de descarga de la web usa releases/latest/download para apuntar siempre a la última versión.",
  },
];

const DOWNMUVI_META_DESCRIPTION = `DownMuVi ${DOWNMUVI_VERSION}: hub multimedia todo-en-uno para Windows de SysJoL Development. Descarga desde YouTube, Spotify, TikTok y más, transcripción por IA 100% local, editor con timeline + VLC, biblioteca multimedia y media lab. Instalador oficial .exe (siempre última versión).`;

const formatBytes = (bytes: number) => {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
};

const DownMuViPage = () => {
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

    const pageTitle = `DownMuVi ${DOWNMUVI_VERSION} — Hub multimedia para Windows | SysJoL`;
    document.title = pageTitle;
    metaDesc?.setAttribute("content", DOWNMUVI_META_DESCRIPTION);
    ogTitle?.setAttribute("content", pageTitle);
    ogDesc?.setAttribute("content", DOWNMUVI_META_DESCRIPTION);
    twTitle?.setAttribute("content", pageTitle);
    twDesc?.setAttribute("content", DOWNMUVI_META_DESCRIPTION);

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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.14),transparent_45%)]" />
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
                    DownMuVi
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-card/50 px-4 py-2 backdrop-blur-sm">
                <img
                  src={DOWNMUVI_LOGO_PNG}
                  alt="Logotipo DownMuVi"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-xl object-cover ring-2 ring-downmuvi-cyan/50"
                />
                <div className="text-left">
                  <h1 className="font-display text-xl font-bold md:text-2xl">
                    DownMuVi
                  </h1>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    v{DOWNMUVI_VERSION} · {DOWNMUVI_PLATFORM}
                  </p>
                </div>
              </div>
              <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
                Hub multimedia todo-en-uno para Windows desarrollado por{" "}
                <strong className="font-semibold text-foreground">
                  SysJoL Development
                </strong>
                . Descarga, transcribe, edita y gestiona tu contenido multimedia
                en una sola aplicación, con procesamiento de IA{" "}
                <strong className="font-semibold text-foreground">
                  100% local
                </strong>{" "}
                (tus datos nunca salen de tu PC).
              </p>
              <p className="mt-4 text-base font-medium text-foreground">
                Versión actual: v{DOWNMUVI_VERSION} · Publicado el{" "}
                {new Intl.DateTimeFormat("es-PE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }).format(new Date(`${DOWNMUVI_RELEASE_DATE}T00:00:00Z`))}{" "}
                · Plataforma: {DOWNMUVI_PLATFORM}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-downmuvi-cyan font-semibold text-background shadow-lg shadow-downmuvi-cyan/25 hover:bg-downmuvi-cyan/90"
                  asChild
                >
                  <a
                    id="descargar"
                    href={DOWNMUVI_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Descargar DownMuVi para Windows"
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
                Instalador oficial · Tamaño: {DOWNMUVI_SIZE_MB} · Enlace directo
                de descarga{" "}
                <a
                  href={DOWNMUVI_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-downmuvi-cyan underline-offset-4 hover:underline"
                >
                  (siempre la última versión)
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-b border-white/5 bg-secondary/10 py-14 md:py-16"
          aria-labelledby="downmuvi-lista-funciones"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2
                id="downmuvi-lista-funciones"
                className="font-display text-2xl font-bold md:text-3xl"
              >
                Funcionalidades principales
              </h2>
              <p className="mt-2 text-muted-foreground">
                Todo lo que hace DownMuVi en una sola aplicación.
              </p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground md:text-base">
                <li>
                  Descarga Inteligente: motor optimizado (yt-dlp + FFmpeg) para
                  YouTube, Facebook, Instagram, TikTok, Twitter/X y Spotify.
                </li>
                <li>
                  Calidades de descarga: Baja (360p), Media (720p) y Alta
                  (1080p+).
                </li>
                <li>
                  Formatos de audio: MP3, WAV, M4A, FLAC, OGG y OPUS.
                </li>
                <li>
                  Transcripción por IA local con faster-whisper, sin conexión.
                </li>
                <li>Editor de video con timeline y VLC (libvlc).</li>
                <li>
                  Biblioteca Multimedia con miniaturas, metadatos, favoritos y
                  reproducción.
                </li>
                <li>Media Lab: análisis y estudio de audio.</li>
                <li>
                  Reproductor integrado con Picture-in-Picture (PiP) y cola de
                  reproducción.
                </li>
                <li>Historial completo con estados y reintentos.</li>
                <li>Chat en la app e integración con Spotify.</li>
                <li>
                  Sincronización segura (Supabase): cuenta, perfil, créditos,
                  configuración remota e historial.
                </li>
                <li>
                  Actualizaciones automáticas desde GitHub Releases dentro de la
                  app.
                </li>
                <li>Sistema SysJoL Pro con funciones premium.</li>
                <li>Interfaz moderna con CustomTkinter y tema oscuro.</li>
                <li>FFmpeg incluido en el instalador de producción.</li>
              </ul>
              <h3 className="mt-10 font-display text-lg font-bold md:text-xl">
                Requisitos del sistema
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                <strong className="font-medium text-foreground">
                  {DOWNMUVI_PLATFORM}
                </strong>{" "}
                (64 bits). El instalador incorpora FFmpeg; no requiere
                instalación manual.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                <strong className="font-medium text-foreground">
                  Descarga:
                </strong>{" "}
                usa el botón «Descargar para Windows» arriba o{" "}
                <a
                  href={DOWNMUVI_DOWNLOAD_URL}
                  className="text-downmuvi-cyan underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  este enlace directo
                </a>{" "}
                (siempre la última versión).
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Todo el hub,{" "}
                <span className="text-downmuvi-cyan">en una app</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Descarga, transcribe, edita y organiza sin cambiar de ventana.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-downmuvi-cyan/30 hover:shadow-lg hover:shadow-downmuvi-cyan/5"
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
                  Instalación en{" "}
                  <span className="text-downmuvi-violet">4 pasos</span>
                </h2>
                <p className="mt-3 text-muted-foreground">
                  De la descarga al acceso directo en el escritorio.
                </p>
                <ul className="mt-10 space-y-8">
                  {installSteps.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="font-display text-sm font-bold text-downmuvi-cyan">
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
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-downmuvi-cyan/10 to-downmuvi-violet/10 blur-2xl" />
                <DownMuViScreenshotSlider className="relative shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Descargar DownMuVi
              </h2>
              <p className="mt-3 text-muted-foreground">
                Instalador oficial para Windows · Tamaño: {DOWNMUVI_SIZE_MB} ·{" "}
                {DOWNMUVI_ASSET_NAME}
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="flex flex-col items-center gap-6 rounded-2xl border border-downmuvi-cyan/20 bg-downmuvi-cyan/5 p-8 text-center">
                <FileVideo className="h-12 w-12 text-downmuvi-cyan" />
                <div>
                  <p className="font-display text-xl font-bold md:text-2xl">
                    Instalador oficial ({DOWNMUVI_PLATFORM})
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Enlace directo de descarga — siempre apunta a la última
                    versión publicada en GitHub Releases.
                  </p>
                  <code className="mt-4 inline-block max-w-full break-all whitespace-normal rounded bg-muted px-3 py-1.5 text-xs text-downmuvi-cyan">
                    {DOWNMUVI_DOWNLOAD_URL}
                  </code>
                </div>
                <Button
                  size="lg"
                  className="h-auto max-w-full whitespace-normal bg-downmuvi-cyan py-3 text-center font-semibold text-background shadow-lg shadow-downmuvi-cyan/25 hover:bg-downmuvi-cyan/90"
                  asChild
                >
                  <a
                    href={DOWNMUVI_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Descargar DownMuVi para Windows"
                  >
                    <Download className="mr-2 h-5 w-5 shrink-0" />
                    <span className="sm:hidden">Descargar</span>
                    <span className="hidden sm:inline">
                      Descargar {DOWNMUVI_ASSET_NAME}
                    </span>
                  </a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={DOWNMUVI_RELEASES_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-card/40 p-5 transition-all hover:border-downmuvi-violet/30"
                >
                  <Upload className="h-9 w-9 shrink-0 text-downmuvi-violet" />
                  <div>
                    <p className="font-display font-bold group-hover:text-downmuvi-violet">
                      Página de releases
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Historial completo de versiones e instaladores.
                    </p>
                  </div>
                </a>
                <a
                  href={DOWNMUVI_LATEST_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-card/40 p-5 transition-all hover:border-downmuvi-cyan/30"
                >
                  <Sparkles className="h-9 w-9 shrink-0 text-downmuvi-cyan" />
                  <div>
                    <p className="font-display font-bold group-hover:text-downmuvi-cyan">
                      Release actual (v{DOWNMUVI_VERSION})
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Detalle de la versión {DOWNMUVI_VERSION}, publicada el{" "}
                      {DOWNMUVI_RELEASE_DATE}.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-gradient-to-b from-background to-secondary/30 py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Repositorios y desarrollo
              </h2>
              <p className="mt-3 text-muted-foreground">
                Instaladores públicos y código fuente privado de SysJoL
                Development.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <BookOpen className="h-10 w-10 shrink-0 text-downmuvi-violet" />
                  <Badge
                    variant="secondary"
                    className="bg-downmuvi-violet/15 text-downmuvi-violet text-[10px] font-bold uppercase tracking-wider"
                  >
                    Privado
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-bold">
                  Repositorio de código fuente (desarrollo)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Repositorio privado de SysJoL Development. El acceso al
                  código se concede únicamente para colaboración autorizada;
                  los visitantes públicos no pueden clonarlo.
                </p>
                <a
                  href={DOWNMUVI_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto break-all text-sm text-downmuvi-cyan underline-offset-4 hover:underline"
                >
                  {DOWNMUVI_REPO_URL}
                </a>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <Download className="h-10 w-10 shrink-0 text-downmuvi-cyan" />
                  <Badge
                    variant="secondary"
                    className="bg-downmuvi-cyan/15 text-downmuvi-cyan text-[10px] font-bold uppercase tracking-wider"
                  >
                    Público
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-bold">
                  Repositorio de releases (instaladores)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Instaladores publicados, página de releases y actualizaciones
                  automáticas accesibles para todos.
                </p>
                <a
                  href={DOWNMUVI_RELEASES_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto break-all text-sm text-downmuvi-cyan underline-offset-4 hover:underline"
                >
                  {DOWNMUVI_RELEASES_REPO_URL}
                </a>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Terminal className="h-10 w-10 shrink-0 text-downmuvi-violet" />
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Para desarrolladores
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Requisitos previos: Python 3.10 o superior y FFmpeg (en modo
                    desarrollo coloca <code>ffmpeg.exe</code> en la raíz del
                    proyecto; no se incluye por su tamaño &gt;200 MB).
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3 rounded-xl border border-downmuvi-violet/20 bg-downmuvi-violet/5 p-4 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 shrink-0 text-downmuvi-violet" />
                <p>
                  El repositorio de código fuente es{" "}
                  <strong className="font-semibold text-foreground">
                    privado
                  </strong>
                  : los pasos de configuración solo funcionan si SysJoL te
                  concedió acceso al repositorio. Sin acceso, la descarga
                  pública disponible es el instalador{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-xs">
                    {DOWNMUVI_ASSET_NAME}
                  </code>{" "}
                  desde GitHub Releases.
                </p>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-background/60 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-downmuvi-cyan">
                    Configuración
                  </p>
                  <code className="block whitespace-pre-wrap break-all text-xs text-muted-foreground">
                    git clone https://github.com/SysJoL-Development/DownMuVi.git
                    {"\n"}cd DownMuVi
                    {"\n"}pip install -r requirements.txt
                    {"\n"}python main.py
                  </code>
                </div>
                <div className="rounded-xl border border-white/5 bg-background/60 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-downmuvi-violet">
                    Construcción del ejecutable
                  </p>
                  <code className="block whitespace-pre-wrap break-all text-xs text-muted-foreground">
                    python build.py
                    {"\n"}# Instalador: script de Inno Setup
                    {"\n"}# installer_setup.iss
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container max-w-3xl px-4 md:px-6">
            <h2 className="mb-8 text-center font-display text-3xl font-bold">
              Licencia y datos técnicos
            </h2>
            <div className="flex gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <Lock className="h-10 w-10 shrink-0 text-downmuvi-violet" />
              <div>
                <h3 className="font-display text-lg font-bold">Licencia</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Software propietario de SysJoL Development. Distribución,
                  modificación e ingeniería inversa prohibidas sin consentimiento
                  escrito. El uso está sujeto a los términos de la EULA incluida
                  en el instalador. El usuario es responsable del uso legal de
                  los contenidos descargados o procesados.
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[520px] text-left text-sm">
                <tbody>
                  {[
                    ["Nombre del asset", DOWNMUVI_ASSET_NAME],
                    ["Tamaño del asset", `${DOWNMUVI_SIZE_MB} (${formatBytes(DOWNMUVI_SIZE_BYTES)})`],
                    ["API de última release", DOWNMUVI_API_LATEST_URL],
                    ["Fecha de publicación v" + DOWNMUVI_VERSION, "2026-08-04T02:42:56Z"],
                    ["Plataforma", `${DOWNMUVI_PLATFORM} (64 bits)`],
                    [
                      "Descripción oficial de la release",
                      "Hub todo-en-uno: descarga, transcripción IA local, biblioteca multimedia, editor con timeline + VLC, media lab, chat y música en una sola app.",
                    ],
                  ].map(([k, v]) => (
                    <tr
                      key={k}
                      className="border-b border-white/5 bg-card/20 last:border-0"
                    >
                      <td className="p-4 align-top font-medium text-foreground">
                        {k}
                      </td>
                      <td className="break-all p-4 text-muted-foreground">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 md:pb-28">
          <div className="container px-4 md:px-6">
            <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
              La app en imágenes
            </h2>
            <div className="mx-auto max-w-3xl">
              <DownMuViScreenshotSlider showCaptions />
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
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left font-display hover:text-downmuvi-cyan">
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
              <p className="font-display text-lg font-bold">DownMuVi</p>
              <p className="text-sm text-muted-foreground">
                Versión v{DOWNMUVI_VERSION} · Publicado el {DOWNMUVI_RELEASE_DATE}
              </p>
              <a
                href={DOWNMUVI_RELEASES_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-downmuvi-cyan underline-offset-4 hover:underline"
              >
                Releases en GitHub
              </a>
            </div>
            <Button asChild variant="hero" className="bg-downmuvi-cyan">
              <a
                href={DOWNMUVI_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar DownMuVi para Windows"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="sm:hidden">Descargar</span>
                <span className="hidden sm:inline">
                  Obtener para Windows
                </span>
              </a>
            </Button>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default DownMuViPage;
