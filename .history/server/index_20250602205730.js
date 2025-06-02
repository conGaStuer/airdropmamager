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
});

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
