import React from 'react';
import s from './BlockCards.module.scss'
import FurshetCard from "../uikit/FurshetCard/FurshetCard";

function BlockCards({cards}) {
  console.log(cards)
  return (
    <div className={s.content}>
      {cards && cards.map((item) => {
        return (<FurshetCard key={item.id} data={item}/>)
      })}
    </div>
  );
}

export default React.memo(BlockCards);