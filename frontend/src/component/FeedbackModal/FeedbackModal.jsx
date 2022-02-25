import React, { useEffect } from "react";
import Link from "next/link";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import SliderCloseButton from "../uikit/SliderCloseButton/SliderCloseButton";
import InputPhoneNumber from "../uikit/InputPhoneNumber/InputPhoneNumber";
import DropdownCallback from "../uikit/DropdownCallback/DropdownCallback";
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import s from "./FeedbackModal.module.scss";
import { motion } from "framer-motion";

// TODO: Сделать отрпавку формы
export default function FeedbackModal({ onClose, isOpened }) {
  const animateVariants = {
    hidden: {
      translateX: "100%",
      opacity: 0,
    },
    visible: {
      translateX: 0,
      opacity: 1,
    },

    hidden2: {
      translateX: "100%",
      opacity: 0,
    },
  };
  return (
    <>
      <Portal>
        <OverlayingPopup
          isOpened={isOpened}
          onClose={onClose}
          isLeft={true}
          overlayClass={s.overlay_class}
        >
          <motion.div
            className={s.container}
            variants={animateVariants}
            initial="hidden"
            animate="visible"
            exit="hidden2"
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className={s.block}>
              <SliderCloseButton className={s.closeBtn} onClick={onClose} />
              <form className={s.content}>
                <h2 className={s.head}>Обратная связь</h2>
                <div className={s.fields}>
                  <InputPhoneNumber className={s.input} />
                  <DropdownCallback className={s.dropdown} />
                </div>
                <p className={s.description}>
                  Нажимая на кнопку «Оформить заказ», вы даете согласие{" "}
                  <Link prefetch={false} href="/">
                    <a className={s.text_link}>
                      на обработку своих персональных данных
                    </a>
                  </Link>
                </p>
                <PrimaryButton
                  // onClick={}
                  text={"Свяжитесь со мной"}
                  className={s.btn}
                />
              </form>
            </div>
          </motion.div>
        </OverlayingPopup>
      </Portal>
    </>
  );
}
