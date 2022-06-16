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
