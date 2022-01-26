import React, {useEffect, useState} from "react";
import cs from "classnames";
import s from "./ItemCard.module.scss";
import {LazyImageWrapper} from "../../LazyImage/LazyImage";
import AddBasketButton from "../AddBasketButton/AddBasketButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CounterLight from "../CounterLight/CounterLight";
import {PATH_IMAGES} from "../../../utils/const";
import converterNumber from "../../../utils/converterNumber";

// карточка для обычных продуктов или стаффа

export default function ItemCard({data, className}) {
  const [isEdit, setIsEdit] = useState(false);
  const [added, setAdded] = useState(false);
  const [price, setPrice] = useState(null);
  const [count, setCount] = useState(null)
  const startPrice = +data.price;
  const handleAddInCart = (e) => {
    e.preventDefault();
    setIsEdit(isEdit ? false : true);
    setPrice(startPrice);
    setCount(1);
  };

  const handleAddedFavorites = (e) => {
    e.preventDefault();
    setAdded(added ? false : true);
  };

  useEffect(() => {
    setPrice(startPrice * count);
  }, [count])

  return (
    <div className={cs(s.block, className)}>
      <div className={s.favorite}>
        <FavoriteButton added={added} onClick={handleAddedFavorites}/>
      </div>
      <LazyImageWrapper
        wrapperClass={s.wrapper}
        className={[s.image]}
        src={`${PATH_IMAGES}${data.slidersPc}`}
        srcMobile={`${PATH_IMAGES}${data.slidersMob}`}
        alt={data.name}
      />
      <div className={s.info}>
        <h3 className={s.name}>data.name</h3>
        {data.params && <p className={s.params}>{data.params}</p>}
      </div>
      <div className={s.pay}>
        <p className={s.price}>
          <span className={s.amount}>{converterNumber(price || startPrice)}</span>
          <span className={s.currency}> &#8381;</span>/шт
        </p>
        {isEdit ? (
          <CounterLight count={count} setCount={setCount}/>
        ) : (
          <AddBasketButton handleAddInCart={handleAddInCart}/>
        )}
      </div>
    </div>
  );
}
