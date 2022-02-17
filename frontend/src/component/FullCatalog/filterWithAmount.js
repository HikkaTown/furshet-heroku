export const filterWithAmount = (
  typeId,
  additionalsCards,
  startValue,
  endValue,
  setRequestCards,
  name
) => {
  if (typeof typeId === "string") {
    const data = additionalsCards.filter(
      (item) => item.kategoriya_dopov.categoryName === name
    );
    let filtered = [];
    if (startValue) {
      filtered = data.filter((item) => item.price >= startValue);
    }
    if (endValue) {
      filtered
        ? (filtered = filtered.filter((item) => item.price <= endValue))
        : filtered.filter((item) => item.price <= endValue);
    }
    setRequestCards(filtered);
  }
};
