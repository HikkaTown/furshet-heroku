import React, { useState } from "react";
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

export default function GastroStationCard({ data }) {
  const size = useWindowSize();

  const [isEdit, setEdit] = useState(false);
  const [added, setAdded] = useState(false);
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

  const handleAddInCart = (e) => {
    e.preventDefault();
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

  return (
    <div className={s.card}>
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
        <FavoriteButton added={added} onClick={handleAddedFavorites} />
      </div>
      <div className={s.slider_block}>
        <SliderForCard sliderMob={data.slidersMob} sliderPc={data.slidersPc} />
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
        <h3 className={s.name}>{"data.name"}</h3>
        <div className={s.counter_block}>
          <p className={s.people}>{data.nameFood}</p>
          <div className={s.counter}>
            <Counter minValue={+data.minPosition} />
          </div>
        </div>
        <p className={s.nextPeople}>
          Доп порция{" "}
          <span className={s.amount_nextPerson}>
            {data.dopPositionPrice} &#8381;
          </span>
        </p>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>{converterNumber(data.price)}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {isEdit ? (
            <DeleteButton onClick={handleDeletFromCart} />
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
