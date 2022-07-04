//~ IMPORTATION ERROR
import { _400, _404, _500 } from './errorController.js';
import { Category } from '../models/category.js';

/**
 * @typedef {*} Categories
 * @property {string} route
 * @property {string} label
 */

//~ ------------------------------------------------------------- FETCH ARTICLES BY CATEGORY ID
/**
 * On récupère ici les articles en fonction de l'id d'une catégorie
 * 
 */
async function fetchArticlesByCategoryId(req, res) {
  try {
    const categoryId = +req.params.id;

    const articles = await Category.findArticlesByCategory(categoryId);

    res.json(articles);
  } catch (err) {
    _500(err, req, res);
  }
}
//~ ------------------------------------------------------------- FETCH ALL CATEGORIES
async function fetchAllCategories(req, res) {
  try {
    const categories = await Category.findAllCategories();
    logger(categories);
    if (categories) res.status(200).json(categories);
    else throw new Error(`Aucune categorie n'a été trouvée`);
  } catch (err) {
    _500(err, req, res);
  }
}
//~ ------------------------------------------------------------- CREATE CATEGORY
async function createCategory(req, res) {
  try {
    await Category.createCategory(req.body);

    return res.status(200).json(`La catégorie a bien été créée`);
  } catch (err) {
    _500(err, req, res);
  }
}
//~ ------------------------------------------------------------- FETCH ONE CATEGORY
async function fetchOneCategory(req, res) {
  try {
    const categoryId = +req.params.id;

    // console.log(typeof categoryId)
    const category = await Category.findOneCategory(categoryId);

    if (category) res.status(200).json(category);
    else throw new Error(`La catégorie n'existe pas`);
  } catch (err) {
    _500(err, req, res);
  }
}
//~ ------------------------------------------------------------- UPDATE CATEGORY
async function updateCategory(req, res) {
  try {
    const categoryId = +req.params.id;

    let categoryInfo = await Category.findOneCategory(categoryId);

    for (const key in categoryInfo) {
      req.body[key] ? req.body[key] : (req.body[key] = categoryInfo[key]);
    }

    await Category.updateCategory(categoryId, req.body);

    return res.status(200).json(`La catégorie a bien été modifiée`);
  } catch (err) {
    _500(err, req, res);
  }
}
//~ ------------------------------------------------------------- DELETE CATEGORY
async function deleteCategory(req, res) {
  try {
    const categoryId = +req.params.id;
    await Category.deleteCategory(categoryId);

    return res.status(200).json(`La catégorie a bien été supprimé`);
  } catch (err) {
    _500(err, req, res);
  }
}

export { fetchArticlesByCategoryId, fetchAllCategories, createCategory, fetchOneCategory, updateCategory, deleteCategory };
