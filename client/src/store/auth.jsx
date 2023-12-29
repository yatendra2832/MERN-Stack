import { createContext, useContext, useEffect, useState } from "react";

// Create a context to manage authentication state
export const AuthContext = createContext();

// Create an AuthProvider component to wrap around the application
export const AuthProvider = ({ children }) => {
  // State to store the authentication token
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;

  // Function to store the token in both state and local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // Check if the user is logged in based on the existence of the token
  let isLoggedIn = !!token;

  // Function to handle user logout by clearing the token from state and local storage
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION - to get the curretly logging in user data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error Fetching user data:", error);
    }
  };
  // to fetch the services dataa from the backend
  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.data);
        // console.log(data.data);
      }
    } catch (error) {
      console.log("Error Fetching user data:", error);
    }
  };
  useEffect(() => {
    userAuthentication();
    getServiceData();
  }, []);

  // Provide the authentication context value to the components within the provider
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to conveniently access the authentication context value
export const useAuth = () => {
  // Retrieve the authentication context value using the useContext hook
  const authContextValue = useContext(AuthContext);

  // Throw an error if the hook is used outside the AuthProvider
  if (!authContextValue) {
    throw new Error("useAuth must be used outside a AuthProvider");
  }

  // Return the authentication context value
  return authContextValue;
};
