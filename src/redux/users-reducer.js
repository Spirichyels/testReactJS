const FOLLOW = "FOLLOWT";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=e7168cc8c1fb6e18b1bd7adc7e658228_l-5584275-images-thumbs&n=13",
    //   fullName: "Dmitry",
    //   status: "I am boss",
    //   location: { country: "Belarus", city: "Minsk" },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=e7168cc8c1fb6e18b1bd7adc7e658228_l-5584275-images-thumbs&n=13",
    //   fullName: "Sasha",
    //   status: "I am boss too",
    //   location: { country: "Belarus", city: "Moskow" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   photoUrl:
    //     "https://avatars.mds.yandex.net/i?id=e7168cc8c1fb6e18b1bd7adc7e658228_l-5584275-images-thumbs&n=13",
    //   fullName: "Andrey",
    //   status: "I am boss too",
    //   location: { country: "Belarus", city: "Kiev" },
    // },
  ],
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
      return { state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
