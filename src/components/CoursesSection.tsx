import { ExternalLink, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

const courses: {
  title: string;
  description: string;
  logo: string;
  color: string;
  border: string;
  isFilterable?: boolean;
  href?: string;
  hrefLabel?: string;
}[] = [
  {
    title: "Python Profesional",
    description:
      "Certificación intensiva de 4 semanas: automatización, APIs y proyectos reales con acompañamiento.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(55,118,171,0.4)]",
    border: "group-hover:border-[#3776AB]/50",
    href: "/python-course",
    hrefLabel: "Ver temario e inscribirme",
  },
  {
    title: "Microsoft Excel Avanzado",
    description:
      "Domina tablas dinámicas, macros y análisis de datos de nivel profesional.",
    logo: "https://cdn.pixabay.com/photo/2023/06/01/12/02/excel-logo-8033473_1280.png",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(33,115,70,0.3)]",
    border: "group-hover:border-[#217346]/50",
  },
  {
    title: "Java Spring Boot",
    description:
      "Construye microservicios escalables y robustos con el framework líder de Java.",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/springboot.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(109,179,63,0.3)]",
    border: "group-hover:border-[#6DB33F]/50",
    isFilterable: true,
  },
  {
    title: "Ecosistema .NET",
    description:
      "Desarrollo de aplicaciones multiplataforma con C# y .NET Core.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(81,43,212,0.3)]",
    border: "group-hover:border-[#512BD4]/50",
  },
  {
    title: "Laravel Framework",
    description:
      "Desarrollo web elegante y rápido con el framework PHP más popular.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(255,45,32,0.3)]",
    border: "group-hover:border-[#FF2D20]/50",
  },
  {
    title: "Robótica con Arduino",
    description:
      "Aprende electrónica y programación desde cero creando tus propios robots.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(0,151,156,0.3)]",
    border: "group-hover:border-[#00979C]/50",
  },
  {
    title: "Ingeniería de Prompt",
    description:
      "Optimiza tu interacción con IAs generativas para maximizar la productividad.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(16,163,127,0.3)]",
    border: "group-hover:border-[#10A37F]/50",
  },
];

const CoursesSection = () => {
  const handleContact = (courseTitle: string) => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en recibir más información sobre el curso de ${courseTitle}.`,
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Especialízate con <span className="text-gradient">Nosotros</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Programas intensivos diseñados para transformar tu carrera
            profesional con las tecnologías más demandadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`group bg-card/50 backdrop-blur-sm border-white/5 transition-all duration-500 hover:-translate-y-2 ${course.color} ${course.border}`}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-background/50 border border-white/10 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ImageWithSkeleton
                    src={course.logo}
                    alt={course.title}
                    className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                    containerClassName="bg-transparent"
                  />
                </div>
                <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                {course.href && (
                  <Button
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border-primary/20 transition-all duration-300"
                    asChild
                  >
                    <Link to={course.href}>
                      {course.hrefLabel ?? "Ver curso"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                <Button
                  onClick={() => handleContact(course.title)}
                  className="w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/20 transition-all duration-300 group/btn"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Consultar Curso
                  <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
