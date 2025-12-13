import gallery1 from "@/assets/stairlift-gallery-1.jpg";
import gallery2 from "@/assets/stairlift-gallery-2.jpg";
import gallery3 from "@/assets/stairlift-gallery-3.jpg";
import { CheckCircle } from "lucide-react";

const GallerySection = () => {
  const images = [
    { src: gallery1, alt: "Installation d'un monte-escalier droit pour personne à mobilité réduite - Financement MaPrimeAdapt'" },
    { src: gallery2, alt: "Monte-escalier extérieur adapté pour l'autonomie des seniors - Aide de l'État disponible" },
    { src: gallery3, alt: "Monte-escalier compact et design pour petit espace - Solution d'accessibilité domicile" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Nos réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Installations récentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de nos installations de monte-escaliers chez nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-lg font-semibold text-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <CheckCircle className="w-6 h-6 text-success" />
          <span>
            <span className="text-secondary font-bold">95%</span> de nos clients recommandent notre service d'installation.
          </span>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
