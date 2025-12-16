import { Shield, CheckCircle2, Star } from "lucide-react";

const TrustLogos = () => {
  const trustItems = [
    {
      icon: Shield,
      label: "AMO certifiés",
      sublabel: "Par l'ANAH",
    },
    {
      icon: CheckCircle2,
      label: "Garantie 5 ans",
      sublabel: "Pièces et main d'œuvre",
    },
    {
      icon: Star,
      label: "4.9/5",
      sublabel: "Satisfaction clients",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-trust border-y border-trust-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-sm md:text-base">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 md:mt-8">
          Accompagnement par des experts certifiés – partenaires des principaux fabricants –
          <span className="font-semibold text-foreground"> 4.9/5 satisfaction clients</span>
        </p>
      </div>
    </section>
  );
};

export default TrustLogos;
