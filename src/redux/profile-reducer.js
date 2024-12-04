import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const TOGGLE_IS_EDIT_PROFILE = "TOGGLE_IS_EDIT_PROFILE";

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
  isEditProfile: false,
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
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      //debugger;
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case TOGGLE_IS_EDIT_PROFILE: {
      return { ...state, isEditProfile: action.isEditProfile };
    }

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

//delete save
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
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

//
export const toggleIsEditProfile = (isEditProfile) => ({
  type: TOGGLE_IS_EDIT_PROFILE,
  isEditProfile,
});

///////////////////////////////////////////////////////////////////
//dispatch GET
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  //debugger;
  let response = await profileAPI.getStatus(userId);
  //.then((response) => {
  //debugger;
  dispatch(setStatus(response.data));
  //});
};
//dispatch update

export const updateStatus = (status) => async (dispatch) => {
  //debugger;
  let response = await profileAPI.updateStatus(status);
  //.then((response) => {
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
  //});
};

export const savePhoto = (file) => async (dispatch) => {
  //debugger;
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

// export const goToEditMode = () => {
//   toggleIsEditProfile(true);
// };

export const goToEditMode = () => async (dispatch) => {
  dispatch(toggleIsEditProfile(true));
};

const getErrorsFromMessages = (messages) => {
  //debugger;
  let errors = Object.keys(messages).reduce((acc, key) => {
    let errorMessage = messages[key].split("->");
    errorMessage = errorMessage[1]
      .slice(0, errorMessage[1].length - 1)
      .toLowerCase();
    return { ...acc, [errorMessage]: messages[key] };
  }, {});

  return errors;
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  debugger;
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  console.log(response);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
    dispatch(toggleIsEditProfile(false)); //выключает редактор профиля если нет ошибок
  } else {
    const action = stopSubmit("edit-profile", {
      contacts: getErrorsFromMessages(response.data.messages),
    });

    dispatch(action);
  }
};

export default profileReducer;
