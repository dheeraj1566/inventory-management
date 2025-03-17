import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { useState } from "react";

function First() {
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="flex min-h-screen bg-yellow-100">
      {!islogin && <Sidebar />}  
      <main className="flex-1">
        <Navbar islogin={islogin} setIslogin={setIslogin} />
        <div className="pl-8 pt-8 pr-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default First;
