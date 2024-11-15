require("dotenv").config();

const get_message = require("./message");
const logger = require("./logger");
const env = process.env.ENV;

if (!env) {
  logger.error(get_message("fay2"));
}

module.exports = env;
