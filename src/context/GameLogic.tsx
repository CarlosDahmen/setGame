import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import { initDeck } from "../utils/Deck";

interface IGameContext {
  deck: number[];
  setDeck: (deck: number[], selectedCards: number[]) => void;
}

const initialContext = {
  deck: [],
  setDeck: () => {},
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
  const [deck, setDeck] = useState<number[]>(initDeck());

  const value = {
    deck,
    setDeck,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
