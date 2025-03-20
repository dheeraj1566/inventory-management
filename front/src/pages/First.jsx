import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { useEffect } from "react";
import useAuth from "../Hooks/Auth";

function First() {
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLogin, navigate]);

  return (
    <div className="flex min-h-screen bg-yellow-100">
      {isLogin && <Sidebar />}
      <main className="flex-1">
        <Navbar />
        <div className="pl-8 pt-8 pr-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default First;
