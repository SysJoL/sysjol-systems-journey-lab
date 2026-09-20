import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola, me gustaría conversar sobre cómo pueden ayudarme con mis proyectos de automatización y sistemas.",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative border */}
          <div className="relative p-px rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50">
            <div className="card-gradient rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                ¿Listo para <span className="text-gradient">transformar</span>{" "}
                tu negocio?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
                Conversemos sobre cómo automatizar tus procesos y generar el
                software que tu operación necesita.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full px-8"
                  onClick={handleContact}
                >
                 <FaWhatsapp className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Contactar
                  
                </Button>
                <Button
                  variant="glow"
                  size="lg"
                  className="rounded-full px-8"
                  asChild
                >
                  <Link to="/lab">
                    Ver Proyectos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
