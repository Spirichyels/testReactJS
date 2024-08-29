import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

window.store = store;

export default store;
