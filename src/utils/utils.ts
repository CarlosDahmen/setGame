import { cards } from "../cards";
import { Card } from "../types/Card";

const randNum = () => Math.ceil(12 * Math.random());

// const randCard = () => {
//   const randIdx = randNum();
//   return cards[randIdx];
// };

export const initDeck = () => {
  let newDeck: number[] = [];

  while (newDeck.length < 12) {
    const newNum = randNum();

    if (!newDeck.includes(newNum)) {
      newDeck.push(newNum);
    }
  }
  return newDeck.map((number) => {
    const newCard = cards[number - 1];
    return newCard;
  });
};

export let deck = initDeck();

export const newCard = (existingDeck: number[]) => {
  let newCard: number = 0;

  while (newCard !== 0) {
    const newNum = randNum();
    if (!existingDeck.includes(newNum)) {
      newCard = newNum;
    }
  }
  return newCard;
};

export const checkSet = (selectedCards: Card[]) => {
  /* hash = {
    1 => [one, red, peanut, solid]
    2 => [two, red, peanut, solid]
    3 => [three, red, peanut, solid]
  }

    hash.get(card)

  */
  console.log("CHECKED!");
  return true;
};

export const notASet = (selectedCards: Card[]) => {};

/**
 *
 * If the 3 selected cards are a set, updateDeck removes those cards
 * and adds 3 new random cards not currently in the deck
 */
export const updateDeck = (deck: Card[]) => {
  // selectedCards.forEach((selectedCard) => {
  //   const selectedCardId = selectedCard.id;

  //   const idxInDeck = deck.filter((card, idx) => {
  //     if (card.id === selectedCardId) {
  //       return idx;
  //     }
  //   })[0]?.id;

  //   console.log(selectedCardId, idxInDeck);

  //   let newCard = undefined;

  //   while (newCard === undefined) {
  //     let newIdx = randNum();

  //     if (!deck.some((deckCard) => deckCard.id === newIdx)) {
  //       newCard = cards[newIdx - 1];
  //       deck[idxInDeck] = newCard;
  //     }
  //   }
  // });
  return deck;
};
