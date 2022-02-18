import React from "react";
import s from "./DeleteButton.module.scss";
import cs from "classnames";

export default function DeleteButton({ className, onClick }) {
  return (
    <button onClick={onClick} className={cs(s.btn)}>
      Удалить
    </button>
  );
}
