//~import modules
import { formattedDate } from "../utils/formattedDate.js";

//~resolve __dirname
import path from "path";

import * as fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//~logger
import debug from 'debug';
const logger = debug('test');

logger('HERE IN ERROR HANDLING !');


const errorHandling = {
    /**
     * Manage error
     */
    manage(err, req, res) {
        logger("Manage", err.message);
        //register error in logs

        const actualDate = new Date();
        // formatag message ( hour + informations)
        const logMessage = `${actualDate.toLocaleString()} - ${ req.url } - ${err.message}\r`;

        logger("Message du log", logMessage);

        // format date
        const fileName = `${formattedDate}.log`;
        logger("Nom du fichier de log", fileName);
        // add line or create file to add error logged
            fs.appendFile(path.join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {
                if (error) logger(error);
            });
    },
};

export { errorHandling };