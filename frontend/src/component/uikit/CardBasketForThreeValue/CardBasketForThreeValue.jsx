import React from "react";
import { PATH_IMAGES } from "../../../utils/const";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import CatalogTabButton from "../CatalogTabButton/CatalogTabButton";
import cs from "classnames";
import s from "./CardBasketForThreeValue.module.scss";
import { useState } from "react";
import spaceDigits from "../../../utils/converterNumber";
import { useDispatch } from "react-redux";
import { changeInCart } from "../../../redux/actions/cartActions";

export default function CardBasketForThreeValue({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const [active, setActive] = useState(data.count);
  const [price, setPrice] = useState(+data.price);
  const handleDeleteCard = () => {};

  const handleChangeAmount = (itemCount, itemAmount) => {
    dispatch(
      changeInCart({
        ...data,
        count: +itemCount,
        price: +itemAmount,
        totalPrice: +itemAmount,
      })
    );
    setPrice(itemAmount);
    setActive(itemCount);
  };

  return (
    <div className={s.card}>
      <LazyImageWrapper
        className={[s.image]}
        wrapperClass={s.image_wrapper}
        src={`${PATH_IMAGES}${
          typeof data.slidersMob === "object"
            ? data.slidersMob[0]
            : data.slidersMob
        }`}
        alt={"dsd"}
      />
      <div className={s.content_block}>
        <p className={s.name_product}>{data.name}</p>
      </div>
      <div className={s.price_block}>
        <div className={s.counter}>
          {data &&
            data.threeValue &&
            data.threeValue.map((item, index) => {
              return (
                <CatalogTabButton
                  text={item.count}
                  key={index}
                  onClick={() => {
                    handleChangeAmount(item.count, item.amount);
                  }}
                  className={cs(s.count_btn, item.count === active && s.active)}
                />
              );
            })}
        </div>
        <p className={s.price}>
          <span className={s.amount}>{spaceDigits(data.price)}</span>
          <span className={s.currency}> &#8381;</span>
        </p>
        <button onClick={handleDeleteCard} className={s.delete_card}>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </button>
      </div>
    </div>
  );
}
