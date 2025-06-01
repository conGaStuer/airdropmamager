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
const updateAirdrop = async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedCount] = await Airdrop.update(req.body, { where: { id } });

    if (updatedCount === 0) {
      return res.status(404).json({ error: "Airdrop không tồn tại" });
    }

    const updatedAirdrop = await Airdrop.findByPk(id);
    return res.json({
      message: "Cập nhật thành công",
      airdrop: updatedAirdrop.toJSON(),
    });
  } catch (error) {
    console.error("PUT /api/airdrops/:id error:", error);
    return res.status(500).json({ error: "Lỗi server khi cập nhật airdrop" });
  }
};
const deleteAirdrop = async (req, res) => {
  try {
    const id = req.params.id;
    await Airdrop.destroy({ where: { id } });
    res.json({ message: "Xoa thanh cong" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi server khi thêm airdrop." });
  }
};
module.exports = {
  getAllAirdrops,
  getAirdropById,
  createAirdrop,
  updateAirdrop,
  deleteAirdrop,
};
