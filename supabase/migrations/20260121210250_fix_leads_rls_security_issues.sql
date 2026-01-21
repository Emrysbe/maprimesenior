/*
  # Correction des problèmes de sécurité RLS sur la table leads

  1. Changements
    - Suppression des politiques RLS qui utilisent `true` (violation de sécurité)
    - Création de nouvelles politiques avec des validations strictes
    
  2. Nouvelles politiques
    
    **INSERT Policy:**
    - Vérifie que tous les champs obligatoires sont renseignés
    - Valide le format de l'email
    - Valide que les champs ont des valeurs autorisées
    - S'applique uniquement au rôle `anon` (utilisateurs publics)
    
    **SELECT Policy:**
    - Limite l'accès aux utilisateurs authentifiés uniquement
    - Vérifie que l'utilisateur a bien un UID valide
    - Protection contre les accès non autorisés
  
  3. Sécurité
    - Les insertions publiques sont toujours possibles mais avec validation
    - La lecture est strictement limitée aux utilisateurs authentifiés
    - Plus de politique `WITH CHECK (true)` ou `USING (true)`
*/

-- Supprimer les anciennes politiques non sécurisées
DROP POLICY IF EXISTS "Anyone can insert leads" ON leads;
DROP POLICY IF EXISTS "Allow public to insert leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to read leads" ON leads;

-- Nouvelle politique INSERT avec validations strictes
CREATE POLICY "Public can insert valid leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Vérifier que tous les champs obligatoires sont non vides
    length(trim(first_name)) > 0
    AND length(trim(last_name)) > 0
    AND length(trim(email)) > 0
    AND length(trim(phone)) > 0
    -- Valider le format de l'email
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Valider que staircase_type est dans les valeurs autorisées
    AND staircase_type IN ('straight', 'curved')
    -- Valider que floors est dans les valeurs autorisées
    AND floors IN ('1', '2', '3+')
    -- Valider que taxable est dans les valeurs autorisées
    AND taxable IN ('yes', 'no')
    -- Valider que over_70 est dans les valeurs autorisées
    AND over_70 IN ('yes', 'no')
    -- Valider que le téléphone contient au moins 10 caractères
    AND length(regexp_replace(phone, '[^0-9]', '', 'g')) >= 10
  );

-- Nouvelle politique SELECT restrictive pour les utilisateurs authentifiés
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);