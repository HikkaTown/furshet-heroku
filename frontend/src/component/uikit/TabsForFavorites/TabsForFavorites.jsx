import React from "react";
import s from "./TabsForFavorites.module.scss";
import NavigationButton from "../NavigationButton/NavigationButton";
import cs from "classnames";

function TabsForFavorites({
  onClick,
  buffetsLength,
  gastroLength,
  masterclassLength,
  barLength,
  category,
  dopsLenght,
}) {
  return (
    <div className={s.container}>
      {buffetsLength > 0 && (
        <NavigationButton
          onClick={() => {
            onClick("Фуршет");
          }}
          text={"Фуршет"}
          length={buffetsLength}
          className={cs(s.btn, category === "Фуршет" && s.btn_active)}
        />
      )}
      {gastroLength > 0 && (
        <NavigationButton
          onClick={() => {
            onClick("Гастро-станции");
          }}
          text={"Гастро-станции"}
          length={gastroLength}
          className={cs(s.btn, category === "Гастро-станции" && s.btn_active)}
        />
      )}
      {masterclassLength > 0 && (
        <NavigationButton
          onClick={() => {
            onClick("Мастер-классы");
          }}
          text={"Мастер-классы"}
          length={masterclassLength}
          className={cs(s.btn, category === "Мастер-классы" && s.btn_active)}
        />
      )}
      {barLength > 0 && (
        <NavigationButton
          onClick={() => {
            onClick("Выездные бары");
          }}
          text={"Выездные бары"}
          length={barLength}
          className={cs(s.btn, category === "Выездные бары" && s.btn_active)}
        />
      )}
      {dopsLenght > 0 && (
        <NavigationButton
          onClick={() => {
            onClick("Дополнительно");
          }}
          text={"Дополнительно"}
          length={dopsLenght}
          className={cs(s.btn, category === "Дополнительно" && s.btn_active)}
        />
      )}
    </div>
  );
}

export default TabsForFavorites;
