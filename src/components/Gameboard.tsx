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
          return (
            <img
              className={`${styles.card} ${
                card.selected ? styles.selectedCard : ""
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
