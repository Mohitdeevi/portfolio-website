import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { config } from '../config/index.js';
import { AuthenticationError } from '../utils/errors.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new AuthenticationError('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  // Invalidate session logic if using session store
  res.status(200).json({ message: 'Logout successful' });
};