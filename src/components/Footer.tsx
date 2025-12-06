import { Shield, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-primary-foreground/80">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">
              MaPrimeAdapt' Monte-Escalier
            </h3>
            <p className="text-sm leading-relaxed">
              Nous vous accompagnons dans l'obtention de votre aide MaPrimeAdapt' 
              pour financer l'installation de votre monte-escalier.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>01 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@exemple.fr</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">
              Certifications
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span>Installateurs certifiés RGE</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm">
          <p>
            © {new Date().getFullYear()} MaPrimeAdapt' Monte-Escalier. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-primary-foreground/60">
            Ce site n'est pas un site officiel du gouvernement. Nous sommes un service d'accompagnement indépendant.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
