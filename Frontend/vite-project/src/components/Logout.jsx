import React from "react";
import { useNavigate } from "react-router-dom";

const LayoutWithLogout = ({ children }) => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 flex flex-col">
      {/* Logout Button */}
      <div className="flex justify-between items-center p-4 bg-opacity-90 bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-bold text-white animate-bounce">
          Welcome to the Quiz Platform
        </h1>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* Render children components */}
      <div className="flex-grow flex items-center justify-center p-10">
        <div className="w-full max-w-4xl bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl transition-transform transform hover:scale-105">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutWithLogout;
