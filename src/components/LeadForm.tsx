import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Shield, Clock } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    codePostal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border/50">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-success-light text-success px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <CheckCircle className="w-4 h-4" />
          Estimation gratuite et sans engagement
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Vérifiez votre éligibilité
        </h2>
        <p className="text-muted-foreground text-sm">
          Répondez à quelques questions pour estimer votre aide
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nom" className="text-sm font-medium text-foreground">
            Nom complet
          </Label>
          <Input
            id="nom"
            name="nom"
            type="text"
            placeholder="Votre nom et prénom"
            value={formData.nom}
            onChange={handleChange}
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telephone" className="text-sm font-medium text-foreground">
            Téléphone
          </Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="06 XX XX XX XX"
            value={formData.telephone}
            onChange={handleChange}
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.fr"
            value={formData.email}
            onChange={handleChange}
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="codePostal" className="text-sm font-medium text-foreground">
            Code postal
          </Label>
          <Input
            id="codePostal"
            name="codePostal"
            type="text"
            placeholder="75000"
            value={formData.codePostal}
            onChange={handleChange}
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary/20"
            maxLength={5}
            required
          />
        </div>

        <Button type="submit" variant="hero" size="xl" className="w-full mt-6">
          Estimer mon aide maintenant
        </Button>
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
