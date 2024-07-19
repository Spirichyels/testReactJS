import React from "react";
import SiteBarItem from "./SiteBarItem/SiteBarItem";
import s from "./SiteBar.module.css";

const SiteBar = (props) => {
  let friendsElements = props.friends.map((sb) => (
    <SiteBarItem id={sb.id} name={sb.name} />
  ));

  return (
    <div>
      <div className={s.bar}>Friends</div>
      <div className={s.siteBarGird}>{friendsElements}</div>
    </div>
  );
};

export default SiteBar;
