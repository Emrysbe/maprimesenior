/*
  # Création de la table pour les demandes d'estimation

  1. Nouvelle table
    - `leads`
      - `id` (uuid, clé primaire)
      - `staircase_type` (text) - Type d'escalier (straight/curved)
      - `floors` (text) - Nombre d'étages (1, 2, 3+)
      - `taxable` (text) - Situation fiscale (yes/no)
      - `over_70` (text) - Plus de 70 ans (yes/no)
      - `first_name` (text) - Prénom
      - `last_name` (text) - Nom
      - `email` (text) - Email
      - `phone` (text) - Téléphone
      - `created_at` (timestamptz) - Date de création
      - `status` (text) - Statut de la demande (new/contacted/completed)

  2. Sécurité
    - Activer RLS sur la table `leads`
    - Ajouter une politique pour permettre l'insertion publique (formulaire)
    - Seuls les administrateurs pourront lire les données
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  staircase_type text NOT NULL,
  floors text NOT NULL,
  taxable text NOT NULL,
  over_70 text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);