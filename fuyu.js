const { execSync } = require("child_process");
const logger = require("./config/logger");
const get_message = require("./config/message");

const args = process.argv.slice(2).join(" ");
const sequelizeCommand = `npx sequelize-cli ${args}`;

try {
  execSync(sequelizeCommand, { stdio: "inherit" });

  if (sequelizeCommand.includes("model:generate")) {
    logger.info(get_message("fay6", { sequelizeCommand }));
  } else if (sequelizeCommand.includes("migration:generate")) {
    logger.info(get_message("fay7", { sequelizeCommand }));
  } else if (sequelizeCommand.includes("seed:generate")) {
    logger.info(get_message("fay8", { sequelizeCommand }));
  }
} catch (error) {
  logger.error(get_message("fay9", { error: error.message }));
  process.exit(1);
}
