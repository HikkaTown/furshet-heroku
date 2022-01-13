import React, { useEffect, useState } from "react";
import cs from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import { LazyBackgroundImage } from "../LazyBackgroundImage/LazyBackgroundImage";
import AboutMoreButton from "../uikit/AboutMoreButton/AboutMoreButton";
import { useRouter } from "next/router";

import s from "./BufetsInfoSection.module.scss";
import SeparatorTop from "../uikit/SeparatorTop/SeparatorTop";
import SeparatorBottom from "../uikit/SeparatorBottom/SeparatorBottom";
// TODO: Добавить редирект на кнопку
export default function BufetsInfoSection({ href }) {
  const router = useRouter();
  const size = useWindowSize();
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (router.pathname === "/masterclass") {
      if (size.width >= 1175) {
        setBackground("/images/bufetsInfoSection/simple_desktop.jpg");
      } else if (size.width < 1175 && size.width > 768) {
        setBackground("/images/bufetsInfoSection/simple_tablet.jpg");
      } else if (size.width < 768 && size.width > 0) {
        setBackground("/images/bufetsInfoSection/simple_mobile.jpg");
      }
    } else {
      if (size.width >= 1175) {
        setBackground("/images/bufetsInfoSection/full_desktop.jpg");
      } else if (size.width < 1175 && size.width > 768) {
        setBackground("/images/bufetsInfoSection/full_tablet.jpg");
      } else if (size.width < 768 && size.width > 0) {
        setBackground("/images/bufetsInfoSection/full_mobile.jpg");
      }
    }
  }, [size]);

  return (
    <section className={s.section}>
      {router.pathname === "/masterclass" ? "" : <SeparatorTop />}
      <LazyBackgroundImage
        className={
          router.pathname === "/masterclass"
            ? s.overlay
            : cs(s.overlay, s.overlay_center)
        }
        src={background}
      >
        <div className={s.container}>
          <h2
            className={
              router.pathname === "/masterclass"
                ? s.head
                : cs(s.head, s.head_white)
            }
          >
            Фуршет на ваше мероприятие
          </h2>
          <p
            className={
              router.pathname === "/masterclass"
                ? s.subtitle
                : cs(s.subtitle, s.subtitle_white)
            }
          >
            Готовые решения к вашему столу
          </p>
          <AboutMoreButton
            onClick={() => {
              router.push(href);
            }}
          />
        </div>
      </LazyBackgroundImage>
      {router.pathname === "/masterclass" ? (
        ""
      ) : router.pathname === "/bar" ? (
        <SeparatorBottom />
      ) : (
        <SeparatorBottom className={s.reverse} />
      )}
    </section>
  );
}
