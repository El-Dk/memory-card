import './Header.css';

const Header = (props) => {
  return (<header>
    <div className="title">
      South Park Memory Game
    </div>
    <div className="score">
      <span>
        Score: {props.score}
      </span>
      <span>
        Max-score: {props.maxScore}
      </span>
    </div>
  </header>);
};

export default Header;
