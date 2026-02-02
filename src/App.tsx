import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import DynamicBlogPost from "./pages/DynamicBlogPost";
import MaPrimeAdapt2024 from "./pages/blog/MaPrimeAdapt2024";
import ChoisirMonteEscalier from "./pages/blog/ChoisirMonteEscalier";
import AmenagementsSeniors from "./pages/blog/AmenagementsSeniors";
import InstallationMonteEscalier from "./pages/blog/InstallationMonteEscalier";
import DoucheSeniorMaPrimeAdapt from "./pages/blog/DoucheSeniorMaPrimeAdapt";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/politique-de-confidentialite" element={<Privacy />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/blog/douche-senior-ma-prime-adapt-guide-complet" element={<DoucheSeniorMaPrimeAdapt />} />
            <Route path="/blog/maprimeadapt-2024-guide-complet-aides-monte-escalier" element={<MaPrimeAdapt2024 />} />
            <Route path="/blog/choisir-monte-escalier-droit-tournant-guide" element={<ChoisirMonteEscalier />} />
            <Route path="/blog/amenagements-essentiels-seniors-autonomie-domicile" element={<AmenagementsSeniors />} />
            <Route path="/blog/installation-monte-escalier-guide-pratique" element={<InstallationMonteEscalier />} />
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
