import React from "react";
import clsx from "classnames";

import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";

import s from "./OverlayingPopup.module.scss";
import SliderCloseButton from "../uikit/SliderCloseButton/SliderCloseButton";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const OverlayingPopup = (props) => {
  const { children, isOpened, onClose, isButtonClose, isBottom, isLeft } =
    props;

  useLockBodyScroll();

  return (
    <Portal>
      <div className={clsx(s.container, isOpened && s.opened)} role="dialog">
        <Overlay onClose={onClose} isLeft={isLeft} />
        <div
          className={clsx(
            s.childrenWrapper,
            isBottom && s.childrenWrapperBottom,
            isLeft && s.childrenWrapperLeft
          )}
        >
          {children}
          {isButtonClose && <SliderCloseButton />}
        </div>
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
