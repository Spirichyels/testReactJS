import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const DELETE_POST = "DELETE_POST";

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
        message: action.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newTextP,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      debugger;
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
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

///GET

//UPDATE;
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
  profileAPI.getUserProfile(userId).then((data) => {
    //debugger;
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  //debugger;
  profileAPI.getStatus(userId).then((response) => {
    //debugger;
    dispatch(setStatus(response.data));
  });
};
//dispatch update

export const updateStatus = (status) => (dispatch) => {
  debugger;
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
