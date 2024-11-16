const express = require("express");
const logger = require("./logger");
const sequelize = require("./database");
const get_message = require("./message");
const routes = require("../routes/web");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", routes);

const start_server = async () => {
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

module.exports = start_server;
