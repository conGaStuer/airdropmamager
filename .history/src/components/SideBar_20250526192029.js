import React from "react";
import "../styles/sideBar.scss";
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
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-info">
        <div className="user-profile">
          <Image src="/styles/avt.jpg" alt="Avatar" width={80} height={80} />
          <h4>User Name</h4>
          <p>Degree</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-element menu-element1">
          <FontAwesomeIcon icon={faChartSimple} className="icon" />

          <span>Overview</span>
        </div>
        <Link className="menu-element">
          <FontAwesomeIcon icon={faRectangleList} className="icon" />

          <span>List Airdrop</span>
        </Link>
        <div className="menu-element">
          <FontAwesomeIcon icon={faCreditCard} className="icon" />
          <span>Card</span>
        </div>
        <div className="menu-element">
          <FontAwesomeIcon icon={faBarsProgress} className="icon" />
          <span>Manage</span>
        </div>
        <div className="menu-element">
          <FontAwesomeIcon icon={faGear} className="icon" />
          <span>Setting</span>
        </div>
        <div className="menu-element">
          <FontAwesomeIcon icon={faHeadset} className="icon" />

          <span>Support</span>
        </div>
      </div>
      <div className="side-logout">
        <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
        <span>Sign out</span>
      </div>
    </div>
  );
}
