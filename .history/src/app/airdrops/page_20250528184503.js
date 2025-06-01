"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import StatCard from "@/components/StatCard";
import "../../styles/table.scss";
export default function AirdropPages() {
  const [airdrops, setAirdrops] = useState([]);
  const [count, setCount] = useState("");
  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/airdrops");
        setAirdrops(res.data);
      } catch (err) {
        console.error("Error fetching airdrops:", err);
      }
    };
    const fetchCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/airdrops/count");
        setCount(res.data.total);
        console.log("Count data:", res.data); // ✅ Phải là { total: <number> }
      } catch (err) {
        console.error("Error fetching airdrops:", err);
      }
    };
    fetchAirdrops();
    fetchCount();
  }, []);
  const typeClassMap = {
    depin:
      "text-yellow-500 bg-orange-100 border-yellow-300 hover:bg-orange-200",
    testnet:
      "text-purple-500 bg-purple-100 border-purple-300 hover:bg-purple-200",
    webpoint: "text-blue-500 bg-blue-100 border-blue-300 hover:bg-blue-200",
  };
  const handleDelete = async (id) => {
    if (confirm("Bạn có chắc muốn xóa airdrop này không?")) {
      await axios.delete(`http://localhost:5000/api/airdrops/${id}`);
      const res = await axios.get("http://localhost:5000/api/airdrops");
      setAirdrops(res.data);
    }
  };
  const router = useRouter();
  return (
    <div style={{ padding: 20 }}>
      <button
        className="pl-2 pr-2 pt-1 pb-1 text-blue-500 bg-blue-100 border border-blue-300 rounded-lg mb-2 text-sm"
        onClick={() => router.push("./airdrops/new")}
      >
        Add airdrop
      </button>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Airdrops "
          value={count}
          percentage={25.2}
          isUp={true}
          chartColor="#FACC15" // yellow
          data={[5, 8, 7, 10, 12, 18, 21]}
        />
        <StatCard
          title="Order items over time"
          value={15}
          percentage={18.2}
          isUp={true}
          chartColor="#34D399" // green
          data={[3, 5, 4, 6, 9, 11, 15]}
        />
        <StatCard
          title="Returns Orders"
          value={0}
          percentage={-1.2}
          isUp={false}
          chartColor="#F87171" // red
          data={[1, 0, 0, 0, 0, 0, 0]}
        />
        <StatCard
          title="Fulfilled orders over time"
          value={12}
          percentage={12.2}
          isUp={true}
          chartColor="#60A5FA" // blue
          data={[2, 4, 6, 7, 9, 11, 12]}
        />
      </div>

      <div className="rounded-xl overflow-hidden shadow-md mt-5">
        <table cellPadding="15" className="w-full bg-white">
          <thead className="bg-gray-100 text-sm text-center">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Tên</th>
              <th className="px-4 py-2">startDate</th>
              <th className="px-4 py-2">type</th>
              <th className="px-4 py-2">tokenAmount</th>
              <th className="px-4 py-2">raised</th>
              <th className="px-4 py-2">Backer</th>
              <th className="px-4 py-2">status</th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {airdrops.map((item) => (
              <tr key={item.id} className="border-t text-center text-sm">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{new Date(item.startDate).toLocaleDateString("vi-VN")}</td>
                <td
                  className={
                    item.type === "DEPIN"
                      ? "text-green-500 bg-orange-100 border border-yellow-300 rounded-lg hover:bg-orange-200  transition "
                      : item.type === "Testnet"
                      ? "text-red-500"
                      : item.type === "Webpoint"
                      ? "text-orange-500"
                      : "text-gray-500"
                  }
                >
                  {item.type}
                </td>
                <td>{item.tokenAmount}</td>
                <td>{item.raised}</td>
                <td>{item.backer}</td>
                <td
                  className={
                    item.status === "online" ? "text-green-500" : "text-red-500"
                  }
                >
                  {item.status}
                </td>
                <td>
                  <button
                    onClick={() => router.push(`./airdrops/${item.id}/edit`)}
                    className="inline-flex items-center px-2 py-0.5 text-xs
                text-yellow-500 bg-orange-100 border border-yellow-300 rounded-full
                hover:bg-orange-200 transition mr-2"
                  >
                    <span className="w-2 h-2 mr-2 bg-yellow-500 rounded-full"></span>
                    Edit
                  </button>
                  <button
                    className="inline-flex items-center px-2 py-0.5 text-xs
                text-blue-500 bg-blue-100 border border-blue-300 rounded-full
                hover:bg-blue-200 transition"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
