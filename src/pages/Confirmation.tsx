import { Helmet } from "react-helmet-async";
import { CheckCircle, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <Helmet>
        <title>Demande envoyée - MaPrimeAdapt' Monte-escalier</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12 text-center animate-scaleIn">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-12 h-12 text-secondary" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Votre demande a bien été envoyée !
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Merci pour votre confiance. Un conseiller vous contactera très prochainement pour estimer votre aide MaPrimeAdapt'.
            </p>

            {/* What's next */}
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Prochaines étapes
              </h2>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-muted-foreground">Un conseiller analyse votre dossier sous 24h</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-muted-foreground">Il vous contacte pour affiner votre estimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-muted-foreground">Vous recevez un devis personnalisé avec le montant de votre aide</span>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+33617526836"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">06 17 52 68 36</span>
              </a>
              <a
                href="mailto:monaideauxsenior@gmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">monaideauxsenior@gmail.com</span>
              </a>
            </div>

            {/* Back button */}
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>

          {/* Trust badge */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            🔒 Vos données sont protégées et ne seront jamais partagées
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
