import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import cardsContent from './helpers/cardsContent';
import './App.css';

const sortCards = (cards = []) => {
  const newOrder = [];
  let count = cards.length;
  while(count > 0) {
    const random = Math.floor(Math.random() * cards.length);
    if (!newOrder.includes(random)) {
      newOrder.push(random);
      count--;
    }
  }
  return newOrder.map(index => cardsContent[index]);
};

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cardsInGame, setCardsInGame] = useState(cardsContent);
  const [cardsPicked, setCardsPicked] = useState([]);

  useEffect(() => {
    score > maxScore && setMaxScore(score);
  }, [score, maxScore]);

  const modifyScore = (event) => {
    setCardsInGame(sortCards(cardsInGame))
    const { dataset: { value } } = event.currentTarget;
    if (!cardsPicked.includes(value)) {
      cardsPicked.push(value);
      setScore(score + 1);
    } else {
      resetGame();
    }
  };

  const resetGame= () => {
    setScore(0);
    setCardsPicked([]);
  };

  return (
    <div className="App">
      <Header
        score={score}
        maxScore={maxScore}
      />
      <div className="cards-container">
        {cardsInGame.map(
          cardInGame => (
            <Card
              key={cardInGame._id}
              cardData={cardInGame}
              modifyScore={modifyScore}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
