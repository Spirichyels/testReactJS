import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import state from "./redux/state";

ReactDOM.render(
  <BrowserRouter>
    <App AppState={state} />
  </BrowserRouter>,
  document.getElementById("root")
);
