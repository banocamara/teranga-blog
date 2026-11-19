# JOURNAL.md

## Étape 1 — Composants et Props

**Date :** 19 novembre 2026

### 1. Utilisation de l'IA

**Question posée :**  
J'ai demandé à ChatGPT de vérifier mon travail sur les composants `ArticleCard.jsx` et `Accueil.jsx`, notamment l'utilisation des props et l'affichage de trois articles différents.

### 2. Ce que j'ai retenu

- Un composant React permet de réutiliser une même structure d'interface.
- Les props permettent de transmettre des données d'un composant parent vers un composant enfant.
- Un composant peut être réutilisé plusieurs fois avec des données différentes.
- Les props ne doivent pas être modifiées directement.
- Les balises HTML doivent être correctement organisées pour respecter la structure HTML.

### 3. Ce que j'ai écrit moi-même

- J'ai créé le composant `ArticleCard.jsx`.
- J'ai utilisé la prop `article` pour récupérer les informations d'un article.
- J'ai affiché l'identifiant, le titre et le contenu de chaque article.
- J'ai importé `ArticleCard` dans `Accueil.jsx`.
- J'ai affiché trois articles différents en réutilisant le même composant, sans utiliser de boucle.

### 4. Bilan personnel

Cette étape m'a permis de comprendre comment créer un composant réutilisable et comment lui transmettre des données avec les props. Je comprends maintenant qu'il n'est pas nécessaire de créer plusieurs composants pour afficher des articles ayant la même structure.