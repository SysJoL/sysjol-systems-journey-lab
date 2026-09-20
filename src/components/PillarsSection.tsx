import { Server, Compass, FlaskConical, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Server,
    title: "Systems",
    description:
      "Automatización de procesos, backend moderno, APIs e IA aplicada: convertimos tareas manuales en sistemas que trabajan solos.",
    gradient: "from-primary to-primary/50",
    href: "/systems",
  },
  {
    icon: Compass,
    title: "Journey",
    description:
      "Acompañamos tu transformación digital desde la idea hasta la automatización en producción, con foco en ROI.",
    gradient: "from-accent to-accent/50",
    href: "/journey",
  },
  {
    icon: FlaskConical,
    title: "Lab",
    description:
      "Nuestro laboratorio de desarrollo de software: experimentos, automatizaciones y proyectos reales con tecnología de vanguardia.",
    gradient: "from-primary via-accent to-primary",
    href: "/lab",
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Nuestros <span className="text-gradient">Pilares</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres dimensiones que definen nuestra forma de trabajar y crear valor
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Link to={pillar.href || "#"}>
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition-all duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                  }}
                />

                {/* Card */}
                <div className="relative h-full card-gradient rounded-2xl border border-border/50 p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:translate-y-[-4px]">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6`}
                  >
                    <pillar.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 italic">
                    {pillar.description}
                  </p>

                  <div className="flex items-center text-primary font-bold gap-2 group/btn">
                    <span>Saber más</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
