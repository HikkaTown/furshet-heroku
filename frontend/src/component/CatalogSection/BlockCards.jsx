import React from "react";
import s from "./BlockCards.module.scss";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ItemCard from "../uikit/ItemCard/ItemCard";
import ThreePriceCard from "../uikit/ThreePriceCard/ThreePriceCard";
import GastroStationCard from "../uikit/GastroStationCard/GastroStationCard";
import MasterClassCard from "../uikit/MasterClassCard/MasterClassCard";

function BlockCards({cards, pageSize, currentPage}) {
  return (
    <div className={s.content}>
      {cards && cards.length > 0
        ? cards
          .slice(pageSize * (currentPage - 1), pageSize * currentPage)
          .map((item) => {
            if (item.nextPersonPrice) {
              return (
                <MasterClassCard className={s.card} key={item.id} data={item}/>
              )
            } else if (item.dopPositionPrice) {
              return <GastroStationCard data={item}/>;
            } else if (typeof item.params === "object" && item.threeValue === false) {
              return (
                <FurshetCard className={s.card} key={item.id} data={item}/>
              );
            } else if (item.params === 'string' || item.params === undefined) {
              return (
                <ItemCard className={s.card} key={item.id} data={item}/>
              );
            }
          })
        : "Ничего нет"}
    </div>
  );
}

export default React.memo(BlockCards);
