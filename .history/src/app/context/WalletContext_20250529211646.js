"use client";
import React, { createContext, useState, useEffect } from "react";

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const { ethers } = await import("ethers");
          await window.ethereum.request({ method: "eth_requestAccounts" });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const addr = await signer.getAddress();
          const bal = ethers.formatEther(await provider.getBalance(addr));

          setAddress(addr);
          setBalance(bal);
        } catch (error) {
          console.error("Error getting wallet info:", error);
        }
      }
    };

    getBalance();

    // Optional: listen for account changes and update
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) {
          setAddress(null);
          setBalance(null);
        } else {
          getBalance();
        }
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ address, balance }}>
      {children}
    </WalletContext.Provider>
  );
}
