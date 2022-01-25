import React from "react";
import s from "./BlockCards.module.scss";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ItemCard from "../uikit/ItemCard/ItemCard";
import ThreePriceCard from "../uikit/ThreePriceCard/ThreePriceCard";
import GastroStationCard from "../uikit/GastroStationCard/GastroStationCard";

function BlockCards({ cards, pageSize, currentPage }) {
  return (
    <div className={s.content}>
      {cards && cards.length > 0
        ? cards
            .slice(pageSize * (currentPage - 1), pageSize * currentPage)
            .map((item) => {
              // if (Array.isArray(item.params) && item.params.length > 0) {
              //   return (
              //     <FurshetCard className={s.card} key={item.id} data={item}/>
              //   );
              // } else
              // if (item.threeValue) {
              //   console.log('here')
              //   return (<ThreePriceCard key={item.id} data={item}/>)
              // }
              // else if (typeof item.params === "string" || !item.params) {
              //   return <ItemCard className={s.card} key={item.id} data={item}/>;
              // }
              if (item.dopPositionPrice) {
                return <GastroStationCard data={item} />;
              } else if (typeof item.params === "string") {
                return (
                  <ItemCard className={s.card} key={item.id} data={item} />
                );
              }
            })
        : "Ничего нет"}
    </div>
  );
}

export default React.memo(BlockCards);
