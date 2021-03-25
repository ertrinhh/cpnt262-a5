// initiate new project, import dependencies
const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();
const index = require("./routes");

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  res.locals.siteTitle = "CPNT 262 A4";
  next();
});

app.use("/", index);

//create 404 page
app.use(function (request, response) {
  response.status(404);
  response.sendFile(__dirname + "/public/404.html");
});

//server port, use 3000 when process.env not found
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port: ${PORT}`);
});
