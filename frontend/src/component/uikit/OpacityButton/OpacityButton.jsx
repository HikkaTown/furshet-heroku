import React from "react";
import s from "./OpacityButton.module.scss";
import cs from "classnames";

export default function OpacityButton({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={cs(s.btn, className)}>
      {text}
    </button>
  );
}
