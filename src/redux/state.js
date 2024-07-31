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

    messagesPage: {
      newMessageText: "message",
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

    sitebar: {
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
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";

    this._callSubscriber(this._state);
  },
  updateNewPostText(newTextP) {
    this._state.profilePage.newPostText = newTextP;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newTextP;
      this._callSubscriber(this._state);
    }
  },

  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messagesPage.newMessageText,
    };

    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = "";

    this._callSubscriber(this._state);
  },
  updateNewMessageText(newTextM) {
    this._state.messagesPage.newMessageText = newTextM;
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
