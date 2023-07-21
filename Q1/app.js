const bodyParser = require("body-parser");
const express = require("express");

const numberRoutes = require("./numbers-route");

const app = express();

app.use(bodyParser.json());

app.use("/", numberRoutes);

app.listen(8008);
