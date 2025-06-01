import React from "react";
import "../styles/sideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-info">
        <h4>Airdrop Noob @@</h4>
        <div className="user-profile">
          <img src="/path/to/image.jpg" />
          <h4>User Name</h4>
          <p>Degree</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-element">
          <FontAwesomeIcon icon={faEdit} />
          <span>Overview</span>
        </div>
        <div className="menu-element">
          <i>z</i>
          <span>Analytics</span>
        </div>
        <div className="menu-element">
          <i>z</i>
          <span>Card</span>
        </div>
        <div className="menu-element">
          <i>z</i>
          <span>Manage</span>
        </div>
        <div className="menu-element">
          <i>z</i>
          <span>Setting</span>
        </div>
        <div className="menu-element">
          <i>z</i>
          <span>Support</span>
        </div>
      </div>
      <div className="side-logout">
        <i>z</i>
        <span>Sign out</span>
      </div>
    </div>
  );
}
