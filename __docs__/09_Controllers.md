# Mise en place des controllers

## Controller ARTICLE

Les 5 fonctions : fetchAllArticles, createArticle, fetchOneArticle, updateArticle, deleteArticle

Ces fonctions nous permettent de réaliser un **CRUD** pour l'utilisation de l'API.

### 1.fetchAllArticles

```js
//~ ------------------------------------------------------------- FETCH ALL ARTICLES
async function fetchAllArticles(req, res) {
  try {
    const articles = await Article.findAllArticles();

    if (articles) res.status(200).json(articles);
    else throw new Error(`Aucun article n'a été trouvé`);
  } catch (err) {
    _500(err, req, res);
  }
}
```

### 2.createArticle

```js
//~ ------------------------------------------------------------- CREATE ARTICLE
async function createArticle(req, res) {
  try {
    // Les vérifications sont faites grâce a Joi et ses schémas
    await Article.createArticle(req.body);

    return res.status(200).json(`L'article a bien été créé`);
  } catch (err) {
    _500(err, req, res);
  }
}
```

### 3.fetchOneArticle

```js
//~ ------------------------------------------------------------- FETCH ONE ARTICLE
async function fetchOneArticle(req, res) {
  try {
    const articleId = +req.params.id;

    // console.log(typeof articleId)
    const article = await Article.findOneArticle(articleId);

    if (article) res.status(200).json(article);
    else throw new Error(`L'article n'existe pas`);
  } catch (err) {
    _500(err, req, res);
  }
}
```

### 4.updateArticle

```js
//~ ------------------------------------------------------------- UPDATE ARTICLE
async function updateArticle(req, res) {
  try {
    const articleId = +req.params.id;

    // console.log('START ----------------------------------',req.body)
    let articleInfo = await Article.findOneArticle(articleId);
    
    for (const key in articleInfo) {
      req.body[key] ? req.body[key] : req.body[key] = articleInfo[key];
    }
    // console.log('END ----------------------------------',req.body)


    await Article.updateArticle(articleId, req.body);

    return res.status(200).json(`L'article a bien été modifié`);
    
  } catch (err) {
    _500(err, req, res);
  }
}
```

### 5.deleteArticle

```js
//~ ------------------------------------------------------------- DELETE ARTICLE
async function deleteArticle(req, res) {
  try {
    const articleId = +req.params.id;
    await Article.deleteArticle(articleId);

    return res.status(200).json(`L'article a bien été supprimé`);
  } catch (err) {
    _500(err, req, res);
  }
}
```

## Controller CATEGORY

Les 6 fonctions : fetchAllCategories, createCategory, fetchOneCategory, updateCategory, deleteCategory, fetchArticlesByCategoryId

### 1.fetchAllCategories

```js
//~ ------------------------------------------------------------- FETCH ALL CATEGORIES
async function fetchAllCategories(req, res) {
  try {
    const categories = await Category.findAllCategories();

    if (categories) res.status(200).json(categories);
    else throw new Error(`Aucune categorie n'a été trouvée`);
  } catch (err) {
    _500(err, req, res);
  }
}
```

### 2.createCategory

```js
//~ ------------------------------------------------------------- CREATE CATEGORY
async function createCategory(req, res) {
  try {
    
    await Category.createCategory(req.body);
    
    return res.status(200).json(`La catégorie a bien été créée`)
  } catch (err) {
    _500(err, req, res);
  }
}

```

### 3.fetchOneCategory

```js
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
```

### 4.updateCategory

```js
//~ ------------------------------------------------------------- UPDATE CATEGORY
async function updateCategory(req, res) {
  try {

    const categoryId = +req.params.id;

    // console.log('START ----------------------------------',req.body)
    let categoryInfo = await Category.findOneCategory(categoryId);
    
    for (const key in categoryInfo) {
      req.body[key] ? req.body[key] : req.body[key] = categoryInfo[key];
    }
    // console.log('END ----------------------------------',req.body)


    await Category.updateCategory(categoryId, req.body);

    return res.status(200).json(`La catégorie a bien été modifiée`);



  } catch (err) {
    _500(err, req, res);
  }
}
```

### 5.deleteCategory

```js
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
```

### 6.fetchArticlesByCategoryId

```js
//~ ------------------------------------------------------------- FETCH ARTICLES BY CATEGORY ID
async function fetchArticlesByCategoryId(req, res) {
  try {
    const categoryId = +req.params.id;

    const articles = await Category.findArticlesByCategory(categoryId);

    res.json(articles);
    
  } catch (err) {
    _500(err, req, res);
  }
}
```
### Utilisation de Rest Client
Tout nos tests on été effectué par le biais de l'extension VSCode *RestClient*.

Cela nous a permis de tester les routes et de visualiser ce que nous souhaitons récupérer.

Ci-dessous notre fichier pour le test avec également les tests effectués 

```sh
@entryPoint = http://localhost:4100

GET {{entryPoint}}

# // ------------------------------
# // ---------------------- ARTICLE
# // ------------------------------

### FETCH ALL ARTICLES ( GET /post )
GET {{entryPoint}}/posts

### POST ONE ARTICLES ( POST /post )
POST {{entryPoint}}/posts
Content-Type: application/json

{
    "category":"React",
    "slug":"react-une-fausse-bonne-idee",
    "title":"React une fausseb bonne idee",
    "excerpt":"Ut enim ad <em>minim veniam</em>, quis nostrud exercitation ullamco <strong>laboris nisi</strong> ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <em>dolore magna</em> aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu",
    "content":"sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exer",
    "category_id":3
}

### FETCH ONE ARTICLE ( GET /post/[:id] )
# Nos tests :
# GET {{entryPoint}}/posts/"2"
# GET {{entryPoint}}/posts/blablab
# GET {{entryPoint}}/posts/200
GET {{entryPoint}}/posts/9

### PATCH ONE ARTICLE ( PATCH /post/[:id] )
PATCH {{entryPoint}}/posts/15
Content-Type: application/json

{
    "category":"Reactoooooo",
    "slug":"react-une-fausse-bonne-idee",
    "title":"React une fausseb bonne idee"
}

### DELETE ONE ARTICLE ( DELETE /post/[:id] )
DELETE {{entryPoint}}/posts/14


# // ------------------------------
# // --------------------- CATEGORY
# // ------------------------------

### FETCH ARTICLES BY CATEGORY ID  ( GET /post/category/[:id] )
GET {{entryPoint}}/posts/category/3

### FETCH ALL CATEGORIES ( GET /categories )
GET {{entryPoint}}/categories

### POST ONE GATEGORY ( POST /categories )
POST {{entryPoint}}/categories
Content-Type: application/json

{
    "route": "/newRoute",
    "label": "newLabel"
}

### FETCH ONE GATEGORY ( GET /categories/[:id] )
GET {{entryPoint}}/categories/1

### PATCH ONE GATEGORY ( PATCH /categories/[:id] )
PATCH {{entryPoint}}/categories/6
Content-Type: application/json

{
    "route": "/newRouteModified",
    "label": "newLabel"
}

### DELETE ONE GATEGORY ( DELETE /categories/[:id] )
DELETE {{entryPoint}}/categories/6

```


[Retour à la page d'accueil](../README.md)