import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section for Courses Page */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden geometric-bg border-b border-white/5">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
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
                  <BreadcrumbPage className="text-primary font-medium">
                    Cursos
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-display font-bold mb-6">
              Cursos que te ponen a{" "}
              <span className="text-gradient">automatizar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formación práctica pensada para el Perú: aprende con proyectos
              reales —como automatizar tu Excel o tu facturación— con soporte
              por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <CoursesSection />

      <Footer />
    </div>
  );
};

export default Courses;
