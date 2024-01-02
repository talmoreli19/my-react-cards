// auth.context.js
import { createContext, useContext, useState, useEffect } from 'react';
import usersService, { getJWT, setAuthToken, clearAuthToken } from '../services/userService';

const AuthContext = createContext();
AuthContext.displayName = 'Auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersService.getUser());

  useEffect(() => {
    // Set the Authorization header with the existing token (if available)
    const existingToken = getJWT();
    if (existingToken) {
      setAuthToken(existingToken);
    }
  }, []);

  const login = async (credentials) => {
    const response = await usersService.login(credentials);
    setUser(usersService.getUser());
    return response;
  };

  const logout = () => {
    usersService.logout();
    setUser(null);
    clearAuthToken(); // Clear the token from localStorage
  };

  const signUp = async (userData) => {
    const response = await usersService.createUser(userData);
    setUser(usersService.getUser());
    return response;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
