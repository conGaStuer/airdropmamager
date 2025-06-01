"use client";
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const barData = [
  { name: "Mon", value: 3 },
  { name: "Tue", value: 5 },
  { name: "Wed", value: 2 },
  { name: "Thu", value: 4 },
  { name: "Fri", value: 6 },
  { name: "Sat", value: 3 },
  { name: "Sun", value: 1 },
];

const lineData = [
  { name: "", value: 100 },
  { name: "", value: 200 },
  { name: "", value: 150 },
  { name: "", value: 300 },
  { name: "", value: 250 },
  { name: "", value: 400 },
  { name: "", value: 380 },
];

const transactions = [
  { name: "Jane Cooper", value: 1200, currency: "US dollar" },
  { name: "Leslie Alexander", value: 2890, currency: "Euro" },
  { name: "Flight Ticket", value: 1000, currency: "Pound" },
  { name: "Robert Fox", value: 2250, currency: "Euro" },
  { name: "KFC", value: 120, currency: "US dollar" },
  { name: "Jacob Jones", value: 1700, currency: "Pound" },
  { name: "Dev Cooper", value: 4500, currency: "Euro" },
];

export default function Chart() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans custom-chart">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "US dollar",
            value: 4558,
            color: "bg-purple-100",
            barColor: "#a78bfa",
            percent: 33,
          },
          {
            label: "Euro",
            value: 2670,
            color: "bg-yellow-100",
            barColor: "#facc15",
            percent: 12,
          },
          {
            label: "Pound",
            value: 5590,
            color: "bg-red-100",
            barColor: "#f87171",
            percent: 33,
          },
        ].map((item, idx) => (
          <div key={idx} className={`rounded-xl p-4 ${item.color}`}>
            <h3 className="text-lg font-semibold">{item.value}</h3>
            <p className="text-sm text-gray-600">{item.label}</p>
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={barData}>
                <Bar
                  dataKey="value"
                  fill={item.barColor}
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-end text-sm text-gray-500">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="mr-1 text-xs"
              />
              {item.percent}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Send Money</h2>
          <div className="flex items-center gap-2">
            <select className="border rounded px-2 py-1">
              <option>USD</option>
            </select>
            <button className="bg-black text-white px-4 py-1 rounded">
              Send
            </button>
          </div>
        </div>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f59e0b"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-right text-sm text-gray-500 mt-2">
          1 USD = 104.00 BDT
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Send Money</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Salary",
                type: "Regular Payment",
                value: 3500,
                currency: "US dollar",
              },
              {
                title: "Web Project",
                type: "Unregular Payment",
                value: 6500,
                currency: "Euro",
              },
              {
                title: "App Project",
                type: "Regular Payment",
                value: 1200,
                currency: "Pound",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-purple-50 p-4 rounded-xl">
                <h4 className="text-md font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.type}</p>
                <p className="text-xl font-bold mt-2">{item.value}</p>
                <span className="text-sm text-gray-500">{item.currency}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Transactions</h3>
            <select className="bg-black text-white border border-white px-2 py-1 rounded">
              <option>Month</option>
            </select>
          </div>
          <ul className="space-y-3">
            {transactions.map((t, idx) => (
              <li
                key={idx}
                className="bg-white text-black p-3 rounded-xl flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">08 Sep, 2022</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{t.value}</p>
                  <p className="text-sm text-gray-500">{t.currency}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
