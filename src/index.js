import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
let posts = [
  { id: 1, likesCount: 12, message: "Helloy" },
  { id: 2, likesCount: 5, message: "Hi? Arae You?" },
  { id: 3, likesCount: 0, message: "blabla" },
  { id: 4, likesCount: 9, message: "WtF" },
  { id: 5, likesCount: 11, message: "It`s is my first post!" },
];

render(
  <BrowserRouter>
    <App postsProps={posts} />
    Apptext
  </BrowserRouter>,
  rootElement
);
