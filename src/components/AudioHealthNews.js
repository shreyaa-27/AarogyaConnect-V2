import React from "react";

const AudioHealthNews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">🎙️ Audio Health News</h1>

        {/* Introduction */}
        <p className="text-gray-700 text-center mb-4">
          Stay updated with **ArogyaConnect Audio News**, delivering healthcare tips, government schemes, and health updates in **your regional language**.
        </p>

        {/* Categories */}
        <h2 className="text-2xl font-bold mt-6">📰 Categories of Audio News</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
          <li>
            **💡 Daily Health Tips:** Learn simple and effective ways to stay healthy.
          </li>
          <li>
            **🏥 Government Health Schemes:** Get updates on free medical services and insurance plans.
          </li>
          <li>
            **📢 Health Awareness News:** Stay informed about new diseases, vaccination drives, and health policies.
          </li>
        </ul>

        {/* Sample Audio */}
        <h2 className="text-2xl font-bold mt-6">🎧 Listen to a Sample</h2>
        <p className="text-gray-700 mt-3">
          Here's a sample of our daily health tip:
        </p>
        <audio controls className="mt-3 w-full">
          <source src="https://www.example.com/sample-health-tip.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <p className="text-gray-600 mt-4 text-sm text-center">
          More updates will be available in **Kannada, Hindi, Tamil, Telugu, and English** soon!
        </p>
      </div>
    </div>
  );
};

export default AudioHealthNews;
