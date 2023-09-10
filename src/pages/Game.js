import React, { useState, useEffect } from 'react';
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
  const [avatarImage, setAvatarImage] = useState(avatarName);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentIndex, setCurrentQuestionIndex] = useState(0);
  const [wellnessLevel, setWellnessLevel] = useState(0);

  const questions = [
    "Did you get at least 7 hours of restful sleep last night?",
    "Have you been getting regular exercise or physical activity?",
    "Do you eat a balanced diet with a variety of foods?",
    "Are you staying hydrated throughout the day?",
    "Have you talked to someone about your feelings lately?"
  ];

  const feedback = [
    "It is recommended that you fall asleep between the hours of 9 and 10 pm",
    "You should get around 1 hour of excercise a day",
    "Try eating more whole grains, vegetables, fruits, and dairy products",
    "Try to drink around 8 cups of water per day",
    "Research shows that even self-talking in the mirror can boost confidence"
  ]

  const incrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel + 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setShowFeedback(false);
  };

  const decrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel - 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setShowFeedback(true);
  };

  useEffect(() => {
    if (wellnessLevel >= 200) {
      switch (avatarName) {
        case 'cat':
          setAvatarImage(cat_happy);
          break;
        case 'ham':
          setAvatarImage(ham_happy);
          break;
        case 'turtle':
          setAvatarImage(turtle_happy);
          break;
        default:
          setAvatarImage(null);
      }
    } else if (wellnessLevel <= -200) {
      switch (avatarName) {
        case 'cat':
          setAvatarImage(cat_sad);
          break;
        case 'ham':
          setAvatarImage(ham_sad);
          break;
        case 'turtle':
          setAvatarImage(turtle_sad);
          break;
        default:
          setAvatarImage(null);
      }
    } else {
      // In the neutral state or any other state
      switch (avatarName) {
        case 'cat':
          setAvatarImage(cat_neutral);
          break;
        case 'ham':
          setAvatarImage(ham_neutral);
          break;
        case 'turtle':
          setAvatarImage(turtle_neutral);
          break;
        default:
          setAvatarImage(null);
      }
    }
  }, [wellnessLevel, avatarName]);

  return (
    <div className = "Game">
      <header className = "Game-header">
      <p>MyHealthyAvatar</p>
      </header>
      <div className="question-container">
        <p className="question">{questions[currentIndex]}</p>
        <button className = "yes_button" onClick={incrementWellnessLevel}>Yes</button>
        <button className = "no_button" onClick={decrementWellnessLevel}>No</button>
        {showFeedback && (<div className="feedback">{feedback[(currentIndex + feedback.length - 1) % feedback.length]}</div>)}
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