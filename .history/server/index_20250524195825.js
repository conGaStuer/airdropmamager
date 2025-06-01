const express = require("express");
const cors = require("cors");
const airdropRoutes = require("./routes/airdrops.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/airdrops", airdropRoutes);

app.get("/", (req, res) => {
  res.send("Airdrop API is running...");
});
app.post("/api/airdrops", async (req, res) => {
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
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
