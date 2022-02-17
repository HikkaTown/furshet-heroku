import React, { useEffect, useState } from "react";
import s from "./ThreePriceCard.module.scss";
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
import CatalogTabButton from "../CatalogTabButton/CatalogTabButton";
import {
  addFavoriteItemToStore,
  deleteFavoriteFromStore,
} from "../../../redux/actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selectors/cartSelector";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";

export default function ThreePriceCard({ data, className, categoryName }) {
  const size = useWindowSize();
  const cartData = useSelector(cartSelector());
  const dispatch = useDispatch();
  const cartFromBasket = cartData.find(
    (item) => item.id === data.id && item.categoryName === categoryName
  );
  const hasInCart = cartFromBasket !== undefined;

  const [descriptionVision, setDescription] = useState(false);
  const [active, setActive] = useState(
    hasInCart ? cartFromBasket.count : data.threeValue[0].count
  );
  const [price, setPrice] = useState(
    hasInCart ? cartFromBasket.price : data.threeValue[0].amount
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

  const handleChangeAmount = (itemCount, itemAmount) => {
    if (hasInCart) {
      dispatch(
        changeInCart({
          ...cartFromBasket,
          count: itemCount,
          price: itemAmount,
        })
      );
      setPrice(itemAmount);
      setActive(itemCount);
    } else {
      setPrice(itemAmount);
      setActive(itemCount);
    }
  };

  const handleAddInCart = (e) => {
    dispatch(
      toggleToCart({
        ...data,
        count: active,
        price: price,
        categoryName: categoryName,
      })
    );
  };

  const handleDeleteFromCart = (e) => {
    dispatch(
      toggleToCart({
        ...cartFromBasket,
      })
    );
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
          <p className={s.people}>Порции</p>
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
                    className={cs(
                      s.count_btn,
                      item.count === active && s.active
                    )}
                  />
                );
              })}
          </div>
        </div>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>{converterNumber(price)}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {hasInCart ? (
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
