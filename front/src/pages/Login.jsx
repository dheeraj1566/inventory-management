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
//       navigate("/");
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
import { useNavigate, Link } from "react-router-dom";
import Instance from "../../AxiosConfig";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await Instance.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setMessage("Login Successful!");
      setIsLogin(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {message && (
          <p className={`text-center ${message.includes("Successful") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        {/* 🔹 Register Link for New Users */}
        <p className="text-center mt-4">
          Not registered?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
