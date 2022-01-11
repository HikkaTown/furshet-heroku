import React from "react";
import cs from "classnames";
import s from "./ArrowSectionButton.module.scss";
// position = true - arrow left
// position = false - arrow right
export default function ArrowSectionButton({ position, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        position
          ? cs(s.button, s.button_left, className)
          : cs(s.button, className)
      }
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.icon}
      >
        <path
          d="M6.66663 16H25.3333"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6.66663L25.3333 16L16 25.3333"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
