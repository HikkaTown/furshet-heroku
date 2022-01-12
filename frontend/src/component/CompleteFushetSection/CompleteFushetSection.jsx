import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./CompleteFushetSection.module.scss";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import useWindowSize from "../../hooks/useWindowSize";
import SecondaryButton from "../uikit/SecondaryButton/SecondaryButton";

export default function CompleteFushetSection() {
  const size = useWindowSize();
  const [background, setBackground] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    if (size.width >= 1175) {
      setBackground("/uikit/completeFurshetSection/bg_desktop.jpg");
      setItem("/uikit/completeFurshetSection/food_desktop.png");
    } else if (size.width < 1175 && size.width >= 768) {
      setBackground("/uikit/completeFurshetSection/bg_tablet.jpg");
      setItem("/uikit/completeFurshetSection/food_tablet.png");
    } else if (size.width < 768 && size.width > 0) {
      setItem("/uikit/completeFurshetSection/food_mobile.png");
      setBackground("/uikit/completeFurshetSection/bg_mobile.jpg");
    }
  }, [size]);

  return (
    <section className={s.section}>
      <LazyBackgroundImage
        src={background}
        lazy={true}
        className={s.container_section}
      >
        <div className={s.container}>
          <div className={s.content}>
            <h2 className={s.header}>Готовые фуршетные наборы</h2>
            <p className={s.title}>Доставка фуршетных наборов к вашему столу</p>
            <SecondaryButton text="В каталог" className={s.btn} />
          </div>
          <LazyBackgroundImage src={item} className={s.food} lazy={true} />
        </div>
      </LazyBackgroundImage>
    </section>
  );
}
