import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649336918_29-vsegda-pomnim-com-p-krasivie-plyazhi-mira-foto-35.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My Post
        <div>New Post</div>
        <div className="posts">
          <div className="item">Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
