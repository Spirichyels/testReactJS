//import { applyMiddleware, combineReducers, createStore } from "redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);

//let store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

window._store_ = store;

export default store;
