import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code2, Search, Workflow, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { openGlobalSearch } from "@/hooks/use-search";

const HeroSection = () => {
  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola SysJoL, soy de Perú y quiero automatizar los procesos de mi negocio. ¿Conversamos?",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden overflow-y-visible geometric-bg pt-[5.5rem] pb-20 sm:pt-24 md:pt-28 md:pb-24">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float"
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
          <div className="flex w-full flex-col gap-10 sm:gap-12 lg:grid lg:grid-cols-[1.1fr_min(42%,400px)] lg:items-center lg:gap-14">
            <div className="flex w-full min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-full max-w-xl animate-fade-up">
                <button
                  type="button"
                  onClick={() => openGlobalSearch()}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-left text-muted-foreground shadow-2xl shadow-primary/5 backdrop-blur-md transition-all duration-500 min-[420px]:gap-4 min-[420px]:px-5 hover:border-primary/40 hover:bg-white/10 hover:text-white sm:py-3.5"
                >
                  <div className="rounded-xl bg-primary/15 p-2 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                    <Search className="h-5 w-5" />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                      Centro de comandos
                    </span>
                    <span className="line-clamp-2 text-sm font-medium min-[420px]:line-clamp-1 min-[420px]:truncate">
                      Busca automatizaciones, proyectos y servicios…
                    </span>
                  </div>
                  <kbd className="ml-auto hidden h-6 shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 font-mono text-[11px] font-medium sm:inline-flex">
                    Ctrl K
                  </kbd>
                </button>
              </div>

              <div className="mt-8 flex animate-fade-up-delay-1 flex-col items-center gap-6 lg:items-start">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-md">
                  <Zap className="h-4 w-4 text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                    Hecho en Perú · Automatización · Generación de código
                  </p>
                </div>

                <div className="w-full min-w-0 space-y-4">
                  <h1 className="font-display text-[1.65rem] font-bold leading-[1.2] tracking-tight min-[380px]:text-3xl sm:text-4xl sm:leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-tight">
                    Automatizamos negocios peruanos con{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      software que sí trabaja
                    </span>
                  </h1>
                  <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground min-[420px]:text-lg md:text-xl">
                    En <strong className="font-semibold text-foreground">SysJoL</strong>,
                    desde Trujillo para todo el Perú, convertimos el Excel
                    manual, el WhatsApp saturado y los papeles de SUNAT en
                    sistemas automáticos: facturación electrónica, control de
                    ventas e inventario, reportes y atención al cliente con IA.
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    Pensado para MYPEs y emprendedores peruanos: poco personal,
                    mucha operación. Te dejamos flujos con n8n, APIs e
                    integraciones que ahorran horas, evitan multas y te permiten
                    vender más sin contratar más.
                  </p>
                </div>

                <div className="flex w-full max-w-md flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full min-h-12 px-4 text-sm min-[420px]:min-h-0 min-[420px]:px-8 min-[420px]:text-base sm:w-auto"
                    onClick={handleContact}
                  >
                    <Bot className="mr-2 h-5 w-5 shrink-0" />
                    Automatizar mi negocio
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full min-h-12 border-primary/50 px-4 text-sm text-primary hover:bg-primary/10 min-[420px]:min-h-0 min-[420px]:px-8 min-[420px]:text-base sm:w-auto"
                    asChild
                  >
                    <Link to="/lab">
                      Ver proyectos de software
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <dl className="grid w-full max-w-xl grid-cols-2 gap-2.5 pt-4 min-[420px]:gap-3 sm:grid-cols-4 lg:max-w-none">
                  {[
                    { k: "Mercado", v: "MYPEs Perú" },
                    { k: "Dolor real", v: "SUNAT · Ventas" },
                    { k: "Solución", v: "n8n · APIs · IA" },
                    { k: "Base", v: "Trujillo · Remoto" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="rounded-2xl border border-white/5 bg-secondary/30 p-2.5 text-center backdrop-blur-sm transition-colors min-[420px]:p-3 hover:border-primary/25 lg:text-left"
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
                  className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20 opacity-80 blur-2xl min-[420px]:-inset-4"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-white/10 bg-card/40 p-5 shadow-2xl backdrop-blur-md min-[420px]:p-6 sm:rounded-2xl">
                  <div className="mb-4 flex items-center justify-between gap-2 px-1">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#eb5757]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                    </div>
                    <span className="truncate font-mono text-[10px] text-muted-foreground">
                      sysjol — qué hacemos
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      {
                        icon: Workflow,
                        title: "Automatización para MYPEs",
                        desc: "Pedidos por WhatsApp, Excel a sistema real, reportes SUNAT, cobranzas y seguimiento sin hacerlo a mano.",
                      },
                      {
                        icon: Code2,
                        title: "Software a medida en Perú",
                        desc: "Sistemas de ventas, inventario, reclamaciones y APIs que cumplen normas peruanas y funcionan con internet limitado.",
                      },
                      {
                        icon: Bot,
                        title: "IA que atiende por ti",
                        desc: "Respuestas automáticas, cotizaciones y clasificación de clientes para que no pierdas ventas por demorar.",
                      },
                    ].map((item) => (
                      <li
                        key={item.title}
                        className="flex gap-3 rounded-2xl border border-white/5 bg-background/60 p-4 text-left"
                      >
                        <div className="rounded-xl bg-primary/15 p-2.5 text-primary h-fit">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-display text-sm font-bold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 font-mono text-xs leading-relaxed text-primary/90">
                    sysjol.automatizar() → {"{"} horas_recuperadas, cero_errores,
                    deploy_continuo {"}"}
                  </div>
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
