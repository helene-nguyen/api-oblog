
// http://www.node-postgres.com/
//~ IMPORTATION DOTENV
import 'dotenv/config';
// import dotenv from 'dotenv';
// dotenv.config();
//~ IMPORTATION DATA ---> utilisation de assert {type: "json"} (encore expérimental)
import articlesData from './posts.json' assert {type: 'json'};
import categoriesData from './categories.json' assert {type: 'json'};

//~ IMPORTATION DE PG CLIENT
import pg from 'pg';
const client = new pg.Client({
    user: 'oblog',
    password: 'oblog',
    database: 'oblog',
});



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
