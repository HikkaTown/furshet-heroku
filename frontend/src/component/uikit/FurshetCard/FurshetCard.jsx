import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import CounterLight from "../CounterLight/CounterLight";
import s from "./FurshetCard.module.scss";
import cs from "classnames";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import SliderForCard from "../SliderForCard/SliderForCard";

export default function FurshetCard({ data }) {
  const [isEdit, setEdit] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddInCart = (e) => {
    e.preventDefault();
    setEdit(isEdit ? false : true);
  };

  const handleAddedFavorites = (e) => {
    e.preventDefault();
    setAdded(added ? false : true);
  };

  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <FavoriteButton added={added} onClick={handleAddedFavorites} />
      </div>
      <div className={s.slider_block}>
        <SliderForCard data={null} />
      </div>
      <div className={s.content}>
        <h3 className={s.name}>Фуршетный набор №1/Фуршетный набор №1</h3>
        <p className={s.params}>
          <span className={s.select}>10 чел</span>/20 шт/1000 гр
        </p>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>{"12 000"}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {isEdit ? (
            <CounterLight />
          ) : (
            <PrimaryButton
              className={s.pay_button}
              text={"В корзину"}
              onClick={handleAddInCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}
