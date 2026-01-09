import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "maprimeadapt-2024-guide-complet-aides-monte-escalier",
    title: "MaPrimeAdapt' 2024 : Guide Complet des Aides pour Votre Monte-Escalier",
    excerpt: "Découvrez comment financer votre monte-escalier avec MaPrimeAdapt' 2024. Guide complet des conditions, montants et démarches pour obtenir jusqu'à 70% d'aide.",
    publishedAt: "5 janvier 2026",
    imageUrl: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "choisir-monte-escalier-droit-tournant-guide",
    title: "Monte-Escalier Droit ou Tournant : Comment Choisir le Modèle Adapté",
    excerpt: "Droit ou tournant ? Découvrez les différences, avantages et critères de choix pour sélectionner le monte-escalier parfaitement adapté à votre escalier et vos besoins.",
    publishedAt: "28 décembre 2025",
    imageUrl: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "amenagements-essentiels-seniors-autonomie-domicile",
    title: "Autonomie à Domicile : 5 Aménagements Essentiels pour les Seniors",
    excerpt: "Au-delà du monte-escalier, découvrez les aménagements indispensables pour maintenir votre autonomie à domicile : salle de bain, cuisine, accès et plus encore.",
    publishedAt: "15 décembre 2025",
    imageUrl: "https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "installation-monte-escalier-guide-pratique",
    title: "Installation d'un Monte-Escalier : Guide Pratique Complet",
    excerpt: "Tout ce qu'il faut savoir sur l'installation d'un monte-escalier : durée, étapes, préparation de votre domicile et conseils d'experts pour un projet réussi.",
    publishedAt: "5 décembre 2025",
    imageUrl: "https://images.pexels.com/photos/7195087/pexels-photo-7195087.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Conseils Monte-Escalier & Aides MaPrimeAdapt' | Guide Expert</title>
        <meta
          name="description"
          content="Découvrez nos guides pratiques sur les monte-escaliers, MaPrimeAdapt' et l'autonomie à domicile. Conseils d'experts pour un projet réussi."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-20">
          <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Blog Monte-Escalier
                </h1>
                <p className="text-xl text-gray-600">
                  Conseils d'experts, guides pratiques et actualités sur les monte-escaliers et MaPrimeAdapt'
                </p>
              </div>

              <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <time>{post.publishedAt}</time>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
