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
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAddress(addr);
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
  };

  return (
    <WalletContext.Provider
      value={{ address, balance, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};
