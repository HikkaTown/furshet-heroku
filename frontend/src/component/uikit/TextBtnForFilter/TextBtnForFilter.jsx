import React from "react";
import s from "./TextBtnForFilter.module.scss";
import cs from "classnames";
import { useEffect } from "react";
import { useState } from "react";

export default function TextBtnForFilter({ typeId, id, count, name, onClick }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (typeof typeId === "number" && typeId === id) {
      console.log("попал в число", typeId);
      setIsActive(true);
    } else if (typeof typeId === "number" && typeId !== id) {
      setIsActive(false);
    }
    if (typeof typeId === "string" && typeId === name) {
      console.log("попал в строку");
      setIsActive(true);
    } else if (typeof typeId === "string" && typeId !== name) {
      setIsActive(false);
    }
  }, [typeId]);
  return (
    <button
      key={id}
      onClick={onClick}
      className={cs(s.button, isActive && s.button_active)}
    >
      <span className={s.button_name}>{name}</span>
      <span className={s.button_number}>{count}</span>
    </button>
  );
}
