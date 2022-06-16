# Mise en place des Models

Création de nouvelles class (Article & Category) qui vont nous permettre de créer de nouvelles instances

Voici nos Models :

*DATAMAPPER ARTICLE*

```js
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

//? Test notre nouvelle instance ---> return "true" si ok
// const newArticle = new Article();
// console.log(newArticle instanceof Article);
```

*DATAMAPPER CATEGORY*

```js
//~ IMPORTATION DATA CATEGORY
import { findAll, createData, findOne, updateData, deleteData, findArticlesByCategoryId } from '../datamapper/category.js';

class Category {

    static async findAllCategories() { return findAll(); };

    static async createCategory(categoryData) { return createData(categoryData); };
    
    static async findOneCategory(categoryId) { return findOne(categoryId); };
    
    static async updateCategory(categoryId, categoryData) { return updateData(categoryId, categoryData); }
    
    static async deleteCategory(categoryId) { return deleteData(categoryId); };

    static async findArticlesByCategory(categoryId) { return findArticlesByCategoryId(categoryId); }
}

export { Category };


//? Test notre nouvelle instance ---> return "true" si ok
// const category = new Category();
// console.log(category instanceof Category);
```

Pour bien séparer nos fonctions, on va définir la méthode en static.

[Retour à la page d'accueil](../README.md)
