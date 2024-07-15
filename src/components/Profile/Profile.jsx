import React from "react";
import prof from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
  return (
    <div className={prof.content}>
      <ProfileInfo />
      <MyPosts postsProps={props.postsProps} />
      sdfsdf
    </div>
  );
};

export default Profile;
