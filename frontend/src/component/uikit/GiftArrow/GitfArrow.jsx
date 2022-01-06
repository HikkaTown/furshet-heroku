import React from "react";
import cs from "classnames";
import s from "./GiftArrow.module.scss";
// position true = left;
// position false = right;
export default function GitfArrow({ position }) {
  return (
    <button className={position ? cs(s.button, s.button_left) : cs(s.button)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={s.icon}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66663 16H25.3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6.66663L25.3333 16L16 25.3333"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
