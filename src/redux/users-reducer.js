import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOWT";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id != action.userId)],
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
      debugger;
      if (data.resultCode == 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unFollow(userId).then((data) => {
      debugger;
      if (data.resultCode == 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

// export const getProfile = () => {
//   usersAPI.getHeaderProfile().then((data) => {
//     if (data.resultCode === 0) {
//       //debugger;
//       let photos = data.data.photos;
//       if (data.photos === undefined) photos = defaultAvatarka;
//       let { email, id, login } = data.data;
//       this.props.setAuthUserData(email, id, login, photos);
//     }
//   });
// };

export default usersReducer;
