import Link from "next/link";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="home">
      {/* <Link href="/airdrops">
        <button>Đi đến trang Airdrops</button>
      </Link> */}
      <NavBar />
      <SideBar />
    </div>
  );
}
