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

export default async function AirdropPages() {
  const airdrops = await getAllAirdrops();

  return (
    <div style={{ padding: 20 }}>
      <h1>List Airdrop</h1>
      {airdrops.length === 0 ? (
        <p>k co data</p>
      ) : (
        <ul>
          {airdrops.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> -{" "}
              {item.description || "No description"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
