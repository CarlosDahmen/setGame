# SET

## What does the project do?

This project implements the card game SET in a full-stack web application. The application allows users to play the game as a single player and (eventually) against other players online.
What is the purpose of the project?

To provide users with a convenient, interactive and enjoyable gameplay experience of the card game SET, while implementing both front and backend skills such as:

Front-end: The frontend of the application is responsible for rendering the game's user interface. It includes elements such as the game board, cards, and user controls (e.g., buttons for selecting cards). The UI should be intuitive, visually appealing, and responsive to user interactions.

Back-end: The backend of the application contains the game logic. It manages the rules of the Set card game, including card shuffling, dealing, and verifying valid sets. It also keeps track of players' scores, time limits, and any additional game features.

## How can users get started with the project?

To get started with the project, users can clone the repository and then run the following commands:
npm install
npm start

This will start the application on port 3000.

## Where can users get help with the project?

Users can get help with the project by opening an issue on the GitHub repository.

### Modeling Data

```
deck: [card, card, card]


card: {
  id: "0",
  imageUrl: require("../public/images/0.png"),
  color: red,
  fill: solid,    //solid | empty | striped
  shape: pill,
  quantity: 3  // 1, | 2 | 3
}
```

```

userSelectedCards: []

cards: [
  {
    id: 1,
    color: red,
    shape: peanut,
    fill: solid,
    quantity: 1
    imageUrl: require("../public/images/1.png"),
  },
  {
    id: 2,
    color: red,
    shape: peanut,
    fill: solid,
    quantity: 2
    imageUrl: require("../public/images/2.png"),
  },
  {
    id: 3,
    color: red,
    shape: peanut,
    fill: solid,
    quantity: 3
    imageUrl: require("../public/images/3.png"),
  }]

// all shapes need to be equal, or all shapes need to be different
// all colors need to be equal, or all colors need to be different
// all fills need to be equal, or all fills need to be different
// all quantities need to be equal, or all quantities need to be different


utitl funcs
//

const allFillsAreEqual = (card1, card2, card3) => {
  return card1.fill === card2.fill === card2.fill
}

const allFillsAreDifferent = (card1, card2, card3) => {
  return (card1.fill !== card2.fill) && (card2.fill  !==card3.fill)
}

if(allFillsAreEqual(selCard[0], selCard[1], selCard[2]) ||
  deck[0].fill !== deck[1].fill && deck[1].fill !== deck[2].fill)

deck = [[one, red, peanut, solid],[two, red, peanut, solid],[three, red, peanut, solid]]

  if(deck[0][0] === deck[1][0] === deck[2][0] )

```
