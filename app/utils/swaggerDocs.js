
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
        // description: `*TEAM MALABOU* Voici l'API de la Minithéose (PS: vive la spé data !)`,
        description: `<h2><em>TEAM MALABOU</em></h2>
        <p>Voici l'API de la Minithéose -> vive la spé data !</p>
        <p>Cette API a été faite avec amour et plein d'entrain en binôme par Frédéric Basler et Hélène Nguyen.</p>
        <p>L'API permet la création d'articles et de catégories avec toutes les options d'édition, de suppression ou de mise à jour.</p>
        <p>Il s'agit ici d'une version incomplète et à améliorer mais les routes sont fonctionnelles.</p>
        <p>Merci de nous avoir lu !</p>
        <p>Hélène & Fredo</p>`,
        license: {
            name: "MIT",
        },
    },
    paths:{
        
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic",
        },
    },
    swaggerUIPath: "/api-docs" ,
    baseDir: __dirname,
    filesPattern: "../**/*.js",
};
  
export { options };