import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      setIsLogin(true); 
      navigate("/dashboard"); 
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {message && <p className="text-red-600 text-center">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 py-2 rounded hover:bg-yellow-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
