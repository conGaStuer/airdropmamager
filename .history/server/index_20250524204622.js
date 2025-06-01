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

// CREATE new airdrop
app.post("/api/airdrops", async (req, res) => {
  try {
    const { name, description, startDate, endDate, tokenAmount, requirements } =
      req.body;
    const newAirdrop = await Airdrop.create({
      name,
      description,
      startDate: startDate || new Date(),
      endDate: endDate || new Date(),
      tokenAmount: tokenAmount || 0,
      requirements: requirements || "",
    });
    res.status(201).json(newAirdrop);
  } catch (err) {
    console.error("Error in POST /api/airdrops:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE airdrop by id
app.put("/airdrops/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, startDate, endDate, tokenAmount, requirements } =
    req.body;

  try {
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

    res.json({ message: "Cập nhật thành công", airdrop });
  } catch (err) {
    console.error("PUT /airdrops/:id error:", err.message);
    if (err.errors) {
      err.errors.forEach((e) => {
        console.error(`Field: ${e.path}, Message: ${e.message}`);
      });
    }
    res.status(500).json({ error: "Lỗi server khi cập nhật airdrop" });
  }
});

// DELETE airdrop by id
app.delete("/api/airdrops/:id", async (req, res) => {
  try {
    const id = req.params;
    const airdrop = await Airdrop.findByPk(id);
    if (!airdrop) {
      return res.status(404).json({ error: "Airdrop không tồn tại" });
    }

    await airdrop.destroy();
    res.json({ message: "Xóa thành công" });
  } catch (err) {
    console.error("DELETE /api/airdrops/:id error:", err);
    res.status(500).json({ error: "Lỗi server khi xóa airdrop" });
  }
});

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
