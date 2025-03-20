import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return { isLogin, login, logout };
};

export default useAuth;
