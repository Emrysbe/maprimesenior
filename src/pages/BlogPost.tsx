import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  image_url: string | null;
  meta_description: string | null;
  meta_keywords: string[] | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching blog post:", error);
        navigate("/404");
      } else if (!data) {
        navigate("/404");
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-8" />
              <div className="h-64 bg-gray-200 rounded mb-8" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return null;
  }

  const readingTime = Math.ceil(post.content.split(" ").length / 200);

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog MaPrimeAdapt Monte-Escalier</title>
        <meta
          name="description"
          content={post.meta_description || post.excerpt}
        />
        {post.meta_keywords && post.meta_keywords.length > 0 && (
          <meta name="keywords" content={post.meta_keywords.join(", ")} />
        )}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <article className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <Link to="/blog" className="inline-block mb-8">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour au blog
                </Button>
              </Link>

              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(post.published_at), "d MMMM yyyy", { locale: fr })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {readingTime} min de lecture
                  </div>
                  <div className="text-sm">
                    Par <span className="font-medium">{post.author}</span>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </header>

              {post.image_url && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/blog">
                  <Button variant="outline" className="group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Voir tous les articles
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
