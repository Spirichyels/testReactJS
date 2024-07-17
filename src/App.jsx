import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
