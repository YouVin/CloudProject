// ScoreContext.js
import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ currentScore, setCurrentScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
