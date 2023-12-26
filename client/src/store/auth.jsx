import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);
  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used outside a AuthProvider");
  }
  return authContextValue;
};
