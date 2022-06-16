//~ IMPORTATION DATA ARTICLE
import { findAll, findOne, createData, updateData, deleteData } from '../datamapper/article.js';

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
