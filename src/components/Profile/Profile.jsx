import React from "react";
import prof from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={prof.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
