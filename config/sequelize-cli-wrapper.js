const { execSync } = require("child_process");
const logger = require("./logger");
const get_message = require("./message");

const cliCommand = process.argv.slice(2).join(" ");

try {
  execSync(`npx sequelize-cli ${cliCommand}`, { stdio: "inherit" });

  if (cliCommand.startsWith("model:generate")) {
    logger.info(get_message("fay6", { cliCommand }));
  } else if (cliCommand.startsWith("migration:generate")) {
    logger.info(get_message("fay7", { cliCommand }));
  } else if (cliCommand.startsWith("seed:generate")) {
    logger.info(get_message("fay8", { cliCommand }));
  }
} catch (error) {
  logger.error(get_message("fay9", { error }));
  process.exit(1);
}
