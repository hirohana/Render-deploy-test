const express = require("express");
const cors = require("cors");

const { port } = require("./config/application.config.js");
const app = express();

//set middleware
app.set("view engine", "ejs");
app.disable("x-powered-by");
// app.use(cors({ origin: applicationConfig.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// dynamic resource rooting
app.use(
  "/",
  (() => {
    const router = express.Router();
    router.use((req, res, next) => {
      res.setHeader("X-Frame-Options", "SAMEORIGIN");
      next();
    });
    router.use("/api/v1/hello", require("./routes/hello.js"));
    router.use("/api/v1/db-test", require("./routes/db-test.js"));
    return router;
  })()
);

// error middleware
app.use((err, req, res, next) => {
  res.status(500).json(`500 Internal Server Error: ${err}`);
});

// execute application port
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
