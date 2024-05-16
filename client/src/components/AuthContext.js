import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your app with
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Method to login
  const login = () => {
    // You can perform login actions here, like setting tokens, etc.
    setIsLoggedIn(true);
  };

  // Method to logout
  const logout = () => {
    // You can perform logout actions here, like clearing tokens, etc.
    setIsLoggedIn(false);
  };

  // Method to check if user is authenticated
  const isAuthenticated = () => isLoggedIn;

  // The value that will be accessible by components
  const authContextValue = {
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
