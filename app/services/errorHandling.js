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
        // 1. Enregistrer l'erreur dans des logs
        const actualDate = new Date();
        // formatage du message ( Heure + informations de l'erreur)
        const logMessage = `${actualDate.toTimeString()} - ${req.url} - ${err.message}\r`;
        console.log("Message du log", logMessage);
        // formatage du nom du fichier de log (Année-Mois-Jour)
        const fileName = `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}.log`;
        console.log("Nom du fichier de log", fileName);
        // ajout d'une ligne au fichier de log (création de celui-ci s'il n'existe pas)
        fs.appendFile(path.join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {
            if (error) console.log(error);
        });
    },
};

export { errorHandling };