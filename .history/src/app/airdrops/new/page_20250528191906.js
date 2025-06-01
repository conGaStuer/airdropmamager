"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../../../styles/addForm.scss";
export default function CreateAirdropPage() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    raised: "",
    status: "",
    tokenAmount: "",
    backer: "",
    startDate: "",
    endDate: "",
  });
  const router = useRouter();
  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/airdrops", form);
    router.push("/airdrops");
  };
  return (
    <div className="w-full max-w-8xl mx-auto bg-white p-10 rounded-xl shadow-md mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Create New Airdrop
        </h2>
        <button
          type="button"
          onClick={() => router.push("/airdrops")}
          className="inline-flex items-center px-4 py-2 bg-blue-100
           text-blue-700 rounded-md hover:bg-blue-200 transition"
        >
          Back
        </button>
      </div>
      <form onSubmit={handleCreate} className="grid grid-cols-2 gap-6">
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
            End Date
          </label>
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
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
