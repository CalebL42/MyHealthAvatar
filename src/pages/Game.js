import React, { useState } from 'react';
import './Game.css';
import { useParams } from 'react-router-dom';
import avatar1 from './hoppingham.gif';

function Game() {
  const { avatarName } = useParams();
  let avatarImage;
  switch (avatarName) {
    case 'avatar1':
      avatarImage = avatar1;
      break;
    case 'avatar2':
      avatarImage = avatar1;
      break;
    case 'avatar3':
      avatarImage = avatar1;
      break;
    default:
      avatarImage = null; // Set a default image or handle the case where avatarName is not recognized
  }

  const questions = [
    "Did you get at least 7 hours of restful sleep last night?",
    "Have you been getting regular exercise or physical activity?",
    "Do you eat a balanced diet with a variety of foods?",
    "Are you staying hydrated throughout the day?",
    "Have you talked to someone about your feelings lately?"
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wellnessLevel, setWellnessLevel] = useState(0);

  const incrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel + 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const decrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel - 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div className = "Game">
      <header className = "Game-header">
      <p>MyHealthyAvatar</p>
      </header>
      <div className="question-container">
        <p className="question">{questions[currentQuestionIndex]}</p>
        <button className = "yes_button" onClick={incrementWellnessLevel}>Yes</button>
        <button className = "no_button" onClick={decrementWellnessLevel}>No</button>
      </div>
      <div className="avatar">
        <img src={avatarImage} alt={avatarName} />
      </div>
      <div className="wellness">
        <p>Wellness level: {wellnessLevel}</p>
      </div>
    </div>
  );
}

export default Game;