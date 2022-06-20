//~ IMPORTATION DE PG
import pg from 'pg';

//~ CREATION NEW CLIENT
const client = new pg.Client({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

//~ CONNEXION
client.connect();

//~ EXPORT
export { client }