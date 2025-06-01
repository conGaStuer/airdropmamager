"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function AirdropPages({
  title,
  value,
  percentage,
  chartColor,
  data,
  isUp,
}) {
  const [airdrops, setAirdrops] = useState([]);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/airdrops");
        setAirdrops(res.data);
      } catch (err) {
        console.error("Error fetching airdrops:", err);
      }
    };
    fetchAirdrops();
  }, []);

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
      <button onClick={() => router.push("./airdrops/new")}>Add airdrop</button>
      <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-xs">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">{value} -</div>
        </div>
        <div className="flex items-center text-xs text-gray-400 mt-1">
          <span className={isUp ? "text-green-500" : "text-red-500"}>
            {isUp ? "▲" : "▼"} {percentage}% last week
          </span>
        </div>
        <div className="h-16 mt-2">
          <Line
            data={{
              labels: data.map((_, i) => i),
              datasets: [
                {
                  data,
                  borderColor: chartColor,
                  borderWidth: 2,
                  tension: 0.4,
                  pointRadius: 0,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
              },
              scales: {
                x: { display: false },
                y: { display: false },
              },
            }}
          />
        </div>
      </div>
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
                <button
                  onClick={() => router.push(`./airdrops/${item.id}/edit`)}
                >
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
