export const selectDop = (isDop, additionalsCards, name, setRequestCards) => {
  if (isDop) {
    const data = additionalsCards.filter(
      (item) => item.kategoriya_dopov.categoryName === name
    );
    setRequestCards(data);
  }
};
