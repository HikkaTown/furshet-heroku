import React from "react";
import cs from "classnames";
import s from "./SeoBlock.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import { PATH_IMAGES } from "../../utils/const";
// TODO: Сделать динамическую загрузку данных
export default function SeoBlock({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Seo-block</h2>
        <div className={s.row}>
          <LazyImageWrapper
            src={`${PATH_IMAGES}${data.firstImages.pc}`}
            srcTablet={`${PATH_IMAGES}${data.firstImages.tablet}`}
            srcMobile={`${PATH_IMAGES}${data.firstImages.mobile}`}
            className={[s.image]}
            wrapperClass={s.image_wrapper}
            alt={data.firstImageAlt}
          />
          <p className={s.text}>{data.firstText}</p>
        </div>
        <div className={s.row}>
          <LazyImageWrapper
            src={`${PATH_IMAGES}${data.secondImages.pc}`}
            srcTablet={`${PATH_IMAGES}${data.secondImages.tablet}`}
            srcMobile={`${PATH_IMAGES}${data.secondImages.mobile}`}
            className={[s.image]}
            wrapperClass={cs(s.image_wrapper, s.image_last)}
            alt={data.secondImageAlt}
          />
          <p className={s.text}>{data.secondText}</p>
        </div>
      </div>
    </section>
  );
}
