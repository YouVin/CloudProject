import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0", // 배경색 설정
      }}
    >
      <Box
        sx={{
          width: "440px",
          height: "600px",
          backgroundImage: `url(/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container
        sx={{
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          position: "absolute",
          top: "30%", // 이미지 아래에 위치
          transform: "translateY(-50%)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Welcome to Card Flip Game
        </Typography>
        <Button variant="contained" color="primary" onClick={handleStartGame}>
          Start Game
        </Button>
      </Container>
    </Box>
  );
};

export default StartPage;
