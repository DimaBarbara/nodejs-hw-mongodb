import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(3).max(20).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(3).max(20).required(),
});
