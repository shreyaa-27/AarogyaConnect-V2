import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Help Center</h1>

        {/* Introduction */}
        <p className="text-gray-700 text-center mb-4">
          Welcome to <span className="font-semibold">ArogyaConnect</span>! This app helps you with medical guidance, doctor consultations, emergency services, and health awareness in rural areas.
        </p>

        {/* How to Use the App Section */}
        <h2 className="text-2xl font-bold mt-6">📌 How to Use the App</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
          <li>
            <span className="font-semibold">👤 Sign Up / Login:</span> Create an account or log in to access all features.
          </li>
          <li>
            <span className="font-semibold">🏠 Home Remedies:</span> Enter your symptoms and get natural home remedies.
          </li>
          <li>
            <span className="font-semibold">🩺 Meet a Doctor:</span> Book an appointment with a doctor for expert consultation.
          </li>
          <li>
            <span className="font-semibold">🚑 Emergency Help:</span> Quickly find ambulances and hospitals near you.
          </li>
          <li>
            <span className="font-semibold">📦 Medicine & Health Kit Delivery:</span> Order medicines and health kits for doorstep delivery.
          </li>
          <li>
            <span className="font-semibold">💡 Government Schemes:</span> Learn about free healthcare schemes and benefits.
          </li>
          <li>
            <span className="font-semibold">🤖 Offline AI Support:</span> Get medical advice without an internet connection.
          </li>
          <li>
            <span className="font-semibold">📝 Health Quizzes:</span> Test your knowledge with interactive health quizzes.
          </li>
          <li>
            <span className="font-semibold">🎙️ Audio Health News:</span> Listen to health news in your regional language.
          </li>
        </ul>

        {/* Contact Support */}
        <h2 className="text-2xl font-bold mt-6">📞 Need Help?</h2>
        <p className="text-gray-700 mt-3">
          If you have any issues, feel free to contact our support team at:
        </p>
        <p className="text-blue-600 font-semibold mt-2">support@arogyaconnect.com</p>

        <p className="text-gray-600 mt-4 text-sm text-center">
          Stay healthy and safe with ArogyaConnect! 💙
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
