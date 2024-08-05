import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";
import { addPostActionCreator, uppdateNewPostActionCreator } from "../../../redux/state.js";


// let addPostActionCreator =() => {
// 	return {
// 		type: "ADD-POST"
// 	}
// }

// let uppdateNewPostActionCreator =(text) => {
// 	return {
// 		type: "UPDATE-NEW-POST-TEXT",
// 		newTextP: text
// 	}
// }



const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post iLike={p.likesCount} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = uppdateNewPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
