import React from "react";
import { useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select Your Language!</h1>
      <button onClick={() => navigate("/login")}>English</button>
      <button onClick={() => navigate("/login")}>Hindi</button>
      <button onClick={() => navigate("/login")}>Kannada</button>
    </div>
  );
};

export default LanguageSelection;
