import React, { useState } from 'react';
import './Game.css';
import { useParams } from 'react-router-dom';
import cat_happy from './cat_happy.gif';
import ham_happy from './ham_happy.gif';
import turtle_happy from './turtle_happy.gif';
import cat_neutral from './cat_neutral.gif';
import ham_neutral from './ham_neutral.gif';
import turtle_neutral from './turtle_neutral.gif';
import cat_sad from './cat_sad.gif';
import ham_sad from './ham_sad.gif';
import turtle_sad from './turtle_sad.gif';

function Game() {
  const { avatarName } = useParams();
  let avatarImage;
  switch (avatarName) {
    case 'cat':
      avatarImage = cat_neutral;
      break;
    case 'ham':
      avatarImage = ham_neutral;
      break;
    case 'turtle':
      avatarImage = turtle_neutral;
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
        <img src={avatarImage} alt={avatarName} width = '500'/>
      </div>
      <div className="wellness">
        <p>Wellness level: {wellnessLevel}</p>
      </div>
    </div>
  );
}

export default Game;