import React, { useEffect } from "react";
import Link from "next/link";
import OverlayingPopup from "../OverlayingPopup/OverlayingPopup";
import Portal from "../Portal/Portal";
import SliderCloseButton from "../uikit/SliderCloseButton/SliderCloseButton";
import InputPhoneNumber from "../uikit/InputPhoneNumber/InputPhoneNumber";
import DropdownCallback from "../uikit/DropdownCallback/DropdownCallback";
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import s from "./FeedbackModal.module.scss";

// TODO: Сделать отрпавку формы
export default function FeedbackModal({ onClose, isOpened }) {
  return (
    <>
      <Portal>
        <OverlayingPopup isOpened={isOpened} onClose={onClose} isLeft={true}>
          <div className={s.container}>
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
          </div>
        </OverlayingPopup>
      </Portal>
    </>
  );
}
