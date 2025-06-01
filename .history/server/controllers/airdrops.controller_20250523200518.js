import { error } from "console";
import db from "../models/index";

const Airdrop = db.Airdrop;

export const getAllAirdrops = async (req, res) => {
  try {
    const airdrops = await db.Airdrop.findAll();
    res.json(airdrops);
  } catch {
    res.status(500).json({ error: "Lỗi server khi lấy danh sách airdrop." });
  }
};
