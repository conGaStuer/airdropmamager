"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import "../../../../styles/addForm.scss";

export default function EditAirdropPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    type: 0,
    tokenAmount: "",
    backer: "",
    raised: "",
    status: "",
  });
  const router = useRouter();
  const { id } = useParams();

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        startDate: form.startDate || new Date().toISOString(),
        endDate: form.endDate || new Date().toISOString(),
        type: form.type || 0,
        tokenAmount: form.tokenAmount || "",
        raised: form.raised || "",
        backer: form.backer || "",
        status: form.status || "",
        link: form.link || "",
      };

      console.log("PUT payload:", payload);

      await axios.put(`http://localhost:5000/api/airdrops/${id}`, payload);
      router.push("/airdrops");
    } catch (error) {
      console.error("PUT /api/airdrops/:id error:", error.message, error.stack);
      alert("Lỗi cập nhật! Xem log để biết chi tiết.");
    }
  };

  useEffect(() => {
    if (!id) return; // Nếu id chưa có thì không fetch
    axios.get(`http://localhost:5000/api/airdrops`).then((res) => {
      const data = res.data.find((d) => d.id.toString() === id);
      if (data) setForm(data);
    });
  }, [id]);
  return (
    <div className="w-full add-form rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Edit Airdrop</h2>
        <button
          type="button"
          onClick={() => router.push("/airdrops")}
          className="inline-flex items-center px-4 py-2 bg-blue-100
           text-blue-700 rounded-md hover:bg-blue-200 transition"
        >
          Back
        </button>
      </div>
      <form onSubmit={handleEdit} className="grid grid-cols-2 gap-6">
        {/* Airdrop Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Airdrop Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter airdrop name"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="DEPIN">DEPIN</option>
            <option value="Testnet">Testnet</option>
            <option value="Webpoint">Webpoint</option>
          </select>
        </div>

        {/* TokenAmount */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Token Amount
          </label>
          <input
            type="number"
            value={form.tokenAmount}
            onChange={(e) => setForm({ ...form, tokenAmount: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 5000"
          />
        </div>

        {/* Raised */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Raised
          </label>
          <input
            type="number"
            value={form.raised}
            onChange={(e) => setForm({ ...form, raised: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 100"
          />
        </div>

        {/* Backer */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Backer
          </label>
          <input
            type="text"
            value={form.backer}
            onChange={(e) => setForm({ ...form, backer: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: 16aa"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Link to airdrop
          </label>
          <input
            type="text"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Create Airdrop
          </button>
        </div>
      </form>
    </div>
  );
}
