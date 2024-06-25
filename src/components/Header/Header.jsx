import React from "react";

import head from "./Header.module.css";

const Header = () => {
  return (
    <header className={head.header}>
      <img
        src="https://w7.pngwing.com/pngs/876/201/png-transparent-logo-graphic-designer-logos-company-logo-wikimedia-commons.png"
        alt=""
      />
    </header>
  );
};

export default Header;
