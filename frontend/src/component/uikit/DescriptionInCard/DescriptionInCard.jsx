import React from "react";
import cs from "classnames";
import s from "./DescriptionInCard.module.scss";

export default function DescriptionInCard({ content, descriptionVision }) {
  return (
    <div className={descriptionVision ? cs(s.block) : cs(s.block_none)}>
      <ul className={s.list}>
        {content.map((item, id) => (
          <li key={id} className={s.item}>
            {`${id + 1}. `} {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
