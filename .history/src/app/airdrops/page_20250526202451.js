"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import StatCard from "@/components/StatCard";
import "../../styles/table.scss";
export default function AirdropPages() {
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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Orders"
          value={21}
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
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: 20, width: "100%" }}
        className="shadow-md bg-white rounded-2xl "
      >
        <thead className="bg-gray-100 ">
          <tr className="text-sm text-center">
            <th>ID</th>

            <th>Tên</th>
            <th>startDate</th>
            <th>tokenAmount</th>
            <th>requirements</th>
            <th>raised</th>
            <th>Backer</th>
            <th>status</th>

            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {airdrops.map((item) => (
            <tr key={item.id} className="text-sm text-center">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{new Date(item.startDate).toLocaleDateString("vi-VN")}</td>
              <td>{item.tokenAmount}</td>
              <td>{item.requirements}</td>
              <td>{item.raised}</td>
              <td>{item.backer}</td>
              <td>{item.status}</td>

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
