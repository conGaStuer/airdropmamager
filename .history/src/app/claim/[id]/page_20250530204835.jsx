"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ethers } from "ethers";
import axios from "axios";

export default function ClaimPage() {
  const router = useRouter();
  const { id } = useParams(); // Lấy ID từ URL
  const [status, setStatus] = useState("Đang chuẩn bị...");
  const [error, setError] = useState("");

  useEffect(() => {
    const runClaim = async () => {
      try {
        // 1. Lấy thông tin airdrop từ API
        const res = await axios.get(`http://localhost:5000/api/airdrops/${id}`);
        const { contractAddress, abi, functionName } = res.data;

        // 2. Kết nối MetaMask
        if (!window.ethereum) {
          setStatus("Không tìm thấy MetaMask");
          return;
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        // 3. Gọi hàm claim()
        setStatus("Đang gửi giao dịch...");
        const tx = await contract[functionName]();
        await tx.wait();

        setStatus("Claim thành công! 🎉");
      } catch (err) {
        console.error(err);
        setError(err.reason || err.message || "Đã xảy ra lỗi");
        setStatus("Claim thất bại ❌");
      }
    };

    if (id) runClaim();
  }, [id]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Đang xử lý Claim</h1>
      <p className="mb-2">{status}</p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
