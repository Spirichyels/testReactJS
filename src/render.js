import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import {
  addMessage,
  addPost,
  updateNewPostText,
  updateNewMessageText,
} from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        AppState={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
