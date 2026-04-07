import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Check if a user is already logged in from a previous tab/session
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("maruthi_user")) || null);

  // Save the user to localStorage whenever they log in or log out
  useEffect(() => {
    if (user) localStorage.setItem("maruthi_user", JSON.stringify(user));
    else localStorage.removeItem("maruthi_user");
  }, [user]);

  // This magic listener automatically updates ALL your open tabs if you log in on one of them!
  useEffect(() => {
    const handleStorage = () => setUser(JSON.parse(localStorage.getItem("maruthi_user")));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);