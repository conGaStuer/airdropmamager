const express = require("express");
const router = express.Router();
const {
  getAllAirdrops,
  getAirdropById,
  createAirdrop,
  updateAirdrop,
  deleteAirdrop,
  countAirdrops,
} = require("../controllers/airdrops.controller");

router.get("/", getAllAirdrops);
router.get("/:id", getAirdropById);
router.post("/", createAirdrop);
router.put("/:id", updateAirdrop);
router.delete("/:id", deleteAirdrop);
router.get("/count", countAirdrops);

module.exports = router;
