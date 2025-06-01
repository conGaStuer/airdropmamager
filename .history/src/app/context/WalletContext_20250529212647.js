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
      const walletAddress = await signer.getAddress();
      setAddress(walletAddress);

      const balanceBigInt = await provider.getBalance(walletAddress);
      const ethBalance = ethers.formatEther(balanceBigInt);
      setBalance(ethBalance);
    } else {
      alert("MetaMask không được tìm thấy");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
    }
  }, []);

  return (
    <WalletContext.Provider value={{ address, balance, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
