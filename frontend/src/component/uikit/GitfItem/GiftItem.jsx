import React from "react";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import s from "./GiftItem.module.scss";
export default function GiftItem({ head, title, image }) {
  return (
    <div className={s.card}>
      <div className={s.image_block}>
        <LazyImageWrapper
          src={image}
          lazy={false}
          wrapperClass={s.image_wrapper}
          className={[s.image]}
        />
      </div>
      <div className={s.content}>
        <h2 className={s.head}>{head}</h2>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
}
