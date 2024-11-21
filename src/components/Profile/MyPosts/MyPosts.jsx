import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";
import { Field, reduxForm } from "redux-form";
import {
  maxLentgthCreator,
  requred,
} from "../../../utils/validators/validators.js";
import { Textarea } from "../../common/FormsControls/FormsControls.js";

const MyPosts = React.memo((props) => {
  //   console.log("RENDER");
  //   console.log(props);

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
});

const maxLength = maxLentgthCreator(10);

const AddPostForms = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        validate={[requred, maxLength]}
        placeholder="Enter your post"
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
