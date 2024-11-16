const { load_routes, router } = require("./load");

load_routes();

router.get("/", (req, res) => {
  res.send("Bienvenido a la API principal.");
});

module.exports = router;
