import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import MaPrimeAdaptSection from "@/components/MaPrimeAdaptSection";
import WhyStairliftSection from "@/components/WhyStairliftSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MaPrimeAdapt' Monte-Escalier | Estimez votre aide jusqu'à 70%</title>
        <meta 
          name="description" 
          content="Vérifiez votre éligibilité à MaPrimeAdapt' et estimez le montant de votre aide pour financer un monte-escalier. Jusqu'à 70% du coût pris en charge par l'État." 
        />
      </Helmet>
      
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
