import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl text-4xl md:text-5xl font-extrabold mb-6 shadow-2xl">
            Jusqu'à 22 000€ d'aides
          </div>

          <h2 id="contact" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            L'État finance jusqu'à{" "}
            <span className="text-secondary-foreground bg-secondary/80 px-3 py-1 rounded-lg">70%</span>{" "}
            de votre monte-escalier
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8">
            Estimation en moins de 2 minutes. Gratuite et sans engagement.
          </p>

          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToForm}
            className="group mb-10"
          >
            Estimer mon aide maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Phone className="w-5 h-5" />
              <span className="text-sm">Rappel en 24h</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Estimation en 2 min</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
