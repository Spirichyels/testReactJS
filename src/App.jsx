import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sideBar} />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}           
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs store = {props.store} />
          )}
        />
      </div>
    </div>
  );
};

export default App;
