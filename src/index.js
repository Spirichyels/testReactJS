import store from "./redux/state";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        AppState={state}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
