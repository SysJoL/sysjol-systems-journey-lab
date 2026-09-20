import {
  FlaskConical,
  Github,
  ExternalLink,
  Youtube,
  Code2,
  Cpu,
  Globe,
  Gamepad2,
  Home,
  MessageSquare,
  ChevronRight,
  Database,
  Terminal,
  Layers,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LabSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Skeleton */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <Skeleton className="w-40 h-10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="w-1/2 h-16 md:h-24 mx-auto" />
          <Skeleton className="w-full h-20 mx-auto" />
        </div>
      </div>
    </section>

    {/* Tabs & Grid Skeleton */}
    <section className="py-24 bg-card/10">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center mb-16">
          <Skeleton className="w-full max-w-2xl h-14 rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-card/30 p-6 space-y-6"
            >
              <Skeleton className="w-full aspect-video rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="w-3/4 h-8" />
                <Skeleton className="w-full h-16" />
                <div className="flex gap-2">
                  <Skeleton className="w-16 h-6 rounded-full" />
                  <Skeleton className="w-16 h-6 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

type LabProject = {
  title: string;
  description: string;
  tags: string[];
  problem?: string;
  result?: string;
  video?: string;
  image?: string;
  github?: string;
  demo?: string;
  type?: string;
};

const Lab = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const projects: Record<string, LabProject[]> = {
    automation: [
      {
        title: "Automatización n8n & Email",
        description:
          "Sistema de automatización que recibe registros, envía notificaciones personalizadas vía email y organiza los datos en Google Sheets en tiempo real.",
        problem:
          "Registrar interesados a mano en Excel y avisar por correo uno por uno.",
        result:
          "Registro automático, correos personalizados y datos ordenados en Sheets en tiempo real.",
        video: "https://www.youtube.com/embed/tYlQXfQl58U",
        tags: ["n8n", "Automation", "API", "Google Sheets"],
        type: "video",
      },
      {
        title: "Sentiment Analysis Suite",
        description:
          "Ecosistema completo para el análisis de sentimientos utilizando procesamiento de lenguaje natural. Incluye API REST escalable y frontend reactivo.",
        problem: "Miles de comentarios de clientes sin leer ni clasificar.",
        result:
          "Clasificación automática de sentimiento y urgencias para priorizar la atención.",
        github: "https://github.com/SysJoL/frontend-sentiment",
        tags: ["FastAPI", "Python", "React", "NLP"],
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      },
    ],
    web: [
      {
        title: "LedPantallas Ecommerce",
        description:
          "Plataforma web premium para la venta y gestión de pantallas LED, optimizada para conversión y experiencia de usuario fluida.",
        problem: "Vender solo por WhatsApp, sin catálogo ni control de productos.",
        result: "Catálogo online con gestión de productos y mejor conversión.",
        github: "https://github.com/SysJoL/ledpantallas",
        tags: ["React", "Inertia.js", "Laravel", "Tailwind"],
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Libro de Reclamaciones Digital",
        description:
          "Sistema integral que cumple con normativas legales para la gestión de quejas y reclamos de manera eficiente y transparente.",
        problem: "Reclamos en papel que incumplen la norma y se pierden.",
        result: "Libro digital conforme a ley con seguimiento transparente.",
        github: "https://github.com/SysJoL",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Reto Técnico SUNAT XML",
        description:
          "Extractor avanzado de datos desde archivos XML de facturación electrónica para auditoría de gastos y cálculo de impuestos.",
        problem: "Revisar XML de facturas uno por uno para auditoría.",
        result:
          "Extracción masiva de datos para auditoría e impuestos en minutos.",
        github: "https://github.com/SysJoL/reto-tecnico",
        tags: ["Laravel", "XML Parsers", "Accounting Systems"],
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "NutriCalc",
        description:
          "Nutrición y composición corporal, calculadas con claridad. Obtén IMC, TMB, TMR y GET, estimación de % grasa (Deurenberg y opcional Yuhasz) y tablas de referencia en un solo flujo pensado para contrastar datos en consulta.",
        problem: "Cálculos nutricionales dispersos durante la consulta.",
        result: "IMC, TMB y % grasa en un solo flujo PWA, incluso sin internet.",
        github: "https://github.com/SysJoL/nutri-calc",
        demo: "https://nutri-calc-sysjol.vercel.app/app.html",
        tags: ["HTML/CSS", "JavaScript", "PWA", "OMS · ACSM"],
        image: "/proyectos/nutricalc-app.png",
      },
      {
        title: "Versículos Bíblicos",
        description:
          "App web/PWA de meditación bíblica en español e inglés: filtros por categoría, compartir/descargar imagen y fallback local cuando las APIs no responden.",
        problem: "Contenido devocional disperso y apps solo en inglés.",
        result:
          "Meditación diaria en español e inglés con imágenes compartibles.",
        github: "https://github.com/SysJoL/versiculos-biblicos",
        demo: "https://versiculos-biblicos.onrender.com/",
        tags: ["Astro", "TypeScript", "API.Bible", "PWA"],
        image: "/proyectos/versiculos-bblicos.png",
      },
      {
        title: "Compresor PDF",
        description:
          "Reduce el tamaño de tus PDF directamente en el navegador: arrastra el archivo, elige el nivel de compresión y descarga el resultado sin subir datos a ningún servidor.",
        problem: "PDFs pesados que no se pueden enviar ni subir a SUNAT o correo.",
        result: "Compresión 100% local sin exponer documentos a terceros.",
        demo: "https://compress-pdf-lac.vercel.app/",
        tags: ["JavaScript", "PDF.js", "100% local"],
        image: "/proyectos/compresor-pdf.png",
      },
    ],
    backend: [
      {
        title: "Surgical Robot Control",
        description:
          "Desarrollo de lógica para medir precisiones en un prototipo de robot quirúrgico, enfocado en telemetría y control crítico.",
        problem: "Medir precisión a mano en un prototipo quirúrgico.",
        result: "Telemetría y control para validar la precisión del prototipo.",
        github:
          "https://github.com/No-Country-simulation/S02-26-Equipo-32-Web-App-Development/tree/Jhony",
        tags: [".NET", "C#", "Simulation", "Healthcare Tech"],
        image:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Currency Exchange API",
        description:
          "Motor de conversión de divisas con tasas de cambio en tiempo real y arquitectura de microservicios robusta.",
        problem: "Tasas de cambio desactualizadas en procesos financieros.",
        result: "Conversión con tasas en vivo servida por microservicios.",
        github: "https://github.com/SysJoL/ChallengeConversorMonedas",
        tags: ["Spring Boot", "Java", "REST API", "Finance"],
        image:
          "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&auto=format&fit=crop",
      },
    ],
    entertainment: [
      {
        title: "Amigo Secreto v2",
        description:
          "Aplicación dinámica para el sorteo inteligente de nombres, evitando colisiones y garantizando total aleatoriedad.",
        problem: "Sorteos manuales con repeticiones y reclamos del grupo.",
        result: "Sorteo aleatorio sin colisiones en segundos.",
        github: "https://github.com/SysJoL/AmigoSecreto",
        demo: "https://amigo-secreto-neon-eta.vercel.app/",
        tags: ["JavaScript", "DOM Manipulation", "Algorithms"],
        image:
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Cyberpunk Memory Game",
        description:
          "Desafío mental de memoria con una estética Cyberpunk y efectos visuales avanzados implementados solo con CSS y JS.",
        problem: "Mostrar nivel frontend sin un proyecto visible e interactivo.",
        result: "Juego jugable con animaciones en CSS puro como vitrina técnica.",
        demo: "https://codepen.io/Jhony-Lezama-Victorio/pen/YPymYvv",
        tags: ["CodePen", "CSS Animations", "Game Dev"],
        image:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      },
    ],
  };

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola, vi tus proyectos en el Lab de SysJoL y me gustaría conversar sobre una posible colaboración.",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  const handleProjectContact = (title: string) => {
    const message = encodeURIComponent(
      `Hola, vi el proyecto "${title}" en el Lab de SysJoL y quiero algo similar para mi negocio. ¿Conversamos?`,
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <LabSkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.2]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,149,255,0.1),transparent_50%)]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
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
                  <BreadcrumbPage className="text-primary font-medium tracking-wide">
                    Lab
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-fade-up">
              SysJoL <span className="text-gradient">Lab</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-up [animation-delay:200ms] italic">
              Donde la automatización se vuelve producto: n8n, IA aplicada y
              software que elimina trabajo manual. Soluciones reales,
              construidas en Trujillo, Perú.
            </p>
          </div>
        </div>
      </section>

      {/* Featured automation case */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,149,255,0.08),transparent_50%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-md p-6 md:p-10 shadow-2xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/tYlQXfQl58U"
                title="Caso destacado: Automatización n8n y Email"
                className="w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                Caso destacado · Automatización
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight">
                De Excel manual a sistema{" "}
                <span className="text-gradient">automático</span>
              </h2>
              <div className="space-y-3 text-sm md:text-base leading-relaxed">
                <p>
                  <span className="font-bold text-foreground">
                    Problema:{" "}
                  </span>
                  <span className="text-muted-foreground">
                    Registrar interesados a mano y avisar por correo uno por
                    uno, con datos dispersos y seguimientos olvidados.
                  </span>
                </p>
                <p className="flex gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-bold text-emerald-500">
                      Resultado:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      Captura automática, correos personalizados y Google Sheets
                      actualizado en tiempo real. Cero digitación.
                    </span>
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["n8n", "API", "Email", "Google Sheets"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-[11px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className="rounded-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
                  onClick={() =>
                    handleProjectContact("Automatización n8n & Email")
                  }
                >
                  <FaWhatsapp className="mr-2 w-5 h-5" />
                  Quiero algo así
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/10"
                  asChild
                >
                  <a
                    href="https://youtu.be/tYlQXfQl58U"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 w-5 h-5" />
                    Ver en YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-card/10">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="automation" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-background/50 backdrop-blur-xl border border-white/5 p-1 h-auto grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl rounded-2xl">
                <TabsTrigger
                  value="automation"
                  className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all"
                >
                  <Terminal className="w-4 h-4 mr-2 hidden sm:block" />
                  IA & n8n
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all"
                >
                  <Globe className="w-4 h-4 mr-2 hidden sm:block" />
                  Web App
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all"
                >
                  <Database className="w-4 h-4 mr-2 hidden sm:block" />
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="entertainment"
                  className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all"
                >
                  <Gamepad2 className="w-4 h-4 mr-2 hidden sm:block" />
                  Gaming
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(projects).map(([category, items]) => (
              <TabsContent
                key={category}
                value={category}
                className="animate-in fade-in zoom-in duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((project, idx) => (
                    <Card
                      key={idx}
                      className="group bg-card/30 backdrop-blur-md border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,149,255,0.1)] flex flex-col h-full overflow-hidden"
                    >
                      <div className="aspect-video relative overflow-hidden bg-black">
                        {project.type === "video" ? (
                          <iframe
                            src={project.video}
                            title={project.title}
                            className="w-full h-full border-0"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <ImageWithSkeleton
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>

                      <CardHeader className="p-6">
                        <CardTitle className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed pt-2 italic">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-6 flex-grow space-y-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tIdx) => (
                            <Badge
                              key={tIdx}
                              variant="secondary"
                              className="bg-primary/5 hover:bg-primary/20 text-[10px] font-bold uppercase tracking-wider"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {(project.problem || project.result) && (
                          <div className="space-y-3 rounded-xl border border-white/5 bg-background/40 p-4">
                            {project.problem && (
                              <p className="text-sm leading-relaxed">
                                <span className="font-bold text-foreground">
                                  Problema:{" "}
                                </span>
                                <span className="text-muted-foreground">
                                  {project.problem}
                                </span>
                              </p>
                            )}
                            {project.result && (
                              <p className="text-sm leading-relaxed flex gap-2">
                                <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-bold text-emerald-500">
                                    Resultado:{" "}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {project.result}
                                  </span>
                                </span>
                              </p>
                            )}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-3">
                        <div className="flex gap-3 w-full">
                          {project.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl border-white/10 hover:bg-white/5"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl border-white/10 hover:bg-white/5"
                              asChild
                            >
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.type === "video" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 rounded-xl border-white/10 hover:bg-white/5"
                              asChild
                            >
                              <a
                                href="https://youtu.be/tYlQXfQl58U"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Youtube className="w-4 h-4 mr-2" />
                                Ver en YT
                              </a>
                            </Button>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="w-full rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/20 transition-all duration-300"
                          onClick={() => handleProjectContact(project.title)}
                        >
                          <FaWhatsapp className="w-4 h-4 mr-2" />
                          Quiero algo así
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lab Values Section */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovación Radical</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                No nos conformamos con lo estándar. Buscamos siempre la solución
                más disruptiva y eficiente.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Layers className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Calidad Atómica</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                Cuidamos cada línea de código como si fuera la más importante.
                Modularidad y robustez por defecto.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Arquitectura Limpia</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                Diseñamos sistemas que no solo funcionan, sino que son fáciles
                de mantener y escalar profesionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <FlaskConical className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-8 italic">
            ¿Tienes un proyecto desafiante?
          </h2>
          <Button
            size="lg"
            className="rounded-full px-10 h-14 text-xl font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
            onClick={handleContact}
          >
            Hablemos por WhatsApp
            <FaWhatsapp className="ml-3 w-10 h-10" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lab;
