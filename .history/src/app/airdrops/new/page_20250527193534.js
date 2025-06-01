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
    <div className="w-full add-form rounded-xl p-8">
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 gap-6 w-[100%] mx-auto bg-white p-9 rounded-xl shadow-md"
      >
        {/* Input 1 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Airdrop Name</label>
          <input
            type="text"
            value={form.airdropName}
            onChange={(e) => setForm({ ...form, airdropName: e.target.value })}
            className="input-field"
            placeholder="Enter airdrop name"
          />
        </div>

        {/* Input 2 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Token Amount</label>
          <input
            type="text"
            value={form.tokenName}
            onChange={(e) => setForm({ ...form, tokenName: e.target.value })}
            className="input-field"
            placeholder="Token name"
          />
        </div>

        {/* Input 3 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Requirements</label>
          <input
            type="text"
            value={form.tokenSymbol}
            onChange={(e) => setForm({ ...form, tokenSymbol: e.target.value })}
            className="input-field"
            placeholder="e.g. ETH"
          />
        </div>

        {/* Input 4 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Raised</label>
          <input
            type="number"
            value={form.maxParticipants}
            onChange={(e) =>
              setForm({ ...form, maxParticipants: e.target.value })
            }
            className="input-field"
            placeholder="e.g. 1000"
          />
        </div>

        {/* Input 5 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Backer</label>
          <input
            type="number"
            value={form.totalToken}
            onChange={(e) => setForm({ ...form, totalToken: e.target.value })}
            className="input-field"
            placeholder="e.g. 500000"
          />
        </div>

        {/* Input 6 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Start Date</label>
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            className="input-field"
          />
        </div>

        {/* Input 7 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">End Date</label>
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            className="input-field"
          />
        </div>

        {/* Input 8 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Network</label>
          <input
            type="text"
            value={form.network}
            onChange={(e) => setForm({ ...form, network: e.target.value })}
            className="input-field"
            placeholder="e.g. BSC, ETH"
          />
        </div>

        {/* Submit Button - span full width */}
        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Tạo
          </button>
        </div>
      </form>
    </div>
  );
}
