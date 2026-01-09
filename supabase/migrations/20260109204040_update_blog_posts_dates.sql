/*
  # Update blog posts publication dates
  
  1. Changes
    - Update publication dates to December 2025 and January 2026
    - Makes the blog appear active and current
    
  2. Updated Articles
    - "Installation d'un monte-escalier" → December 5, 2025
    - "Autonomie à domicile : 5 aménagements essentiels" → December 15, 2025
    - "Monte-escalier droit ou tournant" → December 28, 2025
    - "MaPrimeAdapt' 2024" → January 5, 2026 (most recent)
    
  3. Important Notes
    - Articles are spread across December 2025 to January 2026
    - Most recent article is from early January 2026
    - Creates an active, up-to-date blog appearance
*/

UPDATE blog_posts 
SET published_at = '2025-12-05 10:00:00+00'
WHERE slug = 'installation-monte-escalier-guide-pratique';

UPDATE blog_posts 
SET published_at = '2025-12-15 14:30:00+00'
WHERE slug = 'amenagements-essentiels-seniors-autonomie-domicile';

UPDATE blog_posts 
SET published_at = '2025-12-28 09:00:00+00'
WHERE slug = 'choisir-monte-escalier-droit-tournant-guide';

UPDATE blog_posts 
SET published_at = '2026-01-05 11:00:00+00'
WHERE slug = 'maprimeadapt-2024-guide-complet-aides-monte-escalier';
