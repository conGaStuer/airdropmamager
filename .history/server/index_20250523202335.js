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

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
