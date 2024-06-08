import React from "react";
import { Box, CardActionArea } from "@mui/material";

const Card = ({ image, isFlipped, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "120px",
        height: "190px",
        overflow: "hidden",
        cursor: "pointer",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <CardActionArea>
        <Box
          component="img"
          src={isFlipped ? image : "/card-images/back.png"}
          alt="card"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </CardActionArea>
    </Box>
  );
};

export default Card;
