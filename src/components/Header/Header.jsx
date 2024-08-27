import React from "react";

import style from "./Header.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://w7.pngwing.com/pngs/876/201/png-transparent-logo-graphic-designer-logos-company-logo-wikimedia-commons.png"
        alt=""
      />

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <NavLink to={"/login"}>
            <div>
              <img src={props.photos} />
            </div>
            <div>{props.login}</div>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
