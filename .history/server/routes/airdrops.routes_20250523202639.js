const express = require("express");
const { getAllAirdrops } = require("../controllers/airdrops.controller");

const router = express.Router();
router.get("/", getAllAirdrops);

module.exports = router;
