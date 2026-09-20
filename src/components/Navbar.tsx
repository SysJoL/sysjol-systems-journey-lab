import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronDown,
  Server,
  Compass,
  FlaskConical,
  MessageSquare,
  BookOpen,
  Search,
  Video,
  Clapperboard,
  QrCode,
} from "lucide-react";
import { SearchGlobal } from "./SearchGlobal";
import { useSearchState } from "@/hooks/use-search";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener("open-global-search", handleOpenSearch);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-global-search", handleOpenSearch);
    };
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hola SysJoL, me gustaría solicitar información sobre sus servicios y asesoría tecnológica.",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  const pillars = [
    {
      title: "Systems",
      description: "Infraestructura, Backend y APIs escalables.",
      icon: Server,
      href: "/systems",
    },
    {
      title: "Journey",
      description: "Transformación Digital y Estrategia.",
      icon: Compass,
      href: "/journey",
    },
    {
      title: "Lab",
      description: "Innovación y Experimentación Tecnológica.",
      icon: FlaskConical,
      href: "/lab",
    },
  ];

  const products = [
    {
      title: "CapturaApp",
      description: "Grabación y capturas en Windows.",
      icon: Video,
      href: "/capturaapp",
    },
    {
      title: "DownMuVi",
      description: "Hub multimedia con IA local.",
      icon: Clapperboard,
      href: "/downmuvi",
    },
    {
      title: "Generador QR",
      description: "Crea QR desde un enlace.",
      icon: QrCode,
      href: "/qr-generator",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div
        className="w-full"
        style={{
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 items-center px-5 sm:px-6 md:px-8 md:grid-cols-3 lg:px-10">
          {/* Column 1: Logo (Left) */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <img
                  src="/favicon.png"
                  alt="SysJoL Logo"
                  className="relative w-8 h-8 md:w-9 md:h-9"
                />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold text-gradient tracking-tight">
                SysJoL
              </span>
            </Link>
          </div>

          {/* Column 2: Navigation (Center) - Mathematically centered */}
          <nav className="hidden md:flex justify-center items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 transition-colors">
                    Pilares
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-card/95 backdrop-blur-xl border border-white/10">
                      {pillars.map((pillar) => (
                        <li key={pillar.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={pillar.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                  <pillar.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold leading-none mb-1">
                                    {pillar.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {pillar.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/lab"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/5 transition-colors flex items-center gap-2",
                    )}
                  >
                    <FlaskConical className="w-4 h-4 text-primary" />
                    Proyectos
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/courses"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/5 transition-colors flex items-center gap-2",
                    )}
                  >
                    <BookOpen className="w-4 h-4" />
                    Cursos
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 transition-colors">
                    Productos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-card/95 backdrop-blur-xl border border-white/10">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={product.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                  <product.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold leading-none mb-1">
                                    {product.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {product.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Column 3: Actions (Right) */}
          <div className="flex justify-end items-center gap-3">
            {/* Minimalist Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-white/5 transition-all hidden md:flex"
              onClick={() => setIsSearchOpen(true)}
              title="Buscar (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </Button>

            <div className="hidden md:block">
              <Button
                variant="glow"
                size="sm"
                className="px-6 font-bold flex items-center gap-2"
                onClick={handleWhatsAppContact}
              >
                <MessageSquare className="w-4 h-4" />
                Contacto
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-1">
              <button
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-6 h-6" />
              </button>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors ">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] bg-card/95 backdrop-blur-2xl border-l border-white/10 p-0 flex flex-col h-[100dvh]"
                >
                  <SheetHeader className="p-6 border-b border-white/5 flex-shrink-0  flex items-center justify-center">
                    <SheetTitle className="text-left font-display font-bold text-gradient">
                      Menú
                    </SheetTitle>
                  </SheetHeader>

                  <ScrollArea className="flex-grow">
                    <div className="flex flex-col py-6">
                      <nav className="flex flex-col gap-2 px-4">
                        <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                          Empresa
                        </p>
                        {pillars.map((pillar) => (
                          <a
                            key={pillar.title}
                            href={pillar.href}
                            className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/20 transition-colors">
                              <pillar.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-bold text-sm">
                                {pillar.title}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {pillar.description}
                              </p>
                            </div>
                          </a>
                        ))}

                        <div className="h-px bg-white/5 my-4" />

                        <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                          Educación
                        </p>
                        <Link
                          to="/courses"
                          className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-accent/5 group-hover:bg-accent/20 transition-colors">
                            <BookOpen className="w-5 h-5 text-accent" />
                          </div>
                          <p className="font-bold text-sm text-foreground">
                            Explorar Cursos
                          </p>
                        </Link>

                        <div className="h-px bg-white/5 my-4" />

                        <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                          Producto
                        </p>
                        <Link
                          to="/capturaapp"
                          className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-captura-coral/10 group-hover:bg-captura-coral/20 transition-colors">
                            <Video className="w-5 h-5 text-captura-coral" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-foreground">
                              CapturaApp
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Grabación y capturas en Windows
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/downmuvi"
                          className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-downmuvi-cyan/10 group-hover:bg-downmuvi-cyan/20 transition-colors">
                            <Clapperboard className="w-5 h-5 text-downmuvi-cyan" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-foreground">
                              DownMuVi
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Hub multimedia con IA local
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/qr-generator"
                          className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-downmuvi-violet/10 group-hover:bg-downmuvi-violet/20 transition-colors">
                            <QrCode className="w-5 h-5 text-downmuvi-violet" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-foreground">
                              Generador QR
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Crea QR desde un enlace
                            </p>
                          </div>
                        </Link>
                      </nav>
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t border-white/5 bg-background/50 flex-shrink-0">
                    <Button
                      variant="glow"
                      className="w-full font-bold flex items-center justify-center gap-2"
                      size="lg"
                      onClick={() => {
                        handleWhatsAppContact();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <MessageSquare className="w-5 h-5" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <SearchGlobal open={isSearchOpen} setOpen={setIsSearchOpen} />
    </header>
  );
};

export default Navbar;
