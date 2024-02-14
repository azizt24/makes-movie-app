import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// To handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define your custom logging levels
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'grey',
  },
};

// Apply the colors to winston
winston.addColors(customLevels.colors);

// Custom format for log messages
const logFormat = winston.format.combine(
  winston.format.label({ label: 'movie-app' }),
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  winston.format.printf(
    info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
  ),
  winston.format.colorize({ all: true })
);

// Create a Winston logger instance
const logger = winston.createLogger({
  levels: customLevels.levels,
  format: logFormat,
  transports: [
    // Console transport for logging
    new winston.transports.Console({
      level: 'debug', // Log only if info.level less than or equal to this level
    }),
    // File transport for logging
    new winston.transports.File({
      filename: path.join(__dirname, 'logs/error.log'),
      level: 'error', // Log only if info.level less than or equal to this level
      format: winston.format.combine(
        winston.format.uncolorize(), // Remove color codes for file logging
        logFormat
      ),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, 'logs/combined.log'),
    }),
  ],
});

// Stream object with a write function that will be used by morgan
logger.stream = {
  write: function (message) {
    // Use the 'info' log level so the output will be picked up by both transports (console and file)
    logger.info(message.trim());
  },
};

export default logger;
