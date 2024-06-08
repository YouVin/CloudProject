// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import ScoreBoardPage from "./components/ScoreBoardPage";
import { ScoreProvider } from "./contexts/ScoreContext";

const App = () => {
  return (
    <Router>
      <ScoreProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/scoreboard" element={<ScoreBoardPage />} />
        </Routes>
      </ScoreProvider>
    </Router>
  );
};

export default App;
