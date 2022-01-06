import cs from "classnames";
import React, { useEffect, useState } from "react";
import s from "./Checkbox.module.scss";
export default function Checkbox() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <label className={s.switch}>
      <input
        onClick={() => {
          handleClick();
        }}
        type="checkbox"
      />
      <span className={cs(s.slider, s.round)}></span>
    </label>
  );
}
