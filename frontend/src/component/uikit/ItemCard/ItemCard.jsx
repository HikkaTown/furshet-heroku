import React, { useState } from "react";
import cs from "classnames";
import s from "./ItemCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import AddBasketButton from "../AddBasketButton/AddBasketButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CounterLight from "../CounterLight/CounterLight";

// карточка для обычных продуктов или стаффа

export default function ItemCard({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddInCart = (e) => {
    e.preventDefault();
    setIsEdit(isEdit ? false : true);
  };

  const handleAddedFavorites = (e) => {
    e.preventDefault();
    setAdded(added ? false : true);
  };

  return (
    <div className={s.block}>
      <div className={s.favorite}>
        <FavoriteButton added={added} onClick={handleAddedFavorites} />
      </div>
      <LazyImageWrapper
        wrapperClass={s.wrapper}
        className={[s.image]}
        src={"/images/banner-min.jpg"}
        srcTablet={"/images/banner-min.jpg"}
        srcMobile={"/images/banner-min.jpg"}
        alt={"dsd"}
      />
      <div className={s.info}>
        <h3 className={s.name}>Официант</h3>
        <p className={s.params}>{"ШВ: 0,8 х 1,1 м"}</p>
      </div>
      <div className={s.pay}>
        <p className={s.price}>
          <span className={s.amount}>{"12 000"}</span>
          <span className={s.currency}> &#8381;</span>/шт
        </p>
        {isEdit ? (
          <CounterLight />
        ) : (
          <AddBasketButton handleAddInCart={handleAddInCart} />
        )}
      </div>
    </div>
  );
}
