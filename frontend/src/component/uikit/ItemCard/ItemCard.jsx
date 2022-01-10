import React, { useState } from "react";
import cs from "classnames";
import s from "./ItemCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import AddBasketButton from "../AddBasketButton/AddBasketButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CounterLight from "../CounterLight/CounterLight";
import { PATH_IMAGES } from "../../../utils/const";

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
        src={`${PATH_IMAGES}${data.imagePc}`}
        srcMobile={`${PATH_IMAGES}${data.imageMob}`}
        alt={data.name}
      />
      <div className={s.info}>
        <h3 className={s.name}>Официант</h3>
        {data.params && <p className={s.params}>{data.params}</p>}
      </div>
      <div className={s.pay}>
        <p className={s.price}>
          <span className={s.amount}>{data.price}</span>
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
