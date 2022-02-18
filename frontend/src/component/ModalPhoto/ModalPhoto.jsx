import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import cs from "classnames";
import s from "./ModalPhoto.module.scss";

export default function ModalPhoto({ isOpened, onClose }) {
  return (
    <Portal>
      <OverlayingPopup isOpened={isOpened} onClose={onClose} child={s.overlay}>
        <ModalSlider />
      </OverlayingPopup>
    </Portal>
  );
}

function ModalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className={cs("navigation-wrapper", s.wrapper)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider)}>
          <div className={cs("keen-slider__slide", s.slide)}>1</div>
          <div className={cs("keen-slider__slide", s.slide)}>2</div>
          <div className={cs("keen-slider__slide", s.slide)}>3</div>
          <div className={cs("keen-slider__slide", s.slide)}>4</div>
          <div className={cs("keen-slider__slide", s.slide)}>5</div>
          <div className={cs("keen-slider__slide", s.slide)}>6</div>
        </div>
        {/* {loaded && instanceRef.current && (
          <>
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
          </>
        )} */}
      </div>
      {loaded && instanceRef.current && (
        <div className={s.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                // className={"dot" + (currentSlide === idx ? " active" : "")}
                className={cs(s.dot, currentSlide === idx && s.dot_active)}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
