import React from "react";
import s from "./SiteBarItem.module.css";

const SiteBar = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=f230c0df1f3d59905f60481a11e6c4ac21cb7a777bd3716f-10511592-images-thumbs&n=13"
          alt=""
        />
        {props.name}
      </div>
    </div>
  );
};

export default SiteBar;
