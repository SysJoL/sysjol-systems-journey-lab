import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import InstallPrompt from "./components/InstallPrompt";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { UpdatePrompt } from "./components/UpdatePrompt";
import { Loader2 } from "lucide-react";

// Code-splitting por ruta: cada página viaja en su propio chunk para que
// la primera carga sea liviana (clave con internet limitado).
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const PythonCourse = lazy(() => import("./pages/PythonCourse"));
const Courses = lazy(() => import("./pages/Courses"));
const Systems = lazy(() => import("./pages/Systems"));
const Journey = lazy(() => import("./pages/Journey"));
const Lab = lazy(() => import("./pages/Lab"));
const CapturaAppPage = lazy(() => import("./pages/CapturaAppPage"));
const DownMuViPage = lazy(() => import("./pages/DownMuViPage"));
const QrGeneratorPage = lazy(() => import("./pages/QrGeneratorPage"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <OfflineIndicator />
      <UpdatePrompt />
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/python-course" element={<PythonCourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/capturaapp" element={<CapturaAppPage />} />
            <Route path="/downmuvi" element={<DownMuViPage />} />
            <Route path="/qr-generator" element={<QrGeneratorPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <InstallPrompt />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
