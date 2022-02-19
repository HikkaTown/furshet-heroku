import React, { useEffect, useState } from "react";
import s from "./MasterClassCard.module.scss";
import cs from "classnames";
import SliderForCard from "../SliderForCard/SliderForCard";
import SliderCloseButton from "../SliderCloseButton/SliderCloseButton";
import OpacityButton from "../OpacityButton/OpacityButton";
import Counter from "../Counter/Counter";
import Checkbox from "../Checkbox/Checkbox";
import useWindowSize from "../../../hooks/useWindowSize";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import converterNumber from "../../../utils/converterNumber";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import DescriptionInCard from "../DescriptionInCard/DescriptionInCard";
import DeleteButton from "../DeleteButton/DeleteButton";
import {
  addFavoriteItemToStore,
  changeFavoriteEat,
  deleteFavoriteFromStore,
  toggleFavoriteEat,
} from "../../../redux/actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selectors/cartSelector";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";
import { favoriteSelectorEat } from "../../../redux/selectors/favoriteSelector";

export default function MasterClassCard({ data, className, categoryName }) {
  const dispatch = useDispatch();
  const cartData = useSelector(cartSelector());
  const cartPormotion = useSelector(favoriteSelectorEat());
  const size = useWindowSize();
  const cartFromBasket = cartData.find((item) => item.id === data.id);
  const cartFavorite = cartPormotion.find((item) => item.id === data.id);
  const hasInPromotion = cartFavorite !== undefined;
  const hasInCart = cartFromBasket !== undefined;
  const [descriptionVision, setDescription] = useState(false);
  const [isActive, setIsActive] = useState(
    !!cartFavorite?.promotion || !!cartFromBasket?.promotion
  );
  const [value, setValue] = useState(
    hasInCart ? cartFromBasket.count : +data.minPosition
  );
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
        count: value,
        promotion: isActive,
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
    if (hasInCart) {
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

  const handlePromotion = () => {
    dispatch(
      changeInCart({
        ...cartFromBasket,
        promotion: !isActive,
      })
    );
    dispatch(
      changeFavoriteEat({
        ...data,
        promotion: !isActive,
      })
    );
    setIsActive(!isActive);
  };

  return (
    <div className={cs(s.card, className, isActive && s.card_active)}>
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
        <FavoriteButton data={data} promotion={isActive} />
      </div>
      <div className={s.slider_block}>
        <SliderForCard
          sliderMob={data.slidersMob}
          sliderPc={data.slidersPc}
          sliderModal={data.sliderModal}
        />
        <DescriptionInCard
          descriptionVision={descriptionVision}
          content={data.descriptionList}
        />
      </div>
      <div
        className={s.content}
        onPointerLeave={hiddenDescription}
        onPointerEnter={visibleDescription}
      >
        <h3 className={s.name}>{data.name}</h3>
        <div className={s.counter_block}>
          <p className={s.people}>Люди</p>
          <div className={s.counter}>
            <Counter
              count={hasInCart ? cartFromBasket.count : value}
              setCount={setCount}
              minValue={+data.minPosition}
            />
          </div>
        </div>
        <p className={s.nextPeople}>
          Доп человек{" "}
          <span className={s.amount_nextPerson}>+{data.minPrice} &#8381;</span>
        </p>
        <div className={s.settings}>
          <div className={s.checkbox}>
            <Checkbox isActive={isActive} setIsActive={handlePromotion} />
          </div>
          <p className={s.checkbox_text}>
            В нашей студии <span className={s.select}>-15%</span>
          </p>
        </div>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>
              {converterNumber(
                hasInCart
                  ? isActive
                    ? ((cartFromBasket.count - +data.minPosition) *
                        +data.minPrice +
                        +data.price) *
                      0.85
                    : (cartFromBasket.count - +data.minPosition) *
                        +data.minPrice +
                      +data.price
                  : isActive
                  ? ((value - +data.minPosition) * +data.minPrice +
                      +data.price) *
                    0.85
                  : (value - +data.minPosition) * +data.minPrice + +data.price
              )}
            </span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {hasInCart ? (
            <DeleteButton onClick={handleDeleteFromCart} />
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
