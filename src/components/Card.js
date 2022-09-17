import './Card.css'

const Card = (props) => {
  return (<div className="card">
    <div className="card-img-container">
      <img className="card-img" src={props.src} />
    </div>
    <span className="card-name">{props.name}</span>
  </div>);
};

export default Card;
