import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { useEffect } from "react";

function First({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
      navigate("/login", { replace: true });
    } else {
      setIsLogin(true);
    }
  }, [setIsLogin, navigate]);

  return (
    <div className="flex min-h-screen bg-yellow-100">
      {isLogin && <Sidebar />}
      <main className="flex-1">
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <div className="pl-8 pt-8 pr-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default First;
