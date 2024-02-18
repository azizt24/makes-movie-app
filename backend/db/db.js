import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../config/logger.js';

dotenv.config({ path: '../config/config.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.http(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (err) {
    logger.error(`Error connecting to MongoDB::${err}`);
  }
};

export default connectDB;
