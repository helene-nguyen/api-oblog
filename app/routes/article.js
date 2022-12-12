//~ IMPORTATIONS
import { Router } from 'express';
const router = Router();
//~ SCHEMA
import { articleSchema } from '../schema/article.schema.js';
import { validation } from '../services/validation.js';

import { fetchAllArticles, createArticle, fetchOneArticle, updateArticle, deleteArticle, fetchAllArticlesFromKali } from '../controllers/article.js';

//~ ROUTES ARTICLE
/**
 * GET /api/v1/posts
 * @summary Tous les articles
 * @description Récupère tous les articles
 * @tags Articles
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
  "id": 1,
  "category": "Angular",
  "slug": "angular-une-fausse-bonne-idee",
  "title": "Angular, une fausse bonne idée ?",
  "excerpt": "Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
  "content": "Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi",
  "category_id": 2
}
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.get('/api/v1/posts', fetchAllArticles);


/**
 * POST /api/v1/posts
 * @summary Création d'un article
 * @description Permet la création d'un article
 * @tags Articles
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
 *   "message": "L'article a bien été créé"
 * }
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 * 
 */
router.post('/api/v1/posts', validation.body(articleSchema), createArticle);


// Identifie si c'est un nombre ou non
// Et renvoie page 404 si ce n'est pas un nombre
//! link https://router.vuejs.org/guide/essentials/route-matching-syntax.html#custom-regex-in-params
//! ne pas oublier le deuxième '\'
/**
 * GET /api/v1/posts/{articleId}
 * @summary Un article
 * @description Récupère un article via un Id
 * @tags Articles
 * @param {number} articleId.path - id de l'article
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
  "id": 1,
  "category": "Angular",
  "slug": "angular-une-fausse-bonne-idee",
  "title": "Angular, une fausse bonne idée ?",
  "excerpt": "Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo",
  "content": "Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi",
  "category_id": 2
}
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.get('/api/v1/posts/:id(\\d+)', fetchOneArticle);

/**
 * PATCH /api/v1/posts/{articleId}
 * @summary Mise à jour d'un article
 * @description Permet la mise à jour d'un article
 * @tags Articles
 * @param {number} articleId.path - id de l'article
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
 *   "message": "L'article a bien été modifié"
 * }
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.patch('/api/v1/posts/:id(\\d+)', validation.body(articleSchema), updateArticle);

/**
 * DELETE /api/v1/posts/{articleId}
 * @summary Suppression d'un article
 * @description Permet la suppression d'un article
 * @tags Articles
 * @param {number} articleId.path - id de l'article
 * @return {string} 200 - success response - application/json
 * @example response - 200 - success response - application/json
 * {
 *   "message": "L'article a bien été supprimé"
 * }
 * @return {string} 500 - error response 
 * @example response - 500 - error response
 * {
 *   "Error 500": "message"
 * }
 */
router.delete('/api/v1/posts/:id(\\d+)', deleteArticle);


router.get('/api/v1/articlesfromkali', fetchAllArticlesFromKali);

export { router };
