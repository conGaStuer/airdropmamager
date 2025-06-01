import express from "express";

import { getAllAirdrops } from "../controllers/airdrops.controller.js";
const router = express.Router();

router.get("/", getAllAirdrops);

export default router;
