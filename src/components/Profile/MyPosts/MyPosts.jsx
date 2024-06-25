import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.content}>
        <Post iLike="15" message="Hi, how are you?" />
        <Post iLike="1" message="It`s my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
