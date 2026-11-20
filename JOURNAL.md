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


## Étape 2 — Gestion des favoris et remontée de l'état

**Date :** 20 novembre 2026

### 1. Utilisation de l'IA
J'ai utilisé ChatGPT pour vérifier mon implémentation des favoris et comprendre les erreurs dans la communication entre mes composants React.

### 2. Ce que j'ai retenu
- `useState` permet de gérer un état dans un composant React.
- La remontée de l'état consiste à placer un état dans le parent commun des composants concernés.
- `includes()` permet de vérifier si un article est déjà dans les favoris.
- `filter()` permet de retirer un article d'un tableau.
- Le spread operator (`...`) permet de créer un nouveau tableau.
- `favoris.length` permet de connaître le nombre total de favoris.

### 3. Ce que j'ai réalisé moi-même
- J'ai ajouté la possibilité d'ajouter et de retirer des articles des favoris.
- J'ai affiché le nombre total de favoris.
- J'ai transmis les informations et les fonctions nécessaires entre `Accueil` et `ArticleCard`.
- J'ai adapté le texte du bouton selon l'état de chaque article.

### 4. Bilan personnel
Cette étape m'a permis de mieux comprendre `useState`, les props et la remontée de l'état. J'ai également appris à modifier un tableau sans changer directement le tableau initial.

## Étape 3 — Listes, recherche et commentaires
**Date : 20 novembre 2026**

### Utilisation de l'intelligence artificielle

J'ai utilisé ChatGPT pour comprendre les erreurs dans mes composants React et améliorer leur fonctionnement.

Mes questions portaient principalement sur :
- L'utilisation de `map()` pour afficher une liste d'articles.
- La transmission des propriétés (props) entre les composants.
- La gestion des favoris avec `useState`.
- Le fonctionnement de `filter()`, `includes()` et `toLowerCase()` pour la recherche.
- La création d'un formulaire contrôlé avec validation.
- L'affichage dynamique des commentaires.

### Ce que j'ai retenu

J'ai compris que :
- `map()` permet de parcourir un tableau et d'afficher ses éléments.
- `key` permet à React d'identifier chaque élément d'une liste.
- `filter()` permet de créer un nouveau tableau contenant uniquement les éléments qui respectent une condition.
- `useState` permet de conserver les données et de mettre à jour l'affichage.
- `onChange` permet de récupérer les modifications d'un champ.
- `preventDefault()` empêche le rechargement automatique de la page lors de la soumission d'un formulaire.
- `trim()` permet de supprimer les espaces inutiles avant de valider un commentaire.

### Ce que j'ai réalisé moi-même

J'ai modifié les composants suivants :
- `ListeArticles.jsx`
- `BarreRecherche.jsx`
- `CommentaireForm.jsx`
- `ListeCommentaires.jsx`
- `Accueil.jsx`
- `ArticleCard.jsx`

J'ai également organisé les états dans la page Accueil pour gérer les favoris, la recherche et les commentaires.

### Bilan

Cette étape m'a permis de mieux comprendre la communication entre plusieurs composants React, l'affichage dynamique des listes et la gestion des formulaires.

J'ai rencontré quelques erreurs de propriétés et de variables, que j'ai appris à identifier et à corriger.