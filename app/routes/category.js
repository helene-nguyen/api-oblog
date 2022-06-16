//~ IMPORTATIONS
import { Router } from 'express';
const router = Router();
//~ SCHEMA
import { categorySchema } from '../schema/category.schema.js';
import { validation } from '../services/validation.js';

import { fetchArticlesByCategoryId, fetchAllCategories, createCategory, fetchOneCategory, updateCategory, deleteCategory } from '../controllers/category.js';


//~ ROUTES CATEGORY
/**
 * GET /api/v1/posts/category/{categoryId}
 * @summary Tous les articles d'une catégorie
 * @tags Catégories
 * @description Récupère tous les articles via une catégorie
 * @param {number} categoryId.path - id de la catégorie
 * 
 * @example response - 200 - success response
 * {
    "id": 1,
    "category": "Angular",
    "slug": "angular-une-fausse-bonne-idee",
    "title": "Angular, une fausse bonne idée ?",
    "excerpt": "Lorem <em>ipsum dolor</em> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim</strong> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <strong>commodo consequat</strong>. Duis aute irure dolor in reprehenderit in voluptate velit esse <em>cillum dolore</em> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "content": "Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "category_id": 2
  }
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.get('api/v1/posts/category/:id(\\d+)', fetchArticlesByCategoryId);

/**
 * GET /api/v1/categories
 * @summary Toutes les catégories
 * @tags Catégories
 * @description Récupère toutes les catégories
 * 
 * @example response - 200 - success response
 * { "id": 1,
    "route": "/",
    "label": "Accueil"
}
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.get('/api/v1/categories', fetchAllCategories);


/**
 * POST /api/v1/categories
 * @summary Création d'une catégorie
 * @tags Catégories
 * @description Permet la création d'une catégorie
 * 
 * @example response - 200 - success response
 * {"message": "La catégorie a bien été créée"}
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.post('/api/v1/categories', validation.body(categorySchema), createCategory);


/**
 * GET /api/v1/categories/{categoryId}
 * @summary Une catégorie
 * @tags Catégories
 * @description Récupère une catégorie spécifique via l'id
 * @param {number} categoryId.path - id de la catégorie
 * 
 * @example response - 200 - success response
 * {
  "id": 2,
  "route": "/angular",
  "label": "Angular"
}
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.get('/api/v1/categories/:id(\\d+)', fetchOneCategory);


/**
 * PATCH /api/v1/categories/{categoryId}
 * @summary Mise à jour d'une catégorie
 * @tags Catégories
 * @description Permet la mise à jour de la catégorie par rapport à {categoryId}
 * @param {number} categoryId.path - id de la catégorie
 * 
 * @example response - 200 - success response
 * {"message": "La catégorie a bien été modifiée"}
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.patch('/api/v1/categories/:id(\\d+)', validation.body(categorySchema), updateCategory);


/**
 * DELETE /api/v1/categories/{categoryId}
 * @summary Suppression d'une catégorie
 * @tags Catégories
 * @param {number} categoryId.path - id de la catégorie
 * @description Permet la suppression de la catégorie par rapport à {categoryId}
 * 
 * @example response - 200 - success response
 * {"message":"La catégorie a bien été supprimée"}
 * @return {string} 200 - success response
 * 
 * @example response - 500 - error response
 * {"Error 500": "message"}
 * @return {string} 500 - error response
 */
router.delete('/api/v1/categories/:id(\\d+)', deleteCategory);

export { router };
