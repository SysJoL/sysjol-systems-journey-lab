import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DOWNMUVI_SLIDES } from "./constants";

const INTERVAL_MS = 4500;

type Props = {
  className?: string;
  showCaptions?: boolean;
};

export function DownMuViScreenshotSlider({
  className,
  showCaptions = true,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % DOWNMUVI_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div className="relative aspect-[1100/680] w-full bg-black/40 ring-1 ring-white/10">
        {DOWNMUVI_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-out",
              i === index ? "opacity-100 z-[1]" : "opacity-0 z-0",
            )}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-background/90 to-transparent" />
        {showCaptions && (
          <div className="absolute bottom-3 left-3 right-3 z-[3] flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-background/70 px-2 py-1 font-display font-semibold tracking-wide text-foreground backdrop-blur-sm">
              {DOWNMUVI_SLIDES[index].caption}
            </span>
            <div className="flex gap-1.5">
              {DOWNMUVI_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ver captura ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index
                      ? "w-6 bg-[#22d3ee]"
                      : "w-1.5 bg-white/30 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
