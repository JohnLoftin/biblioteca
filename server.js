const express = require("express");
const apiMain = require("./api/main");

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

// API routing
app.use("/", apiMain);

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.listen(3001, () => {
  console.log("Server Running on PORT 3001");
});
