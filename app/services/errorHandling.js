//~ NOS IMPORTATIONS 
import path from "path";
// import * as fs from 'fs';
import * as fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import debug from 'debug';
const logger = debug('errorhandler');

logger('HERE IN ERROR HANDLING !');

const errorHandling = {
    /**
     * Gère les erreurs
     */
    manage(err, req, res) { 
        logger("Manage", err.message);
        // Enregistrer l'erreur dans des logs
        
        const actualDate = new Date();

        // formatage du message ( Heure + informations de l'erreur)
        const logMessage = `${actualDate.toTimeString()} - ${req.url} - ${err.message}\r`;
        logger("Message du log", logMessage);

        // formatage du nom du fichier de log (Année-Mois-Jour)
        const fileName = `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}.log`;
        logger("Nom du fichier de log", fileName);

        // ajout d'une ligne au fichier de log (création de celui-ci s'il n'existe pas)
        fs.appendFile(path.join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {
            if (error) logger(error);
        });
    },
};

export { errorHandling };