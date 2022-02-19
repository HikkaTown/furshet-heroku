import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import cs from "classnames";
import s from "./ModalPhoto.module.scss";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import { PATH_IMAGES } from "../../utils/const";

export default function ModalPhoto({ isOpened, onClose, images, index }) {
  return (
    <Portal>
      <OverlayingPopup
        isOpened={isOpened}
        onClose={onClose}
        child={s.overlay}
        isButtonClose={true}
        classBtnClose={s.close_btn}
      >
        <ModalSlider images={images} index={index} />
      </OverlayingPopup>
    </Portal>
  );
}

function ModalSlider({ images, index }) {
  const [currentSlide, setCurrentSlide] = useState(index);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: index,
    loop: true,
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
          {images.map((item, index) => {
            return (
              <div key={index} className={cs("keen-slider__slide", s.slide)}>
                <LazyImageWrapper
                  src={`${PATH_IMAGES}${item}`}
                  alt={"text"}
                  className={[s.image]}
                  wrapperClass={s.image_wrapper}
                />
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
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
        )}
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
                  className={cs(s.dot, currentSlide === idx && s.dot_active)}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

function Arrow(props) {
  const { disabeld, left, onClick } = props;

  return (
    <ArrowSectionButton
      onClick={onClick}
      className={cs(
        s.arrow,
        left ? s.arrow_left : s.arrow_right,
        disabeld && s.arrow_disabled
      )}
    />
  );
}
