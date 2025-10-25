var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/calculate", (req, res) => {
  console.log(req);
  const a = req.body.num1;

  const b = req.body.num2;
  console.log(a, b);
  res.send({ result: a + b });
});

module.exports = router;
