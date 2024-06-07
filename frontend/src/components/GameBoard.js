import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const cardImages = [
  "elephant.png",
  "hippo.png",
  "koala.png",
  "monkey.png",
  "tiger.png",
  "giraffe.png",
  "panda.png",
  "rhinoceros.png",
];

const GameBoard = ({ setCurrentScore, handleGameEnd }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image: `/card-images/${image}`,
        isFlipped: true,
      }));
    setCards(shuffledCards);

    // Flip all cards back after a short delay
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, isFlipped: false }))
      );
    }, 3000); // Show cards for 3 seconds
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardImages.length * 2) {
      // When the game ends, calculate the score and trigger handleGameEnd
      handleGameEnd();
    }
  }, [matchedCards, handleGameEnd]);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find((card) => card.id === flippedCards[0]);
      const secondCard = cards.find((card) => card.id === id);

      if (firstCard.image === secondCard.image) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(
            cards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      {cards.map((card) => (
        <Grid item xs={3} key={card.id}>
          <Card
            image={card.image}
            isFlipped={card.isFlipped || matchedCards.includes(card.id)}
            onClick={() => handleCardClick(card.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;
