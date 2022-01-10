import React, { useState } from "react";
import cs from "classnames";
import s from "./ItemCheckBox.module.scss";

export default function ItemCheckBox() {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div
      onClick={() => {
        isCheck ? setIsCheck(false) : setIsCheck(true);
      }}
      className={isCheck ? cs(s.check, s.check_acitve) : cs(s.check)}
    ></div>
  );
}
