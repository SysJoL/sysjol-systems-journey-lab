import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Download,
  Eraser,
  FileImage,
  Home,
  Link2,
  Lock,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

type ErrorLevel = "L" | "M" | "Q" | "H";

const LEVELS: { value: ErrorLevel; label: string; hint: string }[] = [
  { value: "L", label: "Bajo (L)", hint: "7% de daño tolerable" },
  { value: "M", label: "Medio (M)", hint: "15% de daño tolerable" },
  { value: "Q", label: "Alto (Q)", hint: "25% de daño tolerable" },
  { value: "H", label: "Máximo (H)", hint: "30% de daño tolerable" },
];

const QR_META_DESCRIPTION =
  "Generador de códigos QR gratuito de SysJoL: convierte cualquier enlace en un QR al instante, 100% en tu navegador, sin registro ni subida de datos. Descarga en PNG o SVG.";

const downloadFile = (dataUrl: string, filename: string) => {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const QrGeneratorPage = () => {
  const [link, setLink] = useState(
    typeof window !== "undefined" ? window.location.origin : "https://sysjol.onrender.com",
  );
  const [size, setSize] = useState(320);
  const [level, setLevel] = useState<ErrorLevel>("M");
  const [fgColor, setFgColor] = useState("#0f172a");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [marginSize, setMarginSize] = useState(4);
  const [error, setError] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const trimmed = link.trim();

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

    const pageTitle = "Generador de QR — SysJoL";
    document.title = pageTitle;
    metaDesc?.setAttribute("content", QR_META_DESCRIPTION);
    ogTitle?.setAttribute("content", pageTitle);
    ogDesc?.setAttribute("content", QR_META_DESCRIPTION);
    twTitle?.setAttribute("content", pageTitle);
    twDesc?.setAttribute("content", QR_META_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
      ogTitle?.setAttribute("content", prevOgTitle);
      ogDesc?.setAttribute("content", prevOgDesc);
      twTitle?.setAttribute("content", prevTwTitle);
      twDesc?.setAttribute("content", prevTwDesc);
    };
  }, []);

  const generate = () => {
    if (!trimmed) {
      setError(true);
      return;
    }
    setError(false);
  };

  const clear = () => {
    setLink("");
    setError(false);
  };

  const handleDownloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas || !trimmed) return;
    downloadFile(canvas.toDataURL("image/png"), `qr-${Date.now()}.png`);
  };

  const handleDownloadSvg = () => {
    const svg = svgRef.current;
    if (!svg || !trimmed) return;
    const data = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    downloadFile(url, `qr-${Date.now()}.svg`);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative border-b border-white/5 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.10),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.12),transparent_45%)]" />
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
                    Generador QR
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#22d3ee] backdrop-blur-sm">
              <QrCode className="h-4 w-4" />
              Herramienta gratuita
            </div>
            <h1 className="font-display text-3xl font-bold md:text-5xl">
              Generador de{" "}
              <span className="bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6] bg-clip-text text-transparent">
                QR
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Convierte cualquier enlace en un código QR al instante. Generación
              100% local en tu navegador:{" "}
              <strong className="font-semibold text-foreground">
                sin registro, sin correo y sin subir tus datos
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
            {/* Options */}
            <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm md:p-8">
              <div>
                <Label
                  htmlFor="qr-link"
                  className="mb-2 flex items-center gap-2 font-display text-sm font-bold"
                >
                  <Link2 className="h-4 w-4 text-[#22d3ee]" />
                  Enlace o texto a codificar
                </Label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    id="qr-link"
                    value={link}
                    onChange={(e) => {
                      setLink(e.target.value);
                      setError(false);
                    }}
                    placeholder="https://tudominio.com/…"
                    className="h-12 flex-1 border-white/10 bg-background/60"
                    aria-invalid={error}
                  />
                  <Button
                    size="lg"
                    onClick={generate}
                    className="bg-[#22d3ee] font-semibold text-background shadow-lg shadow-[#22d3ee]/25 hover:bg-[#22d3ee]/90"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generar
                  </Button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-400" role="alert">
                    Escribe un enlace o texto antes de generar el QR.
                  </p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  El QR se actualiza al instante mientras escribes.
                </p>
              </div>

              <div className="h-px bg-white/5" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-bold">Tamaño</Label>
                    <span className="font-mono text-xs text-muted-foreground">
                      {size} px
                    </span>
                  </div>
                  <Slider
                    value={[size]}
                    min={160}
                    max={640}
                    step={8}
                    onValueChange={(v) => setSize(v[0])}
                    aria-label="Tamaño del QR"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold">Corrección de error</Label>
                  <Select value={level} onValueChange={(v) => setLevel(v as ErrorLevel)}>
                    <SelectTrigger className="border-white/10 bg-background/60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LEVELS.map((l) => (
                        <SelectItem key={l.value} value={l.value}>
                          {l.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    {LEVELS.find((l) => l.value === level)?.hint}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm font-bold">Color</Label>
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      aria-label="Color del QR"
                      className="h-10 w-12 cursor-pointer rounded-lg border border-white/10 bg-background/60 p-1"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-sm font-bold">Fondo</Label>
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      aria-label="Color de fondo"
                      className="h-10 w-12 cursor-pointer rounded-lg border border-white/10 bg-background/60 p-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-bold">Margen (zona en blanco)</Label>
                    <span className="font-mono text-xs text-muted-foreground">
                      {marginSize}
                    </span>
                  </div>
                  <Slider
                    value={[marginSize]}
                    min={0}
                    max={8}
                    step={1}
                    onValueChange={(v) => setMarginSize(v[0])}
                    aria-label="Margen del QR"
                  />
                  <p className="text-xs text-muted-foreground">
                    Se recomienda 4 módulos para un escaneo fiable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 p-4 text-sm text-muted-foreground">
                <Lock className="h-5 w-5 shrink-0 text-[#8b5cf6]" />
                <p>
                  Tu enlace se procesa <strong className="text-foreground">solo en tu dispositivo</strong>.
                  No se envía a ningún servidor ni se guarda.
                </p>
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    Vista previa
                  </h2>
                  <span className="rounded-full bg-[#22d3ee]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#22d3ee]">
                    PNG · SVG
                  </span>
                </div>
                <div className="grid w-full min-w-0 place-items-center overflow-hidden rounded-xl bg-white p-4">
                  {trimmed ? (
                    <div className="flex w-full min-w-0 items-center justify-center">
                      <QRCodeCanvas
                        ref={canvasRef}
                        value={trimmed}
                        size={Math.min(size, 340)}
                        level={level}
                        fgColor={fgColor}
                        bgColor={bgColor}
                        marginSize={marginSize}
                        title="Código QR generado"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <div className="sr-only">
                        <QRCodeSVG
                          ref={svgRef}
                          value={trimmed}
                          size={Math.min(size, 340)}
                          level={level}
                          fgColor={fgColor}
                          bgColor={bgColor}
                          marginSize={marginSize}
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid aspect-square place-items-center text-center">
                      <div className="max-w-[220px] text-muted-foreground">
                        <QrCode className="mx-auto mb-3 h-10 w-10 opacity-40" />
                        <p className="text-sm">
                          Escribe un enlace arriba para generar tu QR.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-4 break-all rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                  {trimmed || "…"}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  onClick={handleDownloadPng}
                  disabled={!trimmed}
                  className="bg-[#22d3ee] font-semibold text-background shadow-lg shadow-[#22d3ee]/25 hover:bg-[#22d3ee]/90 disabled:opacity-50"
                >
                  <FileImage className="mr-2 h-5 w-5" />
                  Descargar PNG
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadSvg}
                  disabled={!trimmed}
                  className="border-white/10 hover:bg-white/5 disabled:opacity-50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar SVG
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={clear}
                  className="text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  <Eraser className="mr-2 h-5 w-5" />
                  Limpiar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-14 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-card/40 p-5 text-center backdrop-blur-sm">
              <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-[#22d3ee]" />
              <h3 className="font-display text-sm font-bold">100% privado</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Sin registro, sin correo y sin subir tus datos.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-card/40 p-5 text-center backdrop-blur-sm">
              <Smartphone className="mx-auto mb-3 h-8 w-8 text-[#8b5cf6]" />
              <h3 className="font-display text-sm font-bold">Escanea con tu móvil</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Compatible con la cámara de cualquier smartphone.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-card/40 p-5 text-center backdrop-blur-sm">
              <Download className="mx-auto mb-3 h-8 w-8 text-[#22d3ee]" />
              <h3 className="font-display text-sm font-bold">PNG y SVG</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Descarga para web, impresión o vectoriales de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default QrGeneratorPage;
