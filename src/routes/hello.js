const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    res.json("Hello Express!!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
