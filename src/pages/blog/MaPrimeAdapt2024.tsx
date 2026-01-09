import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const MaPrimeAdapt2024 = () => {
  return (
    <>
      <Helmet>
        <title>MaPrimeAdapt' 2024 : Guide Complet des Aides Monte-Escalier</title>
        <meta
          name="description"
          content="Tout savoir sur MaPrimeAdapt' 2024 pour financer votre monte-escalier. Conditions, montants, démarches et conseils d'experts."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-20">
          <article className="py-16">
            <div className="container mx-auto px-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>

              <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                  <time className="text-gray-500 mb-4 block">5 janvier 2026</time>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    MaPrimeAdapt' 2024 : Guide Complet des Aides pour Votre Monte-Escalier
                  </h1>
                  <img
                    src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Aide MaPrimeAdapt' pour monte-escalier"
                    className="w-full rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">
                    MaPrimeAdapt' est l'aide financière incontournable pour l'installation d'un monte-escalier.
                    Découvrez comment bénéficier de cette aide qui peut couvrir jusqu'à 70% du coût de votre projet.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Qu'est-ce que MaPrimeAdapt' ?</h2>
                  <p className="text-gray-700 mb-6">
                    MaPrimeAdapt' est une aide de l'État destinée à financer les travaux d'adaptation du logement
                    pour les personnes âgées ou en situation de handicap. Lancée en 2024, elle remplace et simplifie
                    les anciennes aides comme Habiter Facile de l'Anah et le crédit d'impôt.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Qui peut en bénéficier ?</h2>
                  <p className="text-gray-700 mb-4">Pour être éligible à MaPrimeAdapt', vous devez remplir ces conditions :</p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Être propriétaire occupant de votre logement</li>
                    <li>Avoir plus de 60 ans ou être en situation de handicap</li>
                    <li>Respecter les plafonds de ressources fixés par l'Anah</li>
                    <li>Occuper le logement comme résidence principale</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Quel montant d'aide ?</h2>
                  <p className="text-gray-700 mb-4">
                    Le montant de MaPrimeAdapt' varie selon vos revenus :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Revenus très modestes :</strong> jusqu'à 70% du montant des travaux (plafond 22 000 €)</li>
                    <li><strong>Revenus modestes :</strong> jusqu'à 50% du montant des travaux (plafond 22 000 €)</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Pour un monte-escalier de 5 000 €, vous pouvez donc obtenir entre 2 500 € et 3 500 € d'aide.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Comment faire la demande ?</h2>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                    <li><strong>Évaluation de votre situation :</strong> Contactez un assistant à maîtrise d'ouvrage agréé</li>
                    <li><strong>Devis :</strong> Obtenez plusieurs devis de professionnels qualifiés</li>
                    <li><strong>Dépôt du dossier :</strong> Déposez votre demande sur le site de l'Anah</li>
                    <li><strong>Accord :</strong> Attendez la notification d'accord avant de commencer les travaux</li>
                    <li><strong>Réalisation :</strong> Faites réaliser les travaux par un professionnel</li>
                    <li><strong>Paiement :</strong> Envoyez les factures pour obtenir le versement de l'aide</li>
                  </ol>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conseils pour maximiser vos chances</h2>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Faites-vous accompagner par un professionnel agréé dès le début</li>
                    <li>Préparez tous les justificatifs nécessaires avant de déposer votre dossier</li>
                    <li>N'attendez pas : les enveloppes budgétaires sont limitées chaque année</li>
                    <li>Vérifiez les autres aides cumulables (caisses de retraite, mutuelles)</li>
                  </ul>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Besoin d'aide pour votre demande ?</p>
                    <p className="text-gray-700">
                      Notre équipe d'experts vous accompagne gratuitement dans vos démarches MaPrimeAdapt'.
                      Nous vous aidons à constituer votre dossier et à maximiser vos aides.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
                  <p className="text-gray-700 mb-6">
                    MaPrimeAdapt' représente une opportunité exceptionnelle de financer votre monte-escalier à moindre coût.
                    Avec une aide pouvant atteindre 70% du montant des travaux, c'est le moment idéal pour engager votre
                    projet d'adaptation de logement. N'hésitez pas à vous faire accompagner pour optimiser votre demande.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MaPrimeAdapt2024;
