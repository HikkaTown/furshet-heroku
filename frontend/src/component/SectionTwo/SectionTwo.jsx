import React from "react";
import cs from "classnames";
import s from "./SectionTwo.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import SelectIcon from "../icons/SelectIcon/SelectIcon";
// TODO: Добавить динамическую подругзку и отрисовку данных
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
              <SelectIcon name="wallet" classNameWrapper={s.classNameWrapper} />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <SelectIcon
                name="hot_food"
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <SelectIcon
                name="natural"
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
            <li className={s.item}>
              <SelectIcon name="witer" classNameWrapper={s.classNameWrapper} />
              <h3 className={s.item_head}>Наборы на любой вкус и кошелёк</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
