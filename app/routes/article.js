//~ IMPORTATIONS
import { Router } from 'express';
const router = Router();
//~ SCHEMA
import { articleSchema } from '../schema/article.schema.js';
import { validation } from '../services/validation.js';

import { fetchAllArticles, createArticle, fetchOneArticle, updateArticle, deleteArticle } from '../controllers/article.js';

//~ ROUTES ARTICLE
// GET /posts
router.get('/posts', fetchAllArticles);
// POST /posts
router.post('/posts', validation.body(articleSchema), createArticle);

// GET /posts/:id
// Identifie si c'est un nombre ou non 
// Et renvoie page 404 si ce n'est pas un nombre
//! link https://router.vuejs.org/guide/essentials/route-matching-syntax.html#custom-regex-in-params
//! ne pas oublier le deuxième '\'
router.get('/posts/:id(\\d+)', fetchOneArticle);
// PATCH /posts/:id
router.patch('/posts/:id(\\d+)', validation.body(articleSchema), updateArticle);
// DELETE /posts/:id
router.delete('/posts/:id(\\d+)', deleteArticle);

export { router };
