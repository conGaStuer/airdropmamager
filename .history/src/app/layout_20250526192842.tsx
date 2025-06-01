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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ flexGrow: 1 }}>
            <NavBar />
            <main style={{ padding: 20 }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
