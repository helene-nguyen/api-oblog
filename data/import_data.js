// http://www.node-postgres.com/
//~ IMPORTATION DOTENV
import 'dotenv/config';

//~ IMPORTATION DATA ---> utilisation de assert {type: "json"} (encore expérimental)
import articlesData from './posts.json' assert {type: 'json'};
import categoriesData from './categories.json' assert {type: 'json'};

//~ IMPORTATION DE PG CLIENT
import pg from 'pg';
const client = new pg.Client()

//~ FUNCTION IMPORT AD HOC
async function importAdHoc() {
    // Connexion à la BDD
    await client.connect();

    //* Boucle pour le fichier posts.json
    for (const columnName in articlesData) {
        // columnName représente les colonnes de articlesData
        for (const value of articlesData[columnName]) {
            // value représente les valeurs à inséré dans la BDD
            await client.query(`INSERT INTO "article" (columnName) VALUES ($1)`, [value]);
        }
    } 

    //* Boucle pour le fichier categories.json
    for (const columnName in categoriesData) {
        // columnName représente les colonnes de categoriesData
        for (const value of categoriesData[columnName]) {
            // value représente les valeurs à inséré dans la BDD
            await client.query(`INSERT INTO "category" (columnName) VALUES ($1)`, [value]);
        }
    }

    // Déconnexion à la BDD
    await client.end(); 
}
// importAdHoc();
