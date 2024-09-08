import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

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
  status: "",
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

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
//SET or ADD
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

///GET

//UPDATE
export const uppdateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newTextP: text,
});
export const updateUserStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});

///////////////////////////////////////////////////////////////////
//dispatch GET
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId).then((data) => {
    //debugger;
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  //debugger;
  profileAPI.getUserStatus(userId).then((data) => {
    //debugger;
    dispatch(setUserStatus(data));
  });
};
//dispatch update

export const updateStatus = (status) => (dispatch) => {
  debugger;
  profileAPI.updateUserStatus(status).then((data) => {
    debugger;
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
