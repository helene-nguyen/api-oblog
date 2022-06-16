//~ IMPORTATION DATA ARTICLE
import { findAll, createData, findOne, updateData, deleteData } from '../datamapper/article.js';

class Article {
  constructor(articleId, articleData) {
    this.findAll = findAll();
    this.createData = createData(articleData);
    this.findOne = findOne(articleId);
    this.updateData = updateData(articleId, articleData);
    this.deleteData = deleteData(articleId);
  }
}

export { Article };

//? Test notre instance ---> return "true" si ok
// const newArticle = new Article();
// console.log(newArticle instanceof Article);
