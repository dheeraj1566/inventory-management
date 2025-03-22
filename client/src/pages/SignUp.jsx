// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";

// function SignUp() {
//   return (
//     <div>
      
//       <h1 className="m-auto my-10 text-4xl text-blue-900 text-center"></h1>
//     <div className="wrapper my-10 bg-blue-100 shadow-2xl rounded-2xl text-center w-1/2 h-9/10 m-auto px-10 py-8">
//         <div
//             className="profile_icon text-4xl bg-blue-300 m-auto my-3 rounded-full w-20 h-20 flex justify-center items-center ">
//            <FaUser/></div>
//         <h1 className="text-2xl text-blue-950  py-3"> Inventory Mangement System</h1>
//         <form>
//             <input type="text" id="user_name" placeholder="User ID"
//                 className="bg-blue-200 px-4 w-60 py-3 mx-8 my-3 text-left text-black"></input>
//             <input type="password" id="user_password" placeholder="Password"
//                 className="bg-blue-200 px-4  w-60 py-3 mx-8 my-3 text-left"></input>
            
//             <input type="submit" value="Sign Up"
//                 className="bg-blue-400 text-amber-50 px-15 w-60 rounded-3xl py-3 mx-8 my-1 text-center"></input>

//         </form>
//     </div>
//     </div>
//   )
// }

// export default SignUp


















import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", formData, {
        withCredentials: true,
      });
      setMessage(res.data.message);
      setFormData({ fname: "", lname: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
