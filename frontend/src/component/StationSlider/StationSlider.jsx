import React, { useState } from "react";
import cs from "classnames";
import s from "./StationSlider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import AboutMoreButton from "../uikit/AboutMoreButton/AboutMoreButton";

const dataImages = [
  {
    src: "furshet_slider/desktop/1.jpg",
    srcTablet: "furshet_slider/tablet/1.jpg",
    srcMobile: "furshet_slider/mobile/1.jpg",
  },
  {
    src: "furshet_slider/desktop/2.jpg",
    srcTablet: "furshet_slider/tablet/2.jpg",
    srcMobile: "furshet_slider/mobile/2.jpg",
  },
  {
    src: "furshet_slider/desktop/3.jpg",
    srcTablet: "furshet_slider/tablet/3.jpg",
    srcMobile: "furshet_slider/mobile/3.jpg",
  },
  {
    src: "furshet_slider/desktop/4.jpg",
    srcTablet: "furshet_slider/tablet/4.jpg",
    srcMobile: "furshet_slider/mobile/4.jpg",
  },
];

const dataText = {
  header: "Фуршет с обслуживанием",
  title:
    "Создаем фуршетную линию, полностью организуем ваше мероприятие с накрытием на стол, декором и официантами",
};

// TODO: Добавить динамическую загрузку в этот слайдер и сделать проверку на редирект
export default function StationSlider({ dataText, secondBtn }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
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
    <>
      <div className={cs("navigation-wrapper", s.slider_wrapper)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider_block)}>
          <div className={s.content}>
            <h2 className={s.head}>Фуршет с обслуживанием</h2>
            <p className={s.description}>
              Создаем фуршетную линию, полностью организуем ваше мероприятие с
              накрытием на стол, декором и официантами
            </p>
            {secondBtn ? (
              <SecondaryButton text={"Свяжитесь со мной"} />
            ) : (
              <AboutMoreButton />
            )}
          </div>
          {dataImages.map((item, index) => {
            return (
              <div key={index} className={cs("keen-slider__slide", s.slide)}>
                <LazyImageWrapper
                  src={item.src}
                  srcTablet={item.srcTablet}
                  srcMobile={item.srcMobile}
                  className={[s.slide_image]}
                  wrapperClass={s.wrapper_image}
                />
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className={s.arrows}>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
    </>
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
