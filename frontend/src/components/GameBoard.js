import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Card from "./Card";
import { useScore } from "../contexts/ScoreContext";

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

const GameBoard = ({ handleGameEnd }) => {
  const { currentScore, setCurrentScore } = useScore();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [combo, setCombo] = useState(1);

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
      // Ensure score is updated before ending the game
      setTimeout(() => {
        handleGameEnd();
      }, 100); // Delay to ensure state updates complete
    }
  }, [matchedCards, handleGameEnd]);

  useEffect(() => {
    let comboTimer; // Combo reset timer

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards[first];
      const secondCard = cards[second];

      if (firstCard.image === secondCard.image) {
        // Correct match
        setMatchedCards((prev) => [...prev, first, second]);
        setFlippedCards([]);
        setCurrentScore((prev) => {
          const newScore = prev + 10 * Math.pow(2, combo - 1);
          console.log(`Score updated: ${newScore}`);
          return newScore;
        }); // Updated line
        setCombo((prev) => prev + 1); // Increase combo by 1
      } else {
        // Incorrect match
        setCurrentScore((prev) => {
          const newScore = prev - 5 * combo;
          console.log(`Score updated: ${newScore}`);
          return newScore;
        }); // Subtract combo times 5
        setCombo(1); // Reset combo multiplier

        // Flip back unmatched cards after delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === first || index === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 500);
      }
    } else {
      // Reset combo when not flipping cards
      setCombo(1);
    }

    return () => clearTimeout(comboTimer); // Cleanup the timer
  }, [flippedCards, cards, combo, setCurrentScore]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards((prev) => [...prev, index]);
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: !card.isFlipped } : card
        )
      );
    }
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={3} key={index}>
            <Card
              image={card.image}
              isFlipped={card.isFlipped || matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GameBoard;
