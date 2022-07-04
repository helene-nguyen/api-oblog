//~ IMPORTATIONS DES MODULES
import { client } from '../services/database.js';

const TABLE_NAME = 'category';
const TABLE_ARTICLE = 'article';

//~ ------------------------------------------------------------------- FIND ALL CATEGORIES
async function findAll() {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`);
  return result.rows;
}

//~ ------------------------------------------------------------------- CREATE CATEGORY
async function createData(categoryData) {
  const { route, label } = categoryData;

  const sql = {
    text: `
            INSERT INTO "${TABLE_NAME}"
                ("route", "label")
            VALUES
                ($1,$2);`,
    values: [route, label]
  };

  //!Autre manière de faire si on créée une fonction
  //! dans la DB et on aura juste à faire

  //! text: `SELECT insert_category($1)`;
  //! values: [categoryData]

  const result = await client.query(sql);
  return result.rowCount;
}

//~ ------------------------------------------------------------------- FIND ONE CATEGORY
async function findOne(categoryId) {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [categoryId]);
  return result.rows[0];
}

//~ ------------------------------------------------------------------- UPDATE CATEGORY
async function updateData(categoryId, categoryData) {
  const { route, label } = categoryData;
  const sql = {
    text: `
            UPDATE "${TABLE_NAME}"
              SET 
              "route" = $1,
              "label" = $2
            WHERE "id" = $3`,
    values: [route, label, categoryId]
  };
  const result = await client.query(sql);
  return result.rowCount;
}

//~ ------------------------------------------------------------------- DELETE CATEGORY
async function deleteData(categoryId) {
  const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [categoryId]);
  return result.rowCount;
}
//~ ------------------------------------------------------------------- FIND ARTICLES BY CATEGORY ID
async function findArticlesByCategoryId(categoryId) {
  const result = await client.query(`SELECT * FROM "${TABLE_ARTICLE}" WHERE "category_id" = $1;`, [categoryId]);
  return result.rows;
}

export { findAll, createData, findOne, updateData, deleteData, findArticlesByCategoryId };
