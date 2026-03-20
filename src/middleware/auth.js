import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { AuthenticationError } from '../utils/errors.js';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return next(new AuthenticationError('No token provided'));
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    next(new AuthenticationError('Invalid token'));
  }
};

export default authMiddleware;