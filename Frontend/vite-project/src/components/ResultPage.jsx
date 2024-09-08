import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, correctAnswers, userAnswers } = location.state || {
    score: 0,
    correctAnswers: [],
    userAnswers: {},
  };

  const filteredAnswers = correctAnswers.filter((item) =>
    userAnswers.hasOwnProperty(item.questionId)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-10">
      <div className="w-full max-w-3xl bg-gray-900 shadow-2xl rounded-3xl p-10 transform hover:scale-105 transition duration-500">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Quiz Results
        </h2>
        <div className="bg-gray-800 p-8 rounded-xl mb-8 transition-all duration-500 transform hover:translate-y-1 hover:bg-gray-700 shadow-lg">
          <h3 className="text-3xl font-semibold text-center">
            Your Score: {score}
          </h3>
          <div className="mt-6 space-y-6">
            {filteredAnswers.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 ${
                  userAnswers[item.questionId] === item.correctAnswer
                    ? "bg-green-600" // correct answers
                    : "bg-red-600" // incorrect answers
                }`}
              >
                <p className="text-lg font-bold">{item.question}</p>
                <p className="text-md text-gray-300">
                  Your Answer: {userAnswers[item.questionId] || "No answer"}
                </p>
                <p className="text-md text-gray-100">
                  Correct Answer: {item.correctAnswer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center space-x-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-110"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate("/leaderboard")}
            className="px-6 py-3 bg-yellow-400 text-white rounded-xl font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
