import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import MaPrimeAdaptSection from "@/components/MaPrimeAdaptSection";
import WhyStairliftSection from "@/components/WhyStairliftSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
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
      
      <main>
        <HeroSection />
        <TrustLogos />
        <MaPrimeAdaptSection />
        <WhyStairliftSection />
        <GallerySection />
        <TestimonialsSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
