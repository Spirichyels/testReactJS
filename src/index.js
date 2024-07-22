import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import state from "./redux/state";
import { addPost } from "./redux/state";

// addPost("hehe");

ReactDOM.render(
  <BrowserRouter>
    <App AppState={state} addPost={addPost} />
  </BrowserRouter>,
  document.getElementById("root")
);
