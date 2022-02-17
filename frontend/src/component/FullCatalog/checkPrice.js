import { sortToDownHelp, sortToUpHelp } from "./sort";

const checkPrice = (
  sortTypeName,
  setRequestCards,
  requestCards,
  standartCard
) => {
  if (sortTypeName === "По умолчанию") {
    setRequestCards(standartCard);
  } else if (sortTypeName === "По возрастанию") {
    const data = sortToDownHelp(requestCards);
    setRequestCards(data);
  } else if (sortTypeName === "По убыванию") {
    const data = sortToUpHelp(requestCards);
    setRequestCards(data);
  }
};

export default checkPrice;
