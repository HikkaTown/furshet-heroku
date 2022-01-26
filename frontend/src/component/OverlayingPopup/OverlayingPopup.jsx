import React, {useEffect} from "react";
import cs from "classnames";

import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";

import s from "./OverlayingPopup.module.scss";
import SliderCloseButton from "../uikit/SliderCloseButton/SliderCloseButton";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const OverlayingPopup = (props) => {
  const {children, isOpened, onClose, isButtonClose, isBottom, isLeft, overlayClass} =
    props;
  useEffect(() => {
    isOpened ? document.getElementById('__next').style.overflow = 'hidden' : document.getElementById('__next').style.overflow = 'auto'
  }, [])
  useLockBodyScroll();
  return (
    <Portal>
      <div className={cs(overlayClass, s.container, isOpened && s.opened)} role="dialog">
        <Overlay onClose={onClose} isLeft={isLeft}/>
        <div
          className={cs(
            s.childrenWrapper,
            isBottom && s.childrenWrapperBottom,
            isLeft && s.childrenWrapperLeft
          )}
        >
          {children}
          {isButtonClose && <SliderCloseButton/>}
        </div>
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
