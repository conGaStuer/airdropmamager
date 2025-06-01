"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditAirdropPage() {
  const [form, setForm] = useState({ name: "", description: "" });
  const router = useRouter();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/airdrops`).then((res) => {
      const data = res.data.find((d) => d.id.toString() === id);
      if (data) setForm(data);
    });
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/airdrops/${id}`, form);
    router.push("/airdrops");
  };
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
