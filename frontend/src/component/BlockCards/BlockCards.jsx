import React from 'react';
import s from './BlockCards.module.scss'
import FurshetCard from "../uikit/FurshetCard/FurshetCard";

function BlockCards({cards}) {
  return (
    <div className={s.content}>
      {cards && cards.map((item) => {
        console.log(item)
        return (<FurshetCard className={s.card} key={item.id} data={item}/>)
      })}
    </div>
  );
}

export default React.memo(BlockCards);