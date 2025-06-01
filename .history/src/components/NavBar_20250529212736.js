"use client";
import React, { useContext } from "react";
import { WalletContext } from "@/context/WalletContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import "../styles/navbar.scss";

export default function NavBar() {
  const { address, connectWallet } = useContext(WalletContext);

  return (
    <div className="nav-side">
      {address ? (
        <div className="flex items-center">
          <div className="wallet-address mr-4">
            <span className="border-2 border-solid p-2 cursor-pointer">
              <FontAwesomeIcon icon={faCoins} className="mr-2" />
              Connected: {address.slice(0, 6)}...{address.slice(-4)}
            </span>
          </div>
          {/* Bạn có thể thêm nút logout nếu cần */}
        </div>
      ) : (
        <button onClick={connectWallet}>Login with MetaMask</button>
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
