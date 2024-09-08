import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/leaderboard"
        );
        setLeaderboard(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl text-white bg-gradient-to-br from-green-400 to-blue-600">
        <div className="animate-spin h-10 w-10 border-4 border-t-4 border-white rounded-full"></div>
        <span className="ml-4">Loading...</span>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-10 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-8 text-center transition-all duration-500 transform hover:scale-110 hover:text-yellow-400">
        🏆 Leaderboard 🏆
      </h2>
      <div className="w-full max-w-4xl bg-gray-900 bg-opacity-50 p-8 rounded-xl shadow-2xl animate-fadeInUp">
        <table className="min-w-full text-center">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-lg font-semibold uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-lg font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-lg font-semibold uppercase tracking-wider">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "bg-purple-600" : "bg-purple-500"
                } hover:bg-yellow-500 transition-colors duration-300`}
              >
                <td className="border-t border-gray-700 px-6 py-4 text-xl font-bold">
                  {index + 1}
                </td>
                <td className="border-t border-gray-700 px-6 py-4 text-xl">
                  {user.name}
                </td>
                <td className="border-t border-gray-700 px-6 py-4 text-xl">
                  {user.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
