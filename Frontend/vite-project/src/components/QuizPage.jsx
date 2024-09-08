import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false); // New state for submission loading
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTopics } = location.state;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4001/api/questions",
          { topics: selectedTopics }
        );
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [selectedTopics]);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = async () => {
    setSubmitting(true); // Start loading effect

    try {
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        "http://localhost:4001/api/submit-quiz",
        {
          userId,
          answers: selectedAnswers,
          selectedTopics,
        }
      );

      navigate("/results", {
        state: {
          score: response.data.score,
          correctAnswers: response.data.correctAnswers,
          userAnswers: selectedAnswers,
        },
      });
    } catch (error) {
      console.error(
        "Error submitting quiz:",
        error.response?.data?.message || error.message
      );
    } finally {
      setSubmitting(false); // Stop loading effect
    }
  };

  if (loading) return <div className="text-center p-10 text-white">Loading...</div>;

  if (questions.length === 0)
    return <div className="text-center p-10 text-white">No questions available for the selected topics.</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-pink-500 to-red-600 p-10 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-opacity-80 bg-gray-900 rounded-3xl shadow-xl transition-all transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center animate-pulse">{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h2>
        <div className="bg-gray-800 p-6 rounded-xl mb-6">
          <p className="text-xl mb-6">{currentQuestion.question}</p>
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 text-lg rounded-lg border cursor-pointer transition-all transform hover:scale-105 duration-300 ${
                  selectedAnswers[currentQuestion._id] === option
                    ? "bg-blue-700 border-blue-400"
                    : "bg-gray-700 border-gray-500"
                }`}
                onClick={() => handleAnswerSelect(currentQuestion._id, option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNextQuestion}
          className="w-full py-3 mt-4 bg-green-500 rounded-xl text-white text-xl font-semibold hover:bg-green-600 transition transform hover:scale-105 duration-300"
        >
          {currentQuestionIndex < questions.length - 1
            ? "Next Question"
            : "Submit Quiz"}
        </button>
        {submitting && (
          <div className="text-center mt-4">
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Submitting...</span>
            </div>
          </div>
        )} {/* Loading indicator */}
      </div>
    </div>
  );
};

export default QuizPage;
