import winston from "winston";

const logFormat = winston.format.combine(
  winston.format.timestamp({format: "YYYY-MM-DD hh:mm:ss"}),
  winston.format.printf(({level, timestamp, message}) =>{
    return `${level.toUpperCase()}: [${timestamp}] ${message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    new winston.transports.Console({format: winston.format.colorize()}),
    new winston.transports.File({filename: "logs/error.log", level: "error"}),
    new winston.transports.File({filename: "logs/combined.log"}),
  ],
});

export default logger;