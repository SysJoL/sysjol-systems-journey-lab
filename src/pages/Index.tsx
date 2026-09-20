import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionVisionValues from "@/components/MissionVisionValues";
import PillarsSection from "@/components/PillarsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const IndexSkeleton = () => (
  <div className="min-h-screen bg-background pt-24">
    {/* Hero Skeleton */}
    <div className="container px-4 md:px-6 py-20 md:py-32 flex flex-col items-center text-center space-y-8">
      <Skeleton className="w-32 h-6 rounded-full" />
      <Skeleton className="w-full max-w-4xl h-20 md:h-32" />
      <Skeleton className="w-full max-w-2xl h-10 md:h-16" />
      <Skeleton className="w-full max-w-xl h-14 md:h-16 rounded-2xl" />
      <div className="flex gap-4 pt-4">
        <Skeleton className="w-32 h-10 rounded-full" />
        <Skeleton className="w-32 h-10 rounded-full" />
      </div>
    </div>

    {/* Pillars Skeleton */}
    <div className="container px-4 md:px-6 py-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-white/5 bg-card/50 space-y-4"
          >
            <Skeleton className="w-16 h-16 rounded-2xl" />
            <Skeleton className="w-48 h-8" />
            <Skeleton className="w-full h-20" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <IndexSkeleton />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionVisionValues />
      <PillarsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
