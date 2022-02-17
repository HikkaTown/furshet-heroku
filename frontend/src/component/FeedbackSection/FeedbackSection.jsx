import React, { useEffect, useState } from "react";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import s from "./FeedbackSection.module.scss";
import { PHONE_NUMBER_LINK, PHONE_NUMBER_TEXT } from "../../utils/const";
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import useWindowSize from "../../hooks/useWindowSize";
import SeparatorTop from "../uikit/SeparatorTop/SeparatorTop";
import SeparatorBottom from "../uikit/SeparatorBottom/SeparatorBottom";
import dynamic from "next/dynamic";

const DynamicModalFeedback = dynamic(
  () => import("../FeedbackModal/FeedbackModal"),
  {
    ssr: false,
  }
);

// TODO: Сделать полную заливку фона на мобилке и планшете
export default function FeedbackSection() {
  const size = useWindowSize();
  const [background, setBackground] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (size.width >= 1175) {
      setBackground("images/feedback/contact_desk.png");
    } else if (size.width < 1175 && size.width > 768) {
      setBackground("images/feedback/contact_tab.png");
    } else if (size.width < 768 && size.width > 0) {
      setBackground("images/feedback/contact_mob.jpg");
    }
  }, [size]);

  return (
    <section className={s.section}>
      <LazyBackgroundImage src={background} className={s.section} lazy={true}>
        <SeparatorTop className={s.separator_top} />
        <div className={s.container}>
          <h2 className={s.head}>Заказать фуршет</h2>
          <p className={s.adress}>В Москве и Московской области</p>
          <p className={s.callme}>Звоните нам по телефону</p>
          <a className={s.phone_number} href={`tel:${PHONE_NUMBER_LINK}`}>
            {PHONE_NUMBER_TEXT}
          </a>
          <p className={s.subtitle}>
            Или укажите удобную форму общения для вас, и мы свяжемся
          </p>
          <PrimaryButton
            onClick={handleOpen}
            text={"Свяжитесь со мной"}
            className={s.btn}
          />
        </div>
        <SeparatorBottom className={s.separator_bottom} />
      </LazyBackgroundImage>
      {isOpen && (
        <DynamicModalFeedback
          isButtonClose={true}
          isOpened={isOpen}
          onClose={handleClose}
        />
      )}
    </section>
  );
}
