import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { connectDB } from './config/database.js';
import { connectRedis } from './config/redis.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import rateLimiter from './middleware/rateLimiter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(rateLimiter);

// Connect to databases
connectDB();
connectRedis();

// Routes
app.use('/api/v1', routes);

// Error handling
app.use(errorHandler);

export default app;