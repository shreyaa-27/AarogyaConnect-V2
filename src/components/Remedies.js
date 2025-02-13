import React from "react";
import { useParams } from "react-router-dom";

const remediesData = {
  "Cold & Cough": ["Honey and warm water", "Lemon and ginger tea", "Steam inhalation"],
  "Fever": ["Drink plenty of fluids", "Use a cold compress", "Take rest"]
};

const Remedies = () => {
  const { symptom } = useParams();
  const remedies = remediesData[symptom] || ["No remedies found"];

  return (
    <div>
      <h2>{symptom}</h2>
      <ul>
        {remedies.map((remedy, index) => (
          <li key={index}>{remedy}</li>
        ))}
      </ul>
    </div>
  );
};

export default Remedies;