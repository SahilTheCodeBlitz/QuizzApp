import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-3xl mx-auto p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Welcome to the Ultimate Quiz App!
        </h1>
        <p className="text-md md:text-lg lg:text-xl text-gray-600 mb-8">
          Explore challenging quizzes, test your skills, and invite your friends!
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Register Button */}
          <Link to="/register">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 hover:shadow-lg transition duration-500 ease-in-out transform hover:translate-y-1">
              Register
            </button>
          </Link>

          {/* Login Button */}
          <Link to="/login">
            <button className="bg-teal-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-teal-500 hover:shadow-lg transition duration-500 ease-in-out transform hover:translate-y-1">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
