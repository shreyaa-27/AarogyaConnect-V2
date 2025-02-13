import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Logged in Successfully! 🎉");

    // Redirect to home page after login
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Email or Mobile Number" className="w-full p-2 mb-3 border rounded" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Log In
          </button>
        </form>

        <p className="text-center my-3 text-sm">or log in with</p>
        <div className="flex justify-center gap-3">
          <button className="bg-gray-200 p-2 rounded">Google</button>
          <button className="bg-gray-200 p-2 rounded">Apple</button>
          <button className="bg-gray-200 p-2 rounded">Facebook</button>
        </div>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;