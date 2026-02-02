# Guide d'utilisation du CMS Blog

## Vue d'ensemble

Votre site dispose maintenant d'un système complet de gestion de contenu (CMS) pour créer, modifier et publier des articles de blog. Le front public reste intact, et tous les changements se font via une interface d'administration dédiée.

## Accès à l'administration

### URL d'accès
- Interface d'administration : `/admin`
- Page de connexion : `/admin/login`

### Première connexion

Pour accéder à l'interface d'administration, vous devez d'abord créer un compte administrateur dans Supabase :

1. Connectez-vous à votre dashboard Supabase
2. Allez dans "Authentication" > "Users"
3. Cliquez sur "Add user" > "Create new user"
4. Entrez un email et un mot de passe
5. Utilisez ces identifiants pour vous connecter sur `/admin/login`

## Fonctionnalités du CMS

### 1. Liste des articles
- Visualisation de tous les articles (publiés et brouillons)
- Badges de statut (Publié / Brouillon)
- Actions rapides : Publier/Dépublier, Modifier, Supprimer

### 2. Création d'article

Cliquez sur "Nouvel article" pour créer un article. Le formulaire comprend 3 onglets :

#### Onglet "Contenu"
- **Titre*** : Titre principal de l'article
- **Slug*** : URL de l'article (généré automatiquement depuis le titre)
  - Exemple : "mon-super-article" → URL sera `/blog/mon-super-article`
- **Résumé** : Court texte d'introduction affiché sur la page blog
- **Contenu*** : Contenu complet de l'article (HTML accepté)
- **URL de l'image** : Lien vers l'image principale

#### Onglet "SEO"
- **Meta Title** : Titre optimisé pour les moteurs de recherche (60 caractères max)
- **Meta Description** : Description pour les résultats de recherche (160 caractères max)

#### Onglet "Paramètres"
- **Auteur** : Nom de l'auteur de l'article
- **Publier l'article** : Switch pour publier/dépublier l'article

### 3. Modification d'article

Cliquez sur l'icône "Modifier" (crayon) pour éditer un article existant.

### 4. Publication

- Les articles en **brouillon** ne sont pas visibles sur le site public
- Les articles **publiés** apparaissent immédiatement sur la page `/blog`
- Utilisez le bouton œil pour publier/dépublier rapidement

### 5. Suppression

Cliquez sur l'icône "Supprimer" (poubelle) et confirmez. **Cette action est irréversible.**

## Format du contenu

Le champ "Contenu" accepte du HTML. Voici quelques exemples :

### Paragraphes
```html
<p>Votre texte ici.</p>
```

### Titres
```html
<h2>Titre de section</h2>
<h3>Sous-titre</h3>
```

### Listes
```html
<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>
```

### Gras et italique
```html
<strong>Texte en gras</strong>
<em>Texte en italique</em>
```

### Liens
```html
<a href="/blog/autre-article">Lien vers un article</a>
```

## Articles existants

Les 5 articles existants continuent de fonctionner normalement avec leurs routes spécifiques. Ils ne sont pas stockés dans la base de données mais restent accessibles :

- `/blog/douche-senior-ma-prime-adapt-guide-complet`
- `/blog/maprimeadapt-2024-guide-complet-aides-monte-escalier`
- `/blog/choisir-monte-escalier-droit-tournant-guide`
- `/blog/amenagements-essentiels-seniors-autonomie-domicile`
- `/blog/installation-monte-escalier-guide-pratique`

## Comment ça fonctionne ?

### Architecture
1. **Base de données** : Table `articles` dans Supabase
2. **Sécurité** : Row Level Security (RLS)
   - Tout le monde peut lire les articles publiés
   - Seuls les utilisateurs authentifiés peuvent gérer les articles
3. **Interface publique** : `/blog` affiche les articles de la base de données + les articles existants
4. **Interface admin** : `/admin` permet de gérer les articles

### Workflow de publication
1. Créez un article (brouillon par défaut)
2. Rédigez le contenu
3. Optimisez le SEO
4. Prévisualisez si nécessaire
5. Activez "Publier l'article"
6. Enregistrez
7. L'article apparaît immédiatement sur `/blog`

## Sécurité

- L'accès à `/admin` nécessite une authentification
- Les non-authentifiés sont redirigés vers `/admin/login`
- Les données sensibles ne sont jamais exposées au front public
- RLS protège la base de données

## Support et personnalisation

### Ajouter des fonctionnalités
Le CMS peut être étendu pour inclure :
- Catégories et tags
- Upload d'images
- Éditeur WYSIWYG
- Prévisualisation en temps réel
- Planification de publication
- Statistiques de lecture

### Gestion des images
Actuellement, les images doivent être hébergées en ligne (Pexels, Imgur, etc.). Vous pouvez :
- Uploader des images sur Supabase Storage
- Utiliser un service d'images externe
- Copier l'URL de l'image et la coller dans le champ "URL de l'image"

## Conseils pratiques

1. **Slug** : Utilisez des mots-clés pertinents, séparés par des tirets
2. **SEO** : Remplissez toujours les champs Meta Title et Meta Description
3. **Images** : Utilisez des images optimisées (format WebP, compression)
4. **Contenu** : Structurez avec des titres H2, H3 pour la lisibilité
5. **Brouillons** : Sauvegardez régulièrement même en mode brouillon

## Dépannage

### Je ne peux pas me connecter
- Vérifiez que le compte existe dans Supabase Auth
- Vérifiez email et mot de passe
- Consultez les logs Supabase pour les erreurs

### Les articles n'apparaissent pas
- Vérifiez que l'article est **publié** (pas en brouillon)
- Actualisez la page `/blog`
- Vérifiez la console navigateur pour les erreurs

### Erreur lors de la sauvegarde
- Vérifiez que les champs obligatoires (*) sont remplis
- Le slug doit être unique
- Vérifiez la connexion Supabase

## Conclusion

Vous disposez maintenant d'un CMS complet et sécurisé pour gérer votre blog. Le site public reste intact, et vous pouvez publier de nouveaux articles en quelques clics sans toucher au code.
