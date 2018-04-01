const path = require("path");
const express = require("express");
const moment = require("moment");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/:time", (req, res) => {

  if (!isNaN(req.params.time/1)) {
    var timezone = moment().format("Z");
    var unix_time = req.params.time/1;
    var natural_time = moment.unix(unix_time).format("MMM D, YYYY");
    res.send({timezone, unix_time, natural_time});
  } else if (moment(req.params.time.replace("%20", " ")).isValid()) {
    timezone = moment().format("Z");
    unix_time = moment(req.params.time).format("X")/1;
    natural_time = moment(req.params.time).format("MMM D, YYYY");
    res.send({timezone, unix_time, natural_time});
  } else {
    res.send(400);
  }

});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
  console.log(__dirname);
  console.log(path.join(__dirname, "../public"));
});
