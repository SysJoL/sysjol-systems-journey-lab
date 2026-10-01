import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Calendar,
  Clock,
  BookOpen,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Send,
  ArrowLeft,
  Award,
  Infinity,
  Star,
  Briefcase,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const PythonCourseSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Header Skeleton */}
    <section className="relative pt-24 pb-12 md:py-24 overflow-hidden border-b border-white/5">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex justify-center mb-8 md:mb-12">
          <Skeleton className="w-56 h-10 rounded-full" />
        </div>
        <div className="text-center space-y-8 flex flex-col items-center">
          <Skeleton className="w-20 h-20 rounded-full mb-4" />
          <Skeleton className="w-3/4 h-16 md:h-20 mx-auto" />
          <Skeleton className="w-2/3 h-10 mx-auto" />

          {/* Pricing/Timer Skeleton */}
          <div className="mt-12 space-y-6 w-full max-w-lg">
            <Skeleton className="w-full h-24 rounded-lg" />
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="w-16 h-20 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Schedule Skeleton */}
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <Skeleton className="w-full h-[400px] rounded-xl" />
          <div className="space-y-6">
            <Skeleton className="w-48 h-10" />
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="w-full h-16" />
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Correo electrónico inválido."),
  phone: z
    .string()
    .regex(
      /^9[0-9]{8}$/,
      "El número debe iniciar con 9 y tener exactamente 9 dígitos.",
    )
    .refine((val) => {
      const allSame = /^(.)\1+$/.test(val);
      const suffixSame = /^9(.)\1+$/.test(val);
      return !allSame && !suffixSame;
    }, "Por favor, ingresa un número de teléfono real."),
});

const modules = [
  {
    title: "Módulo 1: Ecosistema y Estructura",
    items: [
      "Uso de Módulos y Paquetes para organizar proyectos.",
      "Manejo de PIP (gestor de paquetes) e instalación de librerías.",
    ],
  },
  {
    title: "Módulo 2: Manipulación de Datos y Robustez",
    items: [
      "Dominio de Cadenas (Strings) y métodos avanzados de Listas.",
      "Gestión de Excepciones: programación a prueba de errores.",
    ],
  },
  {
    title: "Módulo 3: Paradigma Profesional",
    items: [
      "Programación Orientada a Objetos (POO): Clases y Objetos.",
      "Herencia y Polimorfismo: bases del software moderno.",
    ],
  },
  {
    title: "Módulo 4: Herramientas de Sistema y Avanzadas",
    items: [
      "Lógica avanzada: Generadores, iteradores y closures.",
      "Sistema de archivos: Procesamiento de texto y binarios.",
      "Librerías estándar: os, time, datetime, calendar.",
    ],
  },
];

const PythonCourse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [timeReq, setTimeReq] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to February 18, 2026 (or current year) 4:00 PM
    const targetDate = new Date("2026-02-18T16:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeReq({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setProgress(0);

    // Check localStorage for duplicate
    const registeredEmails = JSON.parse(
      localStorage.getItem("sysjol_python_course_emails") || "[]",
    );
    if (registeredEmails.includes(values.email)) {
      toast.error(
        "Ya te has registrado en este curso con este correo electrónico.",
      );
      setIsSubmitting(false);
      return;
    }

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error("Por favor, completa el CAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    // Credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateNotificationId = import.meta.env
      .VITE_EMAILJS_TEMPLATE_NOTIFICATION_ID;
    const templateConfirmationId = import.meta.env
      .VITE_EMAILJS_TEMPLATE_CONFIRMATION_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateNotificationId ||
      !templateConfirmationId ||
      !publicKey
    ) {
      clearInterval(interval);
      toast.error(
        "Error de configuración: Faltan las credenciales de EmailJS.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Send Notification to Admin (Include CAPTCHA token)
      await emailjs.send(
        serviceId,
        templateNotificationId,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          message: `Nuevo registro para curso Python.\nNombre: ${values.name}\nEmail: ${values.email}\nTeléfono: ${values.phone}`,
          "g-recaptcha-response": recaptchaValue,
        },
        publicKey,
      );

      // 2. Send Confirmation to Student (Include CAPTCHA token)
      await emailjs.send(
        serviceId,
        templateConfirmationId,
        {
          to_name: values.name,
          to_email: values.email,
          reply_to: "sysjol024@gmail.com",
          "g-recaptcha-response": recaptchaValue,
        },
        publicKey,
      );

      // Complete progress and show success
      clearInterval(interval);
      setProgress(100);

      // Short delay to show 100% before showing checkmark
      setTimeout(() => {
        setIsSuccess(true);
        // Save to localStorage
        registeredEmails.push(values.email);
        localStorage.setItem(
          "sysjol_python_course_emails",
          JSON.stringify(registeredEmails),
        );

        toast.success(
          "¡Registro exitoso! Revisa tu correo para la confirmación.",
        );
        form.reset();

        // Reset state after 3 seconds to allow new submissions
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(false);
          setProgress(0);
          recaptchaRef.current?.reset();
        }, 3000);
      }, 500);
    } catch (error) {
      clearInterval(interval);
      console.error("EmailJS Error:", error);
      toast.error("Hubo un error al procesar el registro. Intentalo de nuevo.");
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <PythonCourseSkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-12 md:py-24 overflow-hidden geometric-bg border-b border-white/5">
        <div className="container relative z-10 px-4 md:px-6">
          {/* Modern Breadcrumb */}
          <div className="flex justify-center mb-8 md:mb-12">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-python-blue transition-colors"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Inicio</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/courses"
                      className="hover:text-python-blue transition-colors"
                    >
                      Cursos
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-python-yellow font-medium">
                    Python
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-center gap-6 mb-8 group">
              <div className="relative">
                <div className="absolute -inset-4 bg-python-blue/20 rounded-full blur-2xl group-hover:bg-python-blue/30 transition-all duration-500" />
                <div className="relative py-8 px-4 flex items-center justify-center">
                  <ImageWithSkeleton
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python Logo"
                    className="relative w-16 h-16 md:w-24 md:h-24 animate-float drop-shadow-[0_0_25px_rgba(48,105,152,0.7)] transition-transform duration-500 group-hover:scale-110"
                    containerClassName="overflow-visible w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-python-blue/10 border border-python-blue/20 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-python-blue md:text-python-yellow">
                  Certificación Profesional
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Curso Profesional de{" "}
              <span className="text-python-blue">Python</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Lleva tus habilidades de programación al siguiente nivel con
              nuestro programa intensivo de 4 semanas.
            </p>

            {/* Pricing & Timer */}
            <div className="mt-12 animate-fade-up-delay-2">
              <div className="flex flex-col items-center gap-6">
                {/* Price Tag */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-python-blue to-python-yellow rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative px-8 py-4 bg-card/80 backdrop-blur-xl ring-1 ring-white/10 rounded-lg flex flex-col items-center">
                    <span className="text-muted-foreground line-through text-lg">
                      Precio Regular: S/ 150.00
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        S/ 50.00
                      </span>
                      <span className="bg-python-yellow text-background text-xs font-bold px-2 py-1 rounded">
                        -66% OFF
                      </span>
                    </div>
                    <span className="text-sm text-python-yellow mt-1 font-medium">
                      ¡Oferta por tiempo limitado!
                    </span>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex items-center gap-2 md:gap-4 text-white">
                  <div className="flex flex-col items-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-12 h-12 md:p-3 md:w-16 md:h-16 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg md:text-2xl font-bold font-mono">
                        {timeReq.days}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      Días
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold pb-4 md:pb-6">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-12 h-12 md:p-3 md:w-16 md:h-16 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg md:text-2xl font-bold font-mono">
                        {timeReq.hours}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      Horas
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold pb-4 md:pb-6">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-12 h-12 md:p-3 md:w-16 md:h-16 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg md:text-2xl font-bold font-mono">
                        {timeReq.minutes}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      Min
                    </span>
                  </div>
                  <span className="text-lg md:text-2xl font-bold pb-4 md:pb-6">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-12 h-12 md:p-3 md:w-16 md:h-16 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-lg md:text-2xl font-bold font-mono">
                        {timeReq.seconds}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      Seg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Info */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Schedule Card */}
            <Card className="bg-card/50 backdrop-blur border-white/5">
              <CardHeader>
                <CardTitle className="text-2xl font-display flex items-center gap-2">
                  <Calendar className="text-python-yellow" />
                  Cronograma y Horarios
                </CardTitle>
                <CardDescription>
                  Entrenamiento enfocado y práctico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                  <Calendar className="w-5 h-5 text-python-blue mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Duración</h4>
                    <p className="text-muted-foreground">
                      Del miércoles 18 de febrero al viernes 13 de marzo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                  <Clock className="w-5 h-5 text-python-blue mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Horarios</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span>Miércoles</span>
                        <span className="text-python-yellow">
                          4:00 PM - 7:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span>Viernes</span>
                        <span className="text-python-yellow">
                          3:00 PM - 6:00 PM
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      6 horas semanales de instrucción directa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Syllabus */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold flex items-center gap-2">
                <BookOpen className="text-python-blue" />
                Plan de Estudios
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="text-lg font-medium hover:text-python-yellow transition-colors">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="space-y-2">
                        {module.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-python-blue shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-python-yellow/5" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Beneficios <span className="text-python-yellow">Premium</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No es solo un curso, es una experiencia de transformación
              profesional diseñada para tu éxito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur border-python-yellow/30 hover:border-python-yellow/60 transition-all hover:shadow-[0_0_30px_-5px_rgba(255,212,59,0.2)] group">
              <CardHeader>
                <Infinity className="w-10 h-10 text-python-yellow mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Acceso de por Vida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Materiales, grabaciones y actualizaciones futuras disponibles
                  para siempre. Aprende a tu ritmo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-python-yellow/30 hover:border-python-yellow/60 transition-all hover:shadow-[0_0_30px_-5px_rgba(255,212,59,0.2)] group">
              <CardHeader>
                <Star className="w-10 h-10 text-python-yellow mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Mentoría Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apoyo directo y resolución de dudas conmigo. No estarás solo
                  en tu proceso de aprendizaje.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-python-yellow/30 hover:border-python-yellow/60 transition-all hover:shadow-[0_0_30px_-5px_rgba(255,212,59,0.2)] group">
              <CardHeader>
                <Award className="w-10 h-10 text-python-yellow mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Certificado de Finalización</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diploma digital emitido por SysJoL al completar el curso y
                  proyecto final. Impulsa tu CV.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-python-yellow/30 hover:border-python-yellow/60 transition-all hover:shadow-[0_0_30px_-5px_rgba(255,212,59,0.2)] group">
              <CardHeader>
                <Briefcase className="w-10 h-10 text-python-yellow mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Proyectos Reales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Construye un portafolio sólido solucionando problemas reales
                  del mercado laboral actual.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-python-blue/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Asegura tu vacante
              </h2>
              <p className="text-muted-foreground">
                Completa el formulario para registrarte. Te enviaremos los
                detalles de pago y acceso a tu correo.
              </p>
            </div>

            <Card className="border-python-blue/20 bg-card/80 backdrop-blur shadow-[0_0_40px_-10px_rgba(48,105,152,0.1)]">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                              <Input
                                placeholder="Juan Pérez"
                                className="pl-10"
                                autoComplete="name"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                              <Input
                                placeholder="juan@ejemplo.com"
                                className="pl-10"
                                autoComplete="email"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Celular / WhatsApp</FormLabel>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                              <Input
                                placeholder="987654321"
                                className="pl-10"
                                autoComplete="tel"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {!isSuccess && !isSubmitting && (
                      <div className="flex justify-center py-2">
                        {import.meta.env.VITE_RECAPTCHA_SITE_KEY ? (
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            theme="dark"
                          />
                        ) : (
                          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs text-center">
                            Error: No se encontró la SITE KEY de reCAPTCHA.
                            <br />
                            Reinicia el servidor (npm run dev) para cargar el
                            .env.
                          </div>
                        )}
                      </div>
                    )}

                    {isSuccess ? (
                      <div className="flex flex-col items-center justify-center p-6 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-up">
                        <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
                        <span className="text-xl font-bold text-green-500">
                          ¡Inscripción Confirmada!
                        </span>
                      </div>
                    ) : isSubmitting ? (
                      <div className="space-y-3 py-2">
                        <div className="flex justify-between text-sm font-medium text-muted-foreground">
                          <span>Procesando inscripción...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress
                          value={progress}
                          className="h-2 bg-secondary"
                        />
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full bg-python-blue hover:bg-python-blue/90 text-white"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        Inscribirme Ahora
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PythonCourse;
