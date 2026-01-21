import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, Phone, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoucheSeniorMaPrimeAdapt = () => {
  const scrollToForm = () => {
    window.location.href = "/#devis";
  };

  return (
    <>
      <Helmet>
        <title>Douche Senior Ma Prime Adapt' : Guide Complet 2024 | Mon Aide Senior</title>
        <meta
          name="description"
          content="Remplacez votre baignoire par une douche sécurisée senior avec Ma Prime Adapt'. Jusqu'à 70% d'aide financière. Guide complet et accompagnement gratuit."
        />
        <meta name="keywords" content="douche senior Ma Prime Adapt, douche sécurisée senior, remplacement baignoire par douche, aide financière douche senior, Ma Prime Adapt travaux salle de bain" />
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
                  <time className="text-gray-500 mb-4 block">21 janvier 2026</time>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Douche Senior Ma Prime Adapt' : Tout Ce Qu'il Faut Savoir en 2024
                  </h1>
                  <img
                    src="https://images.pexels.com/photos/6315801/pexels-photo-6315801.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Douche senior sécurisée avec Ma Prime Adapt'"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">
                    Remplacer votre baignoire par une douche sécurisée senior est l'un des aménagements les plus demandés pour maintenir l'autonomie à domicile. Grâce à Ma Prime Adapt', cette transformation peut être financée jusqu'à 70% par l'État. Découvrez tout ce que vous devez savoir pour en bénéficier.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-600" />
                      Mon Aide Senior vous accompagne gratuitement
                    </p>
                    <p className="text-gray-700 mb-4">
                      De l'évaluation de votre éligibilité au versement de l'aide, notre équipe gère toutes vos démarches administratives. Simple, rapide et sans frais.
                    </p>
                    <Button onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700">
                      Tester mon éligibilité gratuitement
                    </Button>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Pourquoi installer une douche sécurisée senior ?</h2>

                  <p className="text-gray-700 mb-4">
                    La salle de bain est l'une des pièces les plus dangereuses du logement pour les personnes âgées. Chaque année, des milliers de chutes surviennent lors de l'entrée ou de la sortie de la baignoire. La douche senior apporte une solution efficace et pérenne.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Les avantages d'une douche senior</h3>

                  <ul className="list-none space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Accès de plain-pied :</strong> Plus besoin d'enjamber une baignoire, l'entrée se fait sans obstacle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Sécurité renforcée :</strong> Sol antidérapant, barres d'appui, siège intégré</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Confort amélioré :</strong> Plus d'espace, mitigeur thermostatique pour éviter les brûlures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Maintien à domicile :</strong> Permet de rester chez soi en toute autonomie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Valorisation du bien :</strong> Investissement qui peut faciliter une future revente</span>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Ma Prime Adapt' : L'aide financière pour votre douche senior</h2>

                  <p className="text-gray-700 mb-4">
                    Ma Prime Adapt' est l'aide de référence de l'État pour financer les travaux d'adaptation de la salle de bain. Lancée en 2024, elle simplifie et unifie les anciennes aides (Habiter Facile de l'Anah, crédit d'impôt...).
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Qui peut bénéficier de Ma Prime Adapt' pour une douche senior ?</h3>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 mb-4">Pour être éligible, vous devez respecter ces critères :</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Être propriétaire occupant de votre résidence principale</li>
                      <li>Avoir 60 ans ou plus, ou être en situation de handicap/perte d'autonomie</li>
                      <li>Respecter les plafonds de ressources définis par l'Anah</li>
                      <li>Votre logement doit avoir plus de 15 ans</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Quel montant d'aide pour le remplacement de votre baignoire ?</h3>

                  <p className="text-gray-700 mb-4">
                    Le montant de Ma Prime Adapt' varie selon vos revenus et peut financer une grande partie de vos travaux de salle de bain :
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border-2 border-blue-200 bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Revenus très modestes</h4>
                      <p className="text-3xl font-bold text-blue-600 mb-2">70%</p>
                      <p className="text-gray-700">du montant des travaux</p>
                      <p className="text-sm text-gray-600 mt-2">Plafond : 22 000 €</p>
                    </div>
                    <div className="border-2 border-green-200 bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Revenus modestes</h4>
                      <p className="text-3xl font-bold text-green-600 mb-2">50%</p>
                      <p className="text-gray-700">du montant des travaux</p>
                      <p className="text-sm text-gray-600 mt-2">Plafond : 22 000 €</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8 border border-blue-200">
                    <p className="text-gray-800 font-bold mb-2">Exemple concret :</p>
                    <p className="text-gray-700">
                      Pour une douche senior complète à <strong>6 000 €</strong>, vous pouvez obtenir entre <strong>3 000 €</strong> et <strong>4 200 €</strong> d'aide selon vos revenus. Votre reste à charge : entre 1 800 € et 3 000 € seulement.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Quels travaux sont pris en charge ?</h3>

                  <p className="text-gray-700 mb-4">
                    Ma Prime Adapt' finance l'ensemble des travaux liés à votre douche sécurisée senior :
                  </p>

                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Dépose de la baignoire existante</li>
                    <li>Installation d'un receveur de douche extra-plat ou de plain-pied</li>
                    <li>Pose de paroi de douche vitrée</li>
                    <li>Revêtement antidérapant</li>
                    <li>Barres d'appui et/ou siège de douche</li>
                    <li>Mitigeur thermostatique</li>
                    <li>Adaptation des arrivées et évacuations d'eau</li>
                    <li>Reprise de la faïence et du carrelage</li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      Installation rapide
                    </p>
                    <p className="text-gray-700">
                      Les travaux de remplacement d'une baignoire par une douche senior prennent généralement entre 1 et 3 jours selon la configuration. Vous retrouvez rapidement l'usage de votre salle de bain.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Comment obtenir Ma Prime Adapt' pour votre douche senior ?</h2>

                  <p className="text-gray-700 mb-4">
                    Mon Aide Senior vous accompagne à chaque étape pour simplifier vos démarches et maximiser vos aides.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Les étapes avec Mon Aide Senior</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Évaluation gratuite de votre éligibilité</h4>
                        <p className="text-gray-700">En 2 minutes, nous vérifions si vous pouvez bénéficier de Ma Prime Adapt' et estimons le montant de votre aide.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Visite technique à domicile</h4>
                        <p className="text-gray-700">Un professionnel agréé se déplace gratuitement pour évaluer vos besoins et établir un devis personnalisé.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Constitution du dossier</h4>
                        <p className="text-gray-700">Nous réunissons tous les documents nécessaires et déposons votre demande auprès de l'Anah.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Notification d'accord</h4>
                        <p className="text-gray-700">Une fois votre dossier validé par l'Anah, vous recevez l'accord de financement (délai moyen : 2 à 4 mois).</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Installation de votre douche senior</h4>
                        <p className="text-gray-700">Un artisan qualifié RGE procède au remplacement de votre baignoire par une douche sécurisée.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Versement de l'aide</h4>
                        <p className="text-gray-700">Après envoi des factures, Ma Prime Adapt' est versée directement sur votre compte bancaire.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl my-8 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Vous avez des questions ?</h3>
                    <p className="text-blue-100 mb-6 text-lg">
                      Nos conseillers Mon Aide Senior sont à votre écoute pour vous guider dans votre projet d'adaptation de salle de bain.
                    </p>
                    <Button onClick={scrollToForm} variant="secondary" size="lg">
                      Obtenir un accompagnement gratuit
                    </Button>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Les autres aides cumulables avec Ma Prime Adapt'</h2>

                  <p className="text-gray-700 mb-4">
                    Bonne nouvelle : Ma Prime Adapt' n'est pas la seule aide disponible pour financer votre douche senior. D'autres dispositifs peuvent s'ajouter pour réduire encore votre reste à charge.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Aides complémentaires</h3>

                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Caisses de retraite :</strong> Selon votre régime (CNAV, MSA, AGIRC-ARRCO...), des aides entre 500 € et 3 500 € peuvent être accordées</li>
                    <li><strong>Mutuelles et assurances :</strong> Certains contrats prévoient une participation aux travaux d'adaptation du logement</li>
                    <li><strong>Conseils départementaux :</strong> Des aides locales existent dans certains départements (APA, PCH...)</li>
                    <li><strong>Crédit d'impôt :</strong> 25% de crédit d'impôt sur certains équipements spécifiques (plafonné à 5 000 €)</li>
                    <li><strong>Prêt à taux zéro :</strong> Action Logement propose le prêt Avance Rénovation pour financer le reste à charge</li>
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Mon Aide Senior optimise vos financements
                    </p>
                    <p className="text-gray-700">
                      Notre équipe identifie toutes les aides auxquelles vous avez droit et monte les dossiers correspondants. Objectif : réduire au maximum votre reste à charge.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conseils pour réussir votre projet de douche senior</h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Choisir la bonne douche sécurisée</h3>

                  <p className="text-gray-700 mb-4">
                    Tous les modèles de douche senior ne se valent pas. Voici les critères essentiels pour faire le bon choix :
                  </p>

                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Receveur extra-plat :</strong> Hauteur maximale de 5 cm pour un accès facile, idéalement 2 cm</li>
                    <li><strong>Revêtement antidérapant :</strong> Classement PN24 minimum (norme antidérapante)</li>
                    <li><strong>Siège rabattable :</strong> Permet de se doucher assis en toute sécurité</li>
                    <li><strong>Barres d'appui :</strong> Fixées solidement sur les murs porteurs</li>
                    <li><strong>Mitigeur thermostatique :</strong> Évite les variations de température et les risques de brûlure</li>
                    <li><strong>Éclairage adapté :</strong> Luminosité suffisante sans zones d'ombre</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Bien choisir son installateur</h3>

                  <p className="text-gray-700 mb-4">
                    Pour bénéficier de Ma Prime Adapt', les travaux doivent être réalisés par un professionnel qualifié. Mon Aide Senior travaille exclusivement avec des artisans certifiés RGE (Reconnu Garant de l'Environnement) et expérimentés dans l'adaptation du logement des seniors.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Les garanties Mon Aide Senior :</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Artisans qualifiés RGE et spécialisés senior</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Devis transparent et détaillé</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Garantie décennale sur les travaux</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Suivi personnalisé de A à Z</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Service après-vente réactif</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Questions fréquentes sur la douche senior et Ma Prime Adapt'</h2>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Combien coûte le remplacement d'une baignoire par une douche senior ?</h4>
                      <p className="text-gray-700">Le coût varie entre 4 000 € et 8 000 € selon la configuration de votre salle de bain, les équipements choisis et la complexité des travaux. Avec Ma Prime Adapt', votre reste à charge peut être divisé par deux.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Combien de temps prennent les travaux ?</h4>
                      <p className="text-gray-700">L'installation d'une douche senior dure généralement entre 1 et 3 jours. Les artisans travaillent en minimisant la gêne et vous retrouvez rapidement l'usage de votre salle de bain.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Puis-je bénéficier de Ma Prime Adapt' si je suis locataire ?</h4>
                      <p className="text-gray-700">Non, Ma Prime Adapt' est réservée aux propriétaires occupants. Cependant, si vous êtes locataire, parlez-en à votre propriétaire : il peut faire la demande et bénéficier de l'aide pour adapter le logement.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Dois-je avancer l'argent des travaux ?</h4>
                      <p className="text-gray-700">Oui, dans la plupart des cas. Vous réglez l'artisan puis vous êtes remboursé par l'Anah après envoi des factures. Toutefois, Mon Aide Senior peut vous orienter vers des solutions de financement (prêts à taux zéro, avance de trésorerie) pour faciliter le paiement.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Quel est le délai pour obtenir Ma Prime Adapt' ?</h4>
                      <p className="text-gray-700">Comptez entre 2 et 4 mois entre le dépôt du dossier et la notification d'accord. Le versement de l'aide intervient ensuite sous 15 jours à 1 mois après l'envoi des factures.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-10 rounded-2xl my-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-4">Prêt à franchir le pas ?</h3>
                    <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                      Ne laissez plus votre salle de bain être un obstacle à votre autonomie. Vérifiez dès maintenant votre éligibilité à Ma Prime Adapt' et découvrez combien l'État peut financer pour votre douche senior.
                    </p>
                    <Button onClick={scrollToForm} variant="secondary" size="lg" className="text-lg px-8">
                      Estimer mon aide en 2 minutes
                    </Button>
                    <p className="text-blue-200 text-sm mt-4">Accompagnement gratuit · Sans engagement · Réponse immédiate</p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>

                  <p className="text-gray-700 mb-4">
                    La douche senior est bien plus qu'un simple aménagement : c'est un investissement pour votre sécurité, votre confort et votre maintien à domicile. Avec Ma Prime Adapt', l'État vous accompagne financièrement pour concrétiser ce projet essentiel.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Mon Aide Senior est à vos côtés pour transformer votre salle de bain en un espace sécurisé et adapté à vos besoins. De l'évaluation de votre éligibilité à la réception des travaux, nous gérons tout pour vous. Simple, rapide, et surtout : gratuit.
                  </p>

                  <p className="text-gray-700 font-semibold text-lg">
                    N'attendez plus pour sécuriser votre quotidien. Testez votre éligibilité dès aujourd'hui et découvrez le montant de l'aide que vous pouvez obtenir.
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

export default DoucheSeniorMaPrimeAdapt;
