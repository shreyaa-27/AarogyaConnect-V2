import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import LanguageSelection from "./components/LanguageSelection";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
