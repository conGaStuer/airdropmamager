"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BrowserProvider, Contract } from "ethers";
import axios from "axios";

export default function ClaimPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("Đang chuẩn bị...");
  const [error, setError] = useState("");

  useEffect(() => {
    const runClaim = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/airdrops/${id}`);
        const { contractAddress, abi, functionName } = res.data;

        if (!window.ethereum) {
          setStatus("Không tìm thấy MetaMask");
          return;
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(contractAddress, abi, signer);

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
