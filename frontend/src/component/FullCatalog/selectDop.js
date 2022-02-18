export const selectDop = (isDop, additionalsCards, name, setRequestCards) => {
  if (isDop) {
    const data = additionalsCards.filter(
      (item) => item.category.categoryName === name
    );
    setRequestCards(data);
  }
};
