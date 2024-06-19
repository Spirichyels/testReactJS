import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
