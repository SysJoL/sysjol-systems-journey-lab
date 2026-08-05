import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clapperboard, Download, Search, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { openGlobalSearch } from "@/hooks/use-search";
import { cn } from "@/lib/utils";
import { CapturaAppScreenshotSlider } from "@/components/captura-app/CapturaAppScreenshotSlider";
import { DownMuViScreenshotSlider } from "@/components/downmuvi/DownMuViScreenshotSlider";
import {
  CAPTURA_APP_LOGO_PNG,
  CAPTURA_APP_DOWNLOAD_URL,
  CAPTURA_APP_VERSION,
} from "@/components/captura-app/constants";
import {
  DOWNMUVI_DOWNLOAD_URL,
  DOWNMUVI_LOGO_PNG,
  DOWNMUVI_SIZE_MB,
  DOWNMUVI_VERSION,
} from "@/components/downmuvi/constants";

type ProductId = "captura" | "downmuvi";

const PRODUCTS: Record<
  ProductId,
  {
    id: ProductId;
    name: string;
    icon: typeof Video;
    iconClass: string;
    versionLabel: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    headlineGradient: string;
    description: string;
    downloadUrl: string;
    downloadAria: string;
    fichaHref: string;
    stats: { k: string; v: string }[];
    previewLabel: string;
  }
> = {
  captura: {
    id: "captura",
    name: "CapturaApp",
    icon: Video,
    iconClass: "text-captura-coral",
    versionLabel: `Escritorio Windows · v${CAPTURA_APP_VERSION}`,
    headlineBefore: "Graba, captura y ",
    headlineHighlight: "organiza",
    headlineAfter: " sin salir de una sola app",
    headlineGradient: "from-[#eb5757] via-[#6366f1] to-[#a855f7]",
    description:
      "Aplicación nativa con Tauri 2 y Rust: pantalla completa, ventana o región, cuenta atrás, overlay, webcam circular, audio del sistema y galería local. Tus archivos se quedan en tu PC.",
    downloadUrl: CAPTURA_APP_DOWNLOAD_URL,
    downloadAria: "Descargar CapturaApp para Windows",
    fichaHref: "/capturaapp",
    stats: [
      { k: "Ventana", v: "860×560 px" },
      { k: "Salida", v: "1080p · 30 FPS" },
      { k: "Stack", v: "Tauri 2 + Rust" },
      { k: "Privacidad", v: "Sin nube" },
    ],
    previewLabel: "CapturaApp — vista previa",
  },
  downmuvi: {
    id: "downmuvi",
    name: "DownMuVi",
    icon: Clapperboard,
    iconClass: "text-downmuvi-cyan",
    versionLabel: `Escritorio Windows · v${DOWNMUVI_VERSION}`,
    headlineBefore: "Descarga, transcribe y ",
    headlineHighlight: "gestiona",
    headlineAfter: " tu contenido en una sola app",
    headlineGradient: "from-[#22d3ee] via-[#8b5cf6] to-[#f472b6]",
    description:
      "Hub multimedia todo-en-uno para Windows: descarga desde YouTube, Spotify, TikTok y más, transcripción por IA 100% local, editor con timeline + VLC, biblioteca multimedia y media lab. Tus datos nunca salen de tu PC.",
    downloadUrl: DOWNMUVI_DOWNLOAD_URL,
    downloadAria: "Descargar DownMuVi para Windows",
    fichaHref: "/downmuvi",
    stats: [
      { k: "Plataformas", v: "7+ soportadas" },
      { k: "Audio", v: "6 formatos" },
      { k: "IA local", v: "faster-whisper" },
      { k: "Instalador", v: DOWNMUVI_SIZE_MB },
    ],
    previewLabel: "DownMuVi — hub multimedia",
  },
};

const PRODUCT_IDS: ProductId[] = ["downmuvi", "captura"];

const HeroSection = () => {
  const [active, setActive] = useState<ProductId>("downmuvi");
  const p = PRODUCTS[active];

  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden overflow-y-visible geometric-bg pt-[5.5rem] pb-20 sm:pt-24 md:pt-28 md:pb-24">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#eb5757]/15 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#6366f1]/20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div
        className="relative z-10 w-full"
        style={{
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        <div className="mx-auto box-border w-full max-w-6xl px-5 min-[420px]:px-6 sm:px-7 md:px-8 lg:px-10">
        <div className="flex w-full flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-[1fr_min(46%,420px)] lg:items-center lg:gap-14">
          <div className="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full max-w-xl animate-fade-up">
              <button
                type="button"
                onClick={() => openGlobalSearch()}
                className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-left text-muted-foreground shadow-2xl shadow-primary/5 backdrop-blur-md transition-all duration-500 min-[420px]:gap-4 min-[420px]:px-5 hover:border-[#6366f1]/40 hover:bg-white/10 hover:text-white sm:py-3.5"
              >
                <div className="rounded-xl bg-[#6366f1]/15 p-2 text-[#a855f7] transition-all duration-500 group-hover:bg-[#6366f1] group-hover:text-white">
                  <Search className="h-5 w-5" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                    Centro de comandos
                  </span>
                  <span className="line-clamp-2 text-sm font-medium min-[420px]:line-clamp-1 min-[420px]:truncate">
                    Busca en SysJoL o salta a CapturaApp…
                  </span>
                </div>
                <kbd className="ml-auto hidden h-6 shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 font-mono text-[11px] font-medium sm:inline-flex">
                  Ctrl K
                </kbd>
              </button>
            </div>

            {/* Product switcher */}
            <div className="mt-8 flex animate-fade-up-delay-1 items-center gap-1.5 rounded-full border border-white/10 bg-card/60 p-1.5 backdrop-blur-md">
              {PRODUCT_IDS.map((id) => {
                const item = PRODUCTS[id];
                const Icon = item.icon;
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActive(id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-white/10 text-foreground shadow-inner ring-1 ring-white/10"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        isActive ? item.iconClass : "opacity-70",
                      )}
                    />
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex animate-fade-up-delay-1 flex-col items-center gap-6 lg:items-start">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-card/60 px-3 py-2 pr-3 backdrop-blur-md min-[420px]:pr-4">
                {active === "captura" ? (
                  <img
                    src={CAPTURA_APP_LOGO_PNG}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-[#eb5757]/40"
                  />
                ) : (
                  <img
                    src={DOWNMUVI_LOGO_PNG}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl object-cover ring-2 ring-downmuvi-cyan/40"
                  />
                )}
                <div className="text-left">
                  <p className="font-display text-sm font-bold tracking-tight text-foreground">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {p.versionLabel}
                  </p>
                </div>
              </div>

              <div className="w-full min-w-0 space-y-4">
                <h1 className="font-display text-[1.65rem] font-bold leading-[1.2] tracking-tight min-[380px]:text-3xl sm:text-4xl sm:leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-tight">
                  {p.headlineBefore}
                  <span
                    className={cn(
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      p.headlineGradient,
                    )}
                  >
                    {p.headlineHighlight}
                  </span>{" "}
                  {p.headlineAfter}
                </h1>
                <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground min-[420px]:text-lg md:text-xl">
                  {p.description}
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  className={cn(
                    "w-full min-h-12 border-none px-4 text-sm font-semibold text-white shadow-lg min-[420px]:min-h-0 min-[420px]:px-8 min-[420px]:text-base sm:w-auto",
                    active === "captura"
                      ? "bg-[#eb5757] shadow-[#eb5757]/25 hover:bg-[#eb5757]/90 hover:shadow-[#eb5757]/40"
                      : "bg-[#22d3ee] shadow-[#22d3ee]/25 hover:bg-[#22d3ee]/90 hover:shadow-[#22d3ee]/40",
                  )}
                  asChild
                >
                  <a
                    href={p.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.downloadAria}
                  >
                    <Download className="mr-2 h-5 w-5 shrink-0" />
                    <span className="sm:hidden">Descargar</span>
                    <span className="hidden sm:inline">
                      Descargar para Windows
                    </span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "w-full min-h-12 px-4 text-sm min-[420px]:min-h-0 min-[420px]:px-8 min-[420px]:text-base sm:w-auto",
                    active === "captura"
                      ? "border-[#6366f1]/50 text-[#a855f7] hover:bg-[#6366f1]/10"
                      : "border-[#22d3ee]/50 text-[#22d3ee] hover:bg-[#22d3ee]/10",
                  )}
                  asChild
                >
                  <Link to={p.fichaHref}>
                    Ver la ficha completa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <dl className="grid w-full max-w-xl grid-cols-2 gap-2.5 pt-4 min-[420px]:gap-3 sm:grid-cols-4 lg:max-w-none">
                {p.stats.map((row) => (
                  <div
                    key={row.k}
                    className="rounded-2xl border border-white/5 bg-secondary/30 p-2.5 text-center backdrop-blur-sm transition-colors min-[420px]:p-3 hover:border-[#6366f1]/25 lg:text-left"
                  >
                    <dt className="text-[10px] font-display font-bold uppercase tracking-wider text-muted-foreground">
                      {row.k}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-bold text-foreground md:text-base">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 mx-auto w-full max-w-md min-w-0 lg:max-w-none">
            <div className="relative">
              <div
                className={cn(
                  "pointer-events-none absolute -inset-2 rounded-3xl opacity-80 blur-2xl min-[420px]:-inset-4",
                  active === "captura"
                    ? "bg-gradient-to-br from-[#eb5757]/20 via-[#6366f1]/15 to-[#a855f7]/20"
                    : "bg-gradient-to-br from-[#22d3ee]/20 via-[#8b5cf6]/15 to-[#f472b6]/20",
                )}
                aria-hidden
              />
              <div className="relative rounded-2xl border border-white/10 bg-card/40 p-2.5 shadow-2xl backdrop-blur-md min-[420px]:p-3 sm:rounded-2xl">
                <div className="mb-2 flex items-center justify-between gap-2 px-1">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#eb5757]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                  </div>
                  <span className="truncate font-mono text-[10px] text-muted-foreground">
                    {p.previewLabel}
                  </span>
                </div>
                {active === "captura" ? (
                  <CapturaAppScreenshotSlider showCaptions />
                ) : (
                  <DownMuViScreenshotSlider showCaptions />
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
