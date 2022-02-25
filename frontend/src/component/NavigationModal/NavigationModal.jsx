import React, { useEffect, useRef } from "react";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import s from "./NavigationModal.module.scss";
import cs from "classnames";
import Navigation from "../Navigation/Navigation";
import NavCallButton from "../uikit/NavCallButton/NavCallButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { motion } from "framer-motion";

export default function NavigationModal({ isOpened, onClose, overlayClass }) {
  const ref = useRef(null);
  const animateVariants = {
    hidden: {
      top: "-100%",
      opacity: 0,
    },
    visible: {
      top: 0,
      opacity: 1,
    },

    hidden2: {
      top: "-100%",
      opacity: 0,
    },
  };
  useOnClickOutside(ref, () => {
    onClose();
  });
  useEffect(() => {
    isOpened
      ? (document.querySelector("#__next").style.overflow = "hidden")
      : (document.querySelector("#__next").style.overflow = "auto");
  });
  return (
    <>
      <Portal>
        <OverlayingPopup
          overlayClass={overlayClass}
          isOpened={isOpened}
          onClose={onClose}
        >
          <motion.div
            ref={ref}
            className={s.container}
            variants={animateVariants}
            initial="hidden"
            animate="visible"
            exit="hidden2"
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className={s.content}>
              <Navigation className={s.nav} classNameBtn={s.nav_btn} />
              <NavCallButton className={s.call_btn} />
            </div>
          </motion.div>
        </OverlayingPopup>
      </Portal>
    </>
  );
}
