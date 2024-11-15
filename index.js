require("dotenv").config();

const express = require("express");
const port = process.env.PORT;
const app = express();

const get_message = require("./config/message");
const sequelize = require("./config/database");
const logger = require("./config/logger");

const init_app = async () => {
  try {
    await sequelize.authenticate();

    app.listen(port, () => {
      logger.info(get_message("fay4", { port }));
    });
  } catch (error) {
    logger.error(get_message("fay3"), error);
    process.exit(1);
  }
};

init_app();
