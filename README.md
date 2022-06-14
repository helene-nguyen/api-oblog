# API O'blog

Il est temps pour vous de mettre en pratique toutes les bonnes pratiques et les outils que l'on a découvert en ce début de Spé API & Data.

Les apprenants en spé React vont bientôt coder une petite application de blog qui consomme une API simpliste (vous me direz, c'est pas très important, ils se concentrent sur le front). Du coup, on pourrait peut-être reprendre le concept mais l'étendre grâce aux super-pouvoirs d'Express et Postgres, non ? C'est beau de collaborer entre spés, vous trouvez pas ?

Je vous propose donc de vous baser sur [cette structure de données](https://oclock-open-apis.now.sh/) (uniquement _posts_ et _catégories_).

On va donc recoder les routes :

- `GET /posts` qui affiche la liste des articles dans notre base de données
- `GET /categories` qui fait la même chose pour les catégories

Puis d'y apporter quelques fonctionnalités :

- Une route `GET /posts/:id` pour afficher un unique article à partir de son _id_
- Une route `POST /posts` pour créer un article avec validation des données.
- Une route `GET /posts/category/:id` idem mais pour n'afficher que les articles d'une catégorie précise

Pour être sur que *id* a bien la forme d'un id (donc un nombre) et pas n'importe quoi (comme "tarteauxfraises" par exemple) on peut utiliser une feature d'Express : la validation des paramètres d'URL via les expressions régulières ! Plus d'info [par ici](https://expressjs.com/en/guide/routing.html#route-parameters).

## :gift: Bonus

Faire la documentation de l'API avec JSDoc et Swagger, et, si vous avez encore du temps, une page d'accueil rapide avec un lien vers cette documentation.

## :superhero: Super bonus

Les routes complètes dans ce [tableau de routes](./docs/routes.md).

Les routes POST et PATCH devront utiliser [Joi](https://www.npmjs.com/package/joi) pour valider les données passées dans la requête.

---

## :warning: Hépépép

Partez pas tête dans le guidon, tout bon projet commence par une phase de conception. Pour que votre API envoie du poney, il faut qu'elle puisse accéder à une base robuste et sécurisée. 

Alors on commence par dresser le MCD du projet (ça devrait aller :smirk:), puis on applique les règles de transformation.

On se crée un nouveau projet Sqitch, dans un sous-dossier `migrations` par exemple (ou `alphonse`, c'est sympa aussi), on écrit une première migration, on configure, on déploie et si plus tard, on se dit "tiens, ce type-là, c'est peut-être pas le choix le plus judicieux", on fera une nouvelle migration, tout simplement.

D'ailleurs a ce propos, il y a peut-être des colonnes en BDD qui pourrait être vérifiés grâce à ces fameuses expressions régulières… A vous de voir !

## :pencil: Ordo Ab Chao

Le projet est modeste mais c'est pas une raison pour _coder sale_.

On pense à toute l'architecture que l'on a vu sur l'API cadex :

- Configuration de l'environnement de développement
- Routeurs organisés
- Gestion des erreurs
- Debug et logs d'erreurs

## On met rien dans les tables ?

Si si, les données sont dans le dossier [`./data`](./data) de ce repo.

Ah, par contre, c'est pas des insertions SQL, c'est du JSON, mais vous avez normalement toutes les compétences nécessaires pour créer ce qu'on appelle dans le jargon métier un _import ad hoc_ : un petit script sur mesure pour créer un pont entre 2 technos qui ne savent pas communiquer nativement (ici JSON et SQL). Vous pouvez vous y frotter en premier ou en dernier, mais si vous commencez par ça, l'avantage que votre API aura tout de suite des données à afficher :wink:

<details>
<summary>Comment faire ?</summary>

1. Créer un script sobrement nommé `./data/import.js` : ben oui, le pont le plus évident entre JSON et SQL, c'est Javascript.
2. Récupérer les données du fichier JSON
3. Boucler sur ces données
4. Pour chaque donnée, exécuter une requête d'insertion SQL
5. Parce que vous allez probablement essayer plusieurs fois avant d'y arriver, vous allez avoir des problèmes d'unicité et autres joyeusetés SQL : prévoyez de faire table rase des données déjà dans la base avant de commencer à boucler :bomb:

</details>
