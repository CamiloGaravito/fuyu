const { Sequelize } = require("sequelize");
const dbConfig = require("./db/dbconfig");
const env = require("./db/env");

const get_message = require("./message");
const logger = require("./logger");
const { username, password, database, host, dialect, logging } = dbConfig[env];

if (dialect !== "mysql") {
  logger.error(get_message("fay5"));
}

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    logger.info(get_message("fay1", { env }));
  } catch (error) {
    logger.error(get_message("fay3"), error);
    process.exit(1);
  }
};

connection();

module.exports = sequelize;
