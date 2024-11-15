const { Sequelize } = require("sequelize");
const dbConfig = require("./dbconfig");
const env = require("./env");

const get_message = require("./message");
const { username, password, database, host, dialect, logging } = dbConfig[env];

if (dialect !== "mysql") {
  throw new Error('El dialecto debe ser "mysql" para usar MySQL.');
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
    console.log(get_message("fay1", { env }));
  } catch (error) {
    console.error(get_message("fay3"), error);
    process.exit(1);
  }
};

connection();

module.exports = sequelize;
