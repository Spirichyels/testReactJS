import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.postImg}>
        <img
          src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649336918_29-vsegda-pomnim-com-p-krasivie-plyazhi-mira-foto-35.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
