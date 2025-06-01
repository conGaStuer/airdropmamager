import Link from "next/link";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <div className="home">
      {/* <Link href="/airdrops">
        <button>Đi đến trang Airdrops</button>
      </Link> */}

      <Chart />
    </div>
  );
}
