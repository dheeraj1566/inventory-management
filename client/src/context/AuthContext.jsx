import { createContext, useContext, useEffect, useState } from "react";
import axios from "../AxiosConfig";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.get("/auth/checkToken");
      if (res.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const logout = async ()=>{
    try {
      const res = await axios.get("/auth/logOut");
      if (res.status === 200) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      
    }
  }

  
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, checkAuth, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
