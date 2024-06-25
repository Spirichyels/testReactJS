import React from "react";
import prof from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={prof.content}>
      <div>
        <img
          src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649336918_29-vsegda-pomnim-com-p-krasivie-plyazhi-mira-foto-35.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
