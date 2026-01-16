import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | MaPrimeAdapt' Monte-Escalier</title>
        <meta
          name="description"
          content="Politique de confidentialité et protection des données personnelles de MaPrimeAdapt' Monte-Escalier."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-20">
          <article className="py-16">
            <div className="container mx-auto px-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Link>

              <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Politique de Confidentialité
                  </h1>
                  <p className="text-gray-600">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </header>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 mb-6">
                    MaPrimeAdapt' Monte-Escalier s'engage à protéger la confidentialité et la sécurité de vos données personnelles.
                    Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations
                    conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Responsable du traitement</h2>
                  <p className="text-gray-700 mb-4">
                    Le responsable du traitement des données personnelles est :
                  </p>
                  <ul className="list-none pl-0 mb-6 text-gray-700 space-y-1">
                    <li><strong>Raison sociale :</strong> MaPrimeAdapt' Monte-Escalier</li>
                    <li><strong>Email :</strong> monaideauxsenior@gmail.com</li>
                    <li><strong>Téléphone :</strong> 06 17 52 68 36</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Données collectées</h2>
                  <p className="text-gray-700 mb-4">
                    Nous collectons les données suivantes lorsque vous utilisez notre formulaire de contact :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Données d'identification :</strong> nom, prénom</li>
                    <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
                    <li><strong>Données de localisation :</strong> code postal</li>
                    <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. Finalités du traitement</h2>
                  <p className="text-gray-700 mb-4">
                    Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Traiter vos demandes de devis et d'information</li>
                    <li>Vous accompagner dans vos démarches MaPrimeAdapt'</li>
                    <li>Vous contacter par téléphone ou email pour répondre à vos questions</li>
                    <li>Améliorer nos services et notre site web</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. Base légale du traitement</h2>
                  <p className="text-gray-700 mb-4">
                    Le traitement de vos données repose sur les bases légales suivantes :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Consentement :</strong> lorsque vous remplissez notre formulaire de contact</li>
                    <li><strong>Exécution d'un contrat :</strong> pour traiter votre demande de devis</li>
                    <li><strong>Intérêt légitime :</strong> pour améliorer nos services</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. Durée de conservation</h2>
                  <p className="text-gray-700 mb-6">
                    Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre dernier contact avec nous.
                    Au-delà de cette période, vos données sont supprimées ou anonymisées, sauf obligation légale de conservation.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">7. Destinataires des données</h2>
                  <p className="text-gray-700 mb-4">
                    Vos données personnelles peuvent être communiquées aux catégories de destinataires suivantes :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Notre équipe interne pour le traitement de votre demande</li>
                    <li>Nos partenaires installateurs certifiés (uniquement avec votre accord)</li>
                    <li>Nos prestataires techniques (hébergement, service email)</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">8. Transfert de données hors UE</h2>
                  <p className="text-gray-700 mb-6">
                    Vos données personnelles sont hébergées au sein de l'Union Européenne et ne font pas l'objet de transfert
                    vers des pays tiers, sauf si notre prestataire technique l'exige. Dans ce cas, nous nous assurons que
                    des garanties appropriées sont mises en place conformément au RGPD.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">9. Vos droits</h2>
                  <p className="text-gray-700 mb-4">
                    Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et y accéder</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                    <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Pour exercer vos droits, contactez-nous par email à monaideauxsenior@gmail.com ou par téléphone au 06 17 52 68 36.
                    Nous vous répondrons dans un délai d'un mois maximum.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">10. Droit de réclamation</h2>
                  <p className="text-gray-700 mb-6">
                    Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation
                    auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                  </p>
                  <ul className="list-none pl-0 mb-6 text-gray-700 space-y-1">
                    <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
                    <li><strong>Téléphone :</strong> 01 53 73 22 22</li>
                    <li><strong>Site web :</strong> www.cnil.fr</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">11. Sécurité des données</h2>
                  <p className="text-gray-700 mb-6">
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                    personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé.
                    Ces mesures incluent le chiffrement des données, des sauvegardes régulières et des contrôles d'accès stricts.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">12. Cookies</h2>
                  <p className="text-gray-700 mb-6">
                    Notre site web n'utilise actuellement pas de cookies de suivi ou de cookies publicitaires.
                    Seuls les cookies strictement nécessaires au fonctionnement du site peuvent être utilisés.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">13. Modifications de la politique</h2>
                  <p className="text-gray-700 mb-6">
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                    Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Des questions sur vos données ?</p>
                    <p className="text-gray-700">
                      N'hésitez pas à nous contacter pour toute question concernant le traitement de vos données personnelles.
                      Notre équipe est à votre disposition pour vous répondre et vous accompagner dans l'exercice de vos droits.
                    </p>
                    <p className="text-gray-700 mt-3">
                      <strong>Email :</strong> monaideauxsenior@gmail.com<br />
                      <strong>Téléphone :</strong> 06 17 52 68 36
                    </p>
                  </div>
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

export default Privacy;
