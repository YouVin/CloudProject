import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import GameBoard from "./GameBoard";
import { useNavigate } from "react-router-dom";
import { useScore } from "../contexts/ScoreContext";

const GamePage = ({ setScores }) => {
  const { currentScore } = useScore(); // 현재 점수를 가져오기

  const navigate = useNavigate();

  const handleGameEnd = () => {
    navigate("/scoreboard");
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        SCORE: {currentScore}
      </Typography>
      <GameBoard handleGameEnd={handleGameEnd} />
    </Container>
  );
};

export default GamePage;
