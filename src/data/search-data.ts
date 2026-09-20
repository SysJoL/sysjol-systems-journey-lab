export interface SearchItem {
  title: string;
  description: string;
  category:
    | "Páginas"
    | "Sistemas"
    | "Cursos"
    | "Laboratorio"
    | "Producto";
  href: string;
  /** Sinónimos y términos técnicos para la búsqueda (no se muestran en la UI). */
  keywords?: string;
}

/** Coincidencia por palabras: cada término del usuario debe aparecer en título, descripción, categoría o keywords. */
export function searchItemMatchesQuery(
  item: SearchItem,
  rawQuery: string,
): boolean {
  const q = rawQuery.toLowerCase().trim();
  if (!q) return false;
  const haystack = [
    item.title,
    item.description,
    item.category,
    item.keywords ?? "",
  ]
    .join(" ")
    .toLowerCase();
  const tokens = q.split(/\s+/).filter(Boolean);
  return tokens.every((t) => haystack.includes(t));
}

export const searchData: SearchItem[] = [
  // Páginas
  {
    title: "Inicio",
    description:
      "Automatización de procesos y generación de código para MYPEs peruanas.",
    category: "Páginas",
    href: "/",
    keywords:
      "automatizar automatización procesos mype perú peru trujillo sunat whatsapp excel software medida misión vision valores empresa",
  },
  {
    title: "Sistemas",
    description: "Automatización, backend, APIs e IA aplicada.",
    category: "Páginas",
    href: "/systems",
  },
  {
    title: "Journey",
    description: "Transformación Digital y Estrategia empresarial.",
    category: "Páginas",
    href: "/journey",
  },
  {
    title: "Lab",
    description: "Proyectos de software y automatización con resultados.",
    category: "Páginas",
    href: "/lab",
    keywords:
      "proyectos portafolio casos automatizar n8n ia resultados whatsapp",
  },
  {
    title: "Cursos",
    description: "Explora nuestra oferta educativa técnica.",
    category: "Páginas",
    href: "/courses",
  },
  {
    title: "CapturaApp",
    description:
      "App de escritorio Windows: grabación, capturas, galería y dashboard local.",
    category: "Producto",
    href: "/capturaapp",
    keywords:
      "captura app capturaapp com.capturaapp.dev 0.1.0 tauri tauri2 rust vite " +
      "javascript tailwind escritorio windows nativa descargar instalador exe " +
      "grabar grabación grabacion pantalla screencast screen recording vídeo video " +
      "webcam camara cámara micrófono microfono audio cpal scap overlay " +
      "screenshot screenshots captura capturas png región region ventana fullscreen " +
      "galería galeria dashboard almacenamiento espacio disco local privacidad sin nube " +
      "860x560 800x520 splash descargar windows público public capturaapp carpeta salida " +
      "sysjol github.com/SysJoL/captura-app captura-app instalador setup exe",
  },
  {
    title: "DownMuVi",
    description:
      "Hub multimedia todo-en-uno para Windows: descarga, transcripción IA local, editor con VLC y biblioteca.",
    category: "Producto",
    href: "/downmuvi",
    keywords:
      "down muvi downmuvi SysJoL-Development SysJoL development 2.3.2 v2.3.2 hub multimedia " +
      "escritorio windows nativa descargar instalador exe setup Inno Setup customtkinter python " +
      "yt-dlp ffmpeg youtube facebook instagram tiktok twitter x spotify mp3 wav m4a flac ogg opus " +
      "360p 720p 1080p calidad descarga download transcripción transcripcion whisper faster-whisper " +
      "ia local ia offline sin conexión offline editor video timeline vlc libvlc picture-in-picture " +
      "pip biblioteca librería biblioteca multimedia galería galeria media lab historial chat música musica " +
      "supabase sincronización sincronizacion cuenta perfil créditos creditos actualizaciones automaticas " +
      "sysjol pro premium zip play all ffmpeg incluido 394.9 mb 414116930 releases latest " +
      "github.com/SysJoL/DownMuVi-Releases github.com/SysJoL-Development/DownMuVi",
  },
  {
    title: "Generador QR",
    description:
      "Herramienta gratuita para crear códigos QR a partir de un enlace: 100% local, sin registro y sin subir datos.",
    category: "Producto",
    href: "/qr-generator",
    keywords:
      "qr código codigo barcode código qr codigo qr generar generador creador generador de qr " +
      "link enlace url dirección direccion web página pagina gratis gratuito free " +
      "png svg descargar descarga imprimir escanear scan scannear móvil movil celular telefono " +
      "privado privacidad local navegador browser sin registro sin correo sin cuenta sin subir datos " +
      "sysjol herramienta tool utilidad util 100% local offline",
  },

  // Sistemas (Capabilities)
  {
    title: "Backend Moderno",
    description: "Node.js, Python y .NET Core para motores robustos.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "Infraestructura Cloud",
    description: "AWS, Azure y Google Cloud con Docker/Kubernetes.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "IA & Machine Learning",
    description: "Modelos LLM y visión artificial para procesos complejos.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "Arquitectura de Datos",
    description: "PostgreSQL, MongoDB y Redis de alta velocidad.",
    category: "Sistemas",
    href: "/systems",
  },
  {
    title: "Arquitectura API + Automatización",
    description: "Sistema central con API y n8n: WhatsApp, SUNAT y reportes solos.",
    category: "Sistemas",
    href: "/systems",
    keywords:
      "arquitectura api automatización n8n whatsapp sunat monolitico monolito modular microservicios eventos colas",
  },
  {
    title: "Patrones de desarrollo",
    description: "API-first, webhooks, reintentos, capas, roles y monitoreo.",
    category: "Sistemas",
    href: "/systems",
    keywords:
      "patrones api-first webhooks reintentos capas seguridad roles monitoreo buenas practicas",
  },
  {
    title: "Cómo trabajamos",
    description: "Descubrimiento, diseño, construcción y puesta en marcha.",
    category: "Sistemas",
    href: "/systems",
    keywords: "proceso metodología descubrimiento diseño construcción despliegue soporte",
  },

  // Cursos (From CoursesSection)
  {
    title: "Microsoft Excel Avanzado",
    description: "Tablas dinámicas, macros y análisis profesional.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Java Spring Boot",
    description: "Microservicios escalables con el líder de Java.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Ecosistema .NET",
    description: "C# y .NET Core multiplataforma.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Laravel Framework",
    description: "Desarrollo web elegante con PHP.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Robótica con Arduino",
    description: "Electrónica y programación desde cero.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Ingeniería de Prompt",
    description: "Maximiza tu productividad con IAs generativas.",
    category: "Cursos",
    href: "/courses",
  },
  {
    title: "Curso de Python",
    description: "Certificación profesional intensiva de 4 semanas.",
    category: "Cursos",
    href: "/python-course",
  },

  // Laboratorio (Projects)
  {
    title: "Automatización n8n & Email",
    description: "Workflow de notificaciones y Google Sheets.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Sentiment Analysis Suite",
    description: "NLP con FastAPI y React.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "LedPantallas Ecommerce",
    description: "Ecommerce optimizado para pantallas LED.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Libro de Reclamaciones Digital",
    description: "Reclamos digitales conforme a la norma peruana.",
    category: "Laboratorio",
    href: "/lab",
    keywords: "reclamaciones libro quejas indecopi norma peru",
  },
  {
    title: "Extractor SUNAT XML",
    description: "Auditoría de facturación electrónica en minutos.",
    category: "Laboratorio",
    href: "/lab",
    keywords: "sunat xml facturación auditoría impuestos contabilidad",
  },
  {
    title: "NutriCalc",
    description: "IMC, TMB y grasa corporal en un flujo PWA.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Versículos Bíblicos",
    description: "Meditación diaria en español e inglés con PWA.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Compresor PDF",
    description: "Reduce PDFs 100% local sin subir datos.",
    category: "Laboratorio",
    href: "/lab",
    keywords: "pdf comprimir reducir tamaño local privacidad",
  },
  {
    title: "Currency Exchange API",
    description: "Conversión de divisas con tasas en vivo.",
    category: "Laboratorio",
    href: "/lab",
    keywords: "divisas dolar tipo cambio microservicios finanzas",
  },
  {
    title: "Amigo Secreto",
    description: "Sorteo aleatorio sin colisiones.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Surgical Robot Control",
    description: "Lógica para robot quirúrgico con .NET.",
    category: "Laboratorio",
    href: "/lab",
  },
  {
    title: "Cyberpunk Memory Game",
    description: "Juego de memoria con estética cyberpunk.",
    category: "Laboratorio",
    href: "/lab",
  },
];
