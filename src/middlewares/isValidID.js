import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidID = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};
