import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import cardsContent from './helpers/cardsContent';
import './App.css';

function App() {
  const [score, setScore] = useState(50);
  const [maxScore, setMaxScore] = useState(100);
  return (
    <div className="App">
      <Header
        score={score}
        maxScore={maxScore}
      />
      <div className="cards-container">
        {cardsContent.map(
          cardContent => (<Card name={cardContent.name} src={cardContent.src} key={cardContent._id} />)
        )}
      </div>
    </div>
  );
}

export default App;
