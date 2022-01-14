import React from "react";
import s from "./StudyBlock.module.scss";
import cs from "classnames";
import StudyList from "../StudyList/StudyList";
// TODO: Подвязать backend
export default function StudyBlock({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.head}>
            {data.header}{" "}
            <span className={s.select}>{data.selectInHeader}</span>
          </h2>
          <p className={s.title}>{data.title}</p>

          {data.promotion && (
            <div className={s.offer}>
              <p className={s.offer_text}>
                Или <span className={s.select_offer}>в нашей</span> кулинарной{" "}
                <span className={s.select_offer}>студии</span>
              </p>
              <p className={s.skidka}>со скидкой 15%</p>
            </div>
          )}
        </div>
        <StudyList data={data} />
      </div>
    </section>
  );
}
