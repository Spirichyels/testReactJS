import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

let posts = [
  { id: 1, likesCount: 12, message: "Helloy" },
  { id: 2, likesCount: 5, message: "Hi? Arae You?" },
  { id: 3, likesCount: 0, message: "blabla" },
  { id: 4, likesCount: 9, message: "WtF" },
  { id: 5, likesCount: 11, message: "It`s is my first post!" },
];

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo" },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
