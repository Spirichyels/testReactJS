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
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    debugger;
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
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

  follow(iserId = 1) {
    return instance.post(`follow/${iserId}`, {}).then((response) => {
      return response.data;
    });
  },
  unFollow(iserId = 1) {
    return instance.delete(`follow/${iserId}`, {}).then((response) => {
      return response.data;
    });
  },
};
