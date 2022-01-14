import React from "react";
import NavigationButton from "../uikit/NavigationButton/NavigationButton";
import s from "./Navigation.module.scss";
import cs from "classnames";
import { useRouter } from "next/router";

export default function Navigation({
  className,
  classNameBtn,
  classNameActive,
}) {
  const router = useRouter();
  return (
    <nav className={className}>
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
    </nav>
  );
}
