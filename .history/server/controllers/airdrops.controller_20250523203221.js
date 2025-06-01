const { where } = require("sequelize");
const db = require("../models/index");
const Airdrop = db.Airdrop;

const getAllAirdrops = async (req, res) => {
  try {
    const airdrops = await Airdrop.findAll();
    res.json(airdrops);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi lấy danh sách airdrop." });
  }
};

module.exports = { getAllAirdrops };
