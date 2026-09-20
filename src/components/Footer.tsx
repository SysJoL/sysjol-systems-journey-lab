import {
  Github,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Send,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setIsSubmitting(true);

    // Check localStorage for duplicate
    const subscribedEmails = JSON.parse(
      localStorage.getItem("sysjol_newsletter_emails") || "[]",
    );
    if (subscribedEmails.includes(email)) {
      toast.error("Este correo ya está suscrito al newsletter.");
      setIsSubmitting(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateNotificationId = import.meta.env
      .VITE_EMAILJS_TEMPLATE_NOTIFICATION_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateNotificationId || !publicKey) {
      toast.error(
        "Error de configuración: Faltan las credenciales de EmailJS.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateNotificationId,
        {
          from_name: "Usuario Newsletter",
          from_email: email,
          message: `Nuevo suscriptor para el newsletter: ${email}\nUbicación reportada: Trujillo, La Libertad, Perú.`,
        },
        publicKey,
      );

      // Save to localStorage
      subscribedEmails.push(email);
      localStorage.setItem(
        "sysjol_newsletter_emails",
        JSON.stringify(subscribedEmails),
      );

      toast.success("¡Gracias por suscribirte!");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Hubo un error al procesar tu suscripción. Intentalo de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/sysjol",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/sysjol",
      label: "X",
      color: "hover:text-white",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/SysJoL",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@Sysjol-01",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@sysjol",
      label: "TikTok",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <footer className="relative bg-card/30 border-t border-white/5 pt-10 pb-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/favicon.png"
                alt="SysJoL Logo"
                className="w-20 h-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-3xl font-display font-bold text-gradient">
                SysJoL
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed italic">
              Transformación Digital y Sistemas de Alto Rendimiento. Elevamos tu
              visión corporativa a través de la excelencia tecnológica.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/51980609176",
                  label: "WhatsApp",
                  color: "hover:text-[#25D366] hover:border-[#25D366]/30",
                },
                {
                  icon: Mail,
                  href: "mailto:sysjol@outlook.es",
                  label: "Email",
                  color: "hover:text-[#0078D4] hover:border-[#0078D4]/30",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/SysJoL?tab=repositories",
                  label: "GitHub",
                  color: "hover:text-white hover:border-white/30",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center text-muted-foreground ${social.color} hover:scale-110 transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - DESKTOP */}
          <div className="hidden md:block">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 border-b  border-blue-400 py-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Explora
            </h4>
            <ul className="space-y-4">
              {[
                { name: "DownMuVi", href: "/downmuvi" },
                { name: "CapturaApp", href: "/capturaapp" },
                { name: "Generador QR", href: "/qr-generator" },
                { name: "Sistemas", href: "/systems" },
                { name: "Estrategia", href: "/journey" },
                { name: "Laboratorio", href: "/lab" },
                { name: "Cursos", href: "/courses" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - DESKTOP */}
          <div className="hidden md:block">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-accent py-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Contacto
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  Sede Principal: Trujillo, La Libertad - Perú
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  sysjol@outlook.es
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  +51 980 609 176
                </span>
              </li>
            </ul>
          </div>

          {/* Mobile Accordion (Explora & Contacto) */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="explora" className="border-white/5">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Explora
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pt-2 pb-4">
                    {[
                      { name: "DownMuVi", href: "/downmuvi" },
                      { name: "CapturaApp", href: "/capturaapp" },
                      { name: "Generador QR", href: "/qr-generator" },
                      { name: "Sistemas", href: "/systems" },
                      { name: "Estrategia", href: "/journey" },
                      { name: "Laboratorio", href: "/lab" },
                      { name: "Cursos", href: "/courses" },
                    ].map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-primary" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="contacto"
                className="border-white/5 border-b-0"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Contacto
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-6 pt-2 pb-4">
                    <li className="flex gap-4">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm italic">
                        Sede Principal: Trujillo, La Libertad - Perú
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm italic">
                        sysjol@outlook.es
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm italic">
                        +51 980 609 176
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="social"
                className="border-white/5 border-b-0"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Redes Sociales
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-4 pt-2 pb-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-10 h-10 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-300",
                          social.color,
                        )}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 italic text-gradient border-b border-blue-400 py-2">
              Únete a la Vanguardia
            </h4>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir noticias sobre nuevas tecnologías y
              automatizaciones.
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email..."
                disabled={isSubmitting}
                className="w-full bg-background/50 border border-white/10 rounded-2xl py-3 px-4 outline-none focus:border-primary/50 transition-all italic text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary transition-all hover:text-white disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-8 h-8 rounded-lg bg-background/40 border border-white/5 flex items-center justify-center text-muted-foreground transition-all duration-300",
                    social.color,
                    "hover:scale-110 hover:bg-background/60",
                  )}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
          <p className="text-center text-sm">
            © {currentYear} <span className="text-primary">SysJoL</span>. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors text-start text-xs"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors text-end text-xs"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
