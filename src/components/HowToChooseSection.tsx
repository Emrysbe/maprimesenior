import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Heart, Maximize2, Wallet, CheckCircle, ArrowRight } from "lucide-react";

const HowToChooseSection = () => {
  const criteria = [
    {
      icon: Home,
      title: "Le type d'escalier",
      description: "Chaque escalier nécessite une solution adaptée à sa configuration spécifique.",
      items: [
        {
          subtitle: "Escalier droit",
          text: "Solution la plus simple et économique pour les escaliers sans virage"
        },
        {
          subtitle: "Escalier tournant ou courbe",
          text: "Monte-escalier sur mesure parfaitement adapté aux virages et paliers"
        },
        {
          subtitle: "Escalier extérieur",
          text: "Modèle résistant aux intempéries avec protection renforcée"
        }
      ],
      tip: "Un diagnostic gratuit à domicile permet de déterminer la solution la plus sûre et adaptée"
    },
    {
      icon: Heart,
      title: "Le niveau de mobilité de l'utilisateur",
      description: "Le confort et la sécurité doivent être adaptés à vos besoins spécifiques.",
      items: [
        {
          subtitle: "Situations concernées",
          text: "Difficultés à monter les marches, perte d'équilibre, douleurs articulaires, utilisation d'une canne ou d'un déambulateur"
        },
        {
          subtitle: "Options de confort disponibles",
          text: "Siège pivotant, accoudoirs relevables, ceinture de sécurité, commandes ergonomiques et simples d'utilisation"
        }
      ]
    },
    {
      icon: Maximize2,
      title: "L'espace disponible dans votre logement",
      description: "Un monte-escalier bien conçu s'intègre sans gêner la circulation quotidienne.",
      items: [
        {
          subtitle: "Caractéristiques essentielles",
          text: "Rail discret et compact, siège pliable pour libérer l'espace, faible encombrement même dans les escaliers étroits"
        }
      ],
      tip: "Même dans un escalier étroit, des solutions sur mesure existent"
    },
    {
      icon: Wallet,
      title: "Le budget et les aides financières disponibles",
      description: "Le prix d'un monte-escalier varie selon le type d'escalier, le modèle et les options choisies.",
      items: [
        {
          subtitle: "Aides financières MaPrimeAdapt'",
          text: "Selon votre situation, vous pouvez obtenir jusqu'à 22 000 € d'aides de l'État, avec des aides locales complémentaires et un reste à charge réduit"
        },
        {
          subtitle: "Accompagnement personnalisé",
          text: "Notre service vous aide à identifier toutes les aides auxquelles vous avez droit pour financer votre projet"
        }
      ]
    },
    {
      icon: CheckCircle,
      title: "L'installation par un professionnel qualifié",
      description: "La qualité de l'installation garantit votre sécurité et la durabilité de votre équipement.",
      items: [
        {
          subtitle: "Garanties essentielles",
          text: "Installation par un professionnel certifié, conformité aux normes de sécurité en vigueur, service après-vente fiable et réactif"
        }
      ],
      tip: "Évitez les solutions standard non adaptées à votre logement"
    }
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary-light/20 to-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Guide d'achat
          </span>
          <h2 id="choisir" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment choisir son monte-escalier ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choisir un monte-escalier adapté est une décision importante pour préserver votre autonomie et votre sécurité à domicile. Découvrez les 5 critères essentiels pour faire le bon choix.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto mb-12">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-up border-l-4 border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {index + 1}. {criterion.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {criterion.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 ml-0 md:ml-16">
                  {criterion.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                        {item.subtitle}
                      </h4>
                      <p className="text-sm text-muted-foreground pl-6">
                        {item.text}
                      </p>
                    </div>
                  ))}

                  {criterion.tip && (
                    <div className="bg-secondary/10 border-l-4 border-secondary rounded-lg p-4 ml-0">
                      <p className="text-sm font-medium text-foreground flex items-start gap-2">
                        <span className="text-secondary shrink-0">💡</span>
                        <span>{criterion.tip}</span>
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-10 text-center border-2 border-primary/20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Chaque situation est unique
          </h3>

          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Le meilleur moyen de choisir le monte-escalier adapté à vos besoins est de réaliser une étude personnalisée gratuite et sans engagement.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="font-semibold text-foreground">Analyse technique</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Étude gratuite de votre escalier et de votre logement
              </p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="font-semibold text-foreground">Aides financières</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Évaluation de votre éligibilité à MaPrimeAdapt'
              </p>
            </div>

            <div className="bg-background rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="font-semibold text-foreground">Devis sur mesure</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimation personnalisée adaptée à votre budget
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToForm}
          >
            Vérifier mon éligibilité gratuitement
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Estimation en 2 minutes • Sans engagement • 100% gratuit
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HowToChooseSection;
