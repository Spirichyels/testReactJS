//import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SamuraiJsApp from "./App";

ReactDOM.render(<SamuraiJsApp />, document.getElementById("root"));

// export let rerenderEntireTree = (state) => {
//   window.state = state;

//   ReactDOM.render(<SamuraiJsApp />, document.getElementById("root"));
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
