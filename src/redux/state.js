import { rerenderEntireTree } from "../render";

let state = {
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
    newMessageText: "message",
  },

  sitebar: {
    friends: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
    ],
  },
};

window.state = state;

export let addPost = (/*postMessage*/) => {
  let newPost = {
    id: 5,
    //message: postMessage,
    message: state.profilePage.newPostText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let updateNewPostText = (newTextP) => {
  state.profilePage.newPostText = newTextP;
  rerenderEntireTree(state);
};

export let addMessage = (/*postMessage*/) => {
  let newMessage = {
    id: 4,
    message: state.messagesPage.newMessageText,
    likesCount: 0,
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newTextM) => {
  state.messagesPage.newMessageText = newTextM;
  rerenderEntireTree(state);
};

export default state;
