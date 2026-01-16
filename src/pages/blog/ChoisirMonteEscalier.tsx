import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/photo_blog_monte_escalier_droit_ou_tournant_.jpg";

const ChoisirMonteEscalier = () => {
  return (
    <>
      <Helmet>
        <title>Monte-Escalier Droit ou Tournant : Guide de Choix Complet</title>
        <meta
          name="description"
          content="Découvrez les différences entre monte-escalier droit et tournant. Guide complet pour choisir le modèle adapté à votre escalier et vos besoins."
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
                  <time className="text-gray-500 mb-4 block">28 décembre 2025</time>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Monte-Escalier Droit ou Tournant : Comment Choisir le Modèle Adapté
                  </h1>
                  <img
                    src={blogImage}
                    alt="Escalier droit et tournant"
                    className="w-full max-w-2xl mx-auto rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">
                    Le choix entre un monte-escalier droit et tournant dépend de la configuration de votre escalier.
                    Découvrez les caractéristiques, avantages et critères de choix pour chaque modèle.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Le Monte-Escalier Droit</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Caractéristiques</h3>
                  <p className="text-gray-700 mb-6">
                    Le monte-escalier droit est conçu pour les escaliers sans courbe ni palier intermédiaire.
                    C'est le modèle le plus simple et le plus économique du marché.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Avantages</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Prix accessible :</strong> À partir de 3 000 € selon les modèles</li>
                    <li><strong>Installation rapide :</strong> Généralement en une demi-journée</li>
                    <li><strong>Entretien simple :</strong> Moins de composants mécaniques</li>
                    <li><strong>Fiabilité :</strong> Technologie éprouvée et robuste</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Pour qui ?</h3>
                  <p className="text-gray-700 mb-6">
                    Idéal si votre escalier est complètement droit, sans aucun virage ni palier.
                    C'est la solution parfaite pour les maisons de plain-pied avec un escalier classique.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Le Monte-Escalier Tournant</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Caractéristiques</h3>
                  <p className="text-gray-700 mb-6">
                    Le monte-escalier tournant est spécialement conçu pour les escaliers avec virages,
                    paliers ou configurations complexes. Il s'adapte à toutes les formes d'escaliers.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Types de monte-escaliers tournants</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Quart tournant :</strong> Pour escaliers avec un virage à 90°</li>
                    <li><strong>Double quart tournant :</strong> Pour escaliers en U</li>
                    <li><strong>Hélicoïdal :</strong> Pour escaliers en colimaçon</li>
                    <li><strong>Avec palier :</strong> Pour escaliers à plusieurs niveaux</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Avantages</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Adaptabilité :</strong> S'adapte à presque toutes les configurations</li>
                    <li><strong>Sur-mesure :</strong> Fabriqué selon les dimensions exactes de votre escalier</li>
                    <li><strong>Confort :</strong> Transition douce dans les virages</li>
                    <li><strong>Sécurité :</strong> Systèmes de freinage adaptés aux courbes</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Points à considérer</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Prix plus élevé :</strong> Entre 6 000 € et 12 000 € selon la complexité</li>
                    <li><strong>Délai de fabrication :</strong> 4 à 8 semaines pour la conception sur-mesure</li>
                    <li><strong>Installation plus longue :</strong> Une journée complète en moyenne</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Comment Choisir ?</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. Analysez votre escalier</h3>
                  <p className="text-gray-700 mb-4">Observez attentivement votre escalier :</p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Est-il parfaitement droit du début à la fin ?</li>
                    <li>Comporte-t-il un ou plusieurs virages ?</li>
                    <li>Y a-t-il un palier intermédiaire ?</li>
                    <li>Quelle est la largeur disponible ?</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. Évaluez votre budget</h3>
                  <p className="text-gray-700 mb-6">
                    Si votre escalier est droit, vous économiserez significativement avec un modèle droit.
                    Pour un escalier tournant, prévoyez un budget plus conséquent mais n'oubliez pas les aides
                    comme MaPrimeAdapt' qui peuvent couvrir jusqu'à 70% du coût.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">3. Pensez à l'avenir</h3>
                  <p className="text-gray-700 mb-6">
                    Choisissez un modèle évolutif qui pourra s'adapter à vos besoins futurs :
                    options de sièges, commandes adaptées, etc.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Besoin d'un diagnostic gratuit ?</p>
                    <p className="text-gray-700">
                      Nos techniciens se déplacent gratuitement chez vous pour évaluer votre escalier
                      et vous conseiller sur le modèle le plus adapté à votre situation.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
                  <p className="text-gray-700 mb-6">
                    Le choix entre un monte-escalier droit et tournant dépend avant tout de la configuration
                    de votre escalier. Si vous avez un escalier droit, optez pour un modèle droit qui sera
                    plus économique et rapide à installer. Pour un escalier avec virages, le monte-escalier
                    tournant sur-mesure est la seule solution viable. Dans tous les cas, faites appel à un
                    professionnel pour un diagnostic précis et gratuit.
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

export default ChoisirMonteEscalier;
