import React from "react";
import s from "./GiftItem.module.scss";
export default function GiftItem({ head, title, image }) {
  return (
    <div className={s.card}>
      <img src={image} alt="" className={s.image} />
      <div className={s.content}>
        <h2 className={s.head}>{head}</h2>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
}
