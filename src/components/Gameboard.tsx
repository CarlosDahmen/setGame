import { useGameDetails } from "../context/GameLogic";
import { Card } from "../types/Card";
import styles from "./Gameboard.module.css";

export default function Gameboard() {
  const { deck, selectedCards, setSelectedCards } = useGameDetails();

  // console.log(deck);

  const selectCard = (card: Card) => {
    const selectedCardId = card.id;
    const selectedCardsIncludesCard = selectedCards.every(
      (card) => card.id === selectedCardId
    );

    if (selectedCards.length < 3 && !selectedCardsIncludesCard) {
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);
    }
  };

  return (
    <div className={styles.gameboard}>
      {deck.length &&
        deck.map((card, idx) => {
          const imageUrl = require(`../../public/images/cards/${card.id}.gif`);
          return (
            <img
              className={`${styles.card} ${
                selectedCards.includes(card) ? styles.selectedCard : ""
              }`}
              src={imageUrl}
              width={258}
              height={167}
              alt="card"
              key={idx}
              onClick={() => selectCard(card)}
            />
          );
        })}
    </div>
  );
}
