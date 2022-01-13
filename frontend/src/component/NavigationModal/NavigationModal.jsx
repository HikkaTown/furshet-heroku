import React, { useRef } from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import s from "./NavigationModal.module.scss";
import cs from "classnames";
import Navigation from "../Navigation/Navigation";
import NavCallButton from "../uikit/NavCallButton/NavCallButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function NavigationModal({ isOpened, onClose }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    onClose();
  });
  return (
    <>
      <Portal>
        <OverlayingPopup isOpened={isOpened} onClose={onClose}>
          <div ref={ref} className={s.container}>
            <div className={s.content}>
              <Navigation className={s.nav} classNameBtn={s.nav_btn} />
              <NavCallButton className={s.call_btn} />
            </div>
          </div>
        </OverlayingPopup>
      </Portal>
    </>
  );
}
