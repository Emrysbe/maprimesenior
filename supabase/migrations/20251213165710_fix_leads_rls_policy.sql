/*
  # Correction de la politique RLS pour permettre l'insertion publique
  
  1. Changements
    - Supprimer l'ancienne politique "Allow public to insert leads" 
    - Créer une nouvelle politique qui utilise TO public au lieu de TO anon
    - Cela permet à tout le monde (y compris les edge functions) d'insérer des données
  
  2. Sécurité
    - Les insertions restent ouvertes pour le formulaire public
    - La lecture reste limitée aux utilisateurs authentifiés
*/

DROP POLICY IF EXISTS "Allow public to insert leads" ON leads;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);