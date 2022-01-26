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
      />
      <div className={s.container}>
        <h2 className={s.head}>Вопросы-ответы</h2>
        <div className={s.content_info}>
          <Question
            quest={"Какая минимальная сумма заказа?"}
            answer={"Сумма минимального заказа составляет 1.500 руб."}
          />
          <Question
            quest={"В чем приедут закуски?"}
            answer={
              "Доставка закусок осуществляется в пластиковых черных премиальных подносах с прозрачными крышками. Горячие закуски могут быть упакованы в фольгированные контейнеры, которые вы дополнительно можете разогреть перед подачей."
            }
          />
          <Question
            quest={"За сколько времени до момента доставки оформить заказ?"}
            answer={
              "Минимальная сумма заказа с бесплатной доставкой по Москве составляет 3.000 руб. Если сумма менее 3.000руб., стоимость доставки составляет от 500 руб. в зависимости от удаленности адреса доставки."
            }
          />
          <Question
            quest={"Сколько стоит доставка?"}
            answer={
              "Что бы не было спешки с приготовлением Ваших блюд, заказ желательно оформить за 24 часа до времени доставки. Но мы всегда стараемся идти на встречу нашим покупателям и принимаем срочные заказы."
            }
          />
        </div>
      </div>
    </section>
  );
}
