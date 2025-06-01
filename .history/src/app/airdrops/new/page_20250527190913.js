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
    <div className="w-full bg-slate-500 add-form rounded-xl p-8">
      <h1 className="font-bold text-lg">Thêm Airdrop</h1>
      <form onSubmit={handleCreate} className="form">
        <div className="form-left flex flex-col justify-between ">
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">Name: </span>

            <input
              placeholder="Name"
              value={form.name}
              className="w-64 h-10 rounded-md"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">Airdrop name: </span>

            <input
              placeholder="Name"
              value={form.name}
              className="w-64 h-10 rounded-md"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>{" "}
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">Airdrop name: </span>

            <input
              placeholder="Name"
              value={form.name}
              className="w-64 h-10 rounded-md"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>{" "}
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">Airdrop name: </span>

            <input
              placeholder="Name"
              value={form.name}
              className="w-64 h-10 rounded-md"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>{" "}
        </div>
        <div className="form-right  flex flex-col justify-between ">
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">requirements: </span>
            <input
              placeholder="Mô tả"
              value={form.description}
              className="w-64 h-10 rounded-md"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>{" "}
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">requirements: </span>
            <input
              placeholder="Mô tả"
              value={form.description}
              className="w-64 h-10 rounded-md"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">requirements: </span>
            <input
              placeholder="Mô tả"
              value={form.description}
              className="w-64 h-10 rounded-md"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between h-16 bg-slate-200 items-center">
            <span className="text-sm">requirements: </span>
            <input
              placeholder="Mô tả"
              value={form.description}
              className="w-64 h-10 rounded-md"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
        </div>

        <button type="submit" className="relative top-56 ">
          Tạo
        </button>
      </form>
    </div>
  );
}
