import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import ScoreBoardPage from "./components/ScoreBoardPage";

const App = () => {
  const [scores, setScores] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage setScores={setScores} />} />
        <Route
          path="/scoreboard"
          element={<ScoreBoardPage scores={scores} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
