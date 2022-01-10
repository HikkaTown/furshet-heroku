import React from "react";
import s from "./DeleteButton.module.scss";
import cs from "classnames";

export default function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className={s.btn}>
      Удалить
    </button>
  );
}
