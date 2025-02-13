import React from "react";
import { Link } from "react-router-dom";

const symptomsList = [
  "Cold & Cough", "Fever", "Headache", "Stomach Pain & Indigestion", 
  "Acidity & Gas", "Diarrhea", "Constipation", "Skin Infections & Rashes", 
  "Joint Pain & Arthritis", "Weakness & Fatigue", "Toothache"
];

const Symptoms = () => {
  return (
    <div>
      <h2>Symptoms</h2>
      <ul>
        {symptomsList.map((symptom, index) => (
          <li key={index}>
            <Link to={`/remedies/${symptom}`}>{symptom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Symptoms;