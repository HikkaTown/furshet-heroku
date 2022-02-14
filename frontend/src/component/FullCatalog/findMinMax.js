export const minMax = (cards, requestCards) => {
  let arr = [];
  if (requestCards && requestCards.length > 0) {
    arr = requestCards.map((item) => {
      return +item.price;
    });
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
      min,
      max,
    };
  } else {
    arr = cards.map((item) => {
      return +item.price;
    });
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
      min,
      max,
    };
  }
};
