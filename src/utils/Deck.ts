const randNum = () => Math.ceil(81 * Math.random());

export const initDeck = () => {
  let newDeck: number[] = [];
  while (newDeck.length < 12) {
    const newNum = randNum();
    if (!newDeck.includes(newNum)) {
      newDeck.push(newNum);
    }
  }
  return newDeck;
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

export const checkSet = (selectedCards: number[]) => {
  console.log("CHECKED!");
  return true;
};

export const updateDeck = (oldDeck: number[], selectedCards: number[]) => {
  selectedCards.forEach((card) => {
    const idx = oldDeck.indexOf(card);
    oldDeck[idx] = newCard(deck);
  });

  deck = oldDeck;
};
