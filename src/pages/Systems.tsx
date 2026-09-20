import {
  Server,
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  ArrowRight,
  Home,
  MessageSquare,
  Workflow,
  Boxes,
  Network,
  Webhook,
  Repeat,
  Plug,
  Activity,
  Search,
  PenTool,
  Hammer,
  Rocket,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const SystemsSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Skeleton */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <Skeleton className="w-40 h-10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="w-full h-16 md:h-24 mx-auto" />
          <Skeleton className="w-3/4 h-10 mx-auto" />
          <div className="flex justify-center pt-4">
            <Skeleton className="w-48 h-14 rounded-full" />
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities Skeleton */}
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-card/50 p-8 space-y-4"
            >
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <Skeleton className="w-16 h-16 rounded-2xl" />
                <Skeleton className="w-48 h-8" />
              </div>
              <Skeleton className="w-full h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const architectures = [
  {
    id: "conectada",
    label: "API + Automatización",
    icon: Workflow,
    tagline: "Tu sistema habla con todo lo demás",
    description:
      "Un sistema central con API propia conectado a n8n: los pedidos de WhatsApp entran solos, la facturación se emite sin tipear y los reportes llegan a tu correo cada mañana.",
    ideal: "Ideal cuando vives entre WhatsApp, Excel y SUNAT.",
    stack: ["API REST", "n8n", "Webhooks", "WhatsApp API"],
    nodes: ["WhatsApp / Web", "API SysJoL", "n8n", "SUNAT · Sheets · Email"],
  },
  {
    id: "modular",
    label: "Monolito modular",
    icon: Boxes,
    tagline: "Todo en uno, ordenado por módulos",
    description:
      "Una sola aplicación con módulos independientes: ventas, inventario, clientes y reportes. Empiezas con lo urgente y agregas módulos sin reescribir nada.",
    ideal: "Ideal cuando necesitas un sistema completo con presupuesto por etapas.",
    stack: ["Laravel / .NET", "PostgreSQL", "Roles y permisos"],
    nodes: ["Ventas", "Inventario", "Clientes", "Reportes"],
  },
  {
    id: "micro",
    label: "Microservicios",
    icon: Network,
    tagline: "Piezas independientes que escalan solas",
    description:
      "Cada función crítica (pagos, notificaciones, catálogo) vive en su propio servicio. Si uno crece o falla, los demás siguen operando sin detener tu venta.",
    ideal: "Ideal cuando el volumen ya no cabe en un solo servidor.",
    stack: ["Docker", "Kubernetes", "Redis", "Balanceo de carga"],
    nodes: ["Pagos", "Notificaciones", "Catálogo", "API Gateway"],
  },
  {
    id: "eventos",
    label: "Eventos y colas",
    icon: Zap,
    tagline: "Lo pesado corre en segundo plano",
    description:
      "Cobranzas, recordatorios, sincronizaciones y reportes pesados se encolan y procesan solos con reintentos automáticos. Tu caja nunca se bloquea.",
    ideal: "Ideal cuando hay tareas que tardan y no pueden frenar la atención.",
    stack: ["Colas", "Workers", "Reintentos", "Alertas"],
    nodes: ["Evento", "Cola", "Worker", "Listo + aviso"],
  },
];

const patterns = [
  {
    icon: Plug,
    title: "API-first",
    desc: "Todo lo que construimos expone API: mañana conectas tu tienda, tu app o tu bot sin rehacer el sistema.",
  },
  {
    icon: Webhook,
    title: "Webhooks en tiempo real",
    desc: "Cada venta, pago o reclamo dispara acciones al instante: mensajes, registros y alertas sin intervención.",
  },
  {
    icon: Repeat,
    title: "Reintentos automáticos",
    desc: "Si SUNAT o un proveedor no responde, el sistema reintenta solo y te avisa. Nada se pierde en silencio.",
  },
  {
    icon: Layers,
    title: "Capas separadas",
    desc: "Presentación, reglas de negocio y datos van por separado: cambiar un reporte no rompe la facturación.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad por roles",
    desc: "Cada trabajador ve solo lo suyo —caja, almacén o administración— con accesos y sesiones controladas.",
  },
  {
    icon: Activity,
    title: "Monitoreo y alertas",
    desc: "Supervisamos la salud del sistema 24/7: nos enteramos de un fallo antes que tú y actuamos.",
  },
];

const workProcess = [
  {
    n: "01",
    icon: Search,
    title: "Descubrimiento",
    desc: "En 1–2 sesiones mapeamos tus procesos: qué se hace a mano, dónde se pierde tiempo y qué duele más.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Diseño",
    desc: "Prototipo navegable y arquitectura por etapas, con costo y tiempos claros antes de programar.",
  },
  {
    n: "03",
    icon: Hammer,
    title: "Construcción",
    desc: "Entregas semanales que ya puedes probar, con automatizaciones conectadas desde el inicio.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Puesta en marcha",
    desc: "Despliegue, capacitación a tu equipo y soporte post-lanzamiento para ajustar con datos reales.",
  },
];

const Systems = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const capabilities = [
    {
      title: "Backend Moderno",
      description:
        "Desarrollamos motores de software robustos usando Node.js, Python y .NET Core, enfocados en escalabilidad y rendimiento extremo.",
      icon: Code2,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "Infraestructura Cloud",
      description:
        "Despliegue y orquestación masiva en AWS, Azure y Google Cloud con Docker y Kubernetes para disponibilidad del 99.9%.",
      icon: Cloud,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "IA & Machine Learning",
      description:
        "Integración de modelos LLM (OpenAI, Anthropic) y visión artificial para automatizar procesos complejos con inteligencia real.",
      icon: Cpu,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "Arquitectura de Datos",
      description:
        "Diseño de bases de datos de alta velocidad con PostgreSQL, MongoDB y Redis para servicios que nunca se detienen.",
      icon: Database,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
  ];

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola, me gustaría conocer más sobre sus servicios de Systems (Sistemas, Backend e Infraestructura).",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <SystemsSkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background z-10" />
          <ImageWithSkeleton
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop"
            alt="Infraestructura Background"
            className="w-full h-full object-cover brightness-[0.2]"
            containerClassName="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,149,255,0.1),transparent_70%)] z-10" />
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
                    Systems
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-fade-up">
              Potencia tu <span className="text-gradient">Infraestructura</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-up [animation-delay:200ms]">
              Convertimos el trabajo manual de tu MYPE en sistemas automáticos:
              ventas, inventario, facturación y reportes que funcionan solos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-primary hover:scale-105 transition-transform"
                onClick={handleContact}
              >
                Solicitar Asesoría
                <Zap className="ml-2 w-5 h-5 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {capabilities.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4  justify-center bg-gradient-to-r from-primary to-accent">
                  <div
                    className={`p-4  rounded-2xl ${item.bg} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-display leading-tight ">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architectures Section — interactive */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Sin humo técnico
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Arquitecturas que <span className="text-gradient">sí entiendes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuatro formas de construir según tu tamaño y tu dolor. Elige una
              pestaña y mira cómo se vería tu operación.
            </p>
          </div>

          <Tabs defaultValue="conectada" className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-background/50 backdrop-blur-xl border border-white/5 p-1 h-auto grid grid-cols-2 md:grid-cols-4 w-full rounded-2xl">
                {architectures.map((arch) => (
                  <TabsTrigger
                    key={arch.id}
                    value={arch.id}
                    className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all text-xs sm:text-sm"
                  >
                    <arch.icon className="w-4 h-4 mr-2 hidden sm:block" />
                    {arch.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {architectures.map((arch) => (
              <TabsContent
                key={arch.id}
                value={arch.id}
                className="animate-in fade-in zoom-in duration-500"
              >
                <div className="grid md:grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md p-8 md:p-10">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                      <arch.icon className="w-3.5 h-3.5" />
                      {arch.tagline}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {arch.description}
                    </p>
                    <p className="font-semibold text-foreground">{arch.ideal}</p>
                    <div className="flex flex-wrap gap-2">
                      {arch.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-[11px] font-bold uppercase tracking-wider"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch justify-center gap-2 rounded-2xl border border-white/5 bg-background/60 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2 text-center">
                      Cómo fluye tu operación
                    </p>
                    {arch.nodes.map((node, i) => (
                      <div key={node} className="flex flex-col items-center">
                        <div className="w-full rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-center font-display text-sm font-bold">
                          {node}
                        </div>
                        {i < arch.nodes.length - 1 && (
                          <div className="py-1 text-primary font-bold leading-none">
                            ↓
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14 text-center">
            {[
              { v: "99.9%", l: "Disponibilidad objetivo" },
              { v: "24/7", l: "Monitoreo y alertas" },
              { v: "+30%", l: "Eficiencia operativa promedio" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="rounded-2xl border border-white/5 bg-secondary/30 p-6"
              >
                <p className="text-3xl font-display font-bold text-primary">
                  {stat.v}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Visual Section */}
      <section className="py-24 border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Arquitectura <br />
                <span className="text-primary">Limpia y Escalable</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Seguridad por Diseño
                    </h3>
                    <p className="text-muted-foreground italic">
                      Cifrado de extremo a extremo y cumplimiento de los más
                      altos estándares de protección de datos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Layers className="w-8 h-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diseño Modular</h3>
                    <p className="text-muted-foreground italic">
                      Sistemas desacoplados que permiten crecer sin fricciones
                      ni tiempos de inactividad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="relative p-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl backdrop-blur-xl">
                <div className="bg-background/80 rounded-[calc(1.5rem-2px)] p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="text-sm font-mono text-primary font-bold">
                      system.status_check()
                    </span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <pre className="font-mono text-sm overflow-x-auto text-primary/80">
                    <code>{`
{
  "performance": "Optimized",
  "security": "Enforced",
  "cloud": "Multi-region",
  "deployment": "Automated",
  "uptime": "99.98%"
}
                    `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden border-t border-white/5">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Buenas prácticas, en criollo
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Patrones que <span className="text-gradient">evitan dolores</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sin jerga innecesaria: estas son las reglas que aplicamos para que
              tu sistema no se caiga, no pierda datos y crezca contigo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patterns.map((pattern) => (
              <div
                key={pattern.title}
                className="group rounded-2xl border border-white/5 bg-card/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <pattern.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold">
                    {pattern.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pattern.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              De la idea al sistema en producción
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Cómo <span className="text-gradient">trabajamos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un proceso simple y transparente: sabes qué pasa cada semana y
              pruebas avances reales desde temprano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            {workProcess.map((step) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card border border-primary/25 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500 shadow-xl">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 rounded-full bg-primary text-primary-foreground font-mono text-[11px] font-bold px-2 py-0.5">
                    {step.n}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-8 italic">
            ¿Listo para escalar al siguiente nivel?
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default Systems;
