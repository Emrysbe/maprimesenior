import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    const timeoutId = setTimeout(scrollToHash, 500);

    const handleHashChange = () => {
      setTimeout(scrollToHash, 100);
    };

    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
