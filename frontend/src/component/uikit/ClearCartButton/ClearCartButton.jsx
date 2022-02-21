import React from "react";
import s from "./ClearCartButton.module.scss";
export default function ClearCartButton({ onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      Очистить корзину
    </button>
  );
}
