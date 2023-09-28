import { useGameDetails } from "../context/GameLogic";
import { CardType } from "../types/CardType";
import findIndex from "lodash.findindex";
import Card from "./Card";
import "./Gameboard.css";

export default function Gameboard() {
  const { deck, setDeck } = useGameDetails();

  const selectCard = (card: CardType) => {
    const selectedCards = deck.filter((card) => card.selected === true);

    const selectedCardId = card.id;
    const selectedCardIdx = findIndex(deck, { id: selectedCardId });

    const selectedCardsIncludesCard = selectedCards.some(
      (card) => card.id === selectedCardId
    );

    let newDeck = [...deck];

    //if selectedcards.length < 3 & card is not in selectedCards, add it from selectedCards
    if (selectedCards.length < 3 && !selectedCardsIncludesCard) {
      card.selected = true;
      newDeck.splice(selectedCardIdx, 1, card);
      setDeck(newDeck);
    }
    //if card is already selected, remove it from selectedCards
    else if (selectedCards.length < 3 && selectedCardsIncludesCard) {
      card.selected = false;
      newDeck.splice(selectedCardIdx, 1, card);
      setDeck(newDeck);
    }
  };

  return (
    <div className="gameboard">
      {deck.length &&
        deck.map((card, idx) => {
          const imageUrl = require(`../../public/images/cards/${card.id}.gif`);

          return (
            <Card
              card={card}
              key={card.id}
              idx={`${card.id}`}
              imageUrl={imageUrl}
              selectCard={selectCard}
            />
          );
        })}
    </div>
  );
}
