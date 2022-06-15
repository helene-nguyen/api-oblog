import joi from 'joi';
const Joi = joi;

const categorySchema = Joi.object({
    route: Joi.string(), 
    label: Joi.string(),
}).required(); 

export{ categorySchema };