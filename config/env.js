require("dotenv").config();

const get_message = require("./message");
const env = process.env.ENV;

if (!env) {
  throw new Error(get_message("fay2"));
}

module.exports = env;
