import React, {useState} from "react";
import s from "./CatalogTabButton.module.scss";
import cs from "classnames";

export default function CatalogTabButton({text, className}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        isActive ? setIsActive(false) : setIsActive(true);
      }}
      className={isActive ? cs(s.button, s.button_active, className) : cs(s.button, className)}
    >
      {text}
    </button>
  );
}
