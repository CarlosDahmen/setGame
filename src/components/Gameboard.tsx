import { useGameDetails } from "../context/GameLogic";
import { Card } from "../types/Card";
import styles from "./Gameboard.module.css";
import findIndex from "lodash.findindex";

export default function Gameboard() {
  const { deck, setDeck } = useGameDetails();

  const selectCard = (card: Card) => {
    const selectedCards = deck.filter((card) => card.selected === true);

    const selectedCardId = card.id;
    const selectedCardIdx = findIndex(deck, { id: selectedCardId });

    const selectedCardsIncludesCard = selectedCards.some(
      (card) => card.id === selectedCardId
    );

    let newDeck = [...deck];

    if (selectedCards.length < 3 && !selectedCardsIncludesCard) {
      card.selected = true;
      newDeck.splice(selectedCardIdx, 1, card);
      setDeck(newDeck);
    }
  };

  return (
    <div className={styles.gameboard}>
      {deck.length &&
        deck.map((card, idx) => {
          const imageUrl = require(`../../public/images/cards/${card.id}.gif`);

          const cardStyles = (card: Card) => {
            if (card.selected) {
              return styles.selectedCard;
            }

            if (card.selected && card.set) {
              return styles.isPartSet;
            }

            if (card.selected && !card.set) {
              return styles.isNotPartSet;
            }
            return "";
          };
          return (
            <img
              className={`${styles.card} ${cardStyles(card)}`}
              src={imageUrl}
              alt="card"
              key={idx}
              onClick={() => selectCard(card)}
            />
          );
        })}
    </div>
  );
}
