const { execSync } = require("child_process");
const logger = require("./config/logger");
const get_message = require("./config/message");

const buildCommand = (type, args) => {
  switch (type) {
    case "model":
      return `npx sequelize-cli model:generate --name ${args[0]} --attributes ${args[1]}`;
    case "migration":
      return `npx sequelize-cli migration:generate --name ${args[0]}`;
    case "seeder":
      return `npx sequelize-cli seed:generate --name ${args[0]}`;
    default:
      throw new Error("Comando no reconocido.");
  }
};

const [type, ...args] = process.argv.slice(2);

try {
  const sequelizeCommand = buildCommand(type, args);
  execSync(sequelizeCommand, { stdio: "inherit" });

  if (type === "model") {
    logger.info(get_message("fay6", { sequelizeCommand }));
  } else if (type === "migration") {
    logger.info(get_message("fay7", { sequelizeCommand }));
  } else if (type === "seeder") {
    logger.info(get_message("fay8", { sequelizeCommand }));
  }
} catch (error) {
  logger.error(get_message("fay9", { error: error.message }));
  process.exit(1);
}
