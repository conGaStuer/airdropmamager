import React from "react";
import "../styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faRectangleList,
  faChartSimple,
  faCreditCard,
  faBarsProgress,
  faGear,
  faHeadset,
  faRightFromBracket,
  faRing,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="nav-side">
      <p>Hello My Friends!!</p>
      <div>
        <div>
          <FontAwesomeIcon icon={faRing} className="icon" />
        </div>
        <Image src="/styles/avt.jpg" alt="Avatar" width={20} height={20} />
      </div>
    </div>
  );
}
