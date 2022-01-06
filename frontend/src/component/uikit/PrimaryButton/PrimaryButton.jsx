import React from "react";
import cs from "classnames";
import s from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={cs(s.button, className)}>
      {text}
    </button>
  );
}
