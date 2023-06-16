import { createContext, useContext, useState, useEffect } from "react";
import { initDeck, checkSet, updateDeck } from "../utils/Deck";
import { Card } from "../types/Card";

interface IGameContext {
  deck: Card[];
  setDeck: (deck: Card[], selectedCards: Card[]) => void;
  selectedCards: Card[];
  setSelectedCards: (card: Card[]) => void;
}

const initialContext = {
  deck: [],
  setDeck: () => {},
  selectedCards: [],
  setSelectedCards: () => {},
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
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const value = {
    deck,
    setDeck,
    selectedCards,
    setSelectedCards,
  };

  useEffect(() => {
    if (selectedCards.length === 3) {
      if (checkSet(selectedCards)) {
        setDeck(updateDeck(deck, selectedCards));
        setSelectedCards([]);
      }
    }
  }, [selectedCards]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
