import React from "react";

import logo from "../../assets/images/logo.png";

import style from "./Header.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        //src="https://w7.pngwing.com/pngs/876/201/png-transparent-logo-graphic-designer-logos-company-logo-wikimedia-commons.png"
        src={logo}
        alt=""
      />

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <NavLink to={"/login"}>
            <div>
              <img src={props.photos} />
            </div>
            <div>
              {props.login} - <button onClick={props.logout}>Log out</button>
            </div>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
