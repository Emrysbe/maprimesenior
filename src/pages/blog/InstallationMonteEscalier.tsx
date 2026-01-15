import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/photo_blog_installation_monte_escalier_.jpg";

const InstallationMonteEscalier = () => {
  return (
    <>
      <Helmet>
        <title>Installation d'un Monte-Escalier : Guide Pratique Complet</title>
        <meta
          name="description"
          content="Tout savoir sur l'installation d'un monte-escalier : durée, étapes, préparation et conseils d'experts pour un projet réussi."
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
                  <time className="text-gray-500 mb-4 block">5 décembre 2025</time>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Installation d'un Monte-Escalier : Guide Pratique Complet
                  </h1>
                  <img
                    src={blogImage}
                    alt="Installation monte-escalier"
                    className="w-full rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">
                    L'installation d'un monte-escalier est plus simple qu'on ne le pense. Découvrez toutes les étapes,
                    de la prise de mesures à la mise en service, ainsi que nos conseils pour un projet sans stress.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Durée d'Installation : Rapide et Efficace</h2>
                  <p className="text-gray-700 mb-6">
                    La durée d'installation varie selon le type de monte-escalier :
                  </p>

                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Monte-escalier droit :</strong> 2 à 4 heures</li>
                    <li><strong>Monte-escalier tournant :</strong> 4 à 8 heures</li>
                    <li><strong>Monte-escalier complexe :</strong> 1 journée complète</li>
                  </ul>

                  <p className="text-gray-700 mb-6">
                    Dans la majorité des cas, vous pouvez utiliser votre monte-escalier le jour même de l'installation.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Les Étapes de l'Installation</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. La Visite Technique (J-30)</h3>
                  <p className="text-gray-700 mb-4">
                    Avant toute chose, un technicien se déplace chez vous pour :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Prendre les mesures précises de votre escalier</li>
                    <li>Vérifier la faisabilité technique</li>
                    <li>Identifier les contraintes éventuelles</li>
                    <li>Vous conseiller sur le modèle adapté</li>
                    <li>Établir un devis détaillé</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Cette visite est gratuite et sans engagement. Elle dure environ 45 minutes.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. La Fabrication (4 à 6 semaines)</h3>
                  <p className="text-gray-700 mb-6">
                    Après signature du devis, votre monte-escalier est fabriqué sur-mesure selon les dimensions
                    de votre escalier. Pour un monte-escalier droit standard, ce délai peut être réduit à 2 semaines.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">3. La Préparation du Chantier (J-1)</h3>
                  <p className="text-gray-700 mb-4">
                    La veille de l'installation, préparez votre domicile :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Dégagez l'escalier et ses abords</li>
                    <li>Retirez tapis, objets décoratifs et plantes</li>
                    <li>Protégez les meubles proches de l'escalier</li>
                    <li>Prévoyez un accès facile pour les techniciens</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">4. L'Installation (Jour J)</h3>
                  <p className="text-gray-700 mb-4">
                    Le jour de l'installation se déroule en plusieurs phases :
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Phase 1 : Fixation du rail (1-2h)</h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Le rail est fixé sur les marches de l'escalier</li>
                    <li>Aucun perçage du mur n'est nécessaire</li>
                    <li>Les fixations sont discrètes et solides</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Phase 2 : Montage du siège (30 min)</h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Installation du fauteuil sur le rail</li>
                    <li>Connexion des systèmes électriques</li>
                    <li>Mise en place des accessoires de sécurité</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Phase 3 : Tests et réglages (30 min)</h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Vérification du fonctionnement complet</li>
                    <li>Réglage de la vitesse et des arrêts</li>
                    <li>Test de tous les systèmes de sécurité</li>
                    <li>Ajustements finaux</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Phase 4 : Formation (30 min)</h4>
                  <p className="text-gray-700 mb-6">
                    Le technicien vous forme à l'utilisation du monte-escalier : commandes, sécurités,
                    entretien de base, que faire en cas de problème.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-gray-800 font-semibold mb-2">Bon à savoir</p>
                    <p className="text-gray-700">
                      L'installation d'un monte-escalier ne nécessite aucun gros travaux. Pas de poussière,
                      pas de démolition. Votre escalier reste utilisable jusqu'au dernier moment.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Aucun Travaux Supplémentaire Requis</h2>
                  <p className="text-gray-700 mb-6">
                    Contrairement aux idées reçues, l'installation d'un monte-escalier ne demande pas de travaux :
                  </p>

                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Pas de perçage de murs :</strong> Le rail est fixé sur les marches</li>
                    <li><strong>Pas de modification électrique :</strong> Fonctionne sur une prise standard</li>
                    <li><strong>Pas de démontage :</strong> L'escalier reste intact</li>
                    <li><strong>Installation propre :</strong> Aucune poussière ni salissure</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Questions Fréquentes</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">L'escalier reste-t-il utilisable pendant l'installation ?</h3>
                  <p className="text-gray-700 mb-6">
                    Non, pendant les heures d'installation, l'escalier n'est pas accessible. Prévoyez de rester
                    au rez-de-chaussée ou à l'étage pendant cette période.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Faut-il être présent pendant l'installation ?</h3>
                  <p className="text-gray-700 mb-6">
                    Oui, votre présence est requise au début (pour l'accueil) et à la fin (pour la formation
                    et la signature du bon d'installation).
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Peut-on installer un monte-escalier sur n'importe quel escalier ?</h3>
                  <p className="text-gray-700 mb-6">
                    Presque tous les escaliers peuvent être équipés : droits, tournants, étroits, raides ou en colimaçon.
                    Seuls les escaliers de moins de 70 cm de large peuvent poser problème.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Le monte-escalier gêne-t-il le passage ?</h3>
                  <p className="text-gray-700 mb-6">
                    Les sièges sont rabattables. Quand le monte-escalier n'est pas utilisé, il libère un passage
                    confortable dans l'escalier.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Après l'Installation</h2>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Garantie et SAV</h3>
                  <p className="text-gray-700 mb-6">
                    Tous nos monte-escaliers sont garantis 2 ans pièces et main-d'œuvre. Un service après-vente
                    est disponible 7j/7 pour toute question ou intervention.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Entretien</h3>
                  <p className="text-gray-700 mb-6">
                    L'entretien est minimal : nettoyage régulier du rail et du siège, vérification visuelle mensuelle.
                    Une maintenance annuelle par un technicien est recommandée.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
                  <p className="text-gray-700 mb-6">
                    L'installation d'un monte-escalier est un processus simple, rapide et sans désagrément.
                    En quelques heures, vous retrouvez une totale autonomie dans votre maison. N'hésitez pas
                    à demander une visite technique gratuite pour lancer votre projet en toute sérénité.
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

export default InstallationMonteEscalier;
