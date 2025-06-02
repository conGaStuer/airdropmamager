const { where } = require("sequelize");
const { Airdrop } = require("../models");

const getAllAirdrops = async (req, res) => {
  try {
    const airdrops = await Airdrop.findAll();
    res.json(airdrops);
    console.log("Airdrops fetched:", airdrops);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách airdrop:", error);
    res
      .status(500)
      .json({
        error: "Lỗi server khi lấy danh sách airdrop",
        details: error.message,
      });
  }
};

const getAirdropById = async (req, res) => {
  try {
    const { id } = req.params;
    const airdrop = await Airdrop.findByPk(id);
    if (!airdrop) {
      return res.status(404).json({ error: "Không tìm thấy airdrop." });
    }
    res.json(airdrop);
  } catch (error) {
    console.error("Lỗi khi lấy airdrop:", error);
    res
      .status(500)
      .json({ error: "Lỗi server khi lấy airdrop", details: error.message });
  }
};

const createAirdrop = async (req, res) => {
  try {
    const {
      name,
      startDate,
      endDate,
      type,
      tokenAmount,
      backer,
      raised,
      status,
      link,
      description,
    } = req.body;
    const newAirdrop = await Airdrop.create({
      name,
      description,
      startDate,
      endDate,
      type,
      tokenAmount,
      backer,
      raised,
      status,
      link,
    });
    res.status(201).json(newAirdrop);
    console.log("Airdrop created:", newAirdrop);
  } catch (error) {
    console.error("Lỗi khi thêm airdrop:", error);
    res
      .status(500)
      .json({ error: "Lỗi server khi thêm airdrop", details: error.message });
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
    return res
      .status(500)
      .json({
        error: "Lỗi server khi cập nhật airdrop",
        details: error.message,
      });
  }
};

const deleteAirdrop = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCount = await Airdrop.destroy({ where: { id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Airdrop không tồn tại" });
    }
    res.json({ message: "Xóa thành công" });
  } catch (error) {
    console.error("Lỗi khi xóa airdrop:", error);
    res
      .status(500)
      .json({ error: "Lỗi server khi xóa airdrop", details: error.message });
  }
};

const countAirdrops = async (req, res) => {
  try {
    const count = await Airdrop.count();
    res.json({ count }); // Fixed to match frontend expectation
  } catch (error) {
    console.error("Lỗi khi đếm airdrops:", error);
    res
      .status(500)
      .json({ error: "Lỗi server khi đếm airdrops", details: error.message });
  }
};

module.exports = {
  getAllAirdrops,
  getAirdropById,
  createAirdrop,
  updateAirdrop,
  deleteAirdrop,
  countAirdrops,
};
