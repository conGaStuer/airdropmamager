"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditAirdropPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    tokenAmount: 0,
    requirements: "",
  });
  const router = useRouter();
  const { id } = useParams();

  const handleEdit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      startDate: form.startDate || new Date(), // fallback
      endDate: form.endDate || new Date(), // fallback
      tokenAmount: form.tokenAmount || 0,
      requirements: form.requirements || "",
    };
    console.log("Sending PUT payload:", payload); // 👈
    await axios.put(`http://localhost:5000/api/airdrops/${id}`, payload);
    router.push("/airdrops");
  };
  useEffect(() => {
    if (!id) return; // Nếu id chưa có thì không fetch
    axios.get(`http://localhost:5000/api/airdrops`).then((res) => {
      const data = res.data.find((d) => d.id.toString() === id);
      if (data) setForm(data);
    });
  }, [id]);
  return (
    <div style={{ padding: 20 }}>
      <h1>Chỉnh sửa Airdrop</h1>
      <form onSubmit={handleEdit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        ></input>
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></input>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}
