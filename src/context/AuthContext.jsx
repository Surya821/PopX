import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('popx_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    localStorage.setItem('popx_user', JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const login = (email, password) => {
    const savedUser = localStorage.getItem('popx_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.email === email && parsedUser.password === password) {
        setUser(parsedUser);
        return { success: true };
      }
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    // We don't necessarily clear localStorage on logout for this mock, 
    // just clear the session user.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
