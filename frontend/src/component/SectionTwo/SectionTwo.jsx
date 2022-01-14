import React from "react";
import cs from "classnames";
import s from "./SectionTwo.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import SelectIcon from "../icons/SelectIcon/SelectIcon";
import { PATH_IMAGES } from "../../utils/const";
// TODO: Добавить динамическую подругзку и отрисовку данных
export default function SectionTwo({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.head}>{data.header}</h2>
        <div className={s.content}>
          <LazyImageWrapper
            wrapperClass={s.wrapper_big}
            className={[s.big_image]}
            src={`${PATH_IMAGES}${data.image.pc}`}
            srcMobile={`${PATH_IMAGES}${data.image.mob}`}
            alt={data.header}
          />
          <ul className={s.list}>
            <li className={s.item}>
              <SelectIcon
                name={data.oneIconText}
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>{data.oneImageText}</h3>
            </li>
            <li className={s.item}>
              <SelectIcon
                name={data.twoIconText}
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>{data.twoImageText}</h3>
            </li>
            <li className={s.item}>
              <SelectIcon
                name={data.threeIconText}
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>{data.threeImageText}</h3>
            </li>
            <li className={s.item}>
              <SelectIcon
                name={data.fourIconText}
                classNameWrapper={s.classNameWrapper}
              />
              <h3 className={s.item_head}>{data.fourImageText}</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
