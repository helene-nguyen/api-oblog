const validation = {
  body(schemaCustom) {
    //valid req.body format
    return function(req, res, next) {
      const { error } = schemaCustom.validate(req.body);
      if (error) {
        // is any error here ?
        // if yes, error
        return;
      }

      next();
    };
  }
};

export { validation };
