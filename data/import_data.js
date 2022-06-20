// http://www.node-postgres.com/

//? Utilisation de cette méthode dans le cas où l'on cherche à lancer 
//? le fichier import_data.js directement depuis le dossier data
//? ( Path Terminal : /API_Oblog/data )
//? En effet nous avons besoin du .env pour récupérer les variables d'environnements
//! For ESMODULE, to get __dirname
//~ IMPORTATION PATH;
// import path from 'path';
// import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const dotenvPath = path.resolve(__dirname, "../.env");

//! Permet de fractionner notre dotenv en version ESMODULE
// import dotenv from 'dotenv';
// dotenv.config({ path: dotenvPath });
// console.log(dotenv.config({ path: dotenvPath }))

//? Dans le cas où l'on lance notre fichier import_data.js
//? directement depuis le root de notre API ( Path Terminal : /API_Oblog )
//~ IMPORTATION DOTENV
import 'dotenv/config';

//~ IMPORTATION DATA ---> utilisation de assert {type: "json"} (encore expérimental)
import articlesData from './posts.json' assert {type: 'json'};
import categoriesData from './categories.json' assert {type: 'json'};

//~ IMPORTATION CLIENT
// import pg from 'pg';
//? Méthode manuelle pour configurer les variables d'environnements
// const client = new pg.Client({
//     connectionString:process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// import {client} from '../app/services/database.js';
// console.log(client);

//~ FUNCTION IMPORT AD HOC
async function importAdHoc() {
    // Connexion à la BDD
    await client.connect();

    //* Boucle pour le fichier posts.json

    for (const article of articlesData) {
        // console.log(article)
        // article représente les colonnes de articlesData
        const query = {
            text: `
            INSERT INTO "article"("${Object.keys(article)[0]}", "${Object.keys(article)[1]}", "${Object.keys(article)[2]}", "${Object.keys(article)[3]}","${Object.keys(article)[4]}")
            VALUES ($1, $2, $3, $4, $5);`,
            values: [`${article.category}`, `${article.slug}`,`${article.title}`,`${article.excerpt}`,`${article.content}`]
        };
    
        // await client.query(query);
    } 

    //* Boucle pour le fichier categories.json
    for (let category of categoriesData) {
        // console.log(Object.keys(category)[1])

        // category représente les colonnes de categoriesData
            const query = {
                text: `
                INSERT INTO "category"("${Object.keys(category)[0]}", "${Object.keys(category)[1]}")
                VALUES ($1, $2);`,
                values: [`${category.route}`, `${category.label}`]
            };
        
            // await client.query(query);
        
    }

    // Déconnexion à la BDD
    await client.end(); 
}

importAdHoc();
