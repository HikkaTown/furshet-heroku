import React from "react";
import NavigationButton from "../uikit/NavigationButton/NavigationButton";
import s from "./Navigation.module.scss";
import cs from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Navigation({
  className,
  classNameBtn,
  classNameActive,
  searchState,
}) {
  const router = useRouter();
  const variantAnimate = {
    initial: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      // transition: {
      //   delay: 0.5,
      // },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <motion.nav
      className={className}
      variants={variantAnimate}
      initial={searchState === null ? "visible" : "initial"}
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: "tween" }}
    >
      <NavigationButton
        text={"Фуршет"}
        href={"/"}
        classNameActive={classNameActive}
        className={classNameBtn}
      />
      <NavigationButton
        text={"Гастро-станции"}
        href={"/stations"}
        classNameActive={classNameActive}
        className={classNameBtn}
      />
      <NavigationButton
        text={"Мастер-классы"}
        href={"/masterclass"}
        classNameActive={classNameActive}
        className={classNameBtn}
      />
      <NavigationButton
        text={`Выездные бары`}
        href={"/bar"}
        classNameActive={classNameActive}
        className={classNameBtn}
      />
      {router.pathname !== "/404" ||
        (router.pathname !== "/favorites" && (
          <NavigationButton
            className={cs(s.contact, classNameBtn)}
            text={"Контакты"}
          />
        ))}
    </motion.nav>
  );
}
