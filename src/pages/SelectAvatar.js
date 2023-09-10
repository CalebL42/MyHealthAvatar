import './SelectAvatar.css';
import { Link } from 'react-router-dom';
import avatar1 from './hoppingham.gif';

function SelectAvatar() {
    return (
        <div className = "SelectAvatar">
        <header className = "SelectAvatar-header">
        <p>
          Welcome to MyHealthyAvatar!
        </p>
        <p>
          Select your avatar below:
        </p>
        <div className="row">
            <div className="column">
            <Link to='./Game'><img src={avatar1} alt="avatar1"></img></Link>
            </div>
            <div className="column">
            <Link to='./Game'><img src={avatar1} alt="avatar1"></img></Link>
            </div>
            <div className="column">
            <Link to='./Game'><img src={avatar1} alt="avatar1"></img></Link>
            </div>
        </div>
        </header>
        </div>
    );
}

export default SelectAvatar;