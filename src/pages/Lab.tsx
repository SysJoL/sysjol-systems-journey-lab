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

const Lab = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const projects = {
    automation: [
      {
        title: "Automatización n8n & Email",
        description:
          "Sistema de automatización que recibe registros, envía notificaciones personalizadas vía email y organiza los datos en Google Sheets en tiempo real.",
        video: "https://www.youtube.com/embed/tYlQXfQl58U",
        tags: ["n8n", "Automation", "API", "Google Sheets"],
        type: "video",
      },
      {
        title: "Sentiment Analysis Suite",
        description:
          "Ecosistema completo para el análisis de sentimientos utilizando procesamiento de lenguaje natural. Incluye API REST escalable y frontend reactivo.",
        github: "https://github.com/Johlevic/sentiment-apirest",
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
        github: "https://github.com/Johlevic/ledpantallas",
        tags: ["React", "Inertia.js", "Laravel", "Tailwind"],
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Libro de Reclamaciones Digital",
        description:
          "Sistema integral que cumple con normativas legales para la gestión de quejas y reclamos de manera eficiente y transparente.",
        github: "https://github.com/Johlevic/LibroReclamaciones",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Reto Técnico SUNAT XML",
        description:
          "Extractor avanzado de datos desde archivos XML de facturación electrónica para auditoría de gastos y cálculo de impuestos.",
        github: "https://github.com/Johlevic/reto-tecnico",
        tags: ["Laravel", "XML Parsers", "Accounting Systems"],
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "NutriCalc",
        description:
          "Nutrición y composición corporal, calculadas con claridad. Obtén IMC, TMB, TMR y GET, estimación de % grasa (Deurenberg y opcional Yuhasz) y tablas de referencia en un solo flujo pensado para contrastar datos en consulta.",
        github: "https://github.com/SysJoL/nutri-calc",
        demo: "https://nutri-calc-sysjol.vercel.app/app.html",
        tags: ["HTML/CSS", "JavaScript", "PWA", "OMS · ACSM"],
        image: "/proyectos/nutricalc-app.png",
      },
      {
        title: "Versículos Bíblicos",
        description:
          "App web/PWA de meditación bíblica en español e inglés: filtros por categoría, compartir/descargar imagen y fallback local cuando las APIs no responden.",
        github: "https://github.com/SysJoL/versiculos-biblicos",
        demo: "https://versiculos-biblicos.onrender.com/",
        tags: ["Astro", "TypeScript", "API.Bible", "PWA"],
        image: "/proyectos/versiculos-bblicos.png",
      },
      {
        title: "Compresor PDF",
        description:
          "Reduce el tamaño de tus PDF directamente en el navegador: arrastra el archivo, elige el nivel de compresión y descarga el resultado sin subir datos a ningún servidor.",
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
        github: "https://github.com/Johlevic/ChallengeConversorMonedas",
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
        github: "https://github.com/Johlevic/AmigoSecreto",
        demo: "https://amigo-secreto-neon-eta.vercel.app/",
        tags: ["JavaScript", "DOM Manipulation", "Algorithms"],
        image:
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Cyberpunk Memory Game",
        description:
          "Desafío mental de memoria con una estética Cyberpunk y efectos visuales avanzados implementados solo con CSS y JS.",
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
              Donde la experimentación encuentra la eficiencia. Una colección de
              soluciones construidas para desafiar los límites de la tecnología.
            </p>
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
                      <div className="aspect-video relative overflow-hidden">
                        {project.type === "video" ? (
                          <iframe
                            src={project.video}
                            title={project.title}
                            className="w-full h-full"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>

                      <CardHeader className="p-6">
                        <CardTitle className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed pt-2 italic">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-6 flex-grow">
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
                      </CardContent>

                      <CardFooter className="px-6 pb-6 pt-0 gap-3">
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
