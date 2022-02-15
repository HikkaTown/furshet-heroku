import React, { useEffect, useState } from "react";
import s from "./CatalogTabButton.module.scss";
import cs from "classnames";

export default function CatalogTabButton({
  id,
  text,
  className,
  classNameActive,
  active,
  typeId,
  onClick,
}) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (typeof typeId === "number" && typeId === id) {
      setIsActive(true);
    } else if (typeof typeId === "number" && typeId !== id) {
      setIsActive(false);
    } else if (typeId == null) {
      setIsActive(false);
    }
    if (typeof typeId === "string" && typeId === name) {
      setIsActive(true);
    } else if (typeof typeId === "string" && typeId !== name) {
      setIsActive(false);
    } else if (typeId === null) {
      setIsActive(false);
    }
    if (typeId === null && id === null) {
      setIsActive(true);
    }
  }, [typeId, id]);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={cs(s.button, className, isActive && classNameActive)}
    >
      {text}
    </button>
  );
}
