import cs from "classnames";
import React, {useEffect, useState} from "react";
import s from "./Checkbox.module.scss";

export default function Checkbox({isActive, setIsActive}) {
  return (
    <label className={s.switch}>
      <input
        onClick={setIsActive}
        type="checkbox"
      />
      <span className={cs(s.slider, s.round)}></span>
    </label>
  );
}
