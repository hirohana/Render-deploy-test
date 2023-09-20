const router = require("express").Router();
const mysqlAPI = require("../libs/db/mysqlAPI");

router.get("/", async (req, res, next) => {
  try {
    const query = "SELECT message FROM messages WHERE id=1";
    const [dbMessage] = await mysqlAPI.query(query);
    res.json(dbMessage.message);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
