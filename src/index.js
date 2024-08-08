import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

export let rerenderEntireTree = (state) => {
debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store) }
		store = {store}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() =>{
	let state = store.getState();
	rerenderEntireTree(state);
} );
