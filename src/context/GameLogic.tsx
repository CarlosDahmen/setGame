import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { initDeck, checkSet, updateDeck } from "../utils/utils";
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
  // ------- State -------
  const [deck, setDeck] = useState<CardType[]>(initDeck());
  const [score, setScore] = useState<number>(0);

  const value = {
    deck,
    setDeck,
    score,
    setScore,
  };

  // ------- Functions -------
  const selectedCardsAreASet = useCallback(
    (selectedCards: CardType[]) => {
      selectedCards.forEach((card) => {
        card.set = true;
      });
      setScore(score + 1);
      setTimeout(() => {
        setDeck(updateDeck(deck));
      }, 1000);
    },
    [deck, score]
  );

  const selectedCardsNotASet = useCallback(
    (selectedCards: CardType[]) => {
      let newDeck = [...deck];

      selectedCards.forEach((card) => {
        card.set = false;
      });
      setDeck(newDeck);
    },
    [deck]
  );

  const resetSelectedCards = useCallback(
    () =>
      // Reset selected cards and update score
      setTimeout(() => {
        let newDeck = [...deck];
        newDeck.forEach((card) => {
          card.selected = false;
          card.set = null;
        });

        setScore(score - 1);
        setDeck(newDeck);
      }, 1000),
    [deck, score]
  );

  // ------- Effects -------
  useEffect(() => {
    const selectedCards = deck.filter((card) => card.selected === true);
    if (selectedCards.length === 3) {
      if (checkSet(selectedCards)) {
        // Tell cards that they are a set
        selectedCardsAreASet(selectedCards);
      } else {
        // Tell cards that they are not a set
        selectedCardsNotASet(selectedCards);

        // Reset selected cards
        resetSelectedCards();
      }
    }
  }, [deck, resetSelectedCards, selectedCardsAreASet, selectedCardsNotASet]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
