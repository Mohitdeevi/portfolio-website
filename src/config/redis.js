import Redis from 'ioredis';
import { config } from './index.js';

export const redisClient = new Redis({
  host: config.redisHost,
  port: config.redisPort
});

export const connectRedis = () => {
  redisClient.on('connect', () => {
    console.log('Redis connected');
  });

  redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
  });
};