import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// Add a request interceptor to set the Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      const newToken = localStorage.getItem('token');
      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      return api(originalRequest); // Retry the original request
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
      refresh: refreshToken,
    });
    localStorage.setItem('token', response.data.access); // Save the new access token
  } catch (error) {
    console.error('Error refreshing token', error);
    // Optionally handle the error, e.g., log the user out
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }
};

export default api;
