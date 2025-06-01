// app/airdrops/layout.js (hoặc layout.tsx nếu bạn dùng TypeScript)
"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function AirdropLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        <main className="pt-20 pl-8">{children}</main>
      </div>
    </div>
  );
}
