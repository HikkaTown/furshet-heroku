import React, { useEffect, useState } from "react";
import cs from "classnames";
import s from "./MasterClassInfo.module.scss";
import SeparatorBottom from "../uikit/SeparatorBottom/SeparatorBottom";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import AboutMoreButton from "../uikit/AboutMoreButton/AboutMoreButton";
import useWindowSize from "../../hooks/useWindowSize";
import { useRouter } from "next/router";
export default function MasterClassInfo() {
  const size = useWindowSize();
  const [background, setBackground] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (size.width >= 1175) {
      setBackground("/images/masterClassInfo/bg_desktop.png");
    } else if (size.width < 1175 && size.width > 768) {
      setBackground("/images/masterClassInfo/bg_tablet.png");
    } else if (size.width < 768 && size.width > 0) {
      setBackground("/images/masterClassInfo/bg_mobile.png");
    }
  }, [size]);

  return (
    <section className={s.section}>
      <LazyBackgroundImage className={s.overlay} src={background}>
        <div className={s.container}>
          <h2 className={s.head}>Кулинарные мастер-классы у вас в офисе</h2>
          <p className={s.subtitle}>
            Готовим кесадилью, бургеры, хот-доги, глинтвейн своими руками!
          </p>

          <AboutMoreButton
            onClick={() => {
              router.push("/masterclass");
            }}
          />
        </div>
      </LazyBackgroundImage>
      {router.pathname !== "/bar" && <SeparatorBottom />}
    </section>
  );
}
