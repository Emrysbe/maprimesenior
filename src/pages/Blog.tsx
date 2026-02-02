import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import maPrimeAdaptImage from "@/assets/image_ma_prime_adapt_2.jpg";
import monteEscalierImage from "@/assets/photo_blog_monte_escalier_droit_ou_tournant_.jpg";
import autonomieImage from "@/assets/photo_blog_autonomie_a_domicile_.jpg";
import installationImage from "@/assets/photo_blog_installation_monte_escalier_.jpg";

type Article = Tables<'articles'>;

const legacyPosts = [
  {
    slug: "douche-senior-ma-prime-adapt-guide-complet",
    title: "Douche Senior Ma Prime Adapt' : Tout Ce Qu'il Faut Savoir en 2024",
    excerpt: "Remplacez votre baignoire par une douche sécurisée senior avec Ma Prime Adapt'. Jusqu'à 70% d'aide financière pour vos travaux de salle de bain. Guide complet et accompagnement gratuit.",
    publishedAt: "21 janvier 2026",
    imageUrl: "https://images.pexels.com/photos/6315801/pexels-photo-6315801.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "maprimeadapt-2024-guide-complet-aides-monte-escalier",
    title: "MaPrimeAdapt' 2024 : Guide Complet des Aides pour Votre Monte-Escalier",
    excerpt: "Découvrez comment financer votre monte-escalier avec MaPrimeAdapt' 2024. Guide complet des conditions, montants et démarches pour obtenir jusqu'à 70% d'aide.",
    publishedAt: "5 janvier 2026",
    imageUrl: maPrimeAdaptImage,
  },
  {
    slug: "choisir-monte-escalier-droit-tournant-guide",
    title: "Monte-Escalier Droit ou Tournant : Comment Choisir le Modèle Adapté",
    excerpt: "Droit ou tournant ? Découvrez les différences, avantages et critères de choix pour sélectionner le monte-escalier parfaitement adapté à votre escalier et vos besoins.",
    publishedAt: "28 décembre 2025",
    imageUrl: monteEscalierImage,
  },
  {
    slug: "amenagements-essentiels-seniors-autonomie-domicile",
    title: "Autonomie à Domicile : 5 Aménagements Essentiels pour les Seniors",
    excerpt: "Au-delà du monte-escalier, découvrez les aménagements indispensables pour maintenir votre autonomie à domicile : salle de bain, cuisine, accès et plus encore.",
    publishedAt: "15 décembre 2025",
    imageUrl: autonomieImage,
  },
  {
    slug: "installation-monte-escalier-guide-pratique",
    title: "Installation d'un Monte-Escalier : Guide Pratique Complet",
    excerpt: "Tout ce qu'il faut savoir sur l'installation d'un monte-escalier : durée, étapes, préparation de votre domicile et conseils d'experts pour un projet réussi.",
    publishedAt: "5 décembre 2025",
    imageUrl: installationImage,
  },
];

const Blog = () => {
  const [dbArticles, setDbArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (!error && data) {
      setDbArticles(data);
    }
    setIsLoading(false);
  };

  const allPosts = [
    ...dbArticles.map(article => ({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      publishedAt: format(new Date(article.published_at), 'dd MMMM yyyy', { locale: fr }),
      imageUrl: article.image_url || 'https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=800',
    })),
    ...legacyPosts,
  ];
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
                {isLoading ? (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-gray-600">Chargement des articles...</p>
                  </div>
                ) : (
                  allPosts.map((post) => (
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
                  ))
                )}
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
