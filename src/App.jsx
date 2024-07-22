import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.AppState.sitebar} />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              addPost={props.addPost}
              state={props.AppState.profilePage}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.AppState.messagesPage} />}
        />
      </div>
    </div>
  );
};

export default App;
