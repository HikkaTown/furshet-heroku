import cs from "classnames";
import React, { useEffect, useState } from "react";
import s from "./Checkbox.module.scss";

export default function Checkbox({ isActive, setIsActive }) {
  return (
    <label className={s.switch}>
      <input
        onChange={setIsActive}
        type="checkbox"
        value={isActive}
        checked={isActive}
      />
      <span className={cs(s.slider, s.round)}></span>
    </label>
  );
}
