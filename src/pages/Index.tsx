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
    const scrollToSection = (hash: string, attempt = 0) => {
      if (!hash) return;

      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (attempt < 10) {
        setTimeout(() => scrollToSection(hash, attempt + 1), 100);
      }
    };

    if (location.hash) {
      const timeouts = [100, 300, 500, 1000].map(delay =>
        setTimeout(() => scrollToSection(location.hash), delay)
      );

      return () => timeouts.forEach(clearTimeout);
    } else {
      window.scrollTo(0, 0);
    }
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
        <div id="devis">
          <HeroSection />
        </div>
        <TrustLogos />
        <div id="aides">
          <MaPrimeAdaptSection />
        </div>
        <div id="avantages">
          <WhyStairliftSection />
        </div>
        <div id="choisir">
          <HowToChooseSection />
        </div>
        <div id="galerie">
          <GallerySection />
        </div>
        <div id="avis">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <FinalCTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
