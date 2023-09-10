import './SelectAvatar.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import avatar1 from './hoppingham.gif';

function SelectAvatar() {

  return (
      <div className = "SelectAvatar">
      <header className = "SelectAvatar-header">
      <p>Welcome to MyHealthyAvatar!</p>
      <p>Select your avatar below:</p>
      <div className="row">
          <div className="column">
          <Link to='./Game/avatar1'>
              <img
                src={avatar1}
                alt="avatar3"
              ></img>
            </Link>
          </div>
          <div className="column">
          <Link to='./Game/avatar2'>
              <img
                src={avatar1}
                alt="avatar3"
              ></img>
            </Link>
          </div>
          <div className="column">
          <Link to='./Game/avatar3'>
              <img
                src={avatar1}
                alt="avatar3"
              ></img>
            </Link>
          </div>
      </div>
      </header>
      </div>
  );
}

export default SelectAvatar;