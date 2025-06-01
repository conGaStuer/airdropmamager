"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
export default function AirdropPages() {
  const [airdrops, setAirdrops] = useState([]);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/airdrops");
        setAirdrops(res.data);
      } catch (err) {
        console.error("Error fetching airdrops:", err);
      }
    };
    fetchAirdrops();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Bạn có chắc muốn xóa airdrop này không?")) {
      await axios.delete(`http://localhost:5000/api/airdrops/${id}`);
      const res = await axios.get("http://localhost:5000/api/airdrops");
      setAirdrops(res.data);
    }
  };
  const router = useRouter();
  return (
    <div>
    <div style={{ padding: 20 }}>
      <h1>List airdrop</h1>
      <button onClick={() => router.push("./airdrops/new")}>Add airdrop</button>
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: 20, width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {airdrops.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button
                  onClick={() => router.push(`./airdrops/${item.id}/edit`)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
