// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { useAuth } from "../context/AuthContext";
// import Instance from "../AxiosConfig";


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setIsAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await Instance.post("/auth/login", { email, password });

//       if (response.status === 200) {
//         setIsAuthenticated(true);
//         navigate("/"); 
//       }
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert("Invalid email or password!");
//     }
//   };

//   return (
//     <>
//       <h1 className="text-4xl text-blue-900 text-center my-14"></h1>
//       <div className="bg-blue-100 shadow-2xl rounded-2xl text-center w-full max-w-md mx-auto px-10 py-8">
//         <div className="text-4xl bg-blue-300 m-auto my-3 rounded-full w-20 h-20 flex justify-center items-center">
//           <FaUser />
//         </div>

//         <h1 className="text-2xl text-blue-950 py-3">Inventory Management System</h1>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="text-left">
//             <label className="block text-blue-950 font-bold my-3">Email ID</label>
//             <input
//               type="email"
//               placeholder="Enter Email ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-blue-200 px-4 w-full py-3 text-black rounded-lg focus:outline-none"
//               required
//             />
//           </div>

//           <div className="text-left">
//             <label className="block text-blue-950 font-bold my-3">Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="bg-blue-200 px-4 w-full py-3 text-black rounded-lg focus:outline-none"
//               required
//             />
//           </div>

//           <button type="submit" className="bg-blue-400 text-white font-bold w-full my-3 rounded-3xl py-3 hover:bg-blue-500 transition">
//             Login
//           </button>
//         </form>

//         {/* <p className="text-blue-900 my-3">Don't have an account?</p>
//         <Link to="/signUp">
//           <button className="bg-blue-900 text-white w-full rounded-3xl py-3 hover:bg-blue-950 transition">
//             Sign Up
//           </button>
//         </Link> */}
//       </div>
//     </>
//   );
// }

// export default Login;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import Instance from "../AxiosConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await Instance.post("/auth/login", { email, password });

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      setError("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/bgimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>

      <div className="relative z-10 bg-[#001233] shadow-3xl rounded-2xl text-center w-full max-w-md mx-auto px-10 py-8">
        
        <div className="text-4xl bg-blue-950 m-auto my-3 rounded-full w-20 h-20 flex justify-center items-center text-white">
          <FaUser />
        </div>

        <h1 className="text-xl font-bold text-gray-200 py-3">
          IISU Inventory Management System
        </h1>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="font-semibold my-3 text-gray-300">
              Email ID:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-300 px-2 py-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
              aria-label="Email"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="password" className="font-semibold my-3 text-gray-300">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-300 px-2 py-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
              aria-label="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white w-full rounded-md py-2 mt-4 hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
