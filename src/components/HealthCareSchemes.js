import React from "react";

const HealthCareSchemes = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Government Health Care Schemes</h2>
        <p className="text-gray-600 mb-6">Explore free and subsidized health care schemes provided by the government.</p>

        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            View Available Schemes
          </button>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthCareSchemes;
