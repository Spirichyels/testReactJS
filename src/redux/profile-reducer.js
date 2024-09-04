import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, likesCount: 12, message: "Helloy" },
    { id: 2, likesCount: 5, message: "Hi? Arae You?" },
    { id: 3, likesCount: 0, message: "blabla" },
    { id: 4, likesCount: 9, message: "WtF" },
    { id: 5, likesCount: 11, message: "It`s is my first post!" },
  ],
  newPostText: "it-camasutra",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let rand = Math.floor(Math.random() * 300);
      let newPost = {
        id: state.posts.length + 1,
        likesCount: rand,
        message: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newTextP,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const uppdateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newTextP: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then((data) => {
      //debugger;
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
