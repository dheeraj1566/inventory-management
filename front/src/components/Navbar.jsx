// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ islogin, setIslogin }) => {
//   const navigate = useNavigate()
//   function handleLogin() {
//     setIslogin(true);
//   }

//   function handleRegister() {
//     // setIslogin(false);
//     navigate('/login')
//   }

//   return (
//     <div className="flex justify-between items-center p-4 bg-yellow-300 w-full">
//       <p className="text-4xl font-semibold">Dashboard</p>
//       <input
//         type="text"
//         placeholder="Search Inventory"
//         className="p-2 w-1/3 rounded bg-orange-200"
//       />
//       <div className="flex space-x-4">
//         <button className="p-2 bg-yellow-500 rounded-full">🔔</button>
//         <button className="p-2 bg-yellow-500 rounded-full">👤</button>

//         {islogin ? (
//           <Link onClick={handleRegister} to="/register" className="p-2 bg-yellow-500 rounded text-black">
//             Register
//           </Link>
//         ) : (
//           <Link onClick={handleLogin} to="/login" className="p-2 bg-yellow-500 rounded text-black">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
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
