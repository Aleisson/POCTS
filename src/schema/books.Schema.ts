import Joi from 'joi';

const bookSchema = Joi.object({
    id:Joi.number(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    value: Joi.number().required(),
    pages: Joi.number().required()

});

export { bookSchema }