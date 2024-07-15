import React from "react";
import nav from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          to="/settings"
          className={(navData) => (navData.isActive ? nav.active : nav.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
