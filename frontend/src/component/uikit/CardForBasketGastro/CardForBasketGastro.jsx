import React, { useState } from "react";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import CounterLight from "../CounterLight/CounterLight";
import s from "./CardForBasketGastro.module.scss";
import converterNumber from "../../../utils/converterNumber";
import { PATH_IMAGES } from "../../../utils/const";
import { useDispatch } from "react-redux";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";
export default function CardForBasketGastro({ data }) {
  const [value, setValue] = useState(+data.minPosition);
  const dispatch = useDispatch();

  const handlerTotalPrice = (value) => {
    if (data.category.categoryName === "Фурушет") {
      return data.price * value;
    } else if (data.category.categoryName === "Мастер-класс") {
      return data.promotion
        ? ((data.count - +data.minPosition) * +data.minPrice + +data.price) *
            0.85
        : (data.count - +data.minPosition) * +data.minPrice + +data.price;
    } else if (data.category.categoryName === "Гастро-станции") {
      return (value - data.minPosition) * data.minPrice + +data.price;
    } else if (data.category.categoryName === "Бар") {
      return (value - data.minPosition) * data.minPrice + +data.price;
    } else {
      return data.price * value;
    }
  };

  const setCount = (count) => {
    if (count >= data.minPosition) {
      dispatch(
        changeInCart({
          ...data,
          count: count,
          totalPrice: handlerTotalPrice(count),
        })
      );
    } else {
      dispatch(
        toggleToCart({
          ...data,
        })
      );
      setValue(data.minPosition);
    }
  };
  // else {
  //   if (count >= data.minPosition) {
  //     setValue(count);
  //   } else {
  //     setValue(data.minPosition);
  //   }

  const handleDeleteCard = () => {
    dispatch(
      toggleToCart({
        ...data,
      })
    );
  };

  return (
    <div className={s.card}>
      <LazyImageWrapper
        className={[s.image]}
        wrapperClass={s.image_wrapper}
        src={`${PATH_IMAGES}${data.slidersMob[0]}`}
        alt={"dsd"}
      />
      <div className={s.content_block}>
        <p className={s.name_product}>{data.name}</p>
      </div>
      <div className={s.price_block}>
        <div className={s.line_block}>
          {data?.nameFood ? (
            <p className={s.position_name}>{data.nameFood}</p>
          ) : (
            <p className={s.position_name}>Люди</p>
          )}
          {data?.promotion && <p className={s.promotion}>В нашей студии</p>}
        </div>
        <div className={s.counter_block}>
          <div className={s.counter}>
            <CounterLight
              count={data.count}
              setCount={setCount}
              minValue={+data.minPosition}
            />
          </div>
          <p className={s.price}>
            <span className={s.amount}>
              {converterNumber(
                (data.count - data.minPosition) * data.minPrice + +data.price
              )}
            </span>
            <span className={s.currency}> &#8381;</span>
          </p>
          <button onClick={handleDeleteCard} className={s.delete_card}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </button>
        </div>
      </div>
    </div>
  );
}
