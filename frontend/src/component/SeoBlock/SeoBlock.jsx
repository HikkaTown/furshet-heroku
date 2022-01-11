import React from "react";
import cs from "classnames";
import s from "./SeoBlock.module.scss";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
// TODO: Сделать динамическую загрузку данных
export default function SeoBlock({ data }) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>Seo-block</h2>
        <div className={s.row}>
          <LazyImageWrapper
            src={"/images/banner-min.jpg"}
            className={[s.image]}
            wrapperClass={s.image_wrapper}
            alt={"altImage"}
          />
          <p className={s.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint.
          </p>
        </div>
        <div className={s.row}>
          <LazyImageWrapper
            src={"/images/banner-min.jpg"}
            className={[s.image]}
            wrapperClass={cs(s.image_wrapper, s.image_last)}
            alt={"altImage"}
          />
          <p className={s.text}>
            {" "}
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}
