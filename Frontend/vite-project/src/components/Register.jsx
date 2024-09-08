import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
        "http://localhost:4001/api/users/register",
        formData
      );
      console.log(response.data);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center px-4 py-12 transition-all duration-700">
      <div className="w-full max-w-md bg-white shadow-2xl p-10 rounded-3xl transform hover:scale-105 transition duration-500">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-600 mb-8">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full py-3 px-5 rounded-xl bg-gray-50 border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full py-3 px-5 rounded-xl bg-gray-50 border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full py-3 px-5 rounded-xl bg-gray-50 border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
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
              "Register"
            )}
          </button>
        </form>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to={"/login"} className="text-indigo-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
