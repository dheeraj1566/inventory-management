// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Instance from "../../AxiosConfig";

// const Login = ({ setIsLogin }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const res = await Instance.post("/auth/login", formData);
//       console.log("Response Data:", res); 
//       localStorage.setItem("token", res.data.token);
//       setIsLogin(true);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Login Failed:", error); 
//       console.log("Error Response:", error.response);
//       setMessage(error.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-yellow-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4 text-black">Login</h2>

//         {message && <p className="text-red-600 text-center">{message}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-semibold text-black">Email:</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full px-3 py-2 border rounded outline-solid"
//               placeholder="Enter email"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-black">Password:</label>
//             <input
//               type="password"
//               name="password"
//               className="w-full px-3 py-2 border rounded outline-solid"
//               placeholder="Enter password"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="w-full bg-yellow-500 py-2 rounded hover:bg-yellow-600">
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-gray-600">Don't have an account?</p>
//           <button
//             onClick={() => navigate("/register")}
//             className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
//           >
//             Register Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instance from "../../AxiosConfig";

function Login({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await Instance.post("/auth/login", { email, password }); // ✅ API instance se call
      localStorage.setItem("token", res.data.token);
      setIsLogin(true);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
