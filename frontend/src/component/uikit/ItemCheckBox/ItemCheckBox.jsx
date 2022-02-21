import React, { useState } from "react";
import cs from "classnames";
import s from "./ItemCheckBox.module.scss";

export default function ItemCheckBox({ isCheck, setIsCheck }) {
  return (
    <div
      onClick={() => {
        isCheck ? setIsCheck(false) : setIsCheck(true);
      }}
      className={isCheck ? cs(s.check, s.check_acitve) : cs(s.check)}
    ></div>
  );
}
