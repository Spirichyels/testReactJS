import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar 
	  //state={props.state.sideBar} 
	  
	  />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile/>
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer/>
          )}
        />
      </div>
    </div>
  );
};

export default App;
