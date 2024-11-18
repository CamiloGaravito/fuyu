const express = require("express");
const logger = require("./logger");
const sequelize = require("./database");
const get_message = require("./message");
const routes = require("../routes/web");

const path = require("path");

const port = process.env.PORT;
const host = process.env.DB_HOST;
const app_name = process.env.APP_NAME;

const app = express();
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "..", "app", "views"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.locals.APP_NAME = app_name;

app.use("/", routes);

const start_server = async () => {
  try {
    await sequelize.authenticate();

    app.listen(port, () => {
      logger.info(get_message("fay4", { port }));
      logger.info(get_message("fby1", { host, port }));
    });
  } catch (error) {
    logger.error(get_message("fay3"), error);
    process.exit(1);
  }
};

module.exports = start_server;
