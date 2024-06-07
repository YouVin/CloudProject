import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Card Flip Game
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStartGame}>
        Start Game
      </Button>
    </Container>
  );
};

export default StartPage;
