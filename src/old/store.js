import dialogsReducer from "../redux/dialogs-reducer";
import profileReducer from "../redux/profile-reducer";
import sidebarReducer from "../redux/sidebar-reducer";

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
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
