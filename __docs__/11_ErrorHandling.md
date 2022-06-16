# Gestion des erreurs

Mise en place de la création d'un fichier log qui se génère automatiquement lorsque l'API reçoit une erreur.

## Création d'un fichier errorHandling.js

```js
//~ NOS IMPORTATIONS 
import path from "path";
// import * as fs from 'fs';
import * as fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorHandling = {
    /**
     * Gère les erreurs
     */
    manage(err, req, res) { 
        console.log("Manage", err.message);

        // Enregistrer l'erreur dans des logs
        const actualDate = new Date();

        // Formatage du message ( Heure + informations de l'erreur)
        // Return 00:00:00 GMT+0200 (heure d’été d’Europe centrale) - /api/v1/{path} - "mon erreur"
        const logMessage = `${actualDate.toTimeString()} - ${req.url} - ${err.message}\r`;
        console.log("Message du log", logMessage);

        // Formatage du nom du fichier de log (Année-Mois-Jour)
        // Return 2022-5-4.log
        const fileName = `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}.log`;
        console.log("Nom du fichier de log", fileName);

        // Ajout d'une ligne au fichier de log (création de celui-ci s'il n'existe pas)
        fs.appendFile(path.join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {
            if (error) console.log(error);
        });
    },
};

export { errorHandling };
```

## Importer errorHandling dans errorController

```js
//~ IMPORTATION DU MODULE ERRORHANDLING
import { errorHandling } from '../services/errorHandling.js';

//~ ERRORS CONTROLLERS
//...

function _500(err, req, res) {
  errorHandling.manage(err, req, res);
  res.status(500).json({ 'Error 500': err.message });
}
```

## Création auto du fichier

Exemple de fichier généré dans le dossier log :

`2022-5-4.log`

Ainsi que son contenu :

```js
19:30:09 GMT+0200 (heure d’été d’Europe centrale) - /api/v1/posts - ceci est une erreur forcée
19:30:39 GMT+0200 (heure d’été d’Europe centrale) - /api/v1/posts - ceci est une deuxième erreur forcée
19:31:51 GMT+0200 (heure d’été d’Europe centrale) - /api/v1/posts - ceci est une  erreur forcée pour le plaisir !
```

[Retour à la page d'accueil](../README.md)