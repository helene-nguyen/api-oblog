# Mise en place du datamapper pour les requêtes

Pour les requêtes, nous avons choisi de partir sur un datamapper qui va répertorier tous les appels à la base de données. Nous redistribuerons les méthodes par le biais d'une classe qui créera les instances nécessaires pour l'utilisation de nos données.

Voici nos datamappers :

*DATAMAPPER ARTICLE*

```js
//~ IMPORTATIONS DES MODULES
import { client } from '../database.js';

const TABLE_NAME = 'article';

//~ ------------------------------------------------------------------- FIND ALL ARTICLES
async function findAll() {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`);

  return result.rows;
};

//~ ------------------------------------------------------------------- CREATE ARTICLE
async function createData(articleData) {
  const { category, slug, title, excerpt, content } = articleData;

  const sql = {
    text: `
        INSERT INTO "${TABLE_NAME}"
            ("category","slug","title","excerpt","content")
        VALUES
            ($1,$2,$3,$4,$5);`,
    values: [category, slug, title, excerpt, content]
  };

  const result = await client.query(sql);

  return result.rowCount;
};

//~ ------------------------------------------------------------------- FIND ONE ARTICLE
async function findOne(articleId) {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [articleId]);

  return result.rows[0];
};

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
  };
  const result = await client.query(sql);

  return result.rowCount;
};

//~ ------------------------------------------------------------------- DELETE CATEGORY
async function deleteData(articleId) {
  const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [articleId]);

  return result.rowCount;
};

export { findAll, createData, findOne, updateData, deleteData };

```

*DATAMAPPER CATEGORY*

```js
//~ IMPORTATIONS DES MODULES
import { client } from '../database.js';

const TABLE_NAME = 'category';

//~ ------------------------------------------------------------------- FIND ALL CATEGORIES
async function findAll() {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`);
    return result.rows
};

//~ ------------------------------------------------------------------- CREATE CATEGORY
async function createData(categoryData) {
    const { route, label} = categoryData;

    const sql = {
        text: `
            INSERT INTO "${TABLE_NAME}"
                ("route", "label")
            VALUES
                ($1,$2);`,
        values: [route, label]
    };

    const result = await client.query(sql);
    return result.rowCount;
};

//~ ------------------------------------------------------------------- FIND ONE CATEGORY
async function findOne(categoryId) {
    const result = await client.query(`SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`, [categoryId]);
    return result.rows[0];
};

//~ ------------------------------------------------------------------- UPDATE CATEGORY
async function updateData(categoryId, categoryData) {
    const { route, label} = categoryData;
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
};

//~ ------------------------------------------------------------------- DELETE CATEGORY
async function deleteData(categoryId) {
    const result = await client.query(`DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`, [categoryId]);
    return result.rowCount;
};
//~ ------------------------------------------------------------------- FIND ARTICLES BY CATEGORY ID
async function findArticlesByCategoryId(categoryId) {
    const result = await client.query(`SELECT * FROM "${TABLE_ARTICLE}" WHERE "category_id" = $1;`, [categoryId]);
    return result.rows;
};

export { findAll, createData, findOne, updateData, deleteData, findArticlesByCategoryId };

```

Toutes les requêtes vont nous permettre d'appliquer le CRUD : Create Read Update Delete


[Retour à la page d'accueil](../README.md)