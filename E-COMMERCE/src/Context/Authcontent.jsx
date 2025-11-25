import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });
  console.log("token", token);
  const login = (userData) => {
    setToken(userData?.token);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", JSON.stringify(userData?.token));
  };
    const profile = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const changepassword = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
    const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };
  
  const isAuthenticated = !!user;
  const authValue = useMemo(() => ({
    user,
    token,
    login,
    logout,
    profile,
    changepassword,
    isAuthenticated,
  }), [user, token]);
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
