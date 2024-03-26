import express from 'express';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import connectDB from './db/db.js';
import movieRoutes from './routes/movieRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { fetchGenreList } from './utils/genreService.js';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Connect to the database
connectDB();

fetchGenreList().then(() => {
  logger.info('Genre list');

  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    logger.info(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });

  app.get('/', (req, res) => res.send('Server is running!'));

  app.use('/api/v1/movies', movieRoutes);

  app.use(errorHandler);

  process.on('unhandledRejection', err => {
    logger.error(`Unhandled Rejection: ${err.message}`);

    server.close(() => process.exit(1));
  });
});
