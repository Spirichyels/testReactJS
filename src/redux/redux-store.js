import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { configureStore } from "@reduxjs/toolkit";


let reducers = combineReducers(
	{
		profilePage: profileReducer, 
		dialogsPage: dialogsReducer, 
		sideBar: sidebarReducer
	}
);

let store = configureStore({reducer:reducers});

export default store;