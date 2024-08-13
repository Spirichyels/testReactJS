import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-reducer";


let reducers = combineReducers(
	{
		profilePage: profileReducer, 
		dialogsPage: dialogsReducer, 
		sideBar: sidebarReducer,
		usersPage: usersReducer,
	}
);

let store = configureStore({reducer:reducers});

window.store = store;

export default store;