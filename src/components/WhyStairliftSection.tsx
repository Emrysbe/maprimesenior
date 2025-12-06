import { ShieldCheck, Home, Clock, Wrench } from "lucide-react";

const WhyStairliftSection = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Sécurité au quotidien",
      description: "Évitez les chutes et accidents dans les escaliers. Un monte-escalier sécurise chaque montée et descente.",
    },
    {
      icon: Home,
      title: "Rester chez soi plus longtemps",
      description: "Conservez votre indépendance et restez dans le confort de votre domicile sans changer vos habitudes.",
    },
    {
      icon: Clock,
      title: "Installation rapide",
      description: "Nos équipes certifiées installent votre monte-escalier en 24 à 48 heures seulement.",
    },
    {
      icon: Wrench,
      title: "Garantie & SAV",
      description: "5 ans de garantie et un service après-vente réactif pour votre tranquillité d'esprit.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Avantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi installer un monte-escalier ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un investissement pour votre sécurité, votre autonomie et votre qualité de vie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStairliftSection;
