import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Add your logo inside 'src/assets' folder

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Language Selection after 3 seconds
    const timer = setTimeout(() => {
      navigate("/language");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  logo: {
    width: "150px", // Adjust size as needed
  },
};

export default Splash;
