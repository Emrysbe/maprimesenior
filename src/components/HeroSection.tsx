import LeadForm from "./LeadForm";
import stairliftHero from "@/assets/stairlift-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-light via-background to-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-8 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Form */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <LeadForm />
          </div>

          {/* Right column - Content & Image */}
          <div className="order-1 lg:order-2 space-y-6 animate-slide-right" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              MaPrimeAdapt' 2024
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              Vérifiez votre éligibilité à{" "}
              <span className="text-primary">MaPrimeAdapt'</span>{" "}
              et estimez le montant de votre aide
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Jusqu'à{" "}
              <span className="font-bold text-secondary">50 à 70%</span>{" "}
              du coût d'un monte-escalier financé par l'État –{" "}
              <span className="font-semibold text-foreground">
                estimation gratuite et sans engagement.
              </span>
            </p>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8">
              <img
                src={stairliftHero}
                alt="Monte-escalier moderne installé dans une maison"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-success text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    Aide jusqu'à 22 000€
                  </div>
                  <span className="text-primary-foreground text-sm">
                    Installation en 24-48h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
