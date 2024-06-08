// ScoreBoardPage.js

import React, { useState, useEffect, useRef } from "react";
import { Container, Typography } from "@mui/material";
import ScoreTable from "./ScoreTable";
import axios from "axios";

const ScoreBoardPage = () => {
  const [scores, setScores] = useState([]);
  const [username, setUsername] = useState(null);
  const hasPrompted = useRef(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/score")
      .then((response) => {
        setScores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (!hasPrompted.current) {
      const name = prompt("Enter your username:");
      if (name) {
        setUsername(name);
        hasPrompted.current = true;
      }
    }
  }, []);

  useEffect(() => {
    if (username) {
      const newScore = {
        username: username,
        score: 0,
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
      };
      axios
        .post("http://localhost:8080/score", newScore)
        .then(() => {
          // Fetch all scores again to update the table
          return axios.get("http://localhost:8080/score");
        })
        .then((response) => {
          setScores(response.data);
        })
        .catch((error) => {
          console.error("Error creating new score:", error);
        });
    }
  }, [username]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/score/${id}`)
      .then(() => {
        setScores((prevScores) =>
          prevScores.filter((score) => score.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting score:", error);
      });
  };
  const handleEdit = (id) => {
    const newUsername = prompt("Enter new username:");
    if (newUsername) {
      axios
        .patch(`http://localhost:8080/score/${id}`, { username: newUsername })
        .then(() => {
          // Fetch all scores again to update the table
          return axios.get("http://localhost:8080/score");
        })
        .then((response) => {
          setScores(response.data);
        })
        .catch((error) => {
          console.error("Error updating username:", error);
        });
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Scoreboard
      </Typography>
      <ScoreTable scores={scores} onDelete={handleDelete} onEdit={handleEdit} />
    </Container>
  );
};

export default ScoreBoardPage;
