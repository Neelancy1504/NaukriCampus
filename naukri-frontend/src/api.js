// File: src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://naukri-campus-zyrt.vercel.app/api",
});

// Add a request interceptor
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    req.headers["Content-Type"] = "application/json";
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth endpoints
export const loginUser = (loginData) => API.post("/auth/login", loginData);

// Job endpoints
export const postJob = (jobData) => API.post("/jobs/post-job", jobData);
export const fetchJobs = () => API.get("/jobs/my-jobs");
