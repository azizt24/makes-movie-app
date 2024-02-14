import express from 'express';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import connectDB from './db/db.js';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
//Routes
app.use('/api', movieRoutes);

const server = app.listen(
  PORT,
  logger.info(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error(`Error: ${err.message}`); 
  // Close server & exit process
  server.close(() => process.exit(1));
});
