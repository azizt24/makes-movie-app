import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import movieRoutes from './routes/movieRoutes.js';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

const PORT = process.env.PORT || 5000;
//Routes
app.use('/api', movieRoutes);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
