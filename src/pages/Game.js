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

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
      <div className = "Game">
      <header className = "Game-header">
        <p>
          MyHealthyAvatar
        </p>
        <img src={avatarImage} alt={avatarName} />
        <div>
        <p>Number: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
      </header>
      </div>
  );
}

export default Game;