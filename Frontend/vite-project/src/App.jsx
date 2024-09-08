import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import LandingPage
import TopicSelection from "./components/TopicSelection";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultPage";
import Leaderboard from "./components/Leaderboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutWithLogout from "./components/Logout"; // Import the LayoutWithLogout component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        {/* Register Route */}
        <Route path="/register" element={<Register />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Routes that need a protected layout with logout button */}
        <Route
          path="/select"
          element={
            <ProtectedRoute
              element={
                <LayoutWithLogout>
                  <TopicSelection />
                </LayoutWithLogout>
              }
            />
          }
        />
        <Route
          path="/questions"
          element={
            <ProtectedRoute
              element={
                <LayoutWithLogout>
                  <QuizPage />
                </LayoutWithLogout>
              }
            />
          }
        />
        <Route
          path="/results"
          element={
            <ProtectedRoute
              element={
                <LayoutWithLogout>
                  <ResultsPage />
                </LayoutWithLogout>
              }
            />
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute
              element={
                <LayoutWithLogout>
                  <Leaderboard />
                </LayoutWithLogout>
              }
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
