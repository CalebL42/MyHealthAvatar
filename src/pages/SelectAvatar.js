import './SelectAvatar.css';
import { Link } from 'react-router-dom';
import cat_happy from './cat_happy.gif';
import ham_happy from './ham_happy.gif';
import turtle_happy from './turtle_happy.gif';
import shiba_happy from './shiba_happy.gif';

function SelectAvatar() {

  return (
      <div className = "SelectAvatar">
      <header className = "SelectAvatar-header">
      <p>Welcome to <span style={{color: 'white'}}>MyHealthyAvatar!</span></p>
      <p>Select your avatar below:</p>
      <div className="row">
          <div className="column">
          <Link to='./Game/shiba'>
              <img
                src={shiba_happy}
                alt="shiba"
                width='350px'
              ></img>
            </Link>
          </div>
          <div className="column">
          <Link to='./Game/cat'>
              <img
                src={cat_happy}
                alt="cat"
                width='350px'
              ></img>
            </Link>
          </div>
          <div className="column">
          <Link to='./Game/ham'>
              <img
                src={ham_happy}
                alt="ham"
                width='350px'
              ></img>
            </Link>
          </div>
          <div className="column">
          <Link to='./Game/turtle'>
              <img
                src={turtle_happy}
                alt="turtle"
                width='400px'
              ></img>
            </Link>
          </div>
      </div>
      </header>
      </div>
  );
}

export default SelectAvatar;