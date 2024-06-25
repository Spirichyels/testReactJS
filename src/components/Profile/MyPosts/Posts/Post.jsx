import React from "react";
import s from "./Post.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://kartinki.pibig.info/uploads/posts/2023-04/1681747529_kartinki-pibig-info-p-udivlennii-chelovechek-kartinka-arti-krasi-75.png"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.iLike} Like</span>
      </div>
    </div>
  );
};

export default Posts;
