import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Shield, Clock, ArrowRight, ArrowLeft, Home, MoveUp, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type StepData = {
  typeEscalier: string;
  nombreEtages: string;
  imposable: string;
  plusDe70Ans: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
};

const TOTAL_STEPS = 5;

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<StepData>({
    typeEscalier: "",
    nombreEtages: "",
    imposable: "",
    plusDe70Ans: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });
  const [errors, setErrors] = useState<Partial<StepData>>({});

  const validateStep = (): boolean => {
    const newErrors: Partial<StepData> = {};

    switch (currentStep) {
      case 1:
        if (!formData.typeEscalier) {
          newErrors.typeEscalier = "Veuillez sélectionner un type d'escalier";
        }
        break;
      case 2:
        if (!formData.nombreEtages) {
          newErrors.nombreEtages = "Veuillez sélectionner le nombre d'étages";
        }
        break;
      case 3:
        if (!formData.imposable) {
          newErrors.imposable = "Veuillez répondre à cette question";
        }
        break;
      case 4:
        if (!formData.plusDe70Ans) {
          newErrors.plusDe70Ans = "Veuillez répondre à cette question";
        }
        break;
      case 5:
        if (!formData.prenom.trim()) {
          newErrors.prenom = "Le prénom est requis";
        }
        if (!formData.nom.trim()) {
          newErrors.nom = "Le nom est requis";
        }
        if (!formData.email.trim()) {
          newErrors.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Email invalide";
        }
        if (!formData.telephone.trim()) {
          newErrors.telephone = "Le téléphone est requis";
        } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.telephone.replace(/\s/g, ''))) {
          newErrors.telephone = "Numéro de téléphone invalide";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Form submission logic will be added later
  };

  const handleOptionSelect = (field: keyof StepData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    children,
    icon
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
    icon?: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-3",
        selected 
          ? "border-primary bg-primary/10 text-primary shadow-md" 
          : "border-border bg-background hover:border-primary/50 hover:bg-primary/5 text-foreground"
      )}
    >
      {icon && <span className={cn("text-xl", selected ? "text-primary" : "text-muted-foreground")}>{icon}</span>}
      <span className="font-medium">{children}</span>
      {selected && <CheckCircle className="w-5 h-5 ml-auto text-primary" />}
    </button>
  );

  const ProgressBar = () => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Étape {currentStep} sur {TOTAL_STEPS}
        </span>
        <span className="text-sm font-medium text-primary">
          {Math.round((currentStep / TOTAL_STEPS) * 100)}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </div>
  );

  const StepIndicators = () => (
    <div className="flex justify-center gap-2 mb-6">
      {[...Array(TOTAL_STEPS)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-300",
            index + 1 === currentStep 
              ? "bg-primary w-6" 
              : index + 1 < currentStep 
                ? "bg-primary" 
                : "bg-muted"
          )}
        />
      ))}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <MoveUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Type d'escalier</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Quel type d'escalier avez-vous ?
              </p>
            </div>
            <div className="space-y-3">
              <OptionButton
                selected={formData.typeEscalier === "droit"}
                onClick={() => handleOptionSelect("typeEscalier", "droit")}
              >
                Escalier droit
              </OptionButton>
              <OptionButton
                selected={formData.typeEscalier === "tournant"}
                onClick={() => handleOptionSelect("typeEscalier", "tournant")}
              >
                Escalier tournant / courbe
              </OptionButton>
            </div>
            {errors.typeEscalier && (
              <p className="text-sm text-destructive mt-2">{errors.typeEscalier}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Nombre d'étages</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Combien d'étages compte votre logement ?
              </p>
            </div>
            <div className="space-y-3">
              <OptionButton
                selected={formData.nombreEtages === "1"}
                onClick={() => handleOptionSelect("nombreEtages", "1")}
              >
                1 étage
              </OptionButton>
              <OptionButton
                selected={formData.nombreEtages === "2"}
                onClick={() => handleOptionSelect("nombreEtages", "2")}
              >
                2 étages
              </OptionButton>
              <OptionButton
                selected={formData.nombreEtages === "3+"}
                onClick={() => handleOptionSelect("nombreEtages", "3+")}
              >
                3 étages ou plus
              </OptionButton>
            </div>
            {errors.nombreEtages && (
              <p className="text-sm text-destructive mt-2">{errors.nombreEtages}</p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <span className="text-xl font-bold text-primary">€</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Situation fiscale</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Êtes-vous imposable sur le revenu ?
              </p>
            </div>
            <div className="space-y-3">
              <OptionButton
                selected={formData.imposable === "oui"}
                onClick={() => handleOptionSelect("imposable", "oui")}
              >
                Oui, je suis imposable
              </OptionButton>
              <OptionButton
                selected={formData.imposable === "non"}
                onClick={() => handleOptionSelect("imposable", "non")}
              >
                Non, je ne suis pas imposable
              </OptionButton>
            </div>
            {errors.imposable && (
              <p className="text-sm text-destructive mt-2">{errors.imposable}</p>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Votre âge</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Avez-vous plus de 70 ans ?
              </p>
            </div>
            <div className="space-y-3">
              <OptionButton
                selected={formData.plusDe70Ans === "oui"}
                onClick={() => handleOptionSelect("plusDe70Ans", "oui")}
              >
                Oui, j'ai plus de 70 ans
              </OptionButton>
              <OptionButton
                selected={formData.plusDe70Ans === "non"}
                onClick={() => handleOptionSelect("plusDe70Ans", "non")}
              >
                Non, j'ai moins de 70 ans
              </OptionButton>
            </div>
            {errors.plusDe70Ans && (
              <p className="text-sm text-destructive mt-2">{errors.plusDe70Ans}</p>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Vos coordonnées</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Pour recevoir votre estimation personnalisée
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-sm font-medium text-foreground">
                  Prénom *
                </Label>
                <Input
                  id="prenom"
                  name="prenom"
                  type="text"
                  placeholder="Jean"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  className={cn(
                    "h-12 bg-background border-border focus:border-primary focus:ring-primary/20",
                    errors.prenom && "border-destructive"
                  )}
                />
                {errors.prenom && (
                  <p className="text-xs text-destructive">{errors.prenom}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-sm font-medium text-foreground">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Dupont"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className={cn(
                    "h-12 bg-background border-border focus:border-primary focus:ring-primary/20",
                    errors.nom && "border-destructive"
                  )}
                />
                {errors.nom && (
                  <p className="text-xs text-destructive">{errors.nom}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jean.dupont@email.fr"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  "h-12 bg-background border-border focus:border-primary focus:ring-primary/20",
                  errors.email && "border-destructive"
                )}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-sm font-medium text-foreground">
                Téléphone *
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="06 XX XX XX XX"
                value={formData.telephone}
                onChange={handleInputChange}
                className={cn(
                  "h-12 bg-background border-border focus:border-primary focus:ring-primary/20",
                  errors.telephone && "border-destructive"
                )}
              />
              {errors.telephone && (
                <p className="text-xs text-destructive">{errors.telephone}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border/50">
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 bg-success-light text-success px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <CheckCircle className="w-4 h-4" />
          Estimation gratuite et sans engagement
        </div>
      </div>

      <ProgressBar />
      <StepIndicators />

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {renderStep()}

        <div className="flex gap-3 pt-4">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1 h-12"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          )}
          <Button
            type="button"
            variant="hero"
            onClick={handleNext}
            className={cn("h-12", currentStep === 1 ? "w-full" : "flex-1")}
          >
            {currentStep === TOTAL_STEPS ? (
              "Estimer mon aide maintenant"
            ) : (
              <>
                Continuer
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-border/50">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-success" />
            <span>Données sécurisées</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>Réponse en 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
