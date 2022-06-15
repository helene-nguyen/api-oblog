# Mise en place du serveur

    - Création du point d'entrée index.js

Pour la création du serveur, on va importer dans notre fichier tous les modules nécessaires au fonctionnement du serveur.

Ci-dessous notre structure

```js
//~ENVIRONNEMENT
import 'dotenv/config';

//~IMPORT DES MODULES
import express from 'express';
const app = express();

import { router } from './app/routes/index.js';
import { _404 } from './app/controllers/errorController.js';

//~MISE EN PLACE DE SWAGGER POUR LA DOC
import expressJSDocSwagger from 'express-jsdoc-swagger';
import { options } from './app/utils/swaggerDocs.js';

expressJSDocSwagger(app)(options);

//~PROTECTION DE NOTRE API
import helmet from 'helmet';
app.use(helmet());

//~ENCODAGE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//~AUTORISATION DES CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  next();
});

//~ROUTE
app.use(router);

//~ERROR
app.use(_404);

//~LANCEMENT DU SERVEUR
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
   console.log(`\x1b[1;33m\u26a1Running server on : http://localhost:${PORT} \u26a1\x1b[0m`);
});
```

Les démarches importantes à effectuer sont :

- La configuration du fichier `.env` et l'importation de son module pour l'utilisation des variables d'environnement
- L'importation du module Express
- L'importation de notre router
- L'importation de notre fichier pour la gestion des erreurs à renvoyer
- La mise en place de Swagger pour la documentation de notre code
- La protection de notre API avec **Helmet**
- L'encodage pour la récupération des données du body
- La gestion des CORS pour les autorisations d'utilisation de notre API
- Le lancement de notre serveur

[Retour à la page d'accueil](../README.md)