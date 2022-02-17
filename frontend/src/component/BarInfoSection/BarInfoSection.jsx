import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./BarInfoSection.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import AboutMoreButton from "../uikit/AboutMoreButton/AboutMoreButton";
// import SeparatorBottom from "../uikit/SeparatorBottom/SeparatorBottom";
import { useRouter } from "next/router";
import SeparatorTop from "../uikit/SeparatorTop/SeparatorTop";
import SeparatorBottom from "../uikit/SeparatorBottom/SeparatorBottom";
export default function BarInfoSection() {
  const size = useWindowSize();
  const [background, setBackground] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (size.width >= 1175) {
      setBackground("/images/barInfoSection/bg_desktop.jpg");
    } else if (size.width < 1175 && size.width > 768) {
      setBackground("/images/barInfoSection/bg_tablet.jpg");
    } else if (size.width < 768 && size.width > 0) {
      setBackground("/images/barInfoSection/bg_mobile.jpg");
    }
  }, [size]);

  return (
    <section className={s.section}>
      {router.asPath === "/masterclass" && <SeparatorTop />}
      <LazyBackgroundImage className={s.overlay} src={background}>
        <div className={s.container}>
          <h2 className={s.head}>Бар на ваш праздник</h2>
          <p className={s.subtitle}>
            Коктейли и напитки, барный кейтеринг от профессионалов барного дела
          </p>
          <AboutMoreButton
            onClick={() => {
              router.push("/bar");
            }}
          />
        </div>
      </LazyBackgroundImage>
      {router.asPath === "/" && <SeparatorBottom />}
    </section>
  );
}
