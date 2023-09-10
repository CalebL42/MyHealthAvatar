import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import SelectAvatar from "./pages/SelectAvatar";
import Game from "./pages/Game";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectAvatar />} />
        <Route path="Game" element = {<Game />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
