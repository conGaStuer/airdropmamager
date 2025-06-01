const express = require("express");
const router = express.Router();
const { getAllAirdrops } = require("../controllers/airdrops.controller");

router.get("/", getAllAirdrops);

module.exports = router;
