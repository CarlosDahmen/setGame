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
