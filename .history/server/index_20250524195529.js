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
app.post("/api/airdrops", (req, res) => {
  const newAirdrop = {
    id: airdrops.length + 1,
    name: req.body.name,
    description: req.body.description,
    startDate: new Date(), // Default or you can pass from req.body
    endDate: new Date(),
    tokenAmount: 0,
    requirements: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  airdrops.push(newAirdrop);
  res.status(201).json(newAirdrop);
});
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
