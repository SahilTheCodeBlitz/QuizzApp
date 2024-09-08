import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:4001/api/users/login",
        formData
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);

      navigate("/select");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white bg-opacity-10 p-8 rounded-xl shadow-2xl transition-all transform hover:scale-105 animate-fadeInUp">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 bg-gray-800 bg-opacity-80 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 bg-gray-800 bg-opacity-80 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0114.09-5.09A3.98 3.98 0 0112 4a4 4 0 100 8h.09A8 8 0 014 12z"
                  ></path>
                </svg>
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {error && (
          <p className="text-red-500 mt-4 text-center animate-pulse">{error}</p>
        )}
        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-pink-400 hover:text-yellow-400 transition-all duration-300"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
