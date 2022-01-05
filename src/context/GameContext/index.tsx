import { createContext, useState, useContext } from 'react';

const GameContext = createContext({}); // Creating game context..

interface CardsObject {
  defaultCard: string;
  cardList: {
    id: number,
    cardImg: string
  }[];
}

/* Card Image List */
const cardsImage = ["img/logo-blue.svg", "img/logo-green.svg", "img/logo-orange.svg", "img/logo-purple.svg", "img/logo-yellow.svg"];

export const GameProvider = ({ children }: any) => {
  const [gameState, setGameState] = useState<CardsObject>({
    defaultCard: cardsImage[Math.floor(Math.random() * 5)], //Random Card Selection
    cardList: [
      {
        id: 1,
        cardImg: "img/logo-blue.svg"
      },
      {
        id: 2,
        cardImg: "img/logo-green.svg"
      },
      {
        id: 3,
        cardImg: "img/logo-orange.svg"
      },
      {
        id: 4,
        cardImg: "img/logo-purple.svg"
      },
      {
        id: 5,
        cardImg: "img/logo-yellow.svg"
      }
    ]
  });

  const [selectedCard, setSelectedCard] = useState(""); //Selected card

  const onClickDefaultCard = () => {
    // Result alert
    alert(gameState.defaultCard === selectedCard ? "You won!" : "You Lost.");

    setGameState({ ...gameState, defaultCard: cardsImage[Math.floor(Math.random() * 5)] }); // Reset game state
    setSelectedCard(""); // Reset selected card
  }

  const values = {
    gameState,
    setGameState,
    selectedCard,
    setSelectedCard,
    onClickDefaultCard
  }

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

export const useCards = () => useContext(GameContext); // Custom Hook