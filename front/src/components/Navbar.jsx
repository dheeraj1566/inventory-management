import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/Auth";

const Navbar = () => {
  const { isLogin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Dashboard</Link>
      {isLogin && (
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-1 rounded"
        />
      )}

      <div className="flex items-center space-x-4">
        {isLogin ? (
          <>
            <button className="p-2 bg-yellow-500 rounded-full">🔔</button>
            <button className="p-2 bg-yellow-500 rounded-full">👤</button>
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="mr-4">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
