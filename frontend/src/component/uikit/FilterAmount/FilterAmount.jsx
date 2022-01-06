import React from "react";
import s from "./FilterAmount.module.scss";
export default function FilterAmount() {
  return (
    <div className={s.container}>
      <p className={s.head}>Цена, ₽</p>
      <div className={s.wrapper}>
        <input type="text" placeholder="от 130" className={s.amount} />
        <input type="text" placeholder="до 30 000" className={s.amount} />
      </div>
    </div>
  );
}
