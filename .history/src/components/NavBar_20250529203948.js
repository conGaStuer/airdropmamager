"use client";
import React from "react";
import "../styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faRectangleList,
  faChartSimple,
  faCreditCard,
  faBarsProgress,
  faGear,
  faHeadset,
  faRightFromBracket,
  faRing,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function NavBar() {
  const [address, setAddress] = useState("");
  const loginWithMetamask = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const walletAddress = await signer.getAddress();
    setAddress(walletAddress);

    const nonce = uuidv4();
    const message = `Login verification: ${nonce}`;

    const signature = await signer.signMessage(message);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ address: walletAddress, signature, nonce }),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      alert("Login successful!");
      // lưu token, set cookie, v.v. ở đây
    } else {
      alert("Login failed!");
    }
  };
  return (
    <div className="nav-side">
      {address ? (
        <div className="wallet-address border border-gray-100">
          ✅ Connected: {address.slice(0, 6)}...{address.slice(-4)}
        </div>
      ) : (
        <button onClick={loginWithMetamask}>Login with MetaMask</button>
      )}
      <div className="menu">
        <div className="iconn">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </div>
        <Image src="/styles/avt.jpg" alt="Avatar" width={20} height={20} />
      </div>
    </div>
  );
}
