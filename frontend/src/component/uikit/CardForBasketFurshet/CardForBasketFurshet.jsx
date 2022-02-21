import React from "react";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import CounterLight from "../CounterLight/CounterLight";
import s from "./CardForBasketFurshet.module.scss";
import converterNumber from "../../../utils/converterNumber";
import { PATH_IMAGES } from "../../../utils/const";
import { useDispatch } from "react-redux";
import { changeInCart, toggleToCart } from "../../../redux/actions/cartActions";
export default function CardForBasketFurshet({ data }) {
  const dispatch = useDispatch();
  const setCount = (value) => {
    if (value !== 0) {
      dispatch(
        changeInCart({
          ...data,
          count: value,
        })
      );
    } else if (value === 0) {
      dispatch(
        toggleToCart({
          ...data,
        })
      );
    }
  };

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
        src={`${PATH_IMAGES}${
          typeof data.slidersMob === "object"
            ? data.slidersMob[0]
            : data.slidersMob
        }`}
        alt={"dsd"}
      />
      <div className={s.content_block}>
        <p className={s.name_product}>{data.name}</p>
        {data?.params && (
          <p className={s.params}>
            {typeof data?.params === "object" ? (
              <>
                {data.params?.peopleNumber && (
                  <span className={s.select}>
                    {data.params.peopleNumber} чел/
                  </span>
                )}
                {data.params?.countNumber} шт/{data.params?.countVesInGramm} гр
              </>
            ) : (
              data?.params
            )}
          </p>
        )}
      </div>
      <div className={s.price_block}>
        <div className={s.counter}>
          <CounterLight count={data.count} setCount={setCount} />
        </div>
        <p className={s.price}>
          <span className={s.amount}>
            {converterNumber(data.price * data.count)}
          </span>
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
