import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { WalletProvider } from "./context/WalletContext"; // ✅ Correct path

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
        <WalletProvider>
          <div className="flex">
            <SideBar />
            <div className="flex-1">
              <NavBar />
              <main className="pt-14">{children}</main>
            </div>
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
