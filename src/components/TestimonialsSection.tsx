import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      location: "Lyon (69)",
      rating: 5,
      text: "Grâce à MaPrimeAdapt', j'ai pu financer 70% de mon monte-escalier. L'installation a été rapide et professionnelle. Je me sens en sécurité chez moi.",
      aid: "15 400€ d'aide obtenue",
      avatar: "ML",
    },
    {
      name: "Jean-Pierre D.",
      location: "Nantes (44)",
      rating: 5,
      text: "Équipe très professionnelle qui a pris en charge toutes les démarches administratives. Mon monte-escalier a été installé en une journée !",
      aid: "12 000€ d'aide obtenue",
      avatar: "JD",
    },
    {
      name: "Françoise M.",
      location: "Bordeaux (33)",
      rating: 5,
      text: "Je n'aurais jamais pensé pouvoir me permettre un monte-escalier. L'aide de l'État a couvert plus de la moitié du prix. Merci pour l'accompagnement.",
      aid: "9 800€ d'aide obtenue",
      avatar: "FM",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-gold/20 text-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⭐ Avis clients
          </span>
          <h2 id="avis" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients qui ont bénéficié de MaPrimeAdapt'.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-md relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Aid badge */}
              <div className="inline-block bg-success-light text-success px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                {testimonial.aid}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
