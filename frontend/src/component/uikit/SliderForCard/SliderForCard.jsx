import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import cs from "classnames";
import s from "./SliderForCard.module.scss";
import { LazyImageWrapper } from "../../LazyImage/LazyImage";

export default function SliderForCard({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
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
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          <div className={cs("keen-slider__slide", s.slide)}>
            <LazyImageWrapper
              src={"/images/banner-min.jpg"}
              srcMob={"/images/banner-min.jpg"}
              wrapperClass={s.image_wrapper}
              className={[s.image]}
              alt={"name"}
            />
          </div>
          <div className={cs("keen-slider__slide", s.slide)}>2</div>
          <div className={cs("keen-slider__slide", s.slide)}>3</div>
          <div className={cs("keen-slider__slide", s.slide)}>4</div>
          <div className={cs("keen-slider__slide", s.slide)}>5</div>
          <div className={cs("keen-slider__slide", s.slide)}>6</div>
        </div>
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
}
