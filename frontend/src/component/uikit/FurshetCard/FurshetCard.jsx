import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import CounterLight from "../CounterLight/CounterLight";
import s from "./FurshetCard.module.scss";
import cs from "classnames";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import SliderForCard from "../SliderForCard/SliderForCard";
import DescriptionInCard from "../DescriptionInCard/DescriptionInCard";
import useWindowSize from "../../../hooks/useWindowSize";
import converterNumber from "../../../utils/converterNumber";
import OpacityButton from "../OpacityButton/OpacityButton";
import SliderCloseButton from "../SliderCloseButton/SliderCloseButton";
import { useDispatch, useSelector } from "react-redux";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";
import { cartSelector } from "../../../redux/selectors/cartSelector";

export default function FurshetCard({ data, className, categoryName }) {
  const cartData = useSelector(cartSelector());
  const dispatch = useDispatch();
  const cardFromBasket = cartData.find(
    (item) => item.id === data.id && item.categoryName === categoryName
  );
  const hasInBasket = cardFromBasket !== undefined;
  const size = useWindowSize();
  const [descriptionVision, setDescription] = useState(false);
  const visibleDescription = (e) => {
    e.preventDefault();
    if (size.width >= 1175 || e._reactName === "onClick") {
      setDescription(true);
    }
  };

  const hiddenDescription = (e) => {
    if (size.width >= 1175 || e._reactName === "onClick") {
      setDescription(false);
    }
  };

  const handleAddInCart = () => {
    dispatch(
      toggleToCart({
        ...data,
        categoryName: categoryName,
        count: 1,
      })
    );
  };
  const setCount = (value) => {
    console.log(value);
    if (value !== 0) {
      dispatch(
        changeInCart({
          ...cardFromBasket,
          count: value,
        })
      );
    } else if (value === 0) {
      console.log(value);
      dispatch(
        toggleToCart({
          ...cardFromBasket,
        })
      );
    }
  };

  return (
    <div className={cs(s.card, className)} onPointerLeave={hiddenDescription}>
      {size.width < 1175 && !descriptionVision && (
        <OpacityButton
          text={"Описание"}
          className={s.btn_desc}
          onClick={visibleDescription}
        />
      )}
      {size.width < 1175 && descriptionVision && (
        <SliderCloseButton
          className={s.btn_close}
          onClick={hiddenDescription}
        />
      )}
      <div className={s.favorite}>
        <FavoriteButton id={data.id} categoryName={categoryName} />
      </div>
      <div className={s.slider_block}>
        <SliderForCard sliderMob={data.slidersMob} sliderPc={data.slidersPc} />
        <DescriptionInCard
          descriptionVision={descriptionVision}
          content={data.descriptionList}
        />
        {data.vegan && (
          <PrimaryButton className={s.vegan_btn} text="Вегетарианский" />
        )}
      </div>
      <div
        className={s.content}
        onPointerLeave={hiddenDescription}
        onPointerEnter={visibleDescription}
      >
        <h3 className={s.name}>{data.name}</h3>
        <p className={s.params}>
          {data.params?.peopleNumber && (
            <span className={s.select}>{data.params.peopleNumber} чел/</span>
          )}
          {data.params?.countNumber} шт/{data.params?.countVesInGramm} гр
        </p>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>
              {converterNumber(
                hasInBasket
                  ? cardFromBasket.price * cardFromBasket.count
                  : data.price
              )}
            </span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {hasInBasket ? (
            <CounterLight
              count={hasInBasket ? cardFromBasket.count : 1}
              setCount={setCount}
            />
          ) : (
            <PrimaryButton
              id={data.id}
              categoryName={categoryName}
              className={s.pay_button}
              text={"В корзину"}
              onClick={(e) => {
                handleAddInCart();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
