const express = require("express");
const cors = require("cors");
const airdropRoutes = require("./routes/airdrops.routes");
const { sequelize } = require("./models");
const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
app.use(
  cors({
    origin: ["https://airdropmanager.onrender.com", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(
  cors({
    origin: ["https://airdropmanager.onrender.com", "http://localhost:3000"], // Add local dev if needed
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Mount routes
app.use("/api/airdrops", airdropRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Airdrop API is running...");
});

// Test database connection
app.get("/api/db-check", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: "Kết nối MySQL thành công" });
  } catch (err) {
    console.error("Lỗi kết nối MySQL:", err);
    res.status(500).json({ error: "Lỗi kết nối MySQL", details: err.message });
  }
}); // GET all airdrops
app.get("/api/airdrops", async (req, res) => {
  try {
    const airdrops = await Airdrop.findAll();
    res.json(airdrops);
  } catch (err) {
    console.error("Error in GET /api/airdrops:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET airdrops count
app.get("/api/airdrops/count", async (req, res) => {
  try {
    const count = await Airdrop.count();
    res.json({ count });
  } catch (err) {
    console.error("Error in GET /api/airdrops/count:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE new airdrop
app.post("/api/airdrops", async (req, res) => {
  try {
    const { name, description, startDate, endDate, type, tokenAmount, link } =
      req.body;
    const newAirdrop = await Airdrop.create({
      name,
      description,
      startDate: startDate || new Date(),
      endDate: endDate || new Date(),
      type: type || "",
      link: link || "", // Fix: 'link' was referenced but not in req.body
      tokenAmount: tokenAmount || 0,
    });
    res.status(201).json(newAirdrop);
  } catch (err) {
    console.error("Error in POST /api/airdrops:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE airdrop by id
app.delete("/api/airdrops/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
