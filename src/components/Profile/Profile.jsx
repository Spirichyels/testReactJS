import React from "react";
import prof from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	debugger;
  return (
    <div className={prof.content}>
      <ProfileInfo />
      <MyPostsContainer store = {props.store}
      />
    </div>
  );
};

export default Profile;
