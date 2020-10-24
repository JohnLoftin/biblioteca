require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// const apiMain = require("./api/main");
const heartbeat = require("./api/apiHeartbeat");
const apiBooks = require("./api/apiBooks");

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use(bodyParser.json());

// API routing
// app.use("/", apiMain);
app.use("/api/apiHeartbeat", heartbeat);
app.use("/api/apiBooks", apiBooks);

app.listen(3001, () => {
  console.log("Server Running on PORT 3001");
});
