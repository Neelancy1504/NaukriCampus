// // // File: src/api.js
// // import axios from 'axios';

// // const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// // API.interceptors.request.use((req) => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       req.headers.Authorization = `Bearer ${token}`;
// //     }
// //     req.headers['Content-Type'] = 'application/json'; // ✅ ADD THIS
// //     return req;
// //   });
  

// // export const postJob = (jobData) => API.post('/jobs/post-job', jobData);
// // export const fetchJobs = () => API.get('/jobs/my-jobs');
// // File: src/api.js
// import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// // Add a request interceptor with logging for debugging
// API.interceptors.request.use(
//   (req) => {
//     const token = localStorage.getItem('token');
//     console.log("Token from localStorage:", token); // For debugging
    
//     if (token) {
//       req.headers.Authorization = `Bearer ${token}`;
//       console.log("Authorization header set:", req.headers.Authorization); // For debugging
//     } else {
//       console.warn("No token found in localStorage!");
//     }
    
//     req.headers['Content-Type'] = 'application/json';
//     return req;
//   },
//   (error) => {
//     console.error("Request interceptor error:", error);
//     return Promise.reject(error);
//   }
// );

// export const postJob = (jobData) => API.post('/jobs/post-job', jobData);
// export const fetchJobs = () => API.get('/jobs/my-jobs');


// File: src/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Add a request interceptor
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    
    req.headers['Content-Type'] = 'application/json';
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth endpoints
export const loginUser = (loginData) => API.post('/auth/login', loginData);

// Job endpoints
export const postJob = (jobData) => API.post('/jobs/post-job', jobData);
export const fetchJobs = () => API.get('/jobs/my-jobs');