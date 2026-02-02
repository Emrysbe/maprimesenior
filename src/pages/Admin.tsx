import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Plus, LogOut } from 'lucide-react';
import ArticlesList from '@/components/admin/ArticlesList';
import ArticleEditor from '@/components/admin/ArticleEditor';

export default function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setIsLoading(false);

    if (!session) {
      navigate('/admin/login');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleNewArticle = () => {
    setEditingArticleId(null);
    setShowEditor(true);
  };

  const handleEditArticle = (id: string) => {
    setEditingArticleId(id);
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
    setEditingArticleId(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Administration - Blog</h1>
          <div className="flex gap-2">
            {!showEditor && (
              <Button onClick={handleNewArticle}>
                <Plus className="w-4 h-4 mr-2" />
                Nouvel article
              </Button>
            )}
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showEditor ? (
          <ArticleEditor
            articleId={editingArticleId}
            onClose={handleCloseEditor}
          />
        ) : (
          <ArticlesList onEdit={handleEditArticle} />
        )}
      </main>
    </div>
  );
}
