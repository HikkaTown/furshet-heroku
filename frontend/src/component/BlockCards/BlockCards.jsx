import React from "react";
import s from "./BlockCards.module.scss";
import FurshetCard from "../uikit/FurshetCard/FurshetCard";
import ItemCard from "../uikit/ItemCard/ItemCard";

function BlockCards({ cards }) {
  console.log(cards);
  return (
    <div className={s.content}>
      {cards && cards.length > 0
        ? cards.map((item) => {
            if (typeof item.params === "object") {
              return (
                <FurshetCard className={s.card} key={item.id} data={item} />
              );
            } else if (typeof item.params === "string" || !item.params) {
              return <ItemCard className={s.card} key={item.id} data={item} />;
            }
          })
        : "Ничего нет"}
    </div>
  );
}

export default React.memo(BlockCards);
