import React from "react";
import NavigationButton from "../uikit/NavigationButton/NavigationButton";
import s from "./Navigation.module.scss";
import cs from "classnames";
import { useRouter } from "next/router";

export default function Navigation({ className, classNameBtn }) {
  const router = useRouter();
  return (
    <nav className={className}>
      <NavigationButton text={"Фуршет"} href={"/"} className={classNameBtn} />
      <NavigationButton
        text={"Гастро-станции"}
        href={"/stations"}
        className={classNameBtn}
      />
      <NavigationButton
        text={"Мастер-классы"}
        href={"/masterclass"}
        className={classNameBtn}
      />
      <NavigationButton
        text={`Выездные бары`}
        href={"/bar"}
        className={classNameBtn}
      />
      {router.pathname !== "/404" && (
        <NavigationButton
          className={cs(s.contact, classNameBtn)}
          text={"Контакты"}
        />
      )}
    </nav>
  );
}
