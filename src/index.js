import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

let h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.querySelector("body").appendChild(h1);

export let rerenderEntireTree = (state) => {
  window.state = state;

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
