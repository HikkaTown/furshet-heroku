import React, { useState } from "react";
import cs from "classnames";
import s from "./StationSlider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { LazyImageWrapper } from "../LazyImage/LazyImage";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";
import ArrowSectionButton from "../uikit/ArrowSectionButton/ArrowSectionButton";
import AboutMoreButton from "../uikit/AboutMoreButton/AboutMoreButton";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import CatalogTabButton from "../uikit/CatalogTabButton/CatalogTabButton";
import NavigationButton from "../uikit/NavigationButton/NavigationButton";

const DynamicModalFeedback = dynamic(
  () => import("../FeedbackModal/FeedbackModal"),
  {
    ssr: false,
  }
);

export default function StationSlider({ dataImages, dataText, secondBtn }) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isOpened, setOpen] = useState(false);
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

  const handlerFeedbackModal = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={cs("navigation-wrapper", s.slider_wrapper)}>
        <div ref={sliderRef} className={cs("keen-slider", s.slider_block)}>
          <div className={s.content}>
            <h2 className={s.head}>{dataText && dataText.header}</h2>
            <p className={s.description}>{dataText && dataText.title}</p>
            {secondBtn ? (
              <SecondaryButton
                onClick={() => {
                  setOpen(true);
                  dataText.callback();
                }}
                text={"Свяжитесь со мной"}
              />
            ) : (
              <NavigationButton
                text="Свяжитесь со мной"
                className={s.callback_btn}
                onClick={handlerFeedbackModal}
              />
            )}
          </div>
          {dataImages &&
            dataImages.map((item, index) => {
              return (
                <div key={index} className={cs("keen-slider__slide", s.slide)}>
                  <LazyImageWrapper
                    src={item.src}
                    srcTablet={item.srcTablet}
                    srcMobile={item.srcMobile}
                    className={[s.slide_image]}
                    wrapperClass={s.wrapper_image}
                    lazy={true}
                  />
                </div>
              );
            })}
        </div>
        {dataImages && loaded && instanceRef.current && (
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
      {isOpened && (
        <DynamicModalFeedback
          isOpened={isOpened}
          onClose={handlerFeedbackModal}
        />
      )}
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
