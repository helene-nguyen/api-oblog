# Mise en place des schémas de validation du body

Pour la mise en place du schéma de validation du body, nous avons utilisé le module Joi.

Ci-dessous notre schéma pour chaque élément qui recevront des informations du body lors de la création ou lors de la mise à jour.

*SCHEMA ARTICLE*

```js
import joi from 'joi';
const Joi = joi;

const articleSchema = Joi.object({
  category: Joi.string(),
  slug: Joi.string(),
  title: Joi.string(),
  excerpt: Joi.string(),
  content: Joi.string(),
  category_id: Joi.number()
}).required();

export { articleSchema };
```

*SCHEMA CATEGORY*

```js
import joi from 'joi';
const Joi = joi;

const categorySchema = Joi.object({
    route: Joi.string(), 
    label: Joi.string(),
}).required(); 

export{ categorySchema };
```

*SCHEMA VALIDATION*

```js
const validation = {
  body(schemaCustom) {
    //valid req.body format
    return function(req, res, next) {
      const { error } = schemaCustom.validate(req.body);
      if (error) {
        // Est-ce qu'il y a une erreur ?
        res.status(500).json(error.details);
        
        // S'il y a une erreur
        // [
        //   {
        //     "message": "\"category\" must be a string",
        //     "path": [
        //       "category"
        //     ],
        //     "type": "string.base",
        //     "context": {
        //       "label": "category",
        //       "value": 2,
        //       "key": "category"
        //     }
        //   }
        // ]

        // Ici on cible le message directement
        // res.status(500).json(error.details[0].message);
        // return "\"category\" must be a string"

        return;
      }

      next();
    };
  }
};
export { validation };
```

Et voici comment nous l'avons implémenté dans les routers :

*ROUTER ARTICLE*

```js
//~ IMPORTATION SCHEMA 
import { articleSchema } from '../schema/article.schema.js';
import { validation } from '../services/validation.js';

// Exemples :
router.post('/posts', validation.body(articleSchema), createArticle);
router.patch('/posts/:id(\\d+)', validation.body(articleSchema), updateArticle);
```

*ROUTER CATEGORY*

```js
//~ IMPORTATION SCHEMA 
import { categorySchema } from '../schema/category.schema.js';
import { validation } from '../services/validation.js';

// Exemples :
router.post('/categories', validation.body(categorySchema), createCategory);
router.patch('/categories/:id(\\d+)', validation.body(categorySchema), updateCategory);
```

On l'intègre sur nos routes en tant que middleware pour faire le contrôle avant le rendu et c'est la raison pour laquelle la fonction est placée avant la méthode récupérée du controller.

Il ne faut donc pas oublier le `next()` pour qu'on puisse passer à la fonction suivante en cas de validation.

[Retour à la page d'accueil](../README.md)
