/*
  # Fix blog posts RLS policy
  
  1. Changes
    - Drop the existing restrictive policy that filters by published_at
    - Create a new simple policy that allows all users to read all blog posts
    
  2. Security
    - Blog posts are public content, so all posts should be readable by everyone
    - No authentication required to view blog posts
    
  3. Important Notes
    - This removes the published_at filter from RLS
    - Application can still filter by date if needed
*/

DROP POLICY IF EXISTS "Blog posts are publicly readable" ON blog_posts;

CREATE POLICY "Allow public read access to blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);
