import express from 'express';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import connectDB from './db/db.js';
import movieRoutes from './routes/movieRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import morgan from 'morgan';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

// Connect to MongoDB
connectDB();

//MiddleWare
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/movies', movieRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  logger.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
