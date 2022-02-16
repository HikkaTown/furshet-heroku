import React from "react";
import s from "./BlockCards.module.scss";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ItemCard from "../uikit/ItemCard/ItemCard";
import ThreePriceCard from "../uikit/ThreePriceCard/ThreePriceCard";
import GastroStationCard from "../uikit/GastroStationCard/GastroStationCard";
import MasterClassCard from "../uikit/MasterClassCard/MasterClassCard";

function BlockCards({ cards, pageSize, currentPage, pageSizeIncrement }) {
  return (
    <div className={s.content}>
      {cards && cards.length > 0 ? (
        cards
          .slice(
            pageSize * (currentPage - 1),
            pageSize * pageSizeIncrement * currentPage
          )
          .map((item) => {
            if (item?.category?.categoryName === "Мастер-класс") {
              return (
                <MasterClassCard
                  className={s.card}
                  key={item.id}
                  data={item}
                  categoryName={item.category.categoryName}
                />
              );
            }
            if (
              item?.category?.categoryName === "Гастро-станции" ||
              item?.category?.categoryName === "Бар"
            ) {
              return (
                <GastroStationCard
                  className={s.card}
                  key={item.id}
                  data={item}
                  categoryName={item.category.categoryName}
                />
              );
            }
            if (
              item?.category?.categoryName === "Фуршет" &&
              item?.threeValue === false
            ) {
              return (
                <FurshetCard
                  className={s.card}
                  key={item.id}
                  data={item}
                  categoryName={item.category.categoryName}
                />
              );
            } else if (item?.threeValue) {
              return (
                <ThreePriceCard
                  key={item.id}
                  data={item}
                  className={s.card}
                  categoryName={item.category.categoryName}
                />
              );
            } else if (
              typeof item?.params === "string" ||
              item?.params === undefined
            ) {
              return <ItemCard className={s.card} key={item.id} data={item} />;
            }
          })
      ) : (
        <p className={s.error_find}>
          По вашему запросу ничего не нашлось... попробуйте изменить параметры
        </p>
      )}
    </div>
  );
}

export default React.memo(BlockCards);
