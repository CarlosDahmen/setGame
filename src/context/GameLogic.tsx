import { createContext, useContext, useState, useEffect } from "react";
import { initDeck, checkSet, updateDeck } from "../utils/utils";
import { Card } from "../types/Card";

interface IGameContext {
  deck: Card[];
  setDeck: (deck: Card[]) => void;
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
  const [deck, setDeck] = useState<Card[]>(initDeck());
  const [score, setScore] = useState<number>(0);

  const value = {
    deck,
    setDeck,
    score,
    setScore,
  };

  useEffect(() => {
    const selectedCards = deck.filter((card) => card.selected === true);
    if (selectedCards.length === 3) {
      if (checkSet(selectedCards)) {
        selectedCards.forEach((card) => {
          card.set = true;
        });
        setScore(score + 1);
        setTimeout(() => {
          setDeck(updateDeck(deck));
        }, 10000);
      } else {
        let newDeck = [...deck];
        newDeck.forEach((card) => {
          card.selected = false;
        });
        setScore(score - 1);
        setDeck(newDeck);
      }
      // resetSelectedCards(deck);
    }
  }, [deck]);

  // const resetSelectedCards = (deck: Card[]) => {
  //   setTimeout(() => {
  //     let newDeck = [...deck];
  //     newDeck.forEach((card) => {
  //       card.selected = false;
  //     });
  //     setDeck(newDeck);
  //   }, 1000);
  // };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
