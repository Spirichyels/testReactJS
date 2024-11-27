import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const EDIT_PROFILE_SUCCESS = " EDIT_PROFILE_SUCCESS";

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
  editProfile: false,
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
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      debugger;
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
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: action.value,
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

//delete save
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//EDIT MODE
export const editProfileSucces = (editProfile) => ({
  type: EDIT_PROFILE_SUCCESS,
  editProfile,
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

export const saveProfile = (profile) => async (dispatch, getState) => {
  //debugger;
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  console.log(response);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
    editProfileSucces(false);
  } else {
    //dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));

    dispatch(
      stopSubmit("edit-profile", {
        contacts: { facebook: response.data.messages[0] },
      })
    );
    //editProfile(true);
  }
};

export default profileReducer;

// const getErrorsFromMessages = (messages) => {
// 	let errors = Object.keys(messages).reduce((acc, key) => {
// 	  let errorMessage = messages[key].split("->");
// 	  errorMessage = errorMessage[1]
// 		.slice(0, errorMessage[1].length - 1)
// 		.toLowerCase();
// 	  return { ...acc, [errorMessage]: messages[key] };
// 	}, {});

// 	return errors;
//   };

//   export const saveChangedProfile = (formData) => async (dispatch) => {
// 	let data = await profileAPI.saveChangedProfile(formData);
// 	if (data.resultCode === 0) {
// 	  dispatch(getUserProfile(formData.userId))
// 	} else {
// 	  dispatch(stopSubmit(<имя формы>, { contacts: getErrorsFromMessages(data.messages)}));
// 	}
//   };

//   *для тех кто не
