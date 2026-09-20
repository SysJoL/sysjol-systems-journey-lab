import { ArrowRight, ExternalLink, Github, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  demoLabel?: string;
};

const YOUTUBE_ID = "tYlQXfQl58U";

const projects: Project[] = [
  {
    title: "Automatización n8n & Email",
    description:
      "Recibe registros, envía notificaciones personalizadas y organiza datos en Google Sheets en tiempo real. Cero trabajo manual.",
    tags: ["n8n", "Automation", "API"],
    image: `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`,
    demo: `https://youtu.be/${YOUTUBE_ID}`,
    demoLabel: "Ver video",
  },
  {
    title: "Sentiment Analysis Suite",
    description:
      "API REST escalable + frontend para análisis de sentimientos con NLP. Base lista para integrar IA en tus procesos.",
    github: "https://github.com/SysJoL/frontend-sentiment",
    tags: ["FastAPI", "Python", "React"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "LedPantallas Ecommerce",
    description:
      "Plataforma web premium para venta y gestión de pantallas LED, optimizada para conversión.",
    github: "https://github.com/SysJoL/ledpantallas",
    tags: ["React", "Laravel", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Libro de Reclamaciones Digital",
    description:
      "Sistema integral de gestión de quejas y reclamos que cumple normativas legales.",
    github: "https://github.com/SysJoL",
    tags: ["Laravel", "MySQL", "PHP"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Reto Técnico SUNAT XML",
    description:
      "Extractor de datos desde XML de facturación electrónica para auditoría y cálculo de impuestos.",
    github: "https://github.com/SysJoL/reto-tecnico",
    tags: ["Laravel", "XML", "Contable"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Currency Exchange API",
    description:
      "Motor de conversión de divisas con tasas en tiempo real y arquitectura de microservicios.",
    github: "https://github.com/SysJoL/ChallengeConversorMonedas",
    tags: ["Spring Boot", "Java", "REST"],
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Desarrollo de software hecho en Perú
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Proyectos que <span className="text-gradient">resuelven</span> lo
            peruano
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Facturación SUNAT, libro de reclamaciones, ventas por WhatsApp y
            automatización real. Esto es lo que ya construimos — todo el detalle
            está en el Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 flex flex-col overflow-hidden"
            >
              {project.image && (
                <div className="aspect-video overflow-hidden relative bg-black">
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {project.demo?.includes("youtu") && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver video de ${project.title} en YouTube`}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/10"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-600/30 transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </span>
                    </a>
                  )}
                </div>
              )}
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/5 text-[10px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-xl border-white/10"
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
                    className="flex-1 rounded-xl border-white/10"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.demoLabel ?? "Demo"}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="glow"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <Link to="/lab">
              Ver todos los proyectos en el Lab
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
