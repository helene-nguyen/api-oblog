//~ IMPORTATIONS
import { Router } from 'express';
const router = Router();
//~ SCHEMA
import { categorySchema } from '../schema/category.schema.js';
import { validation } from '../services/validation.js';

import { fetchArticlesByCategoryId, fetchAllCategories, createCategory, fetchOneCategory, updateCategory, deleteCategory } from '../controllers/category.js';

//~ ROUTES CATEGORY
// GET /posts/category/[:id]
router.get('/posts/category/:id(\d+)', fetchArticlesByCategoryId);

// GET /categories
router.get('/categories', fetchAllCategories);
// POST /categories
router.post('/categories', validation.body(categorySchema), createCategory);

// GET /categories/[:id]
router.get('/categories/:id(\d+)', fetchOneCategory);
// PATCH /categories/[:id]
router.patch('/categories/:id(\d+)', validation.body(categorySchema), updateCategory);
// DELETE /categories/[:id]
router.delete('/categories/:id(\d+)', deleteCategory);

export { router };
