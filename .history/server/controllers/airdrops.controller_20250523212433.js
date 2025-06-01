const { where } = require("sequelize");
const db = require("../models/index");
const { log } = require("console");
const Airdrop = db.Airdrop;

const getAllAirdrops = async (req, res) => {
  try {
    const airdrops = await Airdrop.findAll();
    res.json(airdrops);
    console.log(airdrops);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi lấy danh sách airdrop." });
  }
};
const getAirdropById = async (req, res) => {
  try {
    const { id } = req.params;
    const airdrop = await Airdrop.findByPk(id);
    if (!airdrop)
      return res.status(400).json({ error: "Không tìm thấy airdrop." });
    res.json(airdrop);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi lấy airdrop." });
  }
};
const createAirdrop = async (req, res) => {
  try {
    const { name, description, startDate, endDate, tokenAmount, requirements } =
      req.body;
    const newAirdrop = Airdrop.create({
      name,
      description,
      startDate,
      endDate,
      tokenAmount,
      requirements,
    });
    res.status(201).json(newAirdrop);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi thêm airdrop." });
  }
};
const updatedAirdrop = async (req, res) => {
  try {
    const { id } = req.params;
    const [update] = Airdrop.udpate(req.body, { where: { id } });
    if (update) {
      const updateAirdrop = await Airdrop.findByPk(id);
      return res.json(updatedAirdrop);
    }
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi thêm airdrop." });
  }
};
module.exports = { getAllAirdrops, getAirdropById, createAirdrop };
