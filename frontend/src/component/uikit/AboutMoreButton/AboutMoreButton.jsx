import React from "react";
import s from "./AboutMoreButton.module.scss";

export default function AboutMoreButton({ onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      Подробнее{" "}
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
            d="M6.66663 16H25.3333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66663L25.3333 16L16 25.3333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
