import React, { useEffect } from "react";
import s from "./CardsBlockFavorites.module.scss";
import MasterClassCard from "../uikit/MasterClassCard/MasterClassCard";
import GastroStationCard from "../uikit/GastroStationCard/GastroStationCard";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ThreePriceCard from "../uikit/ThreePriceCard/ThreePriceCard";
import ItemCard from "../uikit/ItemCard/ItemCard";

function CardsBlockFavorites({ data, categoryName }) {
  return (
    <div className={s.container}>
      {data && data.length > 0
        ? data.map((item) => {
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
        : "Ничего нет"}
    </div>
  );
}

export default CardsBlockFavorites;