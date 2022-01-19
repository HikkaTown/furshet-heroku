//Сортируем по типу категории
export const sortTypeHelp = (id, allCards, setCards) => {
  let data = [];
  const newCards = allCards.map((item) => {
    item.type.map((itemType) => {
      if (itemType.id === id) {
        data.push(item);
      }
    })
  });
  return data;
}

export const sortAmountHelp = (start, end, visibleCards, setVisibleCards) => {
  let data = [];
  const newCards = visibleCards.map((item) => {
    if (+item.price >= start && +item.price <= end) {
      data.push(item)
    }
  })
  return data;
}

export const sortToDownHelp = (visibleCards, setVisibleCards) => {
  let data = [];

  const newCards = visibleCards.slice();
  newCards.sort((cardOne, cardSecond) => {
    return Number(cardOne.price) - Number(cardSecond.price)
  })
  return newCards;
}

export const sortToUpHelp = (visibleCards) => {
  let data = [];
  const newCards = visibleCards.slice();
  newCards.sort((cardOne, cardSecond) => {
    return Number(cardSecond.price) - Number(cardOne.price)
  })
  return newCards;
}

export const thematicsHelp = (visibleCards, currentId) => {
  let data = [];
  const newCards = visibleCards.map((item) => {
    item.tematic.map((itemType) => {
      if (itemType.id === currentId) {
        console.log(item)
        data.push(item);
      }
    })
  });
  return data;
}