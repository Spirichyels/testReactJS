import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

import defaultAvatarka from "../../../assets/images/avatarka.webp";
import ProfileStatusWIthHooks from "./ProfileStatusWIthHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.postImg}></div>
      <div className={s.descriptionBlock}>
        {" "}
        <img
          src={!profile.photos.large ? defaultAvatarka : profile.photos.large}
        />
        <div></div>
        <ProfileStatusWIthHooks status={status} updateStatus={updateStatus} />
        <div></div>
        <div></div>
      </div>
      <div className={s.descriptionBlock}>
        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div>{profile.aboutMe}</div>
      </div>
      <div className={s.descriptionBlock}>
        <div>{profile.contacts.facebook}</div>
        <div>{profile.contacts.website}</div>
        <div>{profile.contacts.vk}</div>
        <div>{profile.contacts.twitter}</div>
        <div>{profile.contacts.youtube}</div>
        <div>{profile.contacts.instagramm}</div>
        <div>{profile.contacts.github}</div>
        <div>{profile.contacts.mainLink}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
