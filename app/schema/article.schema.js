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

// Liste de tous les types :
//     _types: Set(12) {
//       'alternatives',
//       'any',
//       'array',
//       'boolean',
//       'date',
//       'function',
//       'link',
//       'number',
//       'object',
//       'string',
//       'symbol',
//       'binary'
//     }
export { articleSchema };
