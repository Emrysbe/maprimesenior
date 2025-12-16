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
              <a href="tel:+33617526836" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>06 17 52 68 36</span>
              </a>
              <a href="mailto:monaideauxsenior@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>monaideauxsenior@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">
              Accompagnement
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span>AMO certifiés par l'ANAH</span>
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
