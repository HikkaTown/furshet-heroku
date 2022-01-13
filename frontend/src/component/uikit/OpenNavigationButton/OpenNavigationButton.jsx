import React, { useState } from "react";
import s from "./OpenNavigationButton.module.scss";
import cs from "classnames";

export default function OpenNavigationButton({ className, onClick, onClose }) {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => {
        if (active) {
          onClose();
          setActive(false);
        } else {
          onClick();
          setActive(true);
        }
      }}
      className={active ? cs(s.btn, s.active, className) : cs(s.btn, className)}
    >
      <span className={s.container}>
        <span className={s.line}></span>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </span>
    </button>
  );
}
