"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function ClaimPage() {
  const { id } = useParams();
  const [airdrop, setAirdrop] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAirdrop = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/airdrops/${id}`);
        const data = await res.json();
        setAirdrop(data);
      } catch (err) {
        console.error(err);
        setError("Không lấy được thông tin airdrop.");
      }
    };

    fetchAirdrop();
  }, [id]);

  const handleClaim = async () => {
    if (!airdrop || !airdrop.contractAddress) {
      setError("Không có địa chỉ hợp đồng để claim.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        airdrop.contractAddress,
        abi, // nhớ định nghĩa `abi` ở đầu file
        signer
      );

      const tx = await contract.claim();
      await tx.wait();
      alert("Claim thành công ✅");
    } catch (err) {
      console.error(err);
      setError("Claim thất bại ❌");
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!airdrop) return <p>Đang tải dữ liệu...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-xl font-semibold mb-4">Claim: {airdrop.name}</h1>
      <p>Token amount: {airdrop.tokenAmount}</p>
      <button
        onClick={handleClaim}
        className="px-4 py-2 bg-green-500 text-white rounded mt-4"
      >
        Claim now
      </button>
    </div>
  );
}
