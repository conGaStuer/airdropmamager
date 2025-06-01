import { ethers } from "ethers";

export async function POST(req) {
  const { address, signature, nonce } = await req.json();

  const message = `Login verification: ${nonce}`;

  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);

    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid signature" }),
        { status: 401 }
      );
    }

    // → Ở đây bạn có thể tạo token, JWT hoặc session
    // VD: const token = createJWT(address);

    return new Response(
      JSON.stringify({ success: true, token: "mock-token" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400 }
    );
  }
}
