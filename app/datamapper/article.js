//~ IMPORTATIONS DES MODULES
import { client } from '../services/database.js';

const TABLE_NAME = 'article';

//~ ------------------------------------------------------------------- FIND ALL ARTICLES
async function findAll() {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`);

  return result.rows;
}

//~ ------------------------------------------------------------------- CREATE ARTICLE
async function createData(articleData) {
  let { category, slug, title, excerpt, content, category_id } = articleData;

  const sql = {
    text: `
        INSERT INTO "${TABLE_NAME}"
            ("category","slug","title","excerpt","content", "category_id")
        VALUES
            ($1,$2,$3,$4,$5,$6);`,
    values: [category, slug, title, excerpt, content, category_id]
  };

  const result = await client.query(sql);

  return result.rowCount;
}

//~ ------------------------------------------------------------------- FIND ONE ARTICLE
async function findOne(articleId) {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [articleId]);

  return result.rows[0];
}

//~ ------------------------------------------------------------------- UPDATE ARTICLE
async function updateData(articleId, articleData) {
  const { category, slug, title, excerpt, content } = articleData;

  const sql = {
    text: `
        UPDATE "${TABLE_NAME}"
            SET
            "category" = $1,
            "slug" = $2,
            "title" = $3,
            "excerpt" = $4,
            "content" = $5
        WHERE "id" = $6;`,
    values: [category, slug, title, excerpt, content, articleId]
    //!Autre manière de faire si on créée une fonction
    //! dans la DB et on aura juste à faire

    //! text: `SELECT update_article($1, $2)`;
    //! values: [articleId, articleData]
  };

  const result = await client.query(sql);

  return result.rowCount;
}

//~ ------------------------------------------------------------------- DELETE CATEGORY
async function deleteData(articleId) {
  const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [articleId]);

  return result.rowCount;
}

export { findAll, createData, findOne, updateData, deleteData };
