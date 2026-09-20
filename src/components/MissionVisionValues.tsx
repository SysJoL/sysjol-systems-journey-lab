import {
  Target,
  Eye,
  HeartHandshake,
  BadgeCheck,
  HandCoins,
  MessagesSquare,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

const values = [
  {
    icon: BadgeCheck,
    title: "Compromiso real",
    desc: "Entregamos lo prometido, en el plazo prometido. Sin humo, sin letra chica.",
  },
  {
    icon: HandCoins,
    title: "Precio justo peruano",
    desc: "Soluciones por etapas, pensadas para el bolsillo de una MYPE, no de una corporación.",
  },
  {
    icon: MessagesSquare,
    title: "Trato cercano",
    desc: "Hablamos claro, en español y por WhatsApp. Soporte que sí responde.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento SUNAT",
    desc: "Software que respeta facturación electrónica, libro de reclamaciones y normas locales.",
  },
  {
    icon: Lightbulb,
    title: "Innovación útil",
    desc: "IA y automatización solo si te ahorran tiempo y dinero. Nada por moda.",
  },
  {
    icon: Users,
    title: "Crecemos contigo",
    desc: "Empezamos chico y escalamos: del Excel al sistema completo, a tu ritmo.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Empresa peruana · Trujillo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Por qué <span className="text-gradient">SysJoL</span> existe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No vendemos “sistemas”. Resolvemos los dolores del negocio peruano:
            ventas desordenadas, SUNAT, inventarios en cuadernos y clientes que
            se pierden por no responder a tiempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div className="relative rounded-2xl border border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <ImageWithSkeleton
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
              alt="Misión SysJoL — emprendedores peruanos automatizando su negocio"
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              containerClassName="absolute inset-0 w-full h-full"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/50 via-card/80 to-background/95"
              aria-hidden
            />
            <div className="relative z-10 p-8 md:p-10">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-primary/50 mb-6 shadow-lg shadow-primary/20">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Misión</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Digitalizar y automatizar a las MYPEs y emprendedores del Perú
                con software a medida, económico y fácil de usar, para que dejen
                el trabajo manual, cumplan con SUNAT sin estrés y vendan más con
                el mismo equipo.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border/50 overflow-hidden group hover:border-accent/30 transition-all duration-500">
            <ImageWithSkeleton
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Visión SysJoL — empresas peruanas creciendo con tecnología"
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              containerClassName="absolute inset-0 w-full h-full"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-accent/50 via-card/80 to-background/95"
              aria-hidden
            />
            <div className="relative z-10 p-8 md:p-10">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-accent to-accent/50 mb-6 shadow-lg shadow-accent/20">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Visión</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser al 2030 la empresa trujillana referente en automatización e
                IA aplicada para negocios peruanos, reconocida porque nuestros
                clientes trabajan menos horas operativas y crecen con tecnología
                hecha en casa.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
            <HeartHandshake className="w-4 h-4" />
            Nuestros valores
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative card-gradient rounded-2xl border border-border/50 p-6 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold">{v.title}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
