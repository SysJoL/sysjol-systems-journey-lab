import {
  Compass,
  Map,
  Search,
  Target,
  Rocket,
  TrendingUp,
  Users,
  Lightbulb,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const JourneySkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Skeleton */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <Skeleton className="w-40 h-10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="w-full h-16 md:h-24 mx-auto" />
          <Skeleton className="w-2/3 h-10 mx-auto" />
          <div className="flex justify-center pt-4">
            <Skeleton className="w-56 h-14 rounded-full" />
          </div>
        </div>
      </div>
    </section>

    {/* Roadmap Skeleton */}
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="w-64 h-12 mx-auto" />
          <Skeleton className="w-full max-w-lg h-6 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <Skeleton className="w-20 h-20 rounded-2xl" />
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-full h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Journey = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const steps = [
    {
      title: "Descubrimiento",
      description:
        "Mapeamos tus procesos para encontrar qué tareas manuales te quitan más horas y dinero: Excel, WhatsApp, SUNAT.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Estrategia",
      description:
        "Diseñamos un plan por etapas según tu presupuesto, empezando por lo que más te duele y más retorno da.",
      icon: Target,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Ejecución",
      description:
        "Construimos automatizaciones y sistemas que puedes probar cada semana, sin paralizar tu operación.",
      icon: Rocket,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Crecimiento",
      description:
        "Monitoreamos, ajustamos y agregamos nuevas automatizaciones para que el sistema crezca con tu negocio.",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola, me gustaría iniciar mi 'Journey' de transformación digital con SysJoL.",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <JourneySkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background z-10" />
          <ImageWithSkeleton
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Journey Hero"
            className="w-full h-full object-cover brightness-[0.3]"
            containerClassName="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] z-10" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Inicio</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent font-medium tracking-wide">
                    Journey
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-fade-up">
              Tu camino a la{" "}
              <span className="text-gradient-purple">automatización</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-up [animation-delay:200ms]">
              Acompañamos a MYPEs y emprendedores peruanos desde el caos del
              WhatsApp y el Excel hasta una operación automática que vende sola.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-accent hover:bg-accent/90 hover:scale-105 transition-all"
                onClick={handleContact}
              >
                Empezar mi Journey
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Nuestro <span className="text-accent">Roadmap</span> de Éxito
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un proceso estructurado para llevar tu negocio de donde está hoy a
              donde quieres que esté mañana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent -z-10" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${step.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl border border-white/5 group-hover:border-accent/30`}
                >
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Images */}
      <section className="py-24 bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="flex-1 space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <Users className="w-4 h-4" />
                Acompañamiento Experto
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Impulsado por <br />
                <span className="text-gradient-purple">Talento Humano</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                No solo entregamos software; nos convertimos en tus socios
                tecnológicos. Desde Trujillo para todo el Perú: hablamos tu
                idioma, por WhatsApp y sin tecnicismos, hasta convertir tus
                desafíos en ventajas competitivas.
              </p>
              <ul className="space-y-4">
                {[
                  "Metodologías Ágiles (Scrum/Kanban)",
                  "Comunicación Transparente 24/7",
                  "Enfoque en Resultados de Negocio",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-accent" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <ImageWithSkeleton
                  src="https://www.campustraining.es/wp-content/uploads/2024/08/puestos-trabajo-programacion.jpg.webp"
                  alt="Programadores trabajando"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                    <ImageWithSkeleton
                      src="/lead/IMG_20230513_120825.jpg"
                      alt="Developer Lead SysJoL"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-accent">
                      Developer Lead
                    </p>
                    <p className="text-sm">"Enfocados en tu éxito"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                    <ImageWithSkeleton
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                      alt="Team Collaboration"
                      className="w-full object-cover aspect-square hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-accent rounded-2xl p-6 text-white text-center">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                      Compromiso
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <Lightbulb className="w-8 h-8 text-primary mb-2" />
                    <p className="text-sm font-bold italic">
                      Innovación constante en cada proyecto.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                    <ImageWithSkeleton
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                      alt="Productive Coding"
                      className="w-full object-cover aspect-square hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Resultados que <br />
                <span className="text-gradient">Hablan Solos</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                El Journey no termina con el despliegue. Nos aseguramos de que
                cada sistema entregado genere un impacto medible en tu
                productividad y rentabilidad corporativa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold italic text-accent">+30%</p>
                  <p className="text-sm text-muted-foreground">
                    Eficiencia operativa promedio
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold italic text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">
                    Soporte y Monitoreo Estratégico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-accent/5">
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <Compass className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse" />
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-8 italic">
            ¿Iniciamos el viaje juntos?
          </h2>
          <Button
            size="lg"
            className="rounded-full px-10 h-14 text-xl font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
            onClick={handleContact}
          >
            Hablemos por WhatsApp
            <FaWhatsapp className="w-10 h-10     text-white" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
