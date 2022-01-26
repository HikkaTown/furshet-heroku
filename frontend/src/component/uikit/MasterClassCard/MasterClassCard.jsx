import React, {useEffect, useState} from "react";
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

export default function MasterClassCard({data, className}) {
  const size = useWindowSize();
  const [isEdit, setEdit] = useState(false);
  const [added, setAdded] = useState(false);
  const [descriptionVision, setDescription] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const startPrice = +data.price;
  const minPosition = +data.minPerson;
  const positionPrice = +data.nextPersonPrice;
  const [count, setCount] = useState(minPosition);
  const [price, setPrice] = useState(null);

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

  const handleAddInCart = (e) => {
    e.preventDefault();
    setPrice(price || startPrice);
    setEdit(isEdit ? false : true);
  };

  const handleDeletFromCart = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const handleAddedFavorites = (e) => {
    e.preventDefault();
    setAdded(added ? false : true);
  };
  useEffect(() => {
    if (isActive) {
      if (count > minPosition) {
        let arg = ((count - minPosition) * positionPrice) + startPrice;
        setPrice(arg * 0.85)
      } else if (count === minPosition) {
        setPrice(startPrice * 0.85);
        setCount(minPosition);
      }
    } else {
      if (count > minPosition) {
        let arg = ((count - minPosition) * positionPrice) + startPrice;
        setPrice(arg)
      } else if (count === minPosition) {
        setPrice(startPrice);
        setCount(minPosition);
      }
    }
  }, [count, isActive]);

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
        <FavoriteButton added={added} onClick={handleAddedFavorites}/>
      </div>
      <div className={s.slider_block}>
        <SliderForCard sliderMob={data.slidersMob} sliderPc={data.slidersPc}/>
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
            <Counter count={count} setCount={setCount} minValue={+data.minPerson}/>
          </div>
        </div>
        <p className={s.nextPeople}>
          Доп человек{" "}
          <span className={s.amount_nextPerson}>
            {data.nextPersonPrice} &#8381;
          </span>
        </p>
        <div className={s.settings}>
          <div className={s.checkbox}>
            <Checkbox isActive={isActive} setIsActive={setIsActive}/>
          </div>
          <p className={s.checkbox_text}>
            В нашей студии <span className={s.select}>-15%</span>
          </p>
        </div>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>{converterNumber(price || startPrice)}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {isEdit ? (
            <DeleteButton onClick={handleDeletFromCart}/>
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
