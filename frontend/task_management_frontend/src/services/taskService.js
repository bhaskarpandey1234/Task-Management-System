// services/taskService.js
import axios from 'axios';
import { getToken } from '../utilities/auth';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getTasks = async () => {
  return axios.get(`${API_URL}tasks/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const createTask = async (task) => {
  return axios.post(`${API_URL}tasks/`, task, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  });
};

export const updateTask = async (task, id) => {
  return axios.put(`${API_URL}tasks/${id}/`, task, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  });
};

export const deleteTask = async (id) => {
  return axios.delete(`${API_URL}tasks/${id}/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
