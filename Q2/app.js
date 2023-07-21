const bodyParser = require("body-parser");
const express = require("express");

const numberRoutes = require("./numbers-route");

const app = express();

console.log("Connected");

app.use(bodyParser.json());

app.use("/", numberRoutes);

app.listen(8008);
