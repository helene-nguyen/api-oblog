const validation = {
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
