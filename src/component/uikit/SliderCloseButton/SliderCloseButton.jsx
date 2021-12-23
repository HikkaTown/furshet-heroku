import React from "react";
import s from "./SliderCloseButton.module.scss";
export default function SliderCloseButton() {
  return (
    <button className={s.button}>
      <span className={s.icon_wrapper}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className={s.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8L8 24"
            className={s.icon_line}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8L24 24"
            className={s.icon_line}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
