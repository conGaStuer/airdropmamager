import React from "react";
import axios from "axios";
async function getAllAirdrops() {
  try {
    const res = await axios.get("http://localhost:5000/api/airdrops");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch airdrops:", error);
    return [];
  }
}
