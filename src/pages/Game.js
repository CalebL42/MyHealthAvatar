import React, { useState, useEffect } from 'react';
import './Game.css';
import { useParams } from 'react-router-dom';
import cat_happy from './cat_happy.gif';
import ham_happy from './ham_happy.gif';
import turtle_happy from './turtle_happy.gif';
import shiba_happy from './shiba_happy.gif';
import cat_neutral from './cat_neutral.gif';
import ham_neutral from './ham_neutral.gif';
import turtle_neutral from './turtle_neutral.gif';
import shiba_neutral from './shiba_neutral.gif';
import cat_sad from './cat_sad.gif';
import ham_sad from './ham_sad.gif';
import turtle_sad from './turtle_sad.gif';
import shiba_sad from './shiba_sad.gif';


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
    "Have you had any water to drink in the past hour?",
    "Have you talked to someone about your feelings lately?",
    "Challenge: Say 5 positive affirmations about yourself!",
    "Challenge: Stand up and do 20 jumping jacks!",
    "Challenge: Try to talk to someone new today!",
    "Challenge: Read a chapter of a new book!",
    "Challenge: Step outside and appreciate nature!"

  ];

  const feedback = [
    "It is recommended that you fall asleep between the hours of 9 and 10 pm",
    "You should get around 1 hour of excercise a day",
    "Try eating more whole grains, vegetables, fruits, and dairy products",
    "Try to drink water regularly throughout the day, totalling at roughly 8 cups",
    "Research shows that even self-talking in the mirror can boost confidence",
    "Positive affirmations combats negative thinking habits to improve self-esteem, stress management and wellbeing",
    "Physical activity helps manage weight, reduces the risk of disease, and enhances your ability to do everyday activities",
    "Studies have shown that people with satisfying relationships in their community are happier, have fewer health issues and even live longer",
    "Diving into a good book can lower your heart rate, ease muscle tension, and relieve stress up to 68 percent.",
    "Nature connectedness is associated with improved attention, better mood, and lower levels of poor mental health"

  ]

  const incrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel + 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setFalse();
  };

  const decrementWellnessLevel = () => {
    setWellnessLevel(wellnessLevel - 100);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setShowFeedback(true);
  };

  const setFalse = () => {
    setShowFeedback(false);
  }

  useEffect(() => {
    if (wellnessLevel > 200) {
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
        case 'shiba':
          setAvatarImage(shiba_happy);
          break;
        default:
          setAvatarImage(null);
      }
    } else if (wellnessLevel < -200) {
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
        case 'shiba':
          setAvatarImage(shiba_sad);
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
        case 'shiba':
          setAvatarImage(shiba_neutral);
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
        {!showFeedback && (<div><p className="question">{questions[currentIndex]}</p>
        <button className = "yes_button" onClick={incrementWellnessLevel}>Yes</button>
        <button className = "no_button" onClick={decrementWellnessLevel}>No</button></div>)}
        {showFeedback && (<div className="feedback">{feedback[(currentIndex + feedback.length - 1) % feedback.length]}
          <div><button className = "continue" onClick={setFalse}>Continue</button></div>
        </div>)}
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