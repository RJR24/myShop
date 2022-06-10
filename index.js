const express = require("express");
const app = express();

const config = require("config");
const debug = require("debug")("app:main");

const router = require("./src/routes");

require("./startup/config")(app, express);

require("./startup/db")();
require("./startup/logging")();

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, debug(`listening on port ${port}`));
