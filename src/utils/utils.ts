import { cards } from "../cards";
import { Card } from "../types/Card";
import findIndex from "lodash.findindex";
import isEqual from "lodash.isequal";

const randNum = () => Math.ceil(81 * Math.random());

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

const isCardInDeck = (deck: Card[], cardId: number) => {
  return findIndex(deck, { id: cardId }) === -1 ? false : true;
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
  let card1 = selectedCards[0];
  let card2 = selectedCards[1];
  let card3 = selectedCards[2];

  if (
    ((isEqual(card1.color, card2.color) && isEqual(card1.color, card3.color)) ||
      (!isEqual(card1.color, card2.color) &&
        !isEqual(card2.color, card3.color) &&
        !isEqual(card1.color, card3.color))) &&
    ((isEqual(card1.shape, card2.shape) && isEqual(card1.shape, card3.shape)) ||
      (!isEqual(card1.shape, card2.shape) &&
        !isEqual(card2.shape, card3.shape) &&
        !isEqual(card1.shape, card3.shape))) &&
    ((isEqual(card1.fill, card2.fill) && isEqual(card1.fill, card3.fill)) ||
      (!isEqual(card1.fill, card2.fill) &&
        !isEqual(card2.fill, card3.fill) &&
        !isEqual(card1.fill, card3.fill))) &&
    ((isEqual(card1.quantity, card2.quantity) &&
      isEqual(card2.quantity, card3.quantity)) ||
      (!isEqual(card1.quantity, card2.quantity) &&
        !isEqual(card2.quantity, card3.quantity) &&
        !isEqual(card1.quantity, card3.quantity)))
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * If the 3 selected cards are a set, updateDeck removes those cards
 * and adds 3 new random cards not currently in the deck
 */
export const updateDeck = (deck: Card[]) => {
  const selectedCards = deck.filter((card) => card.selected === true);

  let newCardIds: number[] = [];
  let newDeck = [...deck];
  selectedCards.forEach((card) => {
    const selectedCardIdx: number = findIndex(newDeck, { id: card.id });

    let newCard = undefined;

    while (newCard === undefined) {
      let newIdx = randNum();

      if (!isCardInDeck(deck, newIdx) && !newCardIds.includes(newIdx)) {
        newCardIds.push(newIdx);
        newCard = cards[newIdx - 1];
        newDeck[selectedCardIdx] = newCard;
      }
    }
  });
  deck.forEach((card) => (card.selected = false));
  return newDeck;
};
