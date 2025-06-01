"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default async function AirdropPages() {
  const [airdrops, setAirdrops] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const fetchAirdrops = async () => {
    const res = await axios.get("http://localhost:5000/api/airdrops");
    setAirdrops(res.data);
  };
  useEffect(() => {
    fetchAirdrops();
  }, []);
  const handleCreate = async () => {
    await axios.post("http://localhost:5000/api/airdrops", form);
    setForm({ name: "", description: "" });
    fetchAirdrops();
  };
  const handleDelete = async (id) => {
    if (confirm("Bạn có chắc muốn xóa airdrop này không?")) {
      await axios.delete(`http://localhost:5000/api/airdrops/${id}`);
      fetchAirdrops();
    }
  };
  const router = useRouter();
  return (
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
                <button onClick={() => router.push(`./airdrops/${id}/edit`)}>
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
