
//! Pour les modules ES6, récupérer le __dirname
//source : https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope#:~:text=The%20__dirname%20or%20__,directory%20name%20of%20the%20path.
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const options = {
    info: {
        version: "1.0.0",
        title: "API Oblog",
        license: {
            name: "MIT",
        },
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic",
        },
    },
    swaggerUIPath: "/api-docs" ,
    baseDir: __dirname,
    filesPattern: "./**/*.js",
};
  
export { options };