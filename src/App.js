import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import LanguageSelection from "./components/LanguageSelection";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TermsConditions from "./components/TermsConditions";
import Home from "./components/Home";
import Symptoms from "./components/Symptoms";
import Remedies from "./components/Remedies";
import Doctors from "./components/Doctors";
import Ambulance from "./components/Ambulance";
import EmergencyMap from "./components/EmergencyMap";

function App() {
  return (
    <Router>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Splash />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<TermsConditions />} />

        {/* Main Features */}
        <Route path="/home" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/remedies/:symptom" element={<Remedies />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/emergency" element={<EmergencyMap />} />
      </Routes>
    </Router>
  );
}

export default App;