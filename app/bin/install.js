const { exec } = require("child_process");
const get_message = require("../../config/message");
const logger = require("../../config/logger");
const dependencies = require("../../json/dependencies.json");

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    const process = exec(command);
    process.stdout.on("data", (data) => console.log(data.toString()));
    process.stderr.on("data", (data) => console.error(data.toString()));
    process.on("close", (code) => {
      if (code === 0) resolve();
      else reject(`Command failed with exit code ${code}`);
    });
  });
};

// Instalar dependencias
(async () => {
  logger.info(get_message("fby4"));
  try {
    for (const dep of dependencies) {
      logger.info(get_message("fby5", { dep }));
      await runCommand(`npm install ${dep}`);
    }
    logger.info(get_message("fby6"));
  } catch (error) {
    logger.error(get_message("fby7"), error);
  }
})();
