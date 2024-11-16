const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const load_routes = () => {
  const routesPath = path.join(__dirname);
  fs.readdirSync(routesPath).forEach((file) => {
    if (file !== "web.js" && file !== "load.js" && file.endsWith(".js")) {
      const route = require(path.join(routesPath, file));
      router.use("/", route);
    }
  });
};

module.exports = { load_routes, router };
