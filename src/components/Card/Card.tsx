import { CardType } from "../../types/CardType";
import "./Card.css";
let classNames = require("classnames");

interface IProps {
  idx: string;
  card: CardType;
  imageUrl: string;
  selectCard: (card: CardType) => void;
}

const Card: React.FunctionComponent<IProps> = ({
  card,
  imageUrl,
  selectCard,
  idx,
}) => {
  const overlayClasses = classNames({
    selectedCard: card.selected,
    isPartSet: card.set,
    isNotPartSet: card.set === false,
  });

  return (
    <div className="cardContainer" onClick={() => selectCard(card)}>
      <img className="img" src={imageUrl} alt="card" key={idx} />
      <div className={overlayClasses} />
    </div>
  );
};

export default Card;
