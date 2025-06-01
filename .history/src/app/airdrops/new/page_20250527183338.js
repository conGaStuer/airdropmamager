"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreateAirdropPage() {
  const [form, setForm] = useState({ name: "", description: "" });
  const router = useRouter();
  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/airdrops", form);
    router.push("/airdrops");
  };
  return (
    <div className="w-full h-6vh bg-slate-500">
      <h1>Thêm Airdrop</h1>
      <form onSubmit={handleCreate}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Mô tả"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">Tạo</button>
      </form>
    </div>
  );
}
