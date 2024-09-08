import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2669d671-357b-441a-abdd-53ae2489bfc8",
  },
});

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) => {
      return response.data;
    });
  },

  updateUserStatus(status) {
    debugger;
    return instance.put(`status`, { status: status }).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  getHeaderProfile() {
    return instance.get(`auth/me/`).then((response) => {
      return response.data;
    });
  },
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 1) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}}`, {})
      .then((response) => {
        return response.data;
      });
  },

  getUserProfile(userId) {
    console.warn("Obsolete method. Please");
    return profileAPI.getUserProfile(userId);
  },

  getHeaderProfile() {
    console.warn("Obsolete method. Auth");
    return authAPI.getHeaderProfile();
  },

  follow(id = 1) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
  unFollow(id = 1) {
    return instance.delete(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
};
