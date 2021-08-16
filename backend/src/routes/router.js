const router = require("express").Router();

// You can require and use your routes here ;)
router.get("/hello", (req, res) => {
  console.log(req, res);
});

module.exports = router;
