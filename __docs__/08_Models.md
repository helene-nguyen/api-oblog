# Mise en place des Models

Création de nouvelles class (Article & Category) qui vont nous permettre de créer de nouvelles instances

Voici nos Models :

*DATAMAPPER ARTICLE*

```js
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

//? Test notre nouvelle instance ---> return "true" si ok
// const newArticle = new Article();
// console.log(newArticle instanceof Article);
```

*DATAMAPPER CATEGORY*


```js
//~ IMPORTATION DATA CATEGORY
import { findAll, createData, findOne, updateData, deleteData } from '../datamapper/category.js';

class Category {
    constructor(categoryId, categoryData) {
        this.findAll = findAll();
        this.createData = createData(categoryData);
        this.findOne = findOne(categoryId);
        this.updateData = updateData(categoryId, categoryData);
        this.deleteData = deleteData(categoryId);
    }
}

export { Category };

//? Test notre nouvelle instance ---> return "true" si ok
// const category = new Category();
// console.log(category instanceof Category);
```

[Retour à la page d'accueil](../README.md)