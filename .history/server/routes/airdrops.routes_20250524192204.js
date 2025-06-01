const express = require("express");
const router = express.Router();
const {
  getAllAirdrops,
  createAirdrop,
  updateAirdrop,
  deleteAirdrop,
} = require("../controllers/airdrops.controller");

router.get("/", getAllAirdrops);
router.post("/", createAirdrop);
router.put("/:id", updateAirdrop);
router.delete("/:id", deleteAirdrop);
module.exports = router;
