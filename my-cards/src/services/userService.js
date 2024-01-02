// userService.js
import httpService from './httpService';
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'token';

export function setAuthToken(token) {
  httpService.setCommonHeader('Authorization', `Bearer ${token}`);
}

export async function updateUserInfo(userId, updatedInfo) {
  try {
    const response = await httpService.put(`/bcard2/users/${userId}`, updatedInfo);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function clearAuthToken() {
  httpService.removeCommonHeader('Authorization');
}

export function createUser(user) {
  return httpService.post('/bcard2/users', user);
}

export async function login(credentials) {
  try {
    const response = await httpService.post('/bcard2/users/login', credentials);
    const token = response.data.token;

    // Log the token after setting it
    localStorage.setItem(TOKEN_KEY, token);
    console.log('Token after setting:', localStorage.getItem(TOKEN_KEY));

    // Set the token in the Authorization header
    setAuthToken(token);

    return response.data.user; // Return user data along with the response
  } catch (error) {
    // Handle login errors
    throw error;
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  clearAuthToken();
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

// Initialize the Authorization header with the existing token (if available)
setAuthToken(getJWT());

const usersService = {
  createUser,
  login,
  logout,
  getUser,
  getJWT,
  updateUserInfo, // Include the updateUserInfo function
};

export default usersService;
