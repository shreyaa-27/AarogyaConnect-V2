import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Account Created Successfully! 🎉");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">New Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full p-2 mb-3 border rounded"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            className="w-full p-2 mb-3 border rounded"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <p className="text-xs text-gray-600 mb-3">
            By continuing, you agree to our <span className="text-blue-600">Terms of Use and Privacy Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center my-3">or sign up with</p>
        <div className="flex justify-center gap-3">
          <button className="bg-gray-200 p-2 rounded">Google</button>
          <button className="bg-gray-200 p-2 rounded">Apple</button>
          <button className="bg-gray-200 p-2 rounded">Facebook</button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-600">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
