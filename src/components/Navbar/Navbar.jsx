import React from "react";
import nav from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SideBarContainer from "./SideBar/SideBarContainer";

const Navbar = (props) => {
  return (
    <nav className={nav.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          Messages
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/setting"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          Settings
        </NavLink>
      </div>

	  <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        
		>
          Friends
        </NavLink>
      <SideBarContainer />
    </nav>
  );
};

export default Navbar;
