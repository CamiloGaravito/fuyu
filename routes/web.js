const { load_routes, router } = require("./load");

load_routes();

router.get("/", (req, res) => {
  res.render("welcome");
});

module.exports = router;
