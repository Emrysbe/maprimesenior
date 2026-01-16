import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/photo_blog_autonomie_a_domicile_.jpg";

const AmenagementsSeniors = () => {
  return (
    <>
      <Helmet>
        <title>Autonomie à Domicile : 5 Aménagements Essentiels pour Seniors</title>
        <meta
          name="description"
          content="Découvrez les 5 aménagements indispensables pour maintenir l'autonomie des seniors à domicile. Guide complet avec conseils et aides financières."
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
                  <time className="text-gray-500 mb-4 block">15 décembre 2025</time>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Autonomie à Domicile : 5 Aménagements Essentiels pour les Seniors
                  </h1>
                  <img
                    src={blogImage}
                    alt="Aménagement domicile seniors"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">
                    Maintenir son autonomie à domicile est essentiel pour bien vieillir. Au-delà du monte-escalier,
                    découvrez les 5 aménagements indispensables pour sécuriser et adapter votre logement.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">1. Le Monte-Escalier : La Priorité</h2>
                  <p className="text-gray-700 mb-6">
                    L'escalier représente le premier obstacle à l'autonomie. Un monte-escalier permet de continuer
                    à utiliser tous les étages de votre maison en toute sécurité. C'est l'investissement prioritaire
                    pour éviter les chutes et maintenir l'accès à l'ensemble de votre logement.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Points clés</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Installation rapide (quelques heures à une journée)</li>
                    <li>Aide MaPrimeAdapt' jusqu'à 70% du coût</li>
                    <li>Modèles adaptés à tous les escaliers</li>
                    <li>Sécurité maximale avec ceinture et freins automatiques</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. La Salle de Bain Adaptée</h2>
                  <p className="text-gray-700 mb-6">
                    La salle de bain est la pièce la plus dangereuse de la maison. 46% des chutes graves
                    surviennent dans cette pièce. Une adaptation est cruciale pour votre sécurité.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Aménagements recommandés</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Douche à l'italienne :</strong> Sans marche, avec sol antidérapant</li>
                    <li><strong>Barres d'appui :</strong> Près de la douche, du WC et du lavabo</li>
                    <li><strong>Siège de douche :</strong> Fixe ou rabattable pour se laver assis</li>
                    <li><strong>Mitigeur thermostatique :</strong> Pour éviter les brûlures</li>
                    <li><strong>Éclairage renforcé :</strong> Sans zones d'ombre</li>
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Bon à savoir</p>
                    <p className="text-gray-700">
                      Le remplacement d'une baignoire par une douche à l'italienne est également éligible
                      à MaPrimeAdapt'. Le coût varie entre 3 000 € et 6 000 € selon la configuration.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Les Revêtements de Sol Sécurisés</h2>
                  <p className="text-gray-700 mb-6">
                    Les sols glissants ou inégaux sont une cause majeure de chutes. L'adaptation des revêtements
                    est souvent négligée mais essentielle.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Solutions recommandées</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Revêtements antidérapants dans toutes les pièces</li>
                    <li>Suppression des tapis et descentes de lit</li>
                    <li>Seuils de porte arasés ou rampes d'accès</li>
                    <li>Sols de couleur contrastée aux changements de niveau</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. L'Éclairage Adapté</h2>
                  <p className="text-gray-700 mb-6">
                    Avec l'âge, la vue baisse et les besoins en lumière augmentent. Un bon éclairage
                    prévient 30% des chutes à domicile.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Aménagements essentiels</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Interrupteurs accessibles :</strong> À hauteur adaptée, lumineux</li>
                    <li><strong>Détecteurs de mouvement :</strong> Dans les couloirs et la salle de bain</li>
                    <li><strong>Veilleuses nocturnes :</strong> Pour les déplacements de nuit</li>
                    <li><strong>Éclairage renforcé :</strong> Particulièrement dans l'escalier</li>
                    <li><strong>Variateurs :</strong> Pour adapter l'intensité selon le moment</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. La Cuisine Ergonomique</h2>
                  <p className="text-gray-700 mb-6">
                    La cuisine doit rester un lieu de plaisir et d'autonomie. Quelques adaptations simples
                    facilitent son utilisation au quotidien.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Adaptations recommandées</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Plan de travail à hauteur variable :</strong> Utilisable assis ou debout</li>
                    <li><strong>Rangements accessibles :</strong> Entre 40 cm et 140 cm du sol</li>
                    <li><strong>Plaques à induction :</strong> Plus sûres que le gaz</li>
                    <li><strong>Robinetterie à levier :</strong> Plus facile à manipuler</li>
                    <li><strong>Éclairage du plan de travail :</strong> LED sous les meubles hauts</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Financement : MaPrimeAdapt' Couvre Tout</h2>
                  <p className="text-gray-700 mb-6">
                    Excellente nouvelle : tous ces aménagements sont éligibles à MaPrimeAdapt'. Vous pouvez
                    bénéficier d'une aide globale pour l'ensemble de votre projet d'adaptation.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Montants d'aide</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Jusqu'à 70% du montant total des travaux pour les revenus très modestes</li>
                    <li>Jusqu'à 50% pour les revenus modestes</li>
                    <li>Plafond de travaux : 22 000 €</li>
                    <li>Aide maximale : 15 400 € pour les revenus très modestes</li>
                  </ul>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Notre accompagnement global</p>
                    <p className="text-gray-700">
                      Nous vous proposons un diagnostic complet de votre logement et vous accompagnons
                      dans toutes les démarches pour obtenir les aides maximales. Service gratuit et sans engagement.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Par Où Commencer ?</h2>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                    <li><strong>Faites le point :</strong> Identifiez les obstacles dans votre logement</li>
                    <li><strong>Priorisez :</strong> Commencez par les aménagements les plus urgents (escalier, salle de bain)</li>
                    <li><strong>Consultez un expert :</strong> Un diagnostic gratuit vous aidera à établir un plan global</li>
                    <li><strong>Montez votre dossier d'aide :</strong> Avec l'accompagnement d'un professionnel agréé</li>
                    <li><strong>Planifiez les travaux :</strong> Dans l'ordre logique pour minimiser la gêne</li>
                  </ol>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
                  <p className="text-gray-700 mb-6">
                    L'adaptation de votre logement est un investissement pour votre qualité de vie et votre sécurité.
                    Avec MaPrimeAdapt', le coût reste maîtrisé et vous gardez votre autonomie à domicile pendant
                    de nombreuses années. N'attendez pas qu'un accident survienne : anticipez dès aujourd'hui
                    pour vieillir sereinement chez vous.
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

export default AmenagementsSeniors;
