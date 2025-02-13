import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Explore</h2>
        <ul className="space-y-4">
          {/* Existing Links */}
          <li>
            <Link
              to="/symptoms"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Home Remedies
            </Link>
          </li>
          <li>
            <Link
              to="/doctors"
              className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Meet Doctor
            </Link>
          </li>
          <li>
            <Link
              to="/ambulance"
              className="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Book Ambulance
            </Link>
          </li>
          <li>
            <Link
              to="/emergency"
              className="block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
            >
              Emergency Map
            </Link>
          </li>
          <li>
            <Link
              to="/medicine-delivery"
              className="block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
            >
              Medicine & Health Kit Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/health-schemes"
              className="block bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
            >
              Health Care Schemes
            </Link>
          </li>
          <li>
            <Link
              to="/offline-ai"
              className="block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
            >
              Offline/Hybrid AI
            </Link>
          </li>

          {/* New Features */}
          <li>
            <Link
              to="/health-quizzes"
              className="block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Health Quizzes
            </Link>
          </li>
          <li>
            <Link
              to="/audio-news"
              className="block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              Audio Health News
            </Link>
          </li>
          <li>
            <Link
              to="/help-center"
              className="block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
            >
              Help Center
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
