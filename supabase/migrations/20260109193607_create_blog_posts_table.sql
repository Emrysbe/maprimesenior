/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, not null) - Title of the blog post
      - `slug` (text, unique, not null) - URL-friendly slug for SEO
      - `excerpt` (text, not null) - Short summary/preview of the article
      - `content` (text, not null) - Full article content (supports Markdown)
      - `author` (text, not null) - Author name
      - `published_at` (timestamptz, not null) - Publication date and time
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
      - `image_url` (text) - Featured image URL for the article
      - `meta_description` (text) - SEO meta description
      - `meta_keywords` (text array) - SEO keywords

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access (blog is public content)
    
  3. Important Notes
    - All blog posts are publicly readable
    - Slugs are unique to ensure clean URLs
    - Published_at allows scheduling future posts
    - Content field supports Markdown formatting
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'MaPrimeAdapt',
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  image_url text,
  meta_description text,
  meta_keywords text[]
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published_at <= now());