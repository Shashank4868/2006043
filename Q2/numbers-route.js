const express = require("express");

const router = express.Router();

const numberController = require("./number-controller");

router.get("/numbers", numberController.getNumber);

module.exports = router;
