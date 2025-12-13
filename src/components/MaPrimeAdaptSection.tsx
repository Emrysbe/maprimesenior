import { Button } from "@/components/ui/button";
import { Euro, Users, FileCheck, ArrowRight } from "lucide-react";

const MaPrimeAdaptSection = () => {
  const features = [
    {
      icon: Euro,
      title: "Jusqu'à 22 000€ d'aides",
      description: "L'État peut prendre en charge jusqu'à 70% du coût de votre monte-escalier, soit jusqu'à 22 000€ selon vos revenus.",
    },
    {
      icon: Users,
      title: "Seniors & perte d'autonomie",
      description: "Réservé aux personnes de 60 ans et plus ou en situation de handicap/perte d'autonomie.",
    },
    {
      icon: FileCheck,
      title: "Procédure accompagnée",
      description: "Nous gérons toutes les démarches administratives pour vous. Simple et rapide.",
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Aide de l'État
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            MaPrimeAdapt' : Jusqu'à 22 000€ pour votre monte-escalier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une aide gouvernementale qui peut couvrir jusqu'à 70% du coût de votre monte-escalier.{" "}
            <span className="font-semibold text-foreground">Vérifiez votre éligibilité en moins de 2 minutes.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToForm}
            className="group"
          >
            Estimer mon aide gratuitement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaPrimeAdaptSection;
