import React from "react";
import { Box, CardActionArea } from "@mui/material";

const Card = ({ image, onClick, isFlipped }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "120px",
        height: "190px",
        overflow: "hidden",
        cursor: "pointer",
        border: "none",
      }}
    >
      <CardActionArea>
        <Box
          component="img"
          src={isFlipped ? image : "/card-images/back.png"}
          alt="card"
          sx={{
            maxWidth: "100%",
            maxHeight: "110%",
            objectFit: "contain",
          }}
        />
      </CardActionArea>
    </Box>
  );
};

export default Card;
