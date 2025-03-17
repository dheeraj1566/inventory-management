import { useState } from "react";
// import axiosInstance from "./axiosInstance"; // Import Axios Instance
import Instance from "../../AxiosConfig";
const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const res = await Instance.post("/auth/register", formData);
      setMessage(res.data.message);
      setFormData({ fname: "", lname: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {message && (
          <p className={`text-center ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
