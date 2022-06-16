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
