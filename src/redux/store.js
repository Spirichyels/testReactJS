import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


// const SEND_MESSAGE = "SEND_MESSAGE"
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 12, message: "Helloy" },
        { id: 2, likesCount: 5, message: "Hi? Arae You?" },
        { id: 3, likesCount: 0, message: "blabla" },
        { id: 4, likesCount: 9, message: "WtF" },
        { id: 5, likesCount: 11, message: "It`s is my first post!" },
      ],
      newPostText: "it-camasutra",
    },

    dialogsPage: {
      newMessageBody: "",
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
      ],
    },

    sideBar: {
      friends: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state change");
  },
  getState() {
    //debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
	this._state.profilePage 
	= profileReducer(this._state.profilePage, action);
	this._state.dialogsPage
	= dialogsReducer(this._state.dialogsPage, action);
	this._state.sideBar 
	= sidebarReducer(this._state.sideBar, action);

	this._callSubscriber(this._state);
  },


};

// export const  addPostActionCreator =() => ({type: ADD_POST})
// export const uppdateNewPostActionCreator =(text) => 
// 	({type: UPDATE_NEW_POST_TEXT,newTextP: text})


// export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator =(body) => 
// 	({type: UPDATE_NEW_MESSAGE_BODY,body: body})



export default store;
window.state = store;
