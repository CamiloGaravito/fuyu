const winston = require("winston");
require("dotenv").config();

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
  })
);

const transports = [
  new winston.transports.Console({
    format: logFormat,
  }),
];

if (process.env.ENV === "development") {
  transports.push(
    new winston.transports.File({
      filename: "logs/app.log",
      format: logFormat,
      level: "info",
    })
  );
}

const logger = winston.createLogger({
  level: "info",
  transports: transports,
});

module.exports = logger;
