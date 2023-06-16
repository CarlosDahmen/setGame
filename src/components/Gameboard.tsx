import { useGameDetails } from "../context/GameLogic";
import { checkSet } from "../utils/Deck";
import styles from "./Gameboard.module.css";
import { useEffect, useState } from "react";

export default function Gameboard() {
  const { deck, setDeck } = useGameDetails();
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const selectCard = (card: number) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 3) {
      if (checkSet(selectedCards)) {
        setDeck(deck, selectedCards);
        setSelectedCards([]);
      }
    }
  }, [selectedCards]);

  return (
    <div className={styles.gameboard}>
      {deck.length &&
        deck.map((card) => {
          const imageUrl = require(`../../public/images/cards/${card}.gif`);
          return (
            <img
              className={`${styles.card} ${
                selectedCards.includes(card) ? styles.selectedCard : ""
              }`}
              src={imageUrl}
              width={258}
              height={167}
              alt="card"
              key={card}
              onClick={() => selectCard(card)}
            />
          );
        })}
    </div>
  );
}
