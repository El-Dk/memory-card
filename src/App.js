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

const levels = [
  {
    characters: 4,
    pointsToWin: 4,
    pointsPerGuess: 1
  },
  {
    characters: 9,
    pointsToWin: 22,
    pointsPerGuess: 2
  },
  {
    characters: 16,
    pointsToWin: 70,
    pointsPerGuess: 3
  }
];

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cardsInGame, setCardsInGame] = useState(cardsContent.slice(0, levels[0].characters));
  const [cardsPicked, setCardsPicked] = useState([]);
  const [level, setLevel] = useState(0);
  const [win, setWin] = useState(false);
  const maxLevel = levels.length;

  useEffect(() => {
    (score > maxScore) && setMaxScore(score);
  }, [score, maxScore]);

  useEffect(() => {
    (level < maxLevel) && (score >= levels[level].pointsToWin) && setLevel(lvl => lvl + 1);
  }, [score, level, maxLevel]);

  useEffect(() => {
    if (level < levels.length) {
      setCardsInGame(cardsContent.slice(0, levels[level].characters));
      setCardsPicked([]);
    } else {
      setWin(true);
    }
  }, [level]);

  const modifyScore = (event) => {
    setCardsInGame(sortCards(cardsInGame))
    const { dataset: { value } } = event.currentTarget;
    if (!cardsPicked.includes(value)) {
      cardsPicked.push(value);
      setScore(score + levels[level].pointsPerGuess);
    } else {
      resetGame();
    }
  };

  const resetGame= () => {
    setScore(0);
    setCardsPicked([]);
    setLevel(0);
    setCardsInGame(cardsContent.slice(0, levels[0].pointsToWin));
    setWin(false);
  };

  if (!win) {
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
  } else {
    return (
      <div className="App">
        You won!
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    );
  }
}

export default App;
