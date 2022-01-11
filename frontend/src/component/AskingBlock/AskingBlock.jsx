import React from "react";
import s from "./AskingBlock.module.scss";
import cs from "classnames";
import Question from "../uikit/Question/Question";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";

export default function AskingBlock({ data }) {
  return (
    <section className={s.section}>
      <LazyBackgroundImage
        className={s.background_block}
        lazy={true}
        src={"images/askingBlock/bg.png"}
      ></LazyBackgroundImage>
      <div className={s.container}>
        <h2 className={s.head}>Вопросы-ответы</h2>
        <div className={s.content_info}>
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    </section>
  );
}
