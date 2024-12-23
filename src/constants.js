import axios from 'axios';

// Set up axios instance
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for token handling
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fetch applicant data using axios
async function fetchApplicantData() {
  try {
    const response = await api.get('/user');  
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

async function initializeUserData() {
  const userData = await fetchApplicantData();
  return userData;
}

let userData = await initializeUserData();

export { api, userData };
