import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

import { Route, Routes } from "react-router-dom";

const App = (props) => {
  //   let posts = [
  //     { id: 1, likesCount: 12, message: "Helloy" },
  //     { id: 2, likesCount: 5, message: "Hi? Arae You?" },
  //     { id: 3, likesCount: 0, message: "blabla" },
  //     { id: 4, likesCount: 9, message: "WtF" },
  //     { id: 5, likesCount: 11, message: "It`s is my first post!" },
  //   ];

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          {/* <Route path="/profile" Component={Profile} />
          <Route path="/dialogs" Component={Dialogs} /> */}
          <Route
            path="/dialogs"
            element={() => {
              <Dialogs />;
            }}
          />
          <Route
            path="/profiles"
            element={<Profile postsProps={props.postsProps} />}
          ></Route>
          <Route path="/news" Component={News} />
          <Route path="/music" Component={Music} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
