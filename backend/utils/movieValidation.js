import { query } from 'express-validator';

export const movieValidation = [
  query('id').isNumeric().withMessage('Movie ID must be a number'),
];
