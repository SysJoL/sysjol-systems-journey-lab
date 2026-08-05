import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Loader2,
  FileText,
  Server,
  BookOpen,
  FlaskConical,
  X,
  ChevronRight,
  Globe,
  Compass,
  Monitor,
  QrCode,
} from "lucide-react";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  searchData,
  SearchItem,
  searchItemMatchesQuery,
} from "@/data/search-data";
import { cn } from "@/lib/utils";

// Shared Social Links
const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/sysjol",
    label: "Instagram",
    username: "@sysjol",
    color: "hover:text-pink-500",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/sysjol",
    label: "X (Twitter)",
    username: "@sysjol",
    color: "hover:text-white",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com/SysJoL",
    label: "Facebook",
    username: "SysJoL",
    color: "hover:text-blue-600",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@Sysjol-01",
    label: "YouTube",
    username: "@Sysjol-01",
    color: "hover:text-red-600",
  },
  {
    icon: FaTiktok,
    href: "https://tiktok.com/@sysjol",
    label: "TikTok",
    username: "@sysjol",
    color: "hover:text-cyan-400",
  },
];

// Shared Explore Content
const ExploreContent = ({ onSelect }: { onSelect: (href: string) => void }) => (
  <div className="flex-1 overflow-y-auto px-10 py-4 space-y-6 animate-in fade-in zoom-in-95 duration-300 custom-scrollbar">
    {/* Suggestions */}
    <div className="space-y-2">
      <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60 px-1">
        Sugerencias para ti
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[
          {
            title: "DownMuVi",
            desc: "Hub multimedia con IA local",
            icon: Monitor,
            href: "/downmuvi",
            color: "text-cyan-400",
          },
          {
            title: "CapturaApp",
            desc: "Grabación y capturas en Windows",
            icon: Monitor,
            href: "/capturaapp",
            color: "text-red-400",
          },
          {
            title: "Generador QR",
            desc: "Crea QR desde un enlace",
            icon: QrCode,
            href: "/qr-generator",
            color: "text-violet-400",
          },
          {
            title: "Cursos Premium",
            desc: "Aprende con expertos",
            icon: BookOpen,
            href: "/courses",
            color: "text-orange-400",
          },
          {
            title: "Estrategia Digital",
            desc: "Impulsa tu negocio",
            icon: Server,
            href: "/journey",
            color: "text-blue-400",
          },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(item.href)}
            className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center border border-white/5 flex-shrink-0 group-hover:scale-110 transition-transform">
              <item.icon className={cn("w-5 h-5", item.color)} />
            </div>
            <div>
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-[11px] text-muted-foreground">{item.desc}</p>
            </div>
            <ChevronRight className="ml-auto w-3.5 h-3.5 text-muted-foreground/30" />
          </button>
        ))}
      </div>
    </div>

    {/* Quick Links */}
    <div className="space-y-3">
      <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60 px-1">
        Enlaces Rápidos
      </h3>
      <div className="flex flex-wrap gap-2 text-sm italic">
        {[
          { name: "DownMuVi", href: "/downmuvi" },
          { name: "CapturaApp", href: "/capturaapp" },
          { name: "Generador QR", href: "/qr-generator" },
          { name: "Sistemas", href: "/systems" },
          { name: "Estrategia", href: "/journey" },
          { name: "Laboratorio", href: "/lab" },
          { name: "Cursos", href: "/courses" },
        ].map((link, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(link.href)}
            className="px-3.5 py-1.5 rounded-full border border-white/10 hover:border-primary/40 hover:text-primary transition-all bg-white/5 font-medium text-xs"
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>

    {/* Social Media */}
    <div className="space-y-3 pb-8">
      <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60 px-1">
        Nuestra Comunidad
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-2xl bg-background/40 hover:bg-background/60 border border-white/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 flex-shrink-0 group-hover:scale-110 transition-transform">
              <social.icon className={cn("w-5 h-5", social.color)} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm">{social.label}</p>
                <Globe className="w-3 h-3 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] text-muted-foreground">
                {social.username}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// Separate functional component for the search content to maintain stability
const SearchContent = ({
  query,
  onQueryChange,
  isSearching,
  results,
  onSelect,
  isDesktop,
  searchInputRef,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  isSearching: boolean;
  results: SearchItem[];
  onSelect: (href: string) => void;
  isDesktop: boolean;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Páginas":
        return <FileText className="mr-2.5 h-4.5 w-4.5 text-blue-400" />;
      case "Sistemas":
        return <Server className="mr-2.5 h-4.5 w-4.5 text-purple-400" />;
      case "Cursos":
        return <BookOpen className="mr-2.5 h-4.5 w-4.5 text-orange-400" />;
      case "Laboratorio":
        return <FlaskConical className="mr-2.5 h-4.5 w-4.5 text-emerald-400" />;
      case "Producto":
        return <Monitor className="mr-2.5 h-4.5 w-4.5 text-red-400" />;
      default:
        return <Search className="mr-2.5 h-4.5 w-4.5" />;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && results.length > 0) {
      onSelect(results[0].href);
    }
  };

  return (
    <Command
      shouldFilter={false}
      className="flex flex-col border-none bg-transparent overflow-hidden h-full"
      onKeyDown={handleKeyDown}
    >
      <div className="flex-1 overflow-hidden flex flex-col">
        <CommandList className="w-full overflow-y-auto pt-1 pb-4 flex-1 max-h-none custom-scrollbar ">
          {isSearching ? (
            <div className="flex flex-col items-center justify-center py-10 animate-in fade-in duration-300">
              <Loader2 className="h-8 w-8 animate-spin text-primary opacity-50 mb-3" />
              <span className="text-sm text-muted-foreground font-display font-medium tracking-wide">
                Consultando base de conocimientos...
              </span>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 px-6 md:px-10">
              {query.trim() !== "" && results.length === 0 && (
                <CommandEmpty className="py-10 text-center text-muted-foreground">
                  No se encontraron resultados para "{query}".
                </CommandEmpty>
              )}

              {results.length > 0 ? (
                <CommandGroup heading="Resultados de búsqueda">
                  {results.map((item, idx) => (
                    <CommandItem
                      key={`${item.href}-${idx}`}
                      onSelect={() => onSelect(item.href)}
                      className="flex flex-col items-start py-3 px-5 cursor-pointer group hover:bg-white/5 rounded-xl transition-all mb-1.5 border border-transparent hover:border-white/5"
                    >
                      <div className="flex items-center w-full">
                        {getIcon(item.category)}
                        <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-base">
                          {item.title}
                        </span>
                        <span className="ml-auto text-[9px] uppercase font-bold tracking-[0.2em] bg-muted/50 px-2.5 py-0.5 rounded-full opacity-60">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[12px] text-muted-foreground ml-7 line-clamp-1 italic pt-0.5 group-hover:text-foreground/70">
                        {item.description}
                      </p>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
            </div>
          )}
        </CommandList>
      </div>

      <div className="border-t border-white/10 bg-background/50 backdrop-blur-md z-20 shrink-0 px-6 md:px-10">
        <CommandInput
          ref={searchInputRef}
          placeholder="Busca servicios, cursos, apps, grabación, IA local…"
          value={query}
          onValueChange={onQueryChange}
          className="text-base md:text-sm h-14 md:h-12 border-none outline-none focus:ring-0"
        />
      </div>
      {isDesktop && (
        <div className="border-t border-white/5 p-2.5 flex justify-between items-center bg-muted/20 px-10 shrink-0">
          <div className="flex gap-4">
            <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
              <kbd className="mr-1.5 rounded-lg bg-black/40 px-2 py-0.5 border border-white/10 shadow-inner text-white font-mono">
                Enter
              </kbd>{" "}
              ir
            </div>
            <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
              <kbd className="mr-1.5 rounded-lg bg-black/40 px-2 py-0.5 border border-white/10 shadow-inner text-white font-mono">
                ↑↓
              </kbd>{" "}
              mover
            </div>
          </div>
          <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-40 italic">
            Search by{" "}
            <span className="text-primary ml-1 non-italic font-bold">
              SysJoL
            </span>
          </div>
        </div>
      )}
    </Command>
  );
};

export const SearchGlobal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeTab, setActiveTab] = useState<"search" | "explore">("search");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setActiveTab("search"); // Switch to search tab when typing
    const timeout = setTimeout(() => {
      const searchTerm = query.trim();
      const filtered = searchData.filter((item) =>
        searchItemMatchesQuery(item, searchTerm),
      );
      setResults(filtered);
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false);
      navigate(href);
      window.scrollTo(0, 0);
      setQuery("");
    },
    [navigate, setOpen],
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setQuery("");
      setActiveTab("search");
    }
  };

  const focusSearchInput = useCallback(() => {
    requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!open || activeTab !== "search") return;
    focusSearchInput();
  }, [open, activeTab, focusSearchInput]);

  // Prevent scroll leakage on mobile
  useEffect(() => {
    if (open && !isDesktop) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open, isDesktop]);

  const TabBar = () => (
    <div className="px-6 py-1.5 md:px-10 md:pb-3 md:pt-0">
      <div className="flex bg-white/5 rounded-xl md:rounded-xl p-0.5 border border-white/5 shadow-inner">
        <button
          onClick={() => setActiveTab("search")}
          className={cn(
            "flex-1 py-2 md:py-2 px-6 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 transition-all",
            activeTab === "search"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:bg-white/5",
          )}
        >
          <Search className="w-3.5 h-3.5" />
          Búsqueda
        </button>
        <button
          onClick={() => setActiveTab("explore")}
          className={cn(
            "flex-1 py-2 md:py-2 px-6 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 transition-all",
            activeTab === "explore"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:bg-white/5",
          )}
        >
          <Compass className="w-3.5 h-3.5" />
          Explorar
        </button>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <CommandDialog
        open={open}
        onOpenChange={handleOpenChange}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          focusSearchInput();
        }}
        className="top-[10%] translate-y-0 max-w-4xl border-white/10 shadow-2xl backdrop-blur-3xl bg-background/90 overflow-hidden rounded-[32px] md:h-[75vh] md:max-h-[700px] flex flex-col [&>button:last-child]:hidden"
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Super Compact Custom Header */}
          <div className="px-10 py-4 flex items-center justify-between border-b border-white/5 shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shadow-inner border border-white/5">
                <img src="/favicon.png" alt="Logo" className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-foreground block tracking-tight">
                  SysJoL Search
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-primary/70">
                  Multimodal Navigator
                </span>
              </div>
            </div>
            <button
              onClick={() => handleOpenChange(false)}
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 group shadow-sm active:scale-95"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          </div>

          {/* Super Compact Tabs */}
          <div className="pt-4 shrink-0">
            <TabBar />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-hidden flex flex-col">
              {activeTab === "search" ? (
                <SearchContent
                  query={query}
                  onQueryChange={setQuery}
                  isSearching={isSearching}
                  results={results}
                  onSelect={handleSelect}
                  isDesktop={isDesktop}
                  searchInputRef={searchInputRef}
                />
              ) : (
                <ExploreContent onSelect={handleSelect} />
              )}
            </div>
          </div>
        </div>
      </CommandDialog>
    );
  }

  if (!open) return null;

  return createPortal(
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "hsl(222, 47%, 6%)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Fixed Top Header Mobile */}
      <div className="px-6 py-6 flex items-center justify-between border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="SysJoL" className="w-8 h-8" />
          <span className="text-lg font-display font-bold text-gradient">
            SysJoL Menu
          </span>
        </div>
        <button
          onClick={() => handleOpenChange(false)}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Fixed Mobile Tabs */}
      <div className="shrink-0">
        <TabBar />
      </div>

      {/* Fixed Search Input (only visible in search tab) */}
      {activeTab === "search" && (
        <div className="border-b border-white/10 bg-background shrink-0 px-6">
          <input
            ref={searchInputRef}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            placeholder="Busca servicios, cursos, apps, grabación, IA local…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results.length > 0) {
                handleSelect(results[0].href);
              }
            }}
            className="w-full h-12 bg-transparent border-none outline-none text-base placeholder:text-muted-foreground focus:ring-0"
          />
        </div>
      )}

      {/* Scrollable Content Area Mobile */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === "search" ? (
            <Command
              shouldFilter={false}
              className="flex flex-col border-none bg-transparent h-full overflow-hidden"
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" && results.length > 0) {
                  handleSelect(results[0].href);
                }
              }}
            >
              <CommandList className="flex-1 w-full pt-1 pb-4 overflow-y-auto custom-scrollbar">
                {isSearching ? (
                  <div className="flex flex-col items-center justify-center py-10 animate-in fade-in duration-300">
                    <Loader2 className="h-8 w-8 animate-spin text-primary opacity-50 mb-3" />
                    <span className="text-sm text-muted-foreground font-display font-medium tracking-wide">
                      Consultando base de conocimientos...
                    </span>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 px-6 pb-20">
                    {query.trim() !== "" && results.length === 0 && (
                      <CommandEmpty className="py-10 text-center text-muted-foreground">
                        No se encontraron resultados para "{query}".
                      </CommandEmpty>
                    )}

                    {results.length > 0 ? (
                      <CommandGroup heading="Resultados de búsqueda">
                        {results.map((item, idx) => {
                          const getIcon = (category: string) => {
                            switch (category) {
                              case "Páginas":
                                return (
                                  <FileText className="mr-2.5 h-4.5 w-4.5 text-blue-400" />
                                );
                              case "Sistemas":
                                return (
                                  <Server className="mr-2.5 h-4.5 w-4.5 text-purple-400" />
                                );
                              case "Cursos":
                                return (
                                  <BookOpen className="mr-2.5 h-4.5 w-4.5 text-orange-400" />
                                );
                              case "Laboratorio":
                                return (
                                  <FlaskConical className="mr-2.5 h-4.5 w-4.5 text-emerald-400" />
                                );
                              case "Producto":
                                return (
                                  <Monitor className="mr-2.5 h-4.5 w-4.5 text-red-400" />
                                );
                              default:
                                return (
                                  <Search className="mr-2.5 h-4.5 w-4.5" />
                                );
                            }
                          };

                          return (
                            <CommandItem
                              key={`${item.href}-${idx}`}
                              onSelect={() => handleSelect(item.href)}
                              className="flex flex-col items-start py-3 px-5 cursor-pointer group hover:bg-white/5 rounded-xl transition-all mb-1.5 border border-transparent hover:border-white/5"
                            >
                              <div className="flex items-center w-full">
                                {getIcon(item.category)}
                                <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-base">
                                  {item.title}
                                </span>
                                <span className="ml-auto text-[9px] uppercase font-bold tracking-[0.2em] bg-muted/50 px-2.5 py-0.5 rounded-full opacity-60">
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-[12px] text-muted-foreground ml-7 line-clamp-1 italic pt-0.5 group-hover:text-foreground/70">
                                {item.description}
                              </p>
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    ) : null}
                  </div>
                )}
              </CommandList>
            </Command>
          ) : (
            <ExploreContent onSelect={handleSelect} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
