import React from "react";
import s from "./StudyBlock.module.scss";
import cs from "classnames";
import StudyList from "../StudyList/StudyList";
// TODO: Подвязать backend
export default function StudyBlock({ data }) {
  const dataList = {
    header: "Текст",
    select: "Селект",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla reprehenderit molestias harum corrupti consectetur laboriosam labore, nobis sit fugiat!",
    promotion: false,
    listBlock: [
      {
        image: "images/banner-min.jpg",
        text: "Заголовок Заголовок Заголовок Заголовок",
      },
      {
        image: "images/banner-min.jpg",
        text: "ЗаголовокЗаголовок Заголовок Заголовок",
      },
      {
        image: "images/banner-min.jpg",
        text: "Заголовок Заголовок Заголовок Заголовок",
      },
      {
        image: "images/banner-min.jpg",
        text: "Заголовок Заголовок Заголовок Заголовок ",
      },
    ],
  };
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.head}>
            {dataList.header}{" "}
            <span className={s.select}>{dataList.select}</span>
          </h2>
          <p className={s.title}>{dataList.title}</p>

          {dataList.promotion && (
            <div className={s.offer}>
              <p className={s.offer_text}>
                Или <span className={s.select_offer}>в нашей</span> кулинарной{" "}
                <span className={s.select_offer}>студии</span>
              </p>
              <p className={s.skidka}>со скидкой 15%</p>
            </div>
          )}
        </div>
        <StudyList data={dataList.listBlock} />
      </div>
    </section>
  );
}
