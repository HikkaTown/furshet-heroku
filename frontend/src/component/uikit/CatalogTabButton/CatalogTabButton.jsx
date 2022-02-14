import React, {useState} from "react";
import s from "./CatalogTabButton.module.scss";
import cs from "classnames";

export default function CatalogTabButton({text, className, active, onClick}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={cs(s.button, className)}
    >
      {text}
    </button>
  );
}