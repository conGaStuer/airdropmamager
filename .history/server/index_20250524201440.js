const express = require("express");
const cors = require("cors");
const airdropRoutes = require("./routes/airdrops.routes");
const { Airdrop } = require("./models");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/airdrops", airdropRoutes);

app.get("/", (req, res) => {
  res.send("Airdrop API is running...");
});
app.post("/api/airdrops/:id", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newAirdrop = await Airdrop.create({
      name,
      description,
      startDate: new Date(), // Or receive from req.body
      endDate: new Date(),
      tokenAmount: 0,
      requirements: "",
    });
    res.status(201).json(newAirdrop);
  } catch (err) {
    console.error("Error in POST /airdrops:", err);
    res.status(500).json({ error: "Server error" });
  }
});
app.put("/api/airdrops/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDate, endDate, tokenAmount, requirements } =
      req.body;
    const airdrop = await Airdrop.findByPk(id);
    if (!airdrop) {
      return res.status(404).json({ error: "Airdrop không tồn tại" });
    }
    await airdrop.update({
      name,
      description,
      startDate,
      endDate,
      tokenAmount,
      requirements,
    });
    res.json(airdrop);
  } catch (err) {
    console.error("PUT /api/airdrops/:id error:", err);
    res.status(500).json({ error: "Lỗi server khi cập nhật airdrop" });
  }
});
app.delete("/api/airdrops", async (req, res) => {
  try {
    const { id } = req.params;
    const airdrop = await Airdrop.findByPk(id);
    if (!airdrop) {
      return res.status(404).json({ error: "Airdrop không tồn tại" });
    }
    await airdrop.destroy();
    res.json({ message: "Xóa thành công" });
  } catch (err) {
    console.error("PUT /api/airdrops/:id error:", err);
    res.status(500).json({ error: "Lỗi server khi cập nhật airdrop" });
  }
});
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
