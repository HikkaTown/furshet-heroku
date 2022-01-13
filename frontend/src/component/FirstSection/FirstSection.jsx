import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./FirstSection.module.scss";
import PrimaryButton from "../uikit/PrimaryButton/PrimaryButton";
import FirstSectionSlider from "../FirstSectionSlider/FirstSectionSlider";
import useWindowSize from "../../hooks/useWindowSize";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import testWebp from "../../utils/testWebp";
export default function FirstSection({ data, startPos, bg }) {
  const size = useWindowSize();
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (size.width >= 1175) {
      testWebp()
        ? setBackground(bg.desktop.webp)
        : setBackground(bg.desktop.jpg);
    } else if (size.width < 1175 && size.width >= 768) {
      testWebp() ? setBackground(bg.tablet.webp) : setBackground(bg.tablet.jpg);
    } else if (size.width < 768 && size.width > 0) {
      testWebp() ? setBackground(bg.mobile.webp) : setBackground(bg.mobile.jpg);
    }
  }, [size]);

  return (
    <section className={s.section}>
      <LazyBackgroundImage
        lazy={false}
        className={s.section_bg}
        src={background}
      >
        <div className={s.container}>
          <h1 className={s.header}>Заказать фуршет</h1>
          <p className={s.subtitle}>
            Готовые фуршетные наборы, кулинарные станции для офиса, развлечения
            и шоу
          </p>
          <PrimaryButton text={"В каталог"} className={s.btn} />
        </div>
        <div className={s.slider}>
          <FirstSectionSlider startPos={startPos} />
        </div>
      </LazyBackgroundImage>
    </section>
  );
}
