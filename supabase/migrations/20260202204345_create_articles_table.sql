/*
  # Create articles table for blog CMS

  1. New Tables
    - `articles`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly identifier
      - `excerpt` (text) - Short description
      - `content` (text) - Full article content (Markdown/HTML)
      - `image_url` (text) - Main article image URL
      - `author` (text) - Author name
      - `published` (boolean) - Publication status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Creation date
      - `updated_at` (timestamptz) - Last update date
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description

  2. Security
    - Enable RLS on `articles` table
    - Add policy for public read access to published articles
    - Add policy for authenticated admin users to manage articles

  3. Indexes
    - Index on slug for fast lookups
    - Index on published_at for sorting
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL,
  image_url text DEFAULT '',
  author text DEFAULT 'Admin',
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  meta_title text DEFAULT '',
  meta_description text DEFAULT ''
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published articles
CREATE POLICY "Anyone can read published articles"
  ON articles
  FOR SELECT
  USING (published = true);

-- Policy: Authenticated users can read all articles (for admin)
CREATE POLICY "Authenticated users can read all articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert articles
CREATE POLICY "Authenticated users can insert articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update articles
CREATE POLICY "Authenticated users can update articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete articles
CREATE POLICY "Authenticated users can delete articles"
  ON articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS articles_slug_idx ON articles(slug);
CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS articles_published_idx ON articles(published) WHERE published = true;

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS articles_updated_at_trigger ON articles;
CREATE TRIGGER articles_updated_at_trigger
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_articles_updated_at();