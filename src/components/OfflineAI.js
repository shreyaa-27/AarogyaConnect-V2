import React from "react";

const OfflineAI = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Offline/Hybrid AI</h2>
        <p className="text-gray-600 mb-6">Our AI assistant works both online and offline to ensure help is always available.</p>

        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Online AI (Gemini API)
          </button>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            Offline AI Assistance
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineAI;
