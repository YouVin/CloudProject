import React from "react";
import { Container, Typography } from "@mui/material";
import ScoreTable from "./ScoreTable";

const ScoreBoardPage = () => {
  // Sample score data
  const scores = [
    { id: 1, username: "user1", score: 10, date: "2024-06-10" },
    { id: 2, username: "user2", score: 15, date: "2024-06-11" },
    { id: 3, username: "user3", score: 20, date: "2024-06-12" },
    { id: 4, username: "user4", score: 18, date: "2024-06-13" },
    { id: 5, username: "user5", score: 12, date: "2024-06-14" },
  ];

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Scoreboard
      </Typography>
      <ScoreTable scores={scores} />
    </Container>
  );
};

export default ScoreBoardPage;
