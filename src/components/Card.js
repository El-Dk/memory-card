import './Card.css'

const Card = (props) => {
  const { cardData } = props;
  return (<div className="card" onClick={props.modifyScore} data-value={cardData._id}>
    <div className="card-img-container">
      <img className="card-img" src={cardData.src} />
    </div>
    <span className="card-name">{cardData.name}</span>
  </div>);
};

export default Card;
