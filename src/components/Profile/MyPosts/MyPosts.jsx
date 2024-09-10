import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post iLike={p.likesCount} key={p.id} message={p.message} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <AddPostFormsRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForms = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newPostText"
        placeholder="Enter your message"
      />{" "}
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormsRedux = reduxForm({
  form: "profileAddNewPostForm",
})(AddPostForms);

export default MyPosts;
