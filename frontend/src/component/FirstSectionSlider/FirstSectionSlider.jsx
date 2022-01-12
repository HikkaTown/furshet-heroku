import React, { useState } from "react";
import cs from "classnames";
import s from "./FirstSectionSlider.module.scss";
import { useKeenSlider } from "keen-slider/react";

import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import GiftItem from "../uikit/GitfItem/GiftItem";

export default function FirstSectionSlider({ startPos }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: startPos,
    loop: true,
    slides: {
      spacing: 15,
    },
    defaultAnimation: {
      duration: 1200,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={cs("navigation-wrapper", s.slider_wrapper)}>
      <div ref={sliderRef} className={cs("keen-slider", s.slider_block)}>
        <div className={cs("keen-slider__slide", s.slide)}>
          <GiftItem
            head={"Бармен в подарок!"}
            title={"При заказе фуршета от 80 000 ₽"}
            image={"uikit/gift/desktop/img.jpg"}
          />
        </div>
        <div className={cs("keen-slider__slide", s.slide)}>
          <GiftItem
            head={"Раклет бар в подарок!"}
            title={"При заказе фуршета от 100 000 ₽"}
            image={"uikit/gift/desktop/img_1.jpg"}
          />
        </div>
        <div className={cs("keen-slider__slide", s.slide)}>
          <GiftItem
            head={"Санитайзер в подарок!"}
            title={"При заказе кулинарного мастер-класса на выезде"}
            image={"uikit/gift/desktop/img_3.jpg"}
          />
        </div>
        <div className={cs("keen-slider__slide", s.slide)}>
          <GiftItem
            head={"5 напитков в подарок!"}
            title={"При заказе фуршета от 80 000 ₽"}
            image={"uikit/gift/desktop/img_2.jpg"}
          />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className={s.arrows}>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </div>
      )}
    </div>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? cs(s.arrow_disabled) : "";
  return (
    <>
      {props.left && (
        <ArrowSectionButton
          className={s.arrow_left}
          onClick={props.onClick}
          position={true}
        />
      )}
      {!props.left && <ArrowSectionButton onClick={props.onClick} />}
    </>
  );
}
