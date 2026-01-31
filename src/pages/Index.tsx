import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
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
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace('#', '');

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    const timer = setTimeout(scrollToTarget, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>MaPrimeAdapt' Monte-Escalier | Des aides jusqu'à 22 000 € pour l'installation</title>
        <meta
          name="description"
          content="Bénéficiez de MaPrimeAdapt' pour financer votre monte-escalier. Testez votre éligibilité et recevez une offre personnalisée gratuite."
        />
      </Helmet>
      <StructuredData />
      <Header />

      <main className="pt-16">
        <HeroSection />
        <TrustLogos />
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
