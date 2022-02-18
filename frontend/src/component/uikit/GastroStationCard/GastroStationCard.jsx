import React, { useEffect, useState } from "react";
import s from "./GastroStationCard.module.scss";
import cs from "classnames";
import useWindowSize from "../../../hooks/useWindowSize";
import Counter from "../Counter/Counter";
import DeleteButton from "../DeleteButton/DeleteButton";
import DescriptionInCard from "../DescriptionInCard/DescriptionInCard";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import OpacityButton from "../OpacityButton/OpacityButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SliderCloseButton from "../SliderCloseButton/SliderCloseButton";
import SliderForCard from "../SliderForCard/SliderForCard";
import converterNumber from "../../../utils/converterNumber";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selectors/cartSelector";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";

export default function GastroStationCard({ data, className, categoryName }) {
  const cardData = useSelector(cartSelector());
  const dispatch = useDispatch();
  const size = useWindowSize();
  const cartFromBasket = cardData.find((item) => item.id === data.id);
  const hasInBasket = cartFromBasket !== undefined;
  const [value, setValue] = useState(+data.minPosition);
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
        count: value,
      })
    );
  };

  const handleDeleteFromCart = () => {
    dispatch(
      toggleToCart({
        ...cartFromBasket,
      })
    );
  };

  const setCount = (count) => {
    if (hasInBasket) {
      if (count >= data.minPosition) {
        dispatch(
          changeInCart({
            ...cartFromBasket,
            count: count,
          })
        );
      } else {
        dispatch(
          toggleToCart({
            ...cartFromBasket,
          })
        );
        setValue(data.minPosition);
      }
    } else {
      if (count >= data.minPosition) {
        setValue(count);
      } else {
        setValue(data.minPosition);
      }
    }
  };

  return (
    <div className={cs(s.card, className)}>
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
        <FavoriteButton data={data} />
      </div>
      <div className={s.slider_block}>
        <SliderForCard sliderMob={data.slidersMob} sliderPc={data.slidersPc} />
        <DescriptionInCard
          descriptionVision={descriptionVision}
          content={data.descriptionList}
          className={s.text_center}
        />
      </div>
      <div
        className={s.content}
        onPointerLeave={hiddenDescription}
        onPointerEnter={visibleDescription}
      >
        <h3 className={s.name}>{data.name}</h3>
        <div className={s.counter_block}>
          <p className={s.people}>{data.nameFood}</p>
          <div className={s.counter}>
            <Counter
              count={hasInBasket ? cartFromBasket.count : value}
              setCount={setCount}
              minValue={+data.minPosition}
            />
          </div>
        </div>
        <p className={s.nextPeople}>
          Доп порция{" "}
          <span className={s.amount_nextPerson}>+{data.minPrice} &#8381;</span>
        </p>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>
              {/*+data.dopPositionPrice * cartFromBasket.count*/}
              {converterNumber(
                hasInBasket
                  ? (cartFromBasket.count - data.minPosition) * data.minPrice +
                      +data.price
                  : (value - +data.minPosition) * data.minPrice + +data.price
              )}
            </span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {hasInBasket ? (
            <DeleteButton
              className={s.delete_button}
              onClick={handleDeleteFromCart}
            />
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
