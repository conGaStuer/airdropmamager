// src/context/WalletContext.js
"use client";
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const addr = accounts[0];
      setAddress(addr);
      const provider = new ethers.BrowserProvider(window.ethereum);

      const bal = await provider.getBalance(addr);
      setBalance(ethers.formatEther(bal));
    } else {
      alert("Please install MetaMask.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
    }
  }, []);
  const disconnectWallet = () => {
    setAddress(null);
    setBalance(null);
      if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: "wallet_revokePermissions",
        params: [{ eth_accounts: {} }],
      });
    } catch (error) {
      console.error("Revoke permissions failed", error);
    }
  }
  };

  return (
    <WalletContext.Provider
      value={{ address, balance, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};
