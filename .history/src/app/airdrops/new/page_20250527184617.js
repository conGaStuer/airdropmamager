"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../../../styles/addForm.scss";
export default function CreateAirdropPage() {
  const [form, setForm] = useState({ name: "", description: "" });
  const router = useRouter();
  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/airdrops", form);
    router.push("/airdrops");
  };
  return (
    <div className="w-full bg-slate-500 add-form rounded-xl p-4">
      <h1 className="font-bold">Thêm Airdrop</h1>
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
