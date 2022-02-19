import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./SliderForCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";
import useWindowSize from "../../../hooks/useWindowSize";
import { PATH_IMAGES } from "../../../utils/const";
import ModalPhoto from "../../ModalPhoto/ModalPhoto";

export default function SliderForCard({ sliderMob, sliderPc, sliderModal }) {
  const size = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    defaultAnimation: {
      duration: 1200,
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div
        className={cs("navigation-wrapper", s.slider_wrapper)}
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          {sliderMob.map((item, index) => {
            return (
              <div key={index} className={cs("keen-slider__slide", s.slide)}>
                <LazyImageWrapper
                  src={`${PATH_IMAGES}${sliderPc[index]}`}
                  srcMob={`${PATH_IMAGES}${item}`}
                  wrapperClass={s.image_wrapper}
                  className={[s.image]}
                  alt={"name"}
                />
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && instanceRef.current.slides.length && (
          <div className={s.dots}>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={s.dot_wrapper}
                >
                  <button
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={cs(s.dot, currentSlide === idx ? s.active : "")}
                  ></button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {isOpened && (
        <ModalPhoto
          isOpened={isOpened}
          onClose={() => {
            setIsOpened((prev) => !prev);
          }}
          index={currentSlide}
          images={sliderModal}
        />
      )}
    </>
  );
}
