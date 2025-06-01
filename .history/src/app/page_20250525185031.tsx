import Link from "next/link";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link href="/airdrops">
        <button>Đi đến trang Airdrops</button>
      </Link>
      <SideBar />
    </div>
  );
}
