import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import MaPrimeAdaptSection from "@/components/MaPrimeAdaptSection";
import WhyStairliftSection from "@/components/WhyStairliftSection";
import HowToChooseSection from "@/components/HowToChooseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    const timer = setTimeout(scrollToElement, 200);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>MaPrimeAdapt' Monte-Escalier | Des aides jusqu'à 22 000 € pour l'installation</title>
        <meta
          name="description"
          content="Vérifiez votre éligibilité à MaPrimeAdapt' et estimez le montant de votre aide pour financer un monte-escalier. Des aides jusqu'à 22 000 € pour améliorer votre autonomie à domicile. Estimation gratuite en 2 minutes."
        />
      </Helmet>
      <StructuredData />
      <Header />

      <main className="pt-16">
        <HeroSection />
        <TrustLogos />
        <MaPrimeAdaptSection />
        <WhyStairliftSection />
        <HowToChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
