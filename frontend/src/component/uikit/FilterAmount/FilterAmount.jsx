import React from "react";
import s from "./FilterAmount.module.scss";

export default function FilterAmount({setStart, setEnd, sortAmount}) {

  const handlerFind = (e) => {
    sortAmount();
  }

  return (
    <div className={s.container}>
      <p className={s.head}>Цена, ₽</p>
      <div onKeyDown={handlerFind} className={s.wrapper}>
        <input type="number" onClick={(e) => {
          if (+e.target.value < 130) {
            e.target.value = 130;
          }
        }} min={130} placeholder="от 130" onInput={(e) => {
          let value = e.target.value;
          console.log(value)
          if (value < 130) {
            e.target.value = '130';
            setStart(130);
          } else {
            setStart(+value);
          }

        }} className={s.amount}/>
        <input type="number" max={30000} placeholder="до 30 000" className={s.amount} onInput={(e) => {
          let value = e.target.value;
          console.log(value)
          if (value > 30000) {
            e.target.value = '30000';
            setEnd(300000)
          } else {
            setEnd(+value)
          }

        }}/>
      </div>
    </div>
  );
}
