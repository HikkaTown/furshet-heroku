import React from "react";
import s from "./FilterAmount.module.scss";

export default function FilterAmount({setStart, setEnd, start, end, sortAmount}) {

  const handlerFind = (e) => {
    if (e.target.code === 'Enter') {
      sortAmount();
    }
  }

  return (
    <div className={s.container}>
      <p className={s.head}>Цена, ₽</p>
      <div onKeyDown={handlerFind} className={s.wrapper}>
        <input type="number" value={start} onBlur={(e) => {
          if (+e.target.value < 130) {
            e.target.value = '130';
            setStart(130)
          } else if (+e.target.value > 30000) {
            e.target.value = '30000';
            setStart(30000)
          }
        }} placeholder="от 130" onChange={(e) => {
          let value = e.target.value;
          setStart(+value)
        }} className={s.amount}/>
        <input type="number" value={end} placeholder="до 30 000" className={s.amount}
               onBlur={(e) => {
                 if (+e.target.value > 30000) {
                   e.target.value = '30000';
                   setEnd(30000)
                 } else if (+e.target.value <= 0) {
                   e.target.value = '30000';
                   setEnd(30000);
                 }
               }}
               onChange={(e) => {
                 let value = e.target.value;
                 setEnd(+value)
               }}/>
      </div>
    </div>
  );
}
