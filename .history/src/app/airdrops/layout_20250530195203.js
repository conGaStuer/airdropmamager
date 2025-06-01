// src/app/airdrops/layout.js
"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { WalletProvider } from "../context/WalletContext";

export default function AirdropLayout({ children }) {
  return (
    <WalletProvider>
      <main className="">{children}</main>
    </WalletProvider>
  );
}
