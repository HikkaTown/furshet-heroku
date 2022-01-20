import React, {useState} from "react";
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

export default function FurshetCard({data, className}) {
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

  const handleAddedFavorites = (e) => {
    e.preventDefault();
    setAdded(added ? false : true);
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
        <FavoriteButton added={added} onClick={handleAddedFavorites}/>
      </div>
      <div className={s.slider_block}>
        <SliderForCard sliderMob={data.slidersMob} sliderPc={data.slidersPc}/>
        <DescriptionInCard
          descriptionVision={descriptionVision}
          content={data.descriptionList}
        />
        {data.vegan && (
          <PrimaryButton className={s.vegan_btn} text="Вегетарианский"/>
        )}
      </div>
      <div
        className={s.content}
        onPointerLeave={hiddenDescription}
        onPointerEnter={visibleDescription}
      >
        <h3 className={s.name}>{data.name}</h3>
        <p className={s.params}>
          {data.params.peopleNumber && <span className={s.select}>{data.params.peopleNumber} чел/</span>}
          {data.params.CountNumber} шт/{data.params.countVesInGramm} гр
        </p>
        <div className={s.pay}>
          <p className={s.price}>
            <span className={s.amount}>{converterNumber(data.price)}</span>
            <span className={s.currency}> &#8381;</span>
          </p>
          {isEdit ? (
            <CounterLight/>
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
