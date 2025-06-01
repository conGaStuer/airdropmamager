// src/app/airdrops/layout.js
"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { WalletProvider } from "../app/context/WalletContext";

export default function AirdropLayout({ children }) {
  return (
    <WalletProvider>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <NavBar /> {/* ✅ NavBar nằm trong WalletProvider */}
          <main className="pt-14">{children}</main>
        </div>
      </div>
    </WalletProvider>
  );
}
