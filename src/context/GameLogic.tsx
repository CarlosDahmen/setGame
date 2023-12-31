import { createContext, useContext, useState, useEffect } from "react";
import {
  checkSet,
  updateDeck,
  isThereASet,
  createNewDeck,
} from "../utils/utils";
import { CardType } from "../types/CardType";
interface IGameContext {
  deck: CardType[];
  setDeck: (deck: CardType[]) => void;
  score: number;
  setScore: (score: number) => void;
}

const initialContext = {
  deck: [],
  setDeck: () => {},
  score: 0,
  setScore: () => {},
};

const GameContext = createContext<IGameContext>(initialContext);

// Hook that returns the Context value
export const useGameDetails = () => {
  const contextValue = useContext(GameContext);

  if (!contextValue) {
    throw new Error("useGameDetails must be called within GameContextProvider");
  }
  return contextValue;
};

// Context provider that returns the context that wraps the children to give them access to the state
export const GameContextProvider = ({ children }: any) => {
  const initDeck = () => {
    let newDeck: CardType[] = createNewDeck();

    // If there is no set in the deck, reshuffle
    if (!isThereASet(newDeck)) {
      newDeck = createNewDeck();
    }
    return newDeck;
  };

  // ------- State -------
  const [deck, setDeck] = useState<CardType[]>([]);
  const [score, setScore] = useState<number>(0);

  const value = {
    deck,
    setDeck,
    score,
    setScore,
  };

  // ------- Functions -------
  const selectedCardsAreASet = (selectedCards: CardType[]) => {
    selectedCards.forEach((card) => {
      card.set = true;
    });
    setScore(score + 1);
    setTimeout(() => {
      let newDeck = updateDeck(deck);
      if (!isThereASet(newDeck)) {
        newDeck = updateDeck(deck);
      }
      setDeck(newDeck);
    }, 1000);
  };

  const selectedCardsNotASet = (selectedCards: CardType[]) => {
    setScore(score - 1);

    selectedCards.forEach((card) => {
      card.set = false;
    });
    // Reset selected cards
    setTimeout(() => {
      let newDeck = [...deck];
      deck.forEach((card) => {
        card.selected = false;
        card.set = null;
      });
      setDeck(newDeck);
    }, 1000);
  };

  // ------- Effects -------

  useEffect(() => {
    setDeck(initDeck());
  }, []);

  useEffect(() => {
    const selectedCards = deck.filter((card) => card.selected === true);
    if (selectedCards.length === 3) {
      if (checkSet(selectedCards)) {
        // Modify selectedCards property set to true
        selectedCardsAreASet(selectedCards);
      } else {
        // Modify selectedCards property set to false
        selectedCardsNotASet(selectedCards);
      }
    }
  }, [deck]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
