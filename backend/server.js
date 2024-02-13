import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'; // CR -no need for colors. you can remove the import and uninstall the colors package
import logger from './config/logger.js';
import connectDB from './db/db.js';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  logger.info(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold // CR -no need for colors. you can remove the import and uninstall the colors package
  )
);

// Handle unhandled promise rejections
// CR - delete the promise because it is not being used
process.on('unhandledRejection', (err, promise) => {
  logger.error(`Error: ${err.message}`.red); // CR -no need for colors. you can remove the import and uninstall the colors package
  // Close server & exit process
  server.close(() => process.exit(1));
});
