import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>
      
      <form>
        <div>
          <label>Email or Mobile Number</label> <br />
          <input type="text" placeholder="Enter your email or phone" required />
        </div>
        <br />
        <div>
          <label>Password</label> <br />
          <input type="password" placeholder="Enter your password" required />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>
      
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
