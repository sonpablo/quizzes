import { GameContext } from 'context/GameContext';
import Home from 'pages/Home';
import './App.css';

export default function App() {

  return (
    <main className='app-container'>
      <GameContext>
        <Home />
      </GameContext>
    </main>
  )
}
