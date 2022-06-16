![title](./__docs__/img/Title.jpg)

# TEAM MALABOU - API O'blog

@Fredo & @Helene

## Etude du projet

Tout le détail de notre initialisation de la gestion du projet se trouve [ici](./__docs__/01_Mise%20en%20place%20API)

## Mise en place de la base de données

Tout le détail de la mise en place de la base de données et de l'outil de versioning Sqitch c'est par [là](./__docs__/02_Base%20de%20donn%C3%A9es.md)

## Initialisation du projet

Toutes les étapes que nous avons effectué pour l'initialisation du projet sont [ici](./__docs__/03_Initialisation.md)

## Lancement du serveur

Le détail pour construire et lancer notre serveur se trouve [ici](./__docs__/04_Serveur.md)

## Mise en place des routes

Tout le détail de notre établissement des routes à partir des instructions suivantes

=> Routes nécessaire pour l'API O'blog

| route               |  GET  | POST  | PATCH | DELETE |
| ------------------- | :---: | :---: | :---: | :----: |
| /posts              |   ✅   |   ✅   |   ❌   |   ❌    |
| /posts/:id          |   ✅   |   ❌   |   ✅   |   ✅    |
| /posts/category/:id |   ✅   |   ❌   |   ❌   |   ❌    |
| /categories         |   ✅   |   ✅   |   ❌   |   ❌    |
| /categories/:id     |   ✅   |   ❌   |   ✅   |   ✅    |

C'est par [ici](./__docs__/05_Routes.md)

---

## Schéma pour la validation de notre body

Nous avons utilisé le module [Joi](https://joi.dev/api/?v=17.6.0) pour la validation des informations récupérées de notre body.

Tout le détail de notre démarche est [là](./__docs__/06_Schema.md)

## Mise en place du datamapper pour les requêtes

Pour les requêtes à la base de données, nous avons chois de passer par un datamapper.

Tout le détail est [ici](./__docs__/07_Datamapper.md)

## Mise en place des Models

Mise en place des class Article et Category dans l'optique de générer de nouvelles instances.

Tout le détail est [ici](./__docs__/08_Models.md)

## Mise en place des controllers

Tout le détail de notre gestion des controllers c'est par [là](./__docs__/09_Controllers.md)

---

## Notre documentation Swagger

=> TODO SWAGGER LINK

Todo :

<!-- - Import AD HOC -->
- SwaggerDocs
<!-- - Controllers => toutes les méthodes -->
<!-- - CRUD + join category + implémentations -->
<!-- - Routes => functions -->
  <!-- - Requêtes paramétrées ( Route path: /user/:userId(\d+)  ) -->
  <!-- - Utilisation de npm Joi (PATCH & POST) -->
<!-- - restClient => tests des routes -->
<!-- - DataMapper -->
- CREATE DOMAIN ( CHECK )
- Création d'un fichier log "error" (newDate)

```sql
CREATE DOMAIN v_plate_fr AS TEXT
CHECK(
     VALUE ~ '/^((?!WW|SS|[OUI])[A-Z]){2}-(\d{3})-((?!WW|SS|[OUI])[A-Z]){2}$/gm'
);
```

<!-- - Création des class MODELS (intermédiaire (avant le controller, après le dataMapper)) -->
