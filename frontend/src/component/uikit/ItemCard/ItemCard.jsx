import React, { useState } from "react";
import cs from "classnames";
import s from "./ItemCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import AddBasketButton from "../AddBasketButton/AddBasketButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CounterLight from "../CounterLight/CounterLight";
import { PATH_IMAGES } from "../../../utils/const";
import converterNumber from "../../../utils/converterNumber";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selectors/cartSelector";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicModalPhoto = dynamic(() => import("../../ModalPhoto/ModalPhoto"), {
  ssr: false,
});

export default function ItemCard({ data, className }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };

  const dispatch = useDispatch();
  const cartData = useSelector(cartSelector());
  const cardFromBasket = cartData.find(
    (item) =>
      item.id === data.id &&
      item.category.categoryName === data.category.categoryName
  );
  const hasInCart = cardFromBasket !== undefined;
  const [price, setPrice] = useState(
    hasInCart ? data.price * cardFromBasket.count : data.price
  );
  const handleAddInCart = (e) => {
    e.preventDefault();
    setCount(1);
    dispatch(
      toggleToCart({
        ...data,
        count: 1,
      })
    );
  };

  const setCount = (value) => {
    if (value !== 0) {
      dispatch(
        changeInCart({
          ...cardFromBasket,
          count: value,
        })
      );
    } else if (value === 0) {
      dispatch(
        toggleToCart({
          ...cardFromBasket,
        })
      );
    }
  };

  return (
    <div className={cs(s.block, className)}>
      <div className={s.favorite}>
        <FavoriteButton data={data} />
      </div>
      <LazyImageWrapper
        wrapperClass={s.wrapper}
        className={[s.image]}
        src={`${PATH_IMAGES}${data.slidersPc}`}
        srcMobile={`${PATH_IMAGES}${data.slidersMob}`}
        alt={data.name}
        onClick={handleIsOpened}
      />
      <div className={s.info}>
        <h3 className={s.name}>{data.name}</h3>
        {data.params && <p className={s.params}>{data.params}</p>}
      </div>
      <div className={s.pay}>
        <p className={s.price}>
          <span className={s.amount}>
            {converterNumber(
              hasInCart ? cardFromBasket.price * cardFromBasket.count : price
            )}
          </span>
          <span className={s.currency}> &#8381;</span>/шт
        </p>
        {hasInCart ? (
          <CounterLight
            count={hasInCart ? cardFromBasket.count : 1}
            setCount={setCount}
          />
        ) : (
          <AddBasketButton handleAddInCart={handleAddInCart} />
        )}
      </div>
      <AnimatePresence>
        {isOpened && (
          <DynamicModalPhoto
            onClose={handleIsOpened}
            images={data.slidersModal}
            isOpened={isOpened}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
