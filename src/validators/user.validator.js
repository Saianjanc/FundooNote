import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    mobile: Joi.number().min(10).required(),
    city: Joi.string().min(4).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
