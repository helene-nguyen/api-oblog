//~ IMPORTATION DE PG
import pg from 'pg';

//~ CREATION NEW CLIENT
const client = new pg.Client();

//~ CONNEXION
client.connect();

//~ EXPORT
export { client }