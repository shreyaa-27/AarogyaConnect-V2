import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import LanguageSelection from "./components/LanguageSelector";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TermsConditions from "./components/TermsConditions";
import Home from "./components/Home";
import Symptoms from "./components/Symptoms";
import Remedies from "./components/Remedies";
import Doctors from "./components/Doctors";
import Ambulance from "./components/Ambulance";
import EmergencyMap from "./components/EmergencyMap";
import MedicineDelivery from "./components/MedicineDelivery";
import HealthCareSchemes from "./components/HealthCareSchemes";
import OfflineAI from "./components/OfflineAI";
import HealthQuizzes from "./components/HealthQuizzes";
import AudioHealthNews from "./components/AudioHealthNews";
import HelpCenter from "./components/HelpCenter";

function App() {
  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Function to update language
  const handleLanguageChange = (language) => {
    console.log("Language Selected:", language);
    setSelectedLanguage(language);
  };

  return (
    <Router>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Splash />} />
        <Route 
          path="/language" 
          element={<LanguageSelection onSelectLanguage={handleLanguageChange} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<TermsConditions />} />

        {/* Main Features */}
        <Route path="/home" element={<Home selectedLanguage={selectedLanguage} />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/remedies/:symptom" element={<Remedies />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/emergency" element={<EmergencyMap />} />
        <Route path="/medicine-delivery" element={<MedicineDelivery />} />
        <Route path="/health-schemes" element={<HealthCareSchemes />} />
        <Route path="/offline-ai" element={<OfflineAI />} />

        {/* New Features */}
        <Route path="/health-quizzes" element={<HealthQuizzes />} />
        <Route path="/audio-news" element={<AudioHealthNews />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
