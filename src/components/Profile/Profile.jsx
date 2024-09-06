import React from "react";
import prof from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  //debugger;
  return (
    <div className={prof.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
