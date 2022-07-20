const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./api/routes/routes");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/assignment9", {
  useNewUrlParser: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("MongoDB Error: " + error);
  });

routes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
