import React from "react";
import cs from "classnames";
import s from "./SectionTwo.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";

export default function SectionTwo({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.head}>Мы обеспечим ваш офис вкусной едой</h2>
        <div className={s.content}>
          <LazyImageWrapper
            wrapperClass={s.wrapper_big}
            className={[s.big_image]}
            src={"/images/banner-min.jpg"}
            alt={"ds"}
          />
          <ul className={s.list}>
            <li className={s.item}>
              <LazyImageWrapper
                wrapperClass={s.item_icon_wrapper}
                className={[s.item_icon]}
                src={"/images/banner-min.jpg"}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <LazyImageWrapper
                wrapperClass={s.item_icon_wrapper}
                className={[s.item_icon]}
                src={"/images/banner-min.jpg"}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <LazyImageWrapper
                wrapperClass={s.item_icon_wrapper}
                className={[s.item_icon]}
                src={"/images/banner-min.jpg"}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <LazyImageWrapper
                wrapperClass={s.item_icon_wrapper}
                className={[s.item_icon]}
                src={"/images/banner-min.jpg"}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
