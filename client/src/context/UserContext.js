// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [picture, setPicture] = useState('');
  const [token, setToken] = useState(null); // Add token state
  const [userId, setUserId] = useState(null); // Add userId state

  const logout = async () => {
    try {
      // Call the API logout function
      
      setUser(null);
      setPicture('');
      // Redirect to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, picture,token,userId, setUser, setPicture,setToken,setUserId, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
