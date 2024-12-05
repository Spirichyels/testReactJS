import { Route } from "react-router-dom";
import { Component, Suspense } from "react";
import React from "react";
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/redux-store";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import { withSuspense } from "./components/hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    //console.log("App initial");
  }

  render() {
    if (!this.props.initialized) return <Preloader></Preloader>;

    //console.log("App render");
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />

            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJsApp;
