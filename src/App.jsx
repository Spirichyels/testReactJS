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
            profilePage={props.AppState.profilePage}
            dispatch={props.dispatch}
			
			//addPost={props.addPost}
            //updateNewPostText={props.updateNewPostText}
            
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              messagesPage={props.AppState.messagesPage}
              newMessageText={props.AppState.messagesPage.newMessageText}
              dispatch={props.dispatch}
              //   addMessage={props.addMessage}
              //   updateNewMessageText={props.updateNewMessageText}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
