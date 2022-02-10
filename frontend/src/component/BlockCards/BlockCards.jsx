import React from "react";
import s from "./BlockCards.module.scss";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ItemCard from "../uikit/ItemCard/ItemCard";
import ThreePriceCard from "../uikit/ThreePriceCard/ThreePriceCard";
import GastroStationCard from "../uikit/GastroStationCard/GastroStationCard";
import MasterClassCard from "../uikit/MasterClassCard/MasterClassCard";

function BlockCards({ cards, pageSize, currentPage, categoryName, typeId }) {
  console.log(cards);
  return (
    <div className={s.content}>
      {cards &&
        cards.length > 0 &&
        // ? cards
        //     .slice(pageSize * (currentPage - 1), pageSize * currentPage)
        cards.map((item) => {
          if (item.category.categoryName === "Мастер-класс") {
            console.log("может сюда попал");
            return (
              <MasterClassCard
                className={s.card}
                key={item.id}
                data={item}
                categoryName={categoryName}
              />
            );
          }
          if (item.category.categoryName === "Гастро-станции") {
            console.log("может сюда попал");
            return (
              <GastroStationCard
                className={s.card}
                key={item.id}
                data={item}
                categoryName={categoryName}
              />
            );
          }
          if (
            item.category.categoryName === "Фуршет" &&
            item.threeValue === false
          ) {
            console.log("попал в фуршет");
            return (
              <FurshetCard
                className={s.card}
                key={item.id}
                data={item}
                categoryName={categoryName}
              />
            );
          } else if (item.threeValue) {
            console.log("может сюда попал");
            return (
              <ThreePriceCard
                key={item.id}
                data={item}
                className={s.card}
                categoryName={categoryName}
              />
            );
          } else if (
            typeof item.params === "string" ||
            item.params === undefined
          ) {
            return (
              <ItemCard
                className={s.card}
                key={item.id}
                data={item}
                categoryName={typeId}
              />
            );
          }
        })}
    </div>
  );
}

export default React.memo(BlockCards);
