import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instance from "../../AxiosConfig";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  console.log(setIsLogin)
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
      console.log("Response Data:", res);
      localStorage.setItem("token", res.data.token);
      setIsLogin(true);
      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Login Failed:", error);
      console.log("Error Response:", error.response);
      setMessage(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Login</h2>

        {message && <p className="text-red-600 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-black">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded outline-none"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-black">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded outline-none"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="w-full bg-yellow-500 py-2 rounded hover:bg-yellow-600">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
