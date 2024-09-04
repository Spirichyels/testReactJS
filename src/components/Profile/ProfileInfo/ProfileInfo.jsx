import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.postImg}>
        {/* <img
          src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649336918_29-vsegda-pomnim-com-p-krasivie-plyazhi-mira-foto-35.jpg"
          alt=""
        /> */}
      </div>
      <div className={s.descriptionBlock}>
        {" "}
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"hello me friends"} />
        <div></div>
        <div></div>
      </div>
      <div className={s.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.aboutMe}</div>
      </div>
      <div className={s.descriptionBlock}>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.youtube}</div>
        <div>{props.profile.contacts.instagramm}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.mainLink}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
