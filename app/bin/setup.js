const { execSync } = require("child_process");
const get_message = require("../../config/message");
const logger = require("../../config/logger");

logger.info(get_message("fby3"));
execSync("npm install", { stdio: "inherit" });

logger.info(get_message("fby2"));
