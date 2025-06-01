import express from "express";
import cors from "cors";
import airdropRoutes from "./routes/airdrops.routes.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // xử lý body JSON
app.use("/api/airdrops", airdropRoutes);

app.get("/", (req, res) => {
  res.send("Airdrop API is running...");
});

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
