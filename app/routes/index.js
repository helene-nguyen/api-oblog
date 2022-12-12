//~ IMPORTATION ROUTER
import { Router } from 'express';
const router = Router();

//~ ROUTER MAIN
router.get('/', (req, res) => {
  res.json("Hello, vous êtes bien sur l'API O'blog !");
});

//~ IMPORTATION ARTICLE ROUTER
import { router as articleRouter } from './article.js';
router.use('/', articleRouter);

//~ IMPORTATION CATEGORY ROUTER
import { router as categoryRouter } from './category.js';
router.use('/', categoryRouter);

export { router };
