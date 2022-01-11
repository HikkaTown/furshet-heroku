import React from "react";
import cs from "classnames";
import s from "./SecondaryButton.module.scss";

export default function SecondaryButton({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={cs(s.btn, className)}>
      {text}
    </button>
  );
}
