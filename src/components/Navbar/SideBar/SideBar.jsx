import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import s from "./SideBar.module.css";

const SideBar = (props) => {
  let friendsElements = props.friends.map((sb) => (
    <SideBarItem id={sb.id} name={sb.name} />
  ));

  return (
    <div>
      <div className={s.bar}>Friends</div>
      <div className={s.sideBarGird}>{friendsElements}</div>
    </div>
  );
};

export default SideBar;
