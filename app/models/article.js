//~ IMPORTATION DATA ARTICLE
import { findAll, findOne, createData, updateData, deleteData } from '../datamapper/article.js';


/**
 * Création d'un nouvel article permettant la création, l'affichage, la mise à jour et la suppression de celui-ci
 * @class
 */
class Article {

    static async findAllArticles() { return findAll(); };

    static async createArticle(articleData) { return createData(articleData); };
    
    static async findOneArticle(articleId) { return findOne(articleId); };
    
    static async updateArticle(articleId, articleData) { return updateData(articleId, articleData); }
    
    static async deleteArticle(articleId) { return deleteData(articleId) };
    
  }

export { Article };

//? Test notre instance ---> return "true" si ok
// const newArticle = new Article();
// console.log(newArticle instanceof Article);
