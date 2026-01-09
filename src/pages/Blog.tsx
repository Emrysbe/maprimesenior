import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  published_at: string;
  image_url: string | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, author, published_at, image_url")
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Conseils Monte-Escalier & MaPrimeAdapt' | Tout savoir sur l'adaptation du logement</title>
        <meta
          name="description"
          content="Découvrez nos conseils d'experts sur les monte-escaliers, MaPrimeAdapt', l'adaptation du logement pour les seniors et les aides financières disponibles."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Blog & Conseils
                </h1>
                <p className="text-xl text-gray-600">
                  Tout ce qu'il faut savoir sur les monte-escaliers, MaPrimeAdapt' et l'adaptation de votre logement
                </p>
              </div>

              {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="h-full animate-pulse">
                      <div className="h-48 bg-gray-200 rounded-t-lg" />
                      <CardHeader>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-6 bg-gray-200 rounded w-full" />
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-5/6" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">Aucun article disponible pour le moment.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {posts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {post.image_url && (
                          <div className="overflow-hidden h-48">
                            <img
                              src={post.image_url}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(new Date(post.published_at), "d MMMM yyyy", { locale: fr })}
                          </div>
                          <CardTitle className="group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-3 mb-4">
                            {post.excerpt}
                          </CardDescription>
                          <div className="flex items-center text-blue-600 font-medium">
                            Lire la suite
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
