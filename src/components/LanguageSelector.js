import React from "react";
import { useNavigate } from "react-router-dom";

const LanguageSelection = ({ onSelectLanguage }) => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    if (onSelectLanguage) {
      onSelectLanguage(language); // Update language in App.js state
    }
    navigate("/login"); // Redirect to login or another page after selection
  };

  return (
    <div>
      <h2>Select Your Language</h2>
      <button onClick={() => handleLanguageSelect("English")}>English</button>
      <button onClick={() => handleLanguageSelect("Hindi")}>Hindi</button>
      <button onClick={() => handleLanguageSelect("Kannada")}>Kannada</button>
    </div>
  );
};

export default LanguageSelection;
