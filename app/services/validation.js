const validation = {
  /**
   * 
   * @func schemaCustom
   * @description On récupère le schéma établi avec le module Joi pour la validation du body 
   * @returns 
   */
  body(schemaCustom) {
    //valid req.body format
    return function(req, res, next) {
      const { error } = schemaCustom.validate(req.body);
      if (error) {
        // Est-ce qu'il y a une erreur ?
        res.status(500).json(error.details);

        return;
      }

      next();
    };
  }
};

export { validation };
