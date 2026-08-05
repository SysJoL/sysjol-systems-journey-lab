import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import PythonCourse from "./pages/PythonCourse";
import Courses from "./pages/Courses";
import Systems from "./pages/Systems";
import Journey from "./pages/Journey";
import Lab from "./pages/Lab";
import CapturaAppPage from "./pages/CapturaAppPage";
import DownMuViPage from "./pages/DownMuViPage";

import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";
import InstallPrompt from "./components/InstallPrompt";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { UpdatePrompt } from "./components/UpdatePrompt";

const queryClient = new QueryClient();

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InstallPrompt />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
