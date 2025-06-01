// app/layout.tsx
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airdrop Admin",
  description: "Manage Airdrops",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
