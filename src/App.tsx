/* Components */
import Game from "./components/Game";

/* Context */
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
