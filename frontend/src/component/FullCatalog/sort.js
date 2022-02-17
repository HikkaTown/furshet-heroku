//Сортируем по типу категории
export const sortTypeHelp = (id, allCards, additionalList, setCards) => {
  let data = [];
  const newCards = allCards.map((item) => {
    item.type.map((itemType) => {
      if (itemType.id === id) {
        data.push(item);
      }
    })
  });
  const Additionals = additionalList.map((item) => {
    if (id === item.name) {
      item.data.map((itemI) => {
        data.push(itemI.attributes)
      })
    }
  });
  return data;
}
//Сортировка по заданной цене
export const sortAmountHelp = (start, end, visibleCards, setVisibleCards) => {
  let data = [];
  visibleCards.map((item) => {
    if (+item.price >= start && +item.price <= end) {
      data.push(item)
    }
  })
  return data;
}
//Сортировка убыванию 
export const sortToDownHelp = (visibleCards) => {
  const newCards = [...visibleCards]
  newCards.sort((cardOne, cardSecond) => {
    return Number(cardOne.price) - Number(cardSecond.price)
  })
  return newCards;
}
//Сортировка по возрастанию
export const sortToUpHelp = (visibleCards) => {
  const newCards = [...visibleCards];
  newCards.sort((cardOne, cardSecond) => {
    return Number(cardSecond.price) - Number(cardOne.price)
  })
  return newCards;
}
//Сортировка по тематике
export const thematicsHelp = (stateCards, currentId) => {
  let data = [];
  stateCards.map((item) => {
    if (currentId === undefined || currentId === null) {
      data.push(item)
    } else if (item.tematic) {
      item.tematic.map((itemType) => {
        if (itemType.id === currentId) {
          data.push(item);
        }
      })
    }
  });
  return data;
}

//Сортировка по кол-ву людей
export const peopleSortHelp = (stateCards, peopleNumber) => {
  let data = [];
  stateCards.map((item) => {
    if (item.params.peopleNumber && item.params.peopleNumber <= Number(peopleNumber)) {
      data.push(item);
    }
  })
  return data;
}