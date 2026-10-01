import {
  ArrowLeft,
  ShieldCheck,
  Eye,
  Database,
  Share2,
  Lock,
  MessageSquare,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl space-y-8">
        {/* Modern Breadcrumb */}
        <div className="flex justify-start mb-4">
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
                  Políticas de Privacidad
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Políticas de <span className="text-primary">Privacidad</span>
          </h1>
          <p className="text-muted-foreground italic">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-PE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <Card className="border-white/5 bg-card/30 backdrop-blur-xl shadow-2xl">
          <CardHeader className="border-b border-white/5 pb-6">
            <CardTitle className="text-2xl font-display flex items-center gap-3">
              <ShieldCheck className="text-primary w-6 h-6" />
              Protección de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3>1. Introducción</h3>
                </div>
                <p>
                  En SysJoL Systems Journey Lab, valoramos su confianza y
                  estamos comprometidos con la protección de sus datos
                  personales. Esta política detalla cómo recopilamos, usamos y
                  protegemos su información de acuerdo con la{" "}
                  <strong>
                    Ley de Protección de Datos Personales de Perú (Ley N° 29733)
                  </strong>{" "}
                  y su reglamento.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Database className="w-5 h-5 text-primary" />
                  <h3>2. Información que Recopilamos</h3>
                </div>
                <p>
                  Recopilamos información que usted nos proporciona
                  voluntariamente al registrarse en nuestros cursos, suscribirse
                  al newsletter o contactarnos. Esto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre completo y apellidos.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>
                    Número de teléfono/WhatsApp (especialmente para coordinación
                    de cursos).
                  </li>
                  <li>
                    Datos técnicos de navegación de forma anónima para mejorar
                    nuestra web.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Lock className="w-5 h-5 text-primary" />
                  <h3>3. Uso de la Información</h3>
                </div>
                <p>
                  Utilizamos sus datos personales única y exclusivamente para
                  los siguientes fines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proveer los servicios de formación solicitados.</li>
                  <li>
                    Enviar confirmaciones de inscripción y materiales de
                    estudio.
                  </li>
                  <li>
                    Gestionar comunicaciones sobre actualizaciones de cursos o
                    nuevos lanzamientos (previa autorización).
                  </li>
                  <li>Atender consultas o solicitudes de soporte técnico.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Share2 className="w-5 h-5 text-primary" />
                  <h3>4. Compartición de Información</h3>
                </div>
                <p>
                  SysJoL{" "}
                  <strong>
                    no vende ni alquila sus datos personales a terceros
                  </strong>
                  . Solo compartiremos información cuando sea estrictamente
                  necesario para cumplir con leyes vigentes, requerimientos
                  judiciales o para proteger nuestros derechos legales.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <h3>5. Derechos ARCO</h3>
                </div>
                <p>
                  De acuerdo con la legislación peruana, usted tiene derecho a
                  ejercer sus derechos de{" "}
                  <strong>
                    Acceso, Rectificación, Cancelación y Oposición (ARCO)
                  </strong>{" "}
                  respecto a su información personal almacenada en nuestras
                  bases de datos. Para ejercer estos derechos, puede enviarnos
                  una solicitud detallada a nuestro correo electrónico oficial.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3>6. Contacto y Seguridad</h3>
                </div>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas
                  para proteger sus datos contra el acceso no autorizado. Si
                  tiene dudas sobre estas políticas, puede escribirnos a{" "}
                  <strong>sysjol024@gmail.com</strong>.
                </p>
              </section>

              <section className="pt-8 border-t border-white/5">
                <p className="text-sm italic">
                  Al navegar por nuestro sitio y utilizar nuestros servicios,
                  usted declara haber leído y aceptado nuestra Política de
                  Privacidad.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
